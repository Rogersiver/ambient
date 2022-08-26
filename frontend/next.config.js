/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  webpack: (config, { dev }) => {
    // Perform customizations to config
    config.node = {
      fs: 'empty'
    };
    return config
  }
  }
}

module.exports = nextConfig
