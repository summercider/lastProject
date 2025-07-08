'use client';
import BreadcrumbNavi from '@/app/components/member/BreadcrumbNavi';
import MemberTitle from '@/app/components/member/MemberTitle';
import React from 'react';
import styles from '../styles/Member.module.css';
import Link from 'next/link';

export default function Login() {
  // const [open, setOpen] = useState(false);

  return (
    <div className="w-[calc(100%-320px)] max-md:w-full max-sm:min-h-[600px]">
      <div className="flex pb-[10px] border-b-2 items-center justify-between">
        <MemberTitle>로그인</MemberTitle>
        {/* 네비 */}
        <BreadcrumbNavi path={['회원', '로그인']} />
      </div>
      <div className="max-md:mx-[20px] max-sm:mx-[7px]">
        {/*  */}
        <div className="래퍼 max-w-[1200px]">
          <div className="pt-[15px] mx-[90px] mb-[29px] max-md:mx-0 max-md:pt-[47px] max-md:mb-[25px] max-sm:pt-[33px] max-sm:mb-[18px]">
            <h3 className="text-[28px] max-sm:text-[20px] md:hidden">
              <strong className="font-bold text-[#222]">로그인</strong>
            </h3>
            <p className="mt-[14px] max-md:mt-[11px] max-md:text-[20px] max-sm:text-[14px] max-sm:mt-[8px]">
              하남시 체육시설 온라인접수서비스 로그인 후,
              <br />
              프로그램 강좌 예약을 진행하세요.
            </p>
          </div>
          {/* 폼 */}
          <form className="max-w-[640px] mx-auto flow-root max-md:mx-0 max-md:max-w-none ">
            {/* 인풋 */}
            <div className="text-[15px]">
              <div className="mb-[8px] max-md:mb-[30px] max-sm:mb-[7px]">
                <input className={`${styles['frm-input-login']} `} />
              </div>
              <div className=" max-md:mb-[30px] max-sm:mb-[18px]">
                <input className={`${styles['frm-input-login']} `} />
              </div>
            </div>
            {/* 로그인옵션 */}
            <div className="mt-[18px]">
              <label className={`${styles['checkbox-login']} max-md:w-[33%] `}>
                <input type="checkbox" />
                <span className=" text-[14px] max-md:text-[18px] max-sm:text-[13px]">
                  아이디저장
                </span>
              </label>
              <label
                className={`${styles['checkbox-login']} ml-[48px] max-md:ml-0 max-md:w-[53%] `}
              >
                <input type="checkbox" />
                <span className=" text-[14px] max-md:text-[18px] max-sm:text-[13px]">
                  비대면 자격확인서비스
                </span>
              </label>
            </div>
            {/* 버튼  */}
            <div className="text-center mt-[39px] mb-[25px] max-sm:mt-[23px] max-sm:mb-0">
              <button
                className="border px-[6px] py-[1px] w-full h-[60px] bg-point1 text-[#fff] text-[15px]
          hover:bg-[#142143] 
          max-md:h-[74px] max-md:text-[21px]
          max-sm:h-[52px] max-sm:text-[15px]"
              >
                로그인
              </button>
            </div>
          </form>

          {/* 구분선 */}
          <div className="h-[1px] my-[30px] w-full bg-[#eee] max-md:mt-[35px] max-sm:mt-[25px] max-sm:mb-[21px]"></div>
          {/*  */}
          <div className="max-w-[640px] mx-auto max-md:mx-0 max-md:max-w-none">
            <p className="[&>a]:text-point1 [&>a]:font-medium [&>a]:underline max-md:text-[18px] max-sm:text-[13px]">
              <a href={'/member/id_search'}>아이디</a>&nbsp;혹은&nbsp;
              <a href={'/member/pwd_search'}> 비밀번호</a>를 잊으셨나요?
            </p>
            {/* 버튼 */}
            <div className="text-center mx-auto mt-[24px] max-md:mt-[34px] max-sm:mt-[24px]">
              <button
                className="group border-2 px-[6px] py-[1px] w-full h-[60px] text-[#222] text-[15px] 
            hover:bg-point1 hover:text-[#fff] hover:border-point1
            max-md:h-[74px] max-md:text-[21px]
            max-sm:h-[52px] max-sm:text-[15px]"
              >
                <Link
                  className="text-[#222] group-hover:text-[#fff]"
                  href={'/member/member_division'}
                >
                  회원가입
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
