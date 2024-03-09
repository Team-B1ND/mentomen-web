/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_IMAGE_URL,
      },
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        hostname: process.env.NEXT_PUBLIC_PROFILE_URL,
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = nextConfig;
