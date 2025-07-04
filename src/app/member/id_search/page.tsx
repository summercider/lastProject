import BreadcrumbNavi from '@/app/components/member/BreadcrumbNavi';
import styles from '../styles/Member.module.css';
import MemberTitle from '@/app/components/member/MemberTitle';

export default function idSearch() {
  return (
    <>
      <div className="w-[calc(100%-320px)] min-h-[600px] max-md:w-full">
        <div className="flex pb-[10px] border-b-2 items-center justify-between">
          <MemberTitle>아이디찾기</MemberTitle>
          {/* 네비 */}
          <BreadcrumbNavi path={['회원', '아이디찾기']} />
        </div>
        {/*  */}
        <div className="아티클바디 text-[#222]">
          <div className="max-w-[687px] mx-auto max-md:mx-0 max-md:max-w-none">
            <div className="pt-[33px] mb-[21px] max-md:pt-[18px] max-md:mb-[25px] max-sm:pt-[13px] max-sm:mb-[18px]">
              <h3 className="text-[28px] max-sm:text-[20px]">
                <strong className="font-bold">아이디</strong>를 잊으셨나요?
              </h3>
              <p className="mt-[8px] text-[14px] text-gray-500 max-md:mt-[11px] max-md:text-[20px] max-sm:text-[12px]">
                회원가입시 등록한 연락처 및 이름을 입력해주세요.
              </p>
            </div>
            {/* 폼 */}
            <form>
              {/* 인풋 */}
              <div className="text-[15px] max-md:text-[17px] max-sm:text-[12px]">
                <div className="mb-[35px] max-md:mb-[30px]">
                  <label
                    className={`${styles['frm-label']} ${styles['icon-accent']}`}
                  >
                    연락처(전화)
                  </label>
                  <input
                    className={`${styles['frm-input']} max-md:mt-[10px] max-sm:mt-[7px]`}
                  />
                </div>
                <div>
                  <label
                    className={`${styles['frm-label']} ${styles['icon-accent']}`}
                  >
                    이름
                  </label>
                  <input
                    className={`${styles['frm-input']} max-md:mt-[10px] max-sm:mt-[7px]`}
                  />
                </div>
              </div>
              {/* 구분선 */}
              <div className="h-[1px] my-[30px] w-full bg-[#eee] max-md:mt-[35px] max-sm:mt-[25px] max-sm:mb-[21px]"></div>
              {/* 버튼 */}
              <div className="text-center my-[60px] max-md:my-0 ">
                <button
                  className="border px-[6px] py-[1px] max-w-[250px] w-full h-[60px] bg-[#142143] text-[#fff] text-[15px]
                max-md:max-w-none max-md:text-[21px] max-md:h-[74px] max-sm:text-[15px] max-sm:h-[52px]"
                >
                  아이디확인
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
