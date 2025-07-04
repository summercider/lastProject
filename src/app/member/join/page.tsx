import BreadcrumbNavi from '@/app/components/member/BreadcrumbNavi';
import MemberTitle from '@/app/components/member/MemberTitle';
import styles from '../styles/Member.module.css';

export default function Join() {
  return (
    <>
      <div className="w-[calc(100%-320px)] min-h-[600px]  max-md:w-full">
        <div className="flex pb-[10px] border-b-2 items-center justify-between">
          <MemberTitle>약관동의</MemberTitle>
          {/* 네비 */}
          <BreadcrumbNavi path={['회원', '약관동의']} />
        </div>

        <div className="래퍼">
          <nav className="mb-[14px]">
            <ul className=" text-center w-full table ">
              <li
                className={`py-[24px] w-1/3 table-cell border-b-3 border-point1 text-point1 font-medium text-[20px] ${styles['join-next']} max-sm:text-[16px]`}
              >
                <span className="pr-[16px] max-sm:block max-sm:pr-0">
                  STEP 01
                </span>
                <span className="text-[17px] max-sm:text-[13px] max-sm:block ">
                  약관동의
                </span>
              </li>
              <li
                className={`py-[24px] w-1/3 table-cell border-b-3 border-[#e5e5e5] text-[#e5e5e5] font-medium text-[20px] ${styles['join-next']} max-sm:text-[16px]`}
              >
                <span className="pr-[16px] max-sm:block max-sm:pr-0">
                  STEP 02
                </span>
                <span className="text-[17px]  max-sm:text-[13px]  max-sm:block ">
                  회원정보 입력
                </span>
              </li>
              <li
                className={`py-[24px] w-1/3 table-cell border-b-3 border-[#e5e5e5] text-[#e5e5e5] font-medium text-[20px] max-sm:text-[16px]`}
              >
                <span className="pr-[16px] max-sm:block max-sm:pr-0">
                  STEP 03
                </span>
                <span className="text-[17px]  max-sm:text-[13px] max-sm:block ">
                  회원가입 완료
                </span>
              </li>
            </ul>
          </nav>

          <div className="pt-[33px] mb-[21px] max-md:pt-[18px] max-sm:pt-[13px] max-md:mb-[25px] max-sm:mb-[18px]">
            <h3 className="text-[28px] text-[var(--gray-700)] max-sm:text-[20px] whitespace-nowrap">
              <span className="font-bold">
                환영합니다. <br /> 하남시 체육시설 온라인접수서비스
              </span>
              입니다.
            </h3>
            <p className="mt-[8px] text-[14px] [&>strong]:text-[#E0002A] max-md:mt-[8px] max-md:text-[20px] max-sm:text-[12px]">
              약관 선택 후 휴대전화 개인인증 절차가 진행됩니다.
            </p>
          </div>

          <div
            className="border-1 border-[#e5e5e5] rounded-[5px] my-[10px] p-[20px] [&>p]:text-[13px] [&>p]:text-[#888] tracking-[-0.5px]
          max-md:p-[10px] "
          >
            <strong className="text-[#E0002A] text-[18px] mb-[5px] block font-medium">
              ※ 알려드립니다
            </strong>
            <p>
              만 14세 미만 어린이는 보호자(법정대리인)와 함께 가입해 주시기
              바랍니다.개인정보보호법 39조의 3에서 만 14세 미만 아동의 개인정보
              수집 시 부모의 동의를 얻도록 규정하고 있습니다.
            </p>
            <p>
              만 14세 미만 어린이의 경우 회원가입 시 보호자(법정대리인)의 실명
              인증을 통한 가입 동의가 필요합니다.
            </p>
          </div>

          <div className="py-[30px]">
            <ul className="mb-[100px] max-md:mb-[84px]">
              <li className="pb-[30px] border-b-1 border-[#e5e5e5]">
                <label className={`font-medium ${styles['checkbox']}`}>
                  <input type="checkbox" defaultChecked />
                  <span className="text-[17px] text-[#222] max-md:text-[20px] max-sm:text-[13px]">
                    모두 동의합니다.
                  </span>
                </label>
              </li>

              <li className="mt-[30px] flex justify-between">
                <label
                  className={`w-[80%] inline-block cursor-pointer text-[#222] font-medium text-[17px] ${styles['checkbox']}
                  max-md:text-[22px] max-sm:text-[13px] `}
                >
                  <input type="checkbox" />
                  <span>
                    <strong className="text-[#ff4D29] font-medium ">
                      (필수)
                    </strong>
                    온라인 접수 서비스 이용약관 동의
                  </span>
                </label>
                <a className="cursor-pointer border-1 border-[#d8e2e5] text-center text-[#222] font-medium min-w-[60px] min-h-[30px] rounded-[5px] px-[8px] py-[6px] text-[12px]">
                  보기
                </a>
              </li>

              <li className="mt-[20px] flex justify-between">
                <label
                  className={`w-[80%] inline-block cursor-pointer text-[#222] font-medium text-[17px] ${styles['checkbox']}
                  max-md:text-[22px] max-sm:text-[13px]`}
                >
                  <input type="checkbox" />
                  <span>
                    <strong className="text-[#ff4D29] font-medium">
                      (필수)
                    </strong>
                    개인정보 수집 및 이용 동의
                  </span>
                </label>
                <a className="cursor-pointer border-1 border-[#d8e2e5] text-center text-[#222] font-medium min-w-[60px] min-h-[30px] rounded-[5px] px-[8px] py-[6px] text-[12px]">
                  보기
                </a>
              </li>

              <li className="mt-[20px] mb-[30px] flex justify-between">
                <label
                  className={`w-[80%] inline-block cursor-pointer text-[#222] font-medium text-[17px] ${styles['checkbox']}
                  max-md:text-[22px] max-sm:text-[13px]`}
                >
                  <input type="checkbox" />
                  <span>
                    <strong className="text-[#ff4D29] font-medium">
                      (필수)
                    </strong>
                    하남시 체육시설 이용약관 동의
                  </span>
                </label>
                <a className="cursor-pointer border-1 border-[#d8e2e5] text-center text-[#222] font-medium min-w-[60px] min-h-[30px] rounded-[5px] px-[8px] py-[6px] text-[12px]">
                  보기
                </a>
              </li>
            </ul>

            <div
              className="my-[30px] text-center [&>button]:max-w-[250px] [&>button]:w-full [&>button]:h-[60px] [&>button]:px-[8px] [&>button]:py-[1px] [&>button]:whitespace-nowrap
            max-md:my-0 max-md:[&>button]:w-[45%] max-md:[&>button]:max-w-none max-md:flex max-md:justify-center max-md:[&>button]:text-[12px]
            max-sm:[&>button]:text-[10px] max-sm:[&>button]:h-[42px]"
            >
              <button className="bg-point1 border text-[#fff] font-medium">
                소아 · 청소년 가입(만14세 미만)
              </button>
              <button className="bg-point2 border text-[#fff] font-medium">
                일반가입(만14세 이상)
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
