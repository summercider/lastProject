import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      {
        source: '/', // 리디렉션할 원래 경로
        destination: '/pungsan', // 이동할 경로
        permanent: true, // true면 HTTP 308 (SEO에 유리)
      },
      {
        // header가 client라 안먹음
        source: '/rent', // 리디렉션할 원래 경로
        destination: '/test', // 이동할 경로
        permanent: true, // true면 HTTP 308 (SEO에 유리)
      },
    ];
  },
};

export default nextConfig;
