'use client';

import { usePathname } from 'next/navigation';
import styles from '../../member/styles/Member.module.css';
import Link from 'next/link';

const subList: { name: string; href: string }[] = [
  { name: '로그인', href: '/member/login' },
  { name: '회원가입', href: '/member/member_division' },
  { name: '아이디찾기', href: '/member/id_search' },
  { name: '비밀번호찾기', href: '/member/pwd_search' },
];

export default function MemberSub() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className="w-[250px] relative top-[-39px] max-md:hidden">
      <h2
        className={`${styles['sub']}
                p-[20px] h-[144px] font-bold flex justify-center items-center text-[27px] text-[#fff] `}
      >
        회원
      </h2>
      <ul className="px-[30px] pt-[10px] pb-[50px] border-1 border-[#e4e8e9]">
        {subList.map((list, idx) => {
          const isActive = pathname === list.href;

          return (
            <li
              key={idx}
              className={` border-[#e5e7ee] border-t-0
                  ${idx === subList.length - 1 ? 'border-b-0' : 'border-b-1'}
                    `}
            >
              <Link
                className={`${styles['icon-next']}
                ${isActive ? styles['icon-next-active'] : ''}  leading-[30px]
                relative  block pt-[12px] pb-[8px] pr-[30px] min-h-[51px] font-bold text-[#3b3b3b]`}
                href={list.href}
                scroll={false}
              >
                {list.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
