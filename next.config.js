/** @type {import('next').NextConfig} */
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [new TerserPlugin()];
    }
    return config;
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['s3.eu-north-1.amazonaws.com'],
  },
};
