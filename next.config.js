/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                // port: '',
                pathname: '/images/**',
            }
        ]
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
