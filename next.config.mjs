/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: process.env.NEXT_PUBLIC_BASE_URL
      ? [new URL(process.env.NEXT_PUBLIC_BASE_URL).hostname]
      : [],
  },
};

export default nextConfig;
