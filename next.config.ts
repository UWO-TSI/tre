import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.ctctcdn.com https://static-tracking.klaviyo.com",
              "style-src 'self' 'unsafe-inline' https://static.ctctcdn.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://static.ctctcdn.com https://*.constantcontact.com",
              "frame-src 'self' https://static.ctctcdn.com https://*.constantcontact.com",
              "form-action 'self' https://*.constantcontact.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
