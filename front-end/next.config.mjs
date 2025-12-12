/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  async redirects() {
    return [
      {
        // 1. The source path to match (localhost:3000/)
        source: '/', 
        
        // 2. The destination path to redirect to (localhost:3000/sign-in)
        destination: '/login', 
        
        // 3. Set to 'false' for a temporary (302) redirect, which is standard for a sign-in gate
        permanent: false,      
        
        // Optional: If you only want this redirect to apply to HTML requests (and not API calls)
        // locale: false,
      },
    ]
  },
};

export default nextConfig;
