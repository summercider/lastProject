'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface HeaderProps {
  className?: string;
}
export default function Footer({ className }: HeaderProps) {
  const [option, setOption] = useState(false);
  const optionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside() {
    //  event: MouseEvent
      if (option && optionRef.current) {
        setOption(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [option]);

  function pageUp(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <footer
      className="relative bg-[#0e1727] pt-[47px] pb-[30px]
    max-md:pt-[20px] max-md:pb-[34px] max-sm:pt-[15px] max-sm:pb-[25px]"
    >
      <div id="랩퍼" className="mx-auto max-w-[1200px]">
        <div id="이너">
          <div className="pb-[21px] max-md:pb-[25px] max-sm:pb-[18px]">
            <nav
              className="flex justify-between items-center relative
            max-md:block"
            >
              <ul
                className="flex gap-[36px] text-[15px] 
              max-md:justify-center max-md:border-b-1 max-md:pb-[22px] max-md:gap-[120px]
              max-sm:pb-[16px] max-sm:gap-[36px]"
              >
                <li
                  className="after:block after:top-1/2 after:-right-[16px] after:absolute relative after:bg-[#ddd] after:w-[1px] after:h-[8px] after:content-[''] after:-translate-y-1/2
                max-md:after:h-[15px] max-md:after:-right-[60px] max-sm:after:-right-[16px] max-sm:after:h-[9px]"
                >
                  <Link
                    href={'/'}
                    className="text-[#E76E75] font-bold max-md:text-[16px]  max-md:font-bold max-sm:text-[12px]"
                  >
                    개인정보처리방침
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/'}
                    className="max-md:text-[16px] max-sm:text-[12px]"
                  >
                    이메일 무단수집거부
                  </Link>
                </li>
              </ul>
              <button
                onClick={() => setOption(!option)}
                className="px-[21px] py-[15px] border w-[215px] text-start
                hover:text-[#fff]  hover:border-[var(--gray-300)]
              max-md:mt-[37px] max-md:border-0 max-md:pl-[27px] max-md:p-0 
              max-sm:pl-[20px] max-sm:mt-[27px]"
              >
                <span
                  className={` font-semibold text-[14px] relative icon-footPlus icon-footDown 
                  md:flex md:justify-between md:items-center
                  max-md:text-[#fff]  max-md:pr-[32px] max-md:text-[16px]
                  max-sm:text-[12px]
                  ${option ? 'icon-footDown-Rotate' : ''}`}
                >
                  Family Site
                </span>
              </button>
              {/* 패밀리사이트 기존 css> select-option 으로 바뀜 */}
              {option ? (
                <div
                  ref={optionRef}
                  className=" right-0 border-1 absolute bottom-[50px] bg-[#0e1727] w-[215px]  z-10
              max-md:w-full max-md:bottom-[-70px] "
                >
                  <ul
                    className={`py-[10px] ${className} h-[160px] overflow-auto `}
                  >
                    <li>
                      <Link href={'/'} className="icon-footLogin after:block ">
                        하남시청
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className="icon-footLogin after:block">
                        하남도시공사
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className="icon-footLogin after:block">
                        하남국민체육센터
                      </Link>
                    </li>
                    <li>
                      <Link href={'/'} className="icon-footLogin after:block">
                        풍산멀티스포츠센터
                      </Link>
                    </li>
                  </ul>
                  {/* bg-[#0e1727] */}
                </div>
              ) : null}
            </nav>
          </div>
          <div
            className="relative font-medium text-[var(--gray-300)] mb-[34px] pb-[26px] border-b-1 text-[14px] leading-[28px] 
          max-md:px-[27px] max-md:border-0 max-md:mb-0 max-md:pb-[20px]
          max-sm:px-[20px] max-sm:pb-[15px] max-sm:text-[11px] max-sm:leading-[20px]"
          >
            <p>풍산멀티스포츠센터</p>
            <p>
              (우) 12927 경기도 하남시 덕풍북로 160 (풍산지구 멀티스포츠센터)
            </p>
            <p>TEL. 031-730-4800</p>
            <Image
              alt=""
              src={'/images/common/footer_w_logo.png'}
              width={100}
              height={39}
              className="top-[28px] right-0 absolute opacity-60 max-md:hidden"
            />
          </div>
          <p
            className="text-center text-[var(--gray-300)] text-[12px] font-medium
          max-md:text-start max-md:px-[27px] max-md:text-[16px]
          max-sm:px-[20px] max-sm:text-[12px]"
          >
            ©Hanam Urban Innovation Corporation. All Rights reserved.
          </p>
        </div>
      </div>
      {/* top 가기 버튼 */}
      <div
        className="absolute right-[90px] top-[-22px] w-[58px] h-[58px] bg-point1 z-10
      hover:bg-point2 icon-pageUp 
      max-md:hidden"
        onClick={pageUp}
      ></div>
    </footer>
  );
}
