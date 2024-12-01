/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.google.com',
          port: '',
          pathname: '/',
        },
        {
          protocol: 'https',
          hostname: 'github.githubassets.com',
          port: '',
          pathname: '/assets/GitHub-Mark-ea2971cee799.png',
        },
      ],
    },
  }


module.exports = nextConfig
