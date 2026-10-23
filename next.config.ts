import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    cpus: 2,
    inlineCss: true,
    useTypeScriptCli: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/overview',
        permanent: false,
      },
      {
        source: '/docs',
        destination: '/docs/overview',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
