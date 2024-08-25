/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['crypto.news', 'coin-images.coingecko.com', 'assets.coingecko.com', 'icons.llamao.fi'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'crypto.news',
              pathname: '/**', // Adjust this based on your needs
            },
            {
                protocol: 'https',
                hostname: 'coin-images.coingecko.com',
                pathname: '/**', // Adjust this based on your needs
              },
              {
                protocol: 'https',
                hostname: 'assets.coingecko.com',
                pathname: '/**', // Adjust this based on your needs
              },
              {
                protocol: 'https',
                hostname: 'icons.llamao.fi',
                pathname: '/**', // Adjust this based on your needs
              },
          ],
    },
};

export default nextConfig;
