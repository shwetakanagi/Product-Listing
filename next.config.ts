// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 🚫 Don't block production builds if ESLint errors exist
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['www.mytheresa.com'], // Add your image domains here
  },
};

module.exports = nextConfig;
