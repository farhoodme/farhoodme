/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false
const isProd = process.env.NODE_ENV === 'production'

let basePath = '/'
let assetPrefix = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
  assetPrefix = `/${repo}/`
}

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/farhoodme' : '/',
  assetPrefix: isProd ? '/farhoodme/' : '',
}

module.exports = nextConfig
