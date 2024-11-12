/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async headers() {
      return [
        {
          source: '/(.*)', // Adjust this pattern for specific files or routes
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
            },
            {
              key: 'Expires',
              value: '0',
            },
          ],
        },
      ];
    },
  };
