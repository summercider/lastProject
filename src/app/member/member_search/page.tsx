import BreadcrumbNavi from '@/app/components/member/BreadcrumbNavi';
import MemberTitle from '@/app/components/member/MemberTitle';
import styles from '../styles/Member.module.css';

export default function memberSearch() {
  return (
    <div className="w-[calc(100%-320px)] min-h-[600px] max-md:w-full">
      <div className="flex pb-[10px] border-b-2 items-center justify-between">
        <MemberTitle>회원정보 찾기</MemberTitle>
        {/* 네비 */}
        <BreadcrumbNavi path={['회원가입', '회원정보찾기']} />
      </div>

      <div className="pt-[33px] mb-[21px] max-md:pt-[18px] max-md:mb-[25px] max-sm:pt-[13px] max-sm:mb-[18px]">
        <h3 className="text-[28px] text-[var(--gray-700)] max-sm:text-[20px]">
          <span className="font-bold">기존 회원정보</span>가있으신가요?
        </h3>
        <p className="mt-[8px] text-[14px] max-md:mt-[11px] max-md:text-[20px] max-sm:text-[12px]">
          센터에서 등록한 이름 및 연락처, 생년월일을 입력해주세요.
        </p>
      </div>
      <div className="아티클바디 text-[#222]">
        {/* 폼 */}
        <form>
          {/* 인풋 */}
          <div className="text-[15px] max-md:text-[17px] max-sm:text-[12px]">
            <div className="mb-[35px] max-sm:mb-[21px]">
              <label
                className={`${styles['frm-label']} ${styles['icon-accent']}  `}
              >
                이름
              </label>
              <input className={`${styles['frm-input']}  max-md:mt-[10px] `} />
            </div>
            <div className="mb-[35px] max-sm:mb-[21px]">
              <label
                className={`${styles['frm-label']} ${styles['icon-accent']}`}
              >
                연락처(전화)
              </label>
              <input className={`${styles['frm-input']}  max-md:mt-[10px]`} />
            </div>
            <div>
              <label
                className={`${styles['frm-label']} ${styles['icon-accent']}`}
              >
                생년월일
              </label>
              <input
                className={`${styles['frm-input']} max-md:mt-[10px]`}
                placeholder="ex)19800101"
              />
            </div>
          </div>

          {/* 버튼 */}
          <div className="text-center my-[60px] max-md:my-0 max-md:mt-[32px] max-sm:mt-[23px]">
            <button
              className="border px-[6px] py-[1px] max-w-[250px] w-full h-[60px] bg-[#142143] text-[#fff] text-[15px]
            max-md:block max-md:w-full max-md:max-w-none max-md:h-[74px] max-md:text-[21px]
            max-sm:h-[52px]"
            >
              회원정보확인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
