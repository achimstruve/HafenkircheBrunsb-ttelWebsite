'use client'

import { useEffect, useRef, useCallback } from 'react'

// ─── Tuning constants ────────────────────────────────────────────────────────
const PARTICLE_COUNT   = 200
const SEED_COUNT       = 22      // lit from the start (center cluster)
const IGNITE_DIST      = 80      // px — how close a lit particle must be to ignite a dark one
const LINE_DIST        = 110     // px — max distance for connecting lines between lit particles
const HOLD_MS          = 2800    // ms to hold full-spread before resetting
const RESET_MS         = 3500    // ms to fade out before re-igniting
const MAX_SPEED        = 0.18

// ─── Types ───────────────────────────────────────────────────────────────────
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  angle: number      // current heading in radians
  turnRate: number   // how fast the heading is currently rotating (changes slowly)
  r: number          // radius
  brightness: number // 0 = dark, 1 = fully lit
  igniting: boolean
  igniteRate: number // brightness gained per ms when igniting
  baseSpeed: number
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function ParticleBackground() {
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const rafRef      = useRef<number>(0)
  const stateRef    = useRef<{
    particles: Particle[]
    phase: 'spreading' | 'holding' | 'resetting'
    phaseMs: number
  }>({ particles: [], phase: 'spreading', phaseMs: 0 })

  // ── init ──────────────────────────────────────────────────────────────────
  const init = useCallback((w: number, h: number) => {
    const cx = w / 2
    const cy = h * 0.44
    const ps: Particle[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isSeed = i < SEED_COUNT
      let x: number, y: number

      if (isSeed) {
        // organic cluster around center
        const angle = Math.random() * Math.PI * 2
        const dist  = 10 + Math.random() * 55
        x = cx + Math.cos(angle) * dist
        y = cy + Math.sin(angle) * dist
      } else {
        x = Math.random() * w
        y = Math.random() * h
      }

      const angle = Math.random() * Math.PI * 2
      const spd   = 0.04 + Math.random() * 0.09   // slow drift — ember-like

      ps.push({
        x, y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd,
        angle,
        turnRate: (Math.random() - 0.5) * 0.012,   // initial gentle curve
        r: isSeed ? 2 + Math.random() * 1.2 : 1.2 + Math.random() * 1.5,
        brightness: isSeed ? 1 : 0,
        igniting: false,
        igniteRate: 0.0018 + Math.random() * 0.004,
        baseSpeed: spd,
      })
    }

    stateRef.current = { particles: ps, phase: 'spreading', phaseMs: 0 }
  }, [])

  // ── animation loop ────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0, h = 0

    const resize = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width  = w
      canvas.height = h
      init(w, h)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    let lastT = 0

    const frame = (t: number) => {
      const dt = Math.min(t - lastT, 40)   // cap delta — prevents jump after tab switch
      lastT = t

      const state = stateRef.current
      const { particles } = state
      state.phaseMs += dt

      // ── Phase transitions ──────────────────────────────────────────────
      if (state.phase === 'spreading') {
        const litFraction = particles.filter(p => p.brightness > 0.55).length / PARTICLE_COUNT
        if (litFraction > 0.93) {
          state.phase   = 'holding'
          state.phaseMs = 0
        }
      } else if (state.phase === 'holding') {
        if (state.phaseMs >= HOLD_MS) {
          state.phase   = 'resetting'
          state.phaseMs = 0
        }
      } else if (state.phase === 'resetting') {
        if (state.phaseMs >= RESET_MS) {
          init(w, h)
          rafRef.current = requestAnimationFrame(frame)
          return
        }
      }

      // ── Move particles ─────────────────────────────────────────────────
      for (const p of particles) {
        // Smoothly drift the turn rate — creates gradual, unhurried curves
        p.turnRate += (Math.random() - 0.5) * 0.0008
        // Clamp so curves stay gentle; never full circles
        if (p.turnRate >  0.018) p.turnRate =  0.018
        if (p.turnRate < -0.018) p.turnRate = -0.018

        // Advance heading by current turn rate
        p.angle += p.turnRate

        // Derive velocity from heading — speed stays constant, only direction drifts
        p.vx = Math.cos(p.angle) * p.baseSpeed
        p.vy = Math.sin(p.angle) * p.baseSpeed

        p.x += p.vx
        p.y += p.vy

        // wrap edges with a small margin
        if (p.x < -15) p.x = w + 15
        if (p.x > w + 15) p.x = -15
        if (p.y < -15) p.y = h + 15
        if (p.y > h + 15) p.y = -15
      }

      // ── Brightness updates ─────────────────────────────────────────────
      if (state.phase === 'resetting') {
        // fade everything out gently
        const fadeRate = dt / RESET_MS
        for (const p of particles) {
          p.brightness  = Math.max(0, p.brightness - fadeRate * 1.05)
          p.igniting    = false
        }
      } else if (state.phase === 'spreading' || state.phase === 'holding') {
        // advance igniting particles
        for (const p of particles) {
          if (p.igniting && p.brightness < 1) {
            p.brightness = Math.min(1, p.brightness + p.igniteRate * dt)
          }
        }

        // spread light (only during 'spreading')
        if (state.phase === 'spreading') {
          for (let i = 0; i < particles.length; i++) {
            const a = particles[i]
            if (a.brightness < 0.55) continue
            for (let j = 0; j < particles.length; j++) {
              if (i === j) continue
              const b = particles[j]
              if (b.brightness > 0.05 || b.igniting) continue
              const dx = a.x - b.x
              const dy = a.y - b.y
              // fast reject before sqrt
              if (Math.abs(dx) > IGNITE_DIST || Math.abs(dy) > IGNITE_DIST) continue
              if (dx * dx + dy * dy < IGNITE_DIST * IGNITE_DIST) {
                b.igniting = true
              }
            }
          }
        }
      }

      // ── Render ─────────────────────────────────────────────────────────
      ctx.clearRect(0, 0, w, h)

      // Connecting lines between lit particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        if (a.brightness < 0.35) continue
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          if (b.brightness < 0.35) continue
          const dx = a.x - b.x
          const dy = a.y - b.y
          if (Math.abs(dx) > LINE_DIST || Math.abs(dy) > LINE_DIST) continue
          const d2   = dx * dx + dy * dy
          if (d2 >= LINE_DIST * LINE_DIST) continue
          const dist  = Math.sqrt(d2)
          const alpha = (1 - dist / LINE_DIST) * 0.13 * Math.min(a.brightness, b.brightness)
          ctx.beginPath()
          ctx.strokeStyle = `rgba(201,168,76,${alpha.toFixed(3)})`
          ctx.lineWidth   = 0.7
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      // Particles
      for (const p of particles) {
        const b = p.brightness

        if (b < 0.01) {
          // Dark particle — barely visible dim dot
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 0.55, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(90,120,170,0.13)'
          ctx.fill()
          continue
        }

        // Outer bloom glow (only when reasonably bright)
        if (b > 0.25) {
          const glowR = p.r * (5 + b * 9)
          const grd   = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR)
          grd.addColorStop(0, `rgba(240,200,90,${(b * 0.14).toFixed(3)})`)
          grd.addColorStop(1, 'rgba(201,168,76,0)')
          ctx.beginPath()
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2)
          ctx.fillStyle = grd
          ctx.fill()
        }

        // Core particle — interpolate dark-blue → gold as brightness rises
        const cr = Math.round(40  + (201 - 40)  * b)
        const cg = Math.round(60  + (168 - 60)  * b)
        const cb = Math.round(120 + (76  - 120) * b)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${cr},${cg},${cb},${(0.25 + b * 0.75).toFixed(3)})`
        ctx.fill()

        // Bright inner core for fully lit particles
        if (b > 0.65) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 0.45, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255,242,180,${(b * 0.88).toFixed(3)})`
          ctx.fill()
        }
      }

      rafRef.current = requestAnimationFrame(frame)
    }

    rafRef.current = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [init])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.65, zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
