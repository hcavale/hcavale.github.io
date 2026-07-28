/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio', // <-- Match your GitHub repository name
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;