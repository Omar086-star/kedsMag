/** @type {import('next').NextConfig} */
const nextConfig = {
  // باقي الإعدادات...
  allowedDevOrigins: [
    "http://192.168.1.54:3000", // جهازك المحلي أو الهاتف
    "http://localhost:3000",    // المتصفح المحلي
    "http://192.168.1.54:3001"  // في حال استخدم بورت آخر
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gxpdftfiwlyaboiucsti.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
