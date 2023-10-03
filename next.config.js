/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://avatars.githubusercontent.com/",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
