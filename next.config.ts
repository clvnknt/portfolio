import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to static HTML in out/ so the site can be hosted anywhere.
  output: "export",
  images: {
    // The default image optimizer needs a server; static export serves images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
