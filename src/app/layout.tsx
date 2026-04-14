import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hafenkirche Brunsbüttel | Freiheit Leben',
  description:
    'Die Hafenkirche Brunsbüttel ist eine lebendige christliche Gemeinde in Dithmarschen. Wir glauben an Gottes Liebe, Leben in Freiheit und Gemeinschaft.',
  keywords: [
    'Hafenkirche',
    'Brunsbüttel',
    'Kirche',
    'Gemeinde',
    'Dithmarschen',
    'Gottesdienst',
    'Freiheit Leben',
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Hafenkirche Brunsbüttel',
    description: 'Lebendige Kirche · Freiheit Leben',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#dfe8f5] text-[#1d2a44] antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
