/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bitcoincenter.io/' : '',
};

export default nextConfig;
