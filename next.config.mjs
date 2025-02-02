/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // If using static export
  images: {
    unoptimized: true, // Required for "output: export"
  },
};

export default nextConfig;