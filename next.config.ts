import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Default dev uses Turbopack (`npm run dev`) to avoid webpack dev disk cache corruption
   * (missing chunks like ./611.js, broken _document, ENOENT pack.gz). Use `npm run dev:webpack` only if needed.
   * If `.next` is deleted or `next build` runs while an old `next dev` is still running, always stop dev and
   * run `npm run dev:clean` — do not run build and dev on the same folder at the same time.
   *
   * Webpack in-memory cache applies when using `dev:webpack` only.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },

  /** No /dashboard in this app — send mistaken URLs to home (hosting/DNS issues are separate). */
  async redirects() {
    return [
      { source: "/dashboard", destination: "/", permanent: false },
      { source: "/dashboard/:path*", destination: "/", permanent: false },
      { source: "/dashbord", destination: "/", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
