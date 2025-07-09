import type { Metadata } from 'next';
import { Noto_Sans_KR, Maven_Pro, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import localFont from 'next/font/local';
import TanstackProvider from '@/app/provider/TanstackProvider';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yjins-aws.com';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
});
const mavenPro = Maven_Pro({
  subsets: ['latin'],
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

// 로컬폰트는 /public/fonts에
export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEXTjs!!!',
  description: '공부하기',

  openGraph: {
    title: 'NEXTjs!!!',
    description: '공부하기',
    url: 'https://yjins-aws.com',
    siteName: 'next study!!!',
    images: [
      {
        url: `${baseUrl}/images/common/logo.svg`,
        width: 400,
        height: 400,
        alt: 'nextjs+ts+tailwind+express+docker+ec2',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <TanstackProvider>
        <body className={mavenPro.className}>
          <Header className={notoSansKr.className} />
          {children}
          <Footer className={montserrat.className} />
        </body>
      </TanstackProvider>
    </html>
  );
}
