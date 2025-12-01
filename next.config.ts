import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.pokemon-lazarus.net",
      },
    ],
  },
};

export default nextConfig;
