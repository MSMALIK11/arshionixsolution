import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
