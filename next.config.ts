import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"http",
        hostname:"res.cloudinary.com"
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
