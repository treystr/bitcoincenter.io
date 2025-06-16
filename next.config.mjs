/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bitcoin-center' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bitcoin-center/' : '',
};

export default nextConfig;
