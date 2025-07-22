'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function MobileHeadMenu({
  // open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();
  const [click, setClick] = useState(pathname.split('/')[1]);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = rightRef.current!;
    function onScroll() {
      console.log('오른쪽 div scrollTop:', divElement.scrollTop);
    }
    divElement.addEventListener('scroll', onScroll);
    return () => {
      divElement.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = (menu: string) => {
    setClick(menu);
    if (menu === 'pungsan' && rightRef.current) {
      rightRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (menu === 'guide' && rightRef.current) {
      rightRef.current.scrollTo({
        top: 100,
        behavior: 'smooth',
      });
    }
    if (menu === 'rent' && rightRef.current) {
      rightRef.current.scrollTo({
        top: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="모바일메뉴  fixed z-9  w-full h-full bg-[#fff] right-0 top-0 ">
      {/* 위 */}
      <div
        className={`위쪽 relative h-[282px] pt-[88px] bg-[linear-gradient(-238deg,_#00a0a0,_#00a0a0,_#00C092)] text-[#fff] ${styles['mobile-logo']}
        max-sm:pt-[64px] max-sm:h-[204px]
        `}
      >
        <h2 className="mx-[5%] text-[23px] font-medium font-[Noto_Sans_KR]">
          풍산멀티스포츠센터
        </h2>
        <p
          className={`mx-[5%] pt-[10px] pb-[20px] text-[16px]
          ${styles['icon-mobile-bubble']}`}
        >
          <a className="text-[18px] text-[#fff]"> 031-730-4800</a>
        </p>
      </div>
      {/* 아래  */}
      <div className="아래쪽 flex h-[calc(100%-282px)] ">
        {/* 왼쪽 */}
        <div className="왼쪽 w-[36%] bg-[#f8f8f8] pt-[22px] font-medium">
          <ul
            className="[&>li>a]:block [&>li>a]:px-[14px] [&>li>a]:py-[22px] 
          max-sm:[&>li>a]:px-[10px] max-sm:[&>li>a]:py-[16px] max-sm:text-[12px]"
          >
            <li>
              <a
                onClick={() => handleClick('pungsan')}
                className={`
                  ${
                    click === 'pungsan'
                      ? 'text-[#142143] underline decoration-[2px]'
                      : ''
                  }

                  ${
                    pathname.includes('pungsan')
                      ? 'text-[#142143] underline decoration-[2px]'
                      : ''
                  }`}
              >
                수강신청
              </a>
            </li>
            <li>
              <a
                onClick={() => handleClick('guide')}
                className={`
                  ${
                    click === 'guide'
                      ? 'text-[#142143] underline decoration-[2px]'
                      : ''
                  }
                  ${
                    pathname.includes('guide')
                      ? 'text-[#142143] underline decoration-[2px]'
                      : ''
                  }`}
              >
                신청안내
              </a>
            </li>
            <li>
              <a
                onClick={() => handleClick('rent')}
                className={`
                  ${
                    click === 'rent'
                      ? 'text-[#142143] underline decoration-[2px]'
                      : ''
                  }
                  ${
                    pathname.includes('rent')
                      ? 'text-[#142143] underline decoration-[2px]'
                      : ''
                  }`}
              >
                대관신청
              </a>
            </li>
            <li>
              <Link
                href={'/풍산멀티스포츠센터'}
                className={`${styles['icon-mobile-login']} after:block `}
              >
                풍산멀티스포츠센터
              </Link>
            </li>
          </ul>
        </div>
        {/* 오른쪽 */}
        <div
          ref={rightRef}
          className="오른쪽 overflow-auto  w-[64%] px-[27px] max-sm:px-[20px] "
        >
          <ul
            className=" [&>li>a]:text-[20px] [&>li>a]:font-medium 
          max-sm:[&>li>a]:text-[15px]"
          >
            <li className="pt-[41px] pb-[22px] max-sm:pt-[30px] max-sm:pb-[16px]">
              <Link
                className={`
                  ${
                    pathname.includes('pungsan')
                      ? 'text-[#142143] '
                      : 'text-[#222]'
                  }`}
                href={'/'}
                onClick={() => setOpen(false)}
              >
                수강신청
              </Link>
            </li>
            <li className="mt-[29px] py-[22px] max-sm:mt-[21px] max-sm:py-[16px]">
              <Link
                className={`
                  ${
                    pathname.includes('guide')
                      ? 'text-[#142143]'
                      : 'text-[#222]'
                  }`}
                href={'/guide'}
                onClick={() => setOpen(false)}
              >
                신청안내
              </Link>
            </li>
            <li className="mt-[29px] py-[22px]  max-sm:mt-[21px] max-sm:py-[16px]">
              <Link
                className={`
                  ${
                    pathname.includes('rent')
                      ? 'text-[#142143] '
                      : 'text-[#222]'
                  }`}
                href={'/rent'}
                onClick={() => setOpen(false)}
              >
                대관신청
              </Link>
            </li>
            <li className="mt-[27px] pb-[56px] max-sm:mt-[20px] max-sm:pb-[41px]">
              <strong
                className="py-[18px] block text-[20px] font-medium text-[#222] 
              max-sm:text-[14px] max-sm:py-[13px]"
              >
                FAMILY SITE
              </strong>
              <ul
                className="[&>li]:pt-[15px] [&>li]:pb-[14px] pt-[5px] border-t-1 border-[#ddd]
                [&>li>a]:block [&>li>a]:text-[19px] [&>li>a]:text-[#888] [&>li>a]:font-medium
                max-sm:[&>li]:pt-[11px] max-sm:[&>li]:pb-[10px] max-sm:[&>li>a]:text-[14px] max-sm:leading-[14px]
                "
              >
                <li>
                  <Link
                    href={'/풍산멀티스포츠센터'}
                    className={`${styles['icon-mobile-login']}  after:block`}
                  >
                    하남시청
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/풍산멀티스포츠센터'}
                    className={`${styles['icon-mobile-login']}  after:block`}
                  >
                    하남도시공사
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/풍산멀티스포츠센터'}
                    className={`${styles['icon-mobile-login']}  after:block`}
                  >
                    하남국민체육센터
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/풍산멀티스포츠센터'}
                    className={`${styles['icon-mobile-login']}  after:block`}
                  >
                    풍산멀티스포츠센터
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
