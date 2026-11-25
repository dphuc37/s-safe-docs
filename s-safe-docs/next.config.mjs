import { fileURLToPath } from 'node:url';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  turbopack: { root: fileURLToPath(new URL('.', import.meta.url)) },
  async redirects() {
    return [
      { source: '/', destination: '/yeu-cau-he-thong', permanent: false },
      { source: '/en', destination: '/en/yeu-cau-he-thong', permanent: false },
    ];
  },
};

export default withMDX(config);
