/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['sampleblog.ts2.in', 'https://sampleblog.ts2.in', 'https://sampleblog.ts2.in/wp-content/uploads'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://sampleblog.ts2.in/',
        port: '',
        pathname: 'https://sampleblog.ts2.in/**',
      }
    ]
  }
}

module.exports = nextConfig
