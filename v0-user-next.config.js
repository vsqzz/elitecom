/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        zlib: false,
        "zlib-sync": false,
      }
    }
    return config
  },
}

module.exports = nextConfig

