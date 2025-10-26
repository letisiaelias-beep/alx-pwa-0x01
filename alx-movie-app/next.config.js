// next.config.js (CommonJS, safe for Node + Next 16)
const maybePWA = require('@ducanh2912/next-pwa');
const nextPWA = (maybePWA && maybePWA.default) ? maybePWA.default : maybePWA;

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,

  // Use remotePatterns instead of deprecated images.domains
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
    ],
  },

  // Add an empty turbopack config to avoid the "webpack config + no turbopack config" error
  turbopack: {},

  // If you need to configure other Next options, add them here
};

let finalConfig = baseConfig;

// If the PWA plugin is available (and is a function), use it
if (typeof nextPWA === 'function') {
  const withPWA = nextPWA({
    dest: 'public',
  });
  finalConfig = withPWA(baseConfig);
} else {
  // eslint-disable-next-line no-console
  console.warn('Warning: @ducanh2912/next-pwa not found or not a function. Continuing without PWA plugin.');
}

module.exports = finalConfig;
