// next.config.js
const withPWAInit = require("@ducanh2912/next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
};

const withPWA = withPWAInit({
  dest: "public",
});

module.exports = withPWA({
  ...nextConfig,
});
