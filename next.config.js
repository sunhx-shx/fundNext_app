/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rn-images-1258654706.cos.ap-shanghai.myqcloud.com',
        port: '',
        pathname: '/promot-IMG28.jpeg',
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig
