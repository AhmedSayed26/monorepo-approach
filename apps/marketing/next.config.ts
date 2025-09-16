import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@saas/ui', '@saas/utils', '@saas/types'],
  experimental: {
    externalDir: true
  }
};

export default nextConfig;
