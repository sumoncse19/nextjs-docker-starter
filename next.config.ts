import type { NextConfig } from "next";

const nextConfig = {
  // 1. Build Output Configuration
  output: "standalone", // Creates an optimized production build that's self-contained - Best for Docker deployments and self-hosting
  // Other possible output options:
  // output: "export",      // Static HTML/JS/CSS export, no Node.js server needed
  // output: "server",      // Default option, standard server-side rendering
  // output: "serverless",  // Deprecated, use "standalone" instead

  // 2. Security Headers
  poweredByHeader: false, // Removes the X-Powered-By header for security

  async headers() {
    // Adds security headers to all routes
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents iframe-based attacks
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff", // Prevents MIME-type sniffing or attack
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin", // Controls data sharing between sites
          },
        ],
      },
    ];
  },

  // 3. Image Optimization
  images: {
    remotePatterns: [
      // Defines which external image domains are allowed
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // 4. TypeScript Configuration
  typescript: {
    ignoreBuildErrors: false, // Enforces TypeScript checks during build
  },

  // 5. React Configuration
  reactStrictMode: true, // Enables React strict mode for better development

  // 6. Performance Configuration
  compress: true, // Enables gzip compression - Reduce bandwith usage and faster load times
  // swcMinify: true, // Enables SWC minification - Faster builds and smaller bundle size

  // turbo: false,         // Would disable Turbo features
};

export default nextConfig;

// Benefits of keeping Turbo enabled:
// - Faster builds
// - Better caching
// - Improved development performance
// - Better module resolution
// - Incremental compilation
