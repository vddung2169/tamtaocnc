import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirect 301 các URL WordPress cũ để không mất index
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "query", key: "page_id", value: "20" }],
        destination: "/bang-gia-do-sim",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "page_id", value: "40" }],
        destination: "/bang-gia-thay-pin",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "page_id", value: "2" }],
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
