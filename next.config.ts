import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/personal-webapp',
  output: 'export',
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
