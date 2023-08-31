const path = require("node:path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // apps/README.md#Apps and internal packages
    config.resolve.modules.unshift(path.resolve(__dirname, "node_modules"));

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
