const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['chili-local'],
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/chili-ui',
  eslint: { ignoreDuringBuilds: true },
  webpack: (config) => {
    // This tells Next.js: "When you see '@chili', look in the parent folder"
    config.resolve.alias['@chili'] = path.resolve(__dirname, '../');
    return config;
  },
};

module.exports = nextConfig;
