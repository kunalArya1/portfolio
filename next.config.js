/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.example.com",
      "yourdomain.com",
      "www.notion.so",
      "avatars.githubusercontent.com",
    ],
  },
  webpack: (config, { isServer }) => {
    // Canvas package configuration
    if (isServer) {
      config.externals.push({
        canvas: "commonjs canvas",
      });
    }

    // Add fallback for 'canvas' module
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };

    return config;
  },
};

module.exports = nextConfig;
