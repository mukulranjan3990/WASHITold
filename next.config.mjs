/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/WASHITold',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
