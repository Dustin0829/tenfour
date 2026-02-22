import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
    // Fix webpack cache warnings
    config.cache = {
      ...config.cache,
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    }
    
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
