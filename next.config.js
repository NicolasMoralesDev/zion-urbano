/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers(){
    return [
      {
        sourse: '/(.*)',
        headers: securityHeaders,
      },
    ]
  }
}

const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
]


module.exports = nextConfig
