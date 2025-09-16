const nextConfig = {
  experimental: { 
    typedRoutes: true,
    externalDir: true
  },
  poweredByHeader: false,
  transpilePackages: ['@saas/ui', '@saas/utils', '@saas/types'],
};

export default nextConfig;
