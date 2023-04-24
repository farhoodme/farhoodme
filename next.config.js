/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

let assetPrefix = ''
let basePath = '/'

if (isProd) {
  const repo = 'farhoodme'

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: assetPrefix,
  basePath: basePath
}

module.exports = nextConfig
