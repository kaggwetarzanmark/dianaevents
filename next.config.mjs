/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/dianaevents',   // <-- your repo name
  assetPrefix: '/dianaevents/', 
};

export default nextConfig;
