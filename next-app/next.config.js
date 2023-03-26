/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  cssModules: true,
     cssLoaderOptions: {
   importLoaders: 1,
  localIdentName: "[]",
 },
}

module.exports = nextConfig
