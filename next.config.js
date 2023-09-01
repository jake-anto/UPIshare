/** @type {import('next').NextConfig} */

const { GenerateSW, InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
  output: "export",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new GenerateSW({
          clientsClaim: true,
          skipWaiting: true,
          swDest: "sw.js",
        })
      );
    }
    return config;
  },
};
