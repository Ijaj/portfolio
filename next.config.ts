import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/admin',
      destination: '/admin/dashboard',
      permanent: true
    }
  ]
};

export default nextConfig;
