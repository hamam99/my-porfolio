/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname
  },
  reactStrictMode: true,
  images: {
    unoptimized: false
  },
  assetPrefix: ''
}

module.exports = nextConfig
