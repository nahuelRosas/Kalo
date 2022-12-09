/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["files.stripe.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
