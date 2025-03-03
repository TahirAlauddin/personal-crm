import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "images.unsplash.com" },
      {hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com"}
    ],
  },
};

export default nextConfig;
