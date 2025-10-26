// next.config.js
const maybePWA = require('@ducanh2912/next-pwa');
const nextPWA = (maybePWA && maybePWA.default) ? maybePWA.default : maybePWA;

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
    ],
  },
  // set turbopack root to avoid workspace root warning
  turbopack: { root: __dirname },
};

let finalConfig = baseConfig;

if (typeof nextPWA === 'function') {
  const withPWA = nextPWA({ dest: 'public' });
  finalConfig = withPWA(baseConfig);
} else {
  // eslint-disable-next-line no-console
  console.warn('@ducanh2912/next-pwa not available; continuing without PWA plugin.');
}

module.exports = finalConfig;
