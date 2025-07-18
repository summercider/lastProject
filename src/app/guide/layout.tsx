import GuideHead from '@/app/components/guide/GuideHead';
import GuideTabs from '@/app/components/guide/GuideTabs';
import GuideLast from '@/app/components/guide/GuideLast';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout( //{}: // children,
  {
    // children: React.ReactNode;
  }
) {
  return (
    <main className="pt-[129px] pb-[100px] max-md:pt-[78px] max-md:pb-[60px] max-sm:pt-[60px] ">
      <div className="랩퍼 mx-auto my-0 max-w-[1240px]">
        <div
          className="px-[20px]
          max-sm:px-[7px] "
        >
          {/* 헤드 */}
          <GuideHead />
          <GuideTabs />
          <GuideLast />
        </div>
      </div>
    </main>
  );
}
