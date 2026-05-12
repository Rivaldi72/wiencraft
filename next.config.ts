import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  outputFileTracingIncludes: {
    "/*": ["./sqlite.db", "./sqlite.db-shm", "./sqlite.db-wal"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
