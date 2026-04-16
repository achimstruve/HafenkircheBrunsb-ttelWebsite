import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF and WebP automatically — browser gets smallest supported format
    formats: ['image/avif', 'image/webp'],
    // Standard device widths for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 1 year cache for optimized images
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        // Cache static images for 1 year
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts and icons
        source: '/:path*\\.(ico|png|svg|woff2|woff)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
