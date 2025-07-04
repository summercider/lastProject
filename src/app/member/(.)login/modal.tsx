'use client';

import React from 'react';
import styles from '../../member/styles/Member.module.css';

// 높이 안잡힘
export default function ModalLogin({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50">
      <div
        className="my-[40px] px-[60px] bg-white rounded-[5px] relative max-w-[568px] w-full 
        max-md:max-w-none max-md:my-0 max-md:h-full max-md:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        {/* 내부 */}
        <div className="mt-[40px] pb-[60px]">
          <div className="래퍼 max-w-[1200px]">
            <div className="pt-[10px] mb-[18px] ">
              <h2 className="text-[28px] font-black text-[#010101]">로그인</h2>
              <p className="mt-[14px]">
                하남시 체육시설 온라인접수서비스 로그인 후,
                <br />
                프로그램 강좌 예약을 진행하세요.
              </p>
            </div>
            {/* 폼 */}
            <form className="max-w-[640px] mx-auto flow-root">
              {/* 인풋 */}
              <div className="text-[15px]">
                <div className="mb-[8px]">
                  <input className={`${styles['frm-input-login']} `} />
                </div>
                <div>
                  <input className={`${styles['frm-input-login']}`} />
                </div>
              </div>
              {/* 로그인옵션 */}
              <div className="mt-[18px]">
                <label className={`${styles['checkbox-login']}`}>
                  <input type="checkbox" />
                  <span className=" text-[14px]">아이디저장</span>
                </label>
                <label className={`${styles['checkbox-login']} ml-[48px]`}>
                  <input type="checkbox" />
                  <span className=" text-[14px]">비대면 자격확인서비스</span>
                </label>
              </div>
              {/* 버튼  */}
              <div className="text-center mt-[39px] mb-[25px]">
                <button
                  className="border px-[6px] py-[1px] w-full h-[60px] bg-point1 text-[#fff] text-[15px]
                  hover:bg-[#142143]"
                >
                  로그인
                </button>
              </div>
            </form>

            {/* 구분선 */}
            <div className="h-[1px] my-[35px] w-full bg-[#eee]"></div>
            <div className="max-w-[640px] mx-auto ">
              <p className="[&>a]:text-point1 [&>a]:font-medium [&>a]:underline">
                <a href={'/member/id_search'}>아이디</a> 혹은
                <a href={'/member/pwd_search'}>비밀번호</a>를 잊으셨나요?
              </p>
              {/* 버튼 */}
              <div className="text-center mx-auto mt-[24px]">
                <button
                  className="border-2 px-[6px] py-[1px] w-full h-[60px] text-[#222] text-[15px] 
            hover:bg-point1 hover:text-[#fff]"
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 내부끝 */}
      </div>
    </div>
  );
}
