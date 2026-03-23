/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@chili'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/chili-ui',
  eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
