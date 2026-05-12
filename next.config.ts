import type { NextConfig } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

if (!supabaseUrl) {
  throw new Error("No environment variables for the Supabase were found! - next.config.ts");
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(supabaseUrl).hostname,
        port: '',
        pathname: '/storage/v1/object/public/projects/**',
      },
    ],
  },
};

export default nextConfig;
