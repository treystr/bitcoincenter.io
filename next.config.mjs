/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: '',
  // Ensure trailing slash for better asset handling
  trailingSlash: true,
};

export default nextConfig;
