/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "appsembler.com",
      },
    ],
  },
};

module.exports = nextConfig;
