import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    cpus: 2,
    inlineCss: true,
    useTypeScriptCli: true,
  },
}

export default nextConfig
