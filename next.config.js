/** @type {import('next').NextConfig} */
const withImages = require('next/images');
const withPlugins = require('next-compose-plugins');

const isGithubActions = process.env.GITHUB_ACTIONS || false

let basePath = '/'
let assetPrefix = ''

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  basePath = `/${repo}`
  assetPrefix = `/${repo}/`
}

const nextConfig = withPlugins([
  [withImages, {
    assetPrefix: assetPrefix
  }],
  {
    reactStrictMode: true,
    basePath: basePath,
    assetPrefix: assetPrefix,
  }
])

module.exports = nextConfig
