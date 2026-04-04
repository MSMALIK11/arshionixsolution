import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Default dev uses Turbopack (`npm run dev`).
   *
   * If you see ENOENT on `.next/.../_buildManifest.js.tmp.*`, missing webpack chunks, or `routes-manifest`:
   * stop every `next dev` / `next start` for this repo, then `npm run dev:clean` (one terminal only).
   * Never run `next build` while `next dev` is running on the same folder. Keep the project outside iCloud/Drive sync if possible.
   *
   * Fallback: `npm run dev:webpack` (webpack + in-memory cache below).
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
      {
        source: "/portfolio/healthcare-websites",
        destination: "/portfolio/arshionix-healthcare",
        permanent: false,
      },
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
