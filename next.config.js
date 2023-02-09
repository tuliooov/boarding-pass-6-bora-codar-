/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: process.env.BASEPATH,
  assetPrefix: process.env.ASSETPREFIX,
}

module.exports = nextConfig
