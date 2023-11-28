/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: 'upload.wikimedia.org', // Add the domain for your images
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  