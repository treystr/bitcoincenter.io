/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bitcoincenter.io' : '',
  // Ensure trailing slash for better asset handling
  trailingSlash: true,
};

export default nextConfig;
