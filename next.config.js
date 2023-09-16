/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // 以下を追加
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig