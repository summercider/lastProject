import MemberSub from '@/app/components/member/MemberSub';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="pt-[129px] pb-[60px] max-md:pt-[78px] max-sm:pt-[60px]">
        <div className="mt-[30px] min-h-[800px] max-md:mt-[57px] max-sm:mt-[40px] max-sm:min-h-[600px]">
          <div className="래퍼 max-w-[1200px] mx-auto">
            <div
              className="flex mx-auto justify-between max-w-[1180px] px-[20px]
              max-md:block
              max-sm:px-[7px]"
            >
              <MemberSub />
              {children}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
