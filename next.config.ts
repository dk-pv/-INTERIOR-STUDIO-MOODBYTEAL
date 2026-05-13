import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/about",
        destination: "/studio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;