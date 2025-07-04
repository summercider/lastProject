import type { Metadata } from 'next';
import { Noto_Sans_KR, Maven_Pro, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import localFont from 'next/font/local';
import TanstackProvider from '@/app/provider/TanstackProvider';

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
  title: 'last!!!!!',
  description: '공부좀해라',
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
