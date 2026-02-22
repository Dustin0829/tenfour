/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Generate stable chunk names for better caching
  webpack: (config, { dev, isServer }) => {
    if (!isServer && !dev) {
      // In production, use deterministic chunk names
      config.optimization = {
        ...config.optimization,
        moduleIds: 'deterministic',
        chunkIds: 'deterministic',
      }
    }
    return config
  },
}

export default nextConfig
