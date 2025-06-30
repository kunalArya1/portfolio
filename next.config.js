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
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config, { isServer, dev }) => {
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
      fs: false,
      net: false,
      tls: false,
    };

    // Optimize chunks and prevent dynamic import issues
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            default: {
              minChunks: 1,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }

    // Fix module resolution issues
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      'node_modules',
    ];

    return config;
  },
};

module.exports = nextConfig;
