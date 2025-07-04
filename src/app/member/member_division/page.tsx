'use client'; // 메인페이지니까 서버로 바꾸자
import BreadcrumbNavi from '@/app/components/member/BreadcrumbNavi';
import MemberTitle from '@/app/components/member/MemberTitle';
import Link from 'next/link';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ModalLogin from '@/app/member/(.)login/modal';

export default function MemberDivision() {
  return (
    <>
      {/* 우 */}
      <div className="w-[calc(100%-320px)] max-md:w-full">
        <div className="min-h-[515px]">
          <div className="flex pb-[10px] border-b-2 items-center justify-between">
            <MemberTitle> 회원가입 구분</MemberTitle>
            {/* 네비 */}
            <BreadcrumbNavi path={['회원가입', '회원가입 구분']} />
          </div>

          <div
            className="pt-[33px] mb-[21px]
          max-md:mb-[25px]
          max-sm:pt-[13px]"
          >
            <h3
              className="text-[28px] text-[var(--gray-700)] 
            max-sm:text-[20px] "
            >
              <span className="font-bold inline-block">
                환영합니다. <br /> 하남시 체육시설 온라인접수서비스&nbsp;
              </span>
              <span className="break-keep">회원가입입니다.</span>
            </h3>
            <p
              className="mt-[8px] text-[14px] [&>strong]:text-[#E0002A]
              max-md:mt-[11px] max-md:text-[20px]
              max-sm:mt-[8px] max-sm:text-[12px]"
            >
              하남시 체육시설(풍산멀티스포츠센터) 강습프로그램 이용 중인
              고객님께서는 <strong>'예'</strong>를 클릭해주세요.
              <br />
              하남시 체육시설 온라인접수서비스 신규회원가입을 원하시는 경우
              <strong> '아니오'</strong>를 클릭해주세요.
            </p>
          </div>

          <div
            className="p-[20px] border-1 border-[#e6e7e9]
          max-md:p-[10px]
          "
          >
            <h3
              className="text-[22px] text-[#E0002A] text-center mb-[5px]
            max-md:text-[28px]
            max-sm:text-[13px]"
            >
              <strong className="bg-[#fefefe] font-bold break-keep">
                하남시 체육시설(풍산멀티스포츠센터) 프로그램을 이용 중이십니까?
              </strong>
            </h3>
          </div>
          <br className="max-md:hidden" />
          <br className="max-md:hidden" />
          <div className="p-[30px] max-md:p-0 max-sm:mt-[30px]">
            <div
              className="my-[60px] mx-auto text-center 
              [&>button]:text-[#fff] [&>button]:max-w-[250px] [&>button]:w-full [&>button]:h-[60px] [&>button]:border-1 
              max-md:my-0 max-md:[&>button]:max-w-[49.5%] max-md:flex max-md:justify-between max-md:[&>button]:relative max-md:[&>button]:top-[12px]
              "
            >
              <button className="bg-point1">
                <Link
                  href={'/member/member_search'}
                  className="text-[#fff] block "
                >
                  예
                </Link>
              </button>
              <button className="bg-point2">
                <Link href={'/member/join'} className="text-[#fff] block ">
                  아니오
                </Link>
              </button>
            </div>
          </div>
          {/* <ModalLogin /> */}
        </div>
      </div>
      {/* 우끝 */}
    </>
  );
}
