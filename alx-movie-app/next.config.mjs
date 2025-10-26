// next.config.mjs
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
  },
};

const withPWA = withPWAInit({
  dest: "public", // service worker and precache will be emitted to public
});

export default withPWA({
  ...nextConfig,
});
