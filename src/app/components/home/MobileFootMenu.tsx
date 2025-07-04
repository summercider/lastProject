import Link from 'next/link';
import styles from './Header.module.css';
import React from 'react';

export default function MobileFootMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="fixed w-full bottom-0 bg-[#0e1727] 
        md:hidden"
    >
      <nav>
        <ul className="flex [&>li]:w-[20%] [&>li]:text-center">
          <li>
            <Link
              href={'/'}
              className="block h-[83px] pt-[20px] 
                max-sm:pt-[13px] max-sm:h-[53px]"
            >
              <span
                className={`text-center ${styles['icon-mobile-foot']} ${styles['call']} leading-[16px] text-[#fff]
                  max-sm:text-[10px] `}
              >
                콜센터
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              className="block h-[83px] pt-[20px] 
                max-sm:pt-[13px] max-sm:h-[53px]"
            >
              <span
                className={`text-center ${styles['icon-mobile-foot']} ${styles['lecture']} leading-[16px] text-[#fff]
                  max-sm:text-[10px] max-sm:leading-[10px]`}
              >
                강좌접수
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              className="block h-[83px] pt-[20px] 
                max-sm:pt-[13px] max-sm:h-[53px]"
            >
              <span
                className={`text-center ${styles['icon-mobile-foot']} ${styles['home']} leading-[16px] text-[#fff]
                  max-sm:text-[10px] max-sm:leading-[10px]`}
              >
                홈
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={'/'}
              className="block h-[83px] pt-[20px]
                max-sm:pt-[13px] max-sm:h-[53px]"
            >
              <span
                className={`text-center ${styles['icon-mobile-foot']} ${styles['profile']} leading-[16px] text-[#fff]
                  max-sm:text-[10px] max-sm:leading-[10px]`}
              >
                정보수정
              </span>
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpen(!open)}
              href={'/'}
              className="block h-[83px] pt-[20px] 
                max-sm:pt-[13px] max-sm:h-[53px]"
            >
              <span
                className={`text-center ${styles['icon-mobile-foot']} ${styles['menu']} leading-[16px] text-[#fff]
                  max-sm:text-[10px] max-sm:leading-[10px]`}
              >
                메뉴
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
