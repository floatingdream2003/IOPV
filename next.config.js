/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ? 开启静态导出
  images: {
    unoptimized: true,     // ? GitHub Pages 不支持 next/image 优化
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
