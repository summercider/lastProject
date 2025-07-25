'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import ModalLogin from '@/app/member/(.)login/modal';
import { useEffect, useState } from 'react';
import MobileHeadMenu from '@/app/components/home/MobileHeadMenu';
import MobileFootMenu from '@/app/components/home/MobileFootMenu';
import { usePathname } from 'next/navigation';
import Chatbot from '@/app/components/chatbot/chatbot';

interface Message {
  sender: 'user' | 'AI';
  text: string;
}
// 로그인세트+모바일메뉴버튼 모바일메뉴 켜지면
// z-index: 2;
// left: 15px;
// color: #fff;

interface HeaderProps {
  className?: string;
}
export default function Header({ className }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // const router = useRouter();
  // console.log(pathname);
  const [modalOpen, setModalOpen] = useState(false);

  const [headerShow, setHeaderShow] = useState(true);
  const [prvScroll, setPrvScroll] = useState(0);

  const [chat, setChat] = useState(false); // 챗봇창
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'AI', text: '안녕하세요! 무엇을 도와드릴까요?' },
  ]);

  useEffect(() => {
    function headerScroll() {
      const currentScroll = window.scrollY;

      if (currentScroll < 300) {
        setHeaderShow(true);
      } else {
        if (currentScroll < prvScroll) {
          setHeaderShow(true);
        }
        if (currentScroll > prvScroll) {
          setHeaderShow(false);
        }
      }
      setPrvScroll(currentScroll);
    }

    window.addEventListener('scroll', headerScroll);
    return () => {
      window.removeEventListener('scroll', headerScroll);
    };
  }, [prvScroll]);

  // 모바일메뉴열면 기존 바디 스크롤막기
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; //
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={` fixed top-0 left-0 w-full z-50 bg-[#fff]
    ${headerShow ? 'block' : 'hidden'} `}
    >
      <div
        className={`랩퍼 ${className} max-w-[1200px] mx-auto relative h-[90px] max-md:h-[76px] max-sm:h-[60px]`}
      >
        {/* 로고 */}
        <div
          className={`absolute left-0 top-[30px] -tracking-[1px] 
            max-md:top-[22px] max-md:left-[13px] 
            max-sm:top-[15px] max-sm:left-[10px]`}
        >
          <Link href={'/'} className="flex items-center justify-center ">
            <Image
              src={'/images/common/logo.svg'}
              alt=""
              width={22}
              height={20}
              className="h-[20px]"
            />
            <h1
              className="text-[var(--point-color3)] text-[22px] font-bold font-[Pretendard] leading-[28px]
            max-sm:text-[16px]"
            >
              풍산멀티스포츠센터
            </h1>
          </Link>
        </div>
        {/* 네비 */}
        <nav className="max-md:hidden">
          <ul
            className={`flex justify-center font-medium 
          [&>li>a]:px-[17px] [&>li>a]:pt-[35px] [&>li>a]:pb-[23px] [&>li>a]:block text-[18px] [&>li>a]:-tracking-[0.45px] [&>li>a]:hover:text-point1
          `}
          >
            <li>
              <Link
                className={`
                  ${
                    pathname.includes('pungsan')
                      ? 'text-point1'
                      : 'text-[var(--gray-600)]'
                  }`}
                href={'/pungsan'}
              >
                수강신청
              </Link>
            </li>
            <li>
              <Link
                className={`
                    ${
                      pathname.includes('guide')
                        ? 'text-point1'
                        : 'text-[var(--gray-600)]'
                    }`}
                href={'/guide'}
              >
                신청안내
              </Link>
            </li>
            <li>
              <Link
                className={`
                    ${
                      pathname.includes('rent')
                        ? 'text-point1'
                        : 'text-[var(--gray-600)]'
                    }`}
                href={'/test'}
              >
                대관신청
              </Link>
            </li>
            <li>
              <Link
                href={'https://hanamsport.or.kr/wwwroot/ps/'}
                target="_blank"
                className="icon-login after:block text-[var(--gray-600)]"
              >
                풍산멀티스포츠센터
              </Link>
            </li>
          </ul>
        </nav>
        {/* 로그인셋 */}
        <ul
          className={`로그인셋  z-50 absolute top-[34px] flex [&>li]:px-[12px] text-[14px] font-medium  [&>li>a]:hover:text-point1 [&>li]:hover:text-point1 [&>li]:hover:underline  -mr-[12px] font-[Maven_Pro] 
        max-md:top-[25px] max-md:right-[58px]
        max-sm:[&>li]:px-[6px] max-sm:top-[17px]
        ${open ? 'left-[20px] max-sm:left-[10px]' : 'right-0 '}
        
        `}
        >
          <li>
            <Link
              href="#"
              className={`${open ? 'text-[#fff]' : 'text-[#222]'}`}
              onClick={() => setModalOpen(true)}
            >
              로그인
            </Link>
          </li>
          <li className="relative before:content-[''] before:w-[1px] before:h-[9px] before:block before:bg-[#ddd] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2">
            <Link
              className={`${open ? 'text-[#fff]' : 'text-[#222]'}`}
              href="/member/member_division"
            >
              회원가입
            </Link>
          </li>
          <li
            className={`relative before:content-[''] before:w-[1px] before:h-[9px] before:block before:bg-[#ddd] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 cursor-pointer  
              ${open ? 'text-[#fff]' : 'text-[#222]'}`}
            onClick={() => setChat((prev) => !prev)}
          >
            AI문의
          </li>

          {/* 챗봇 */}
          {chat && (
            <Chatbot
              messages={messages}
              setMessages={setMessages}
              chat={chat}
              setChat={setChat}
            />
          )}

          {/*모달 */}
          {modalOpen && <ModalLogin setModalOpen={setModalOpen} />}
        </ul>
        {/* 모바일 버튼*/}
        <div className="md:hidden absolute right-[11px] top-[11px] text-end max-sm:right-0 max-sm:top-0">
          <button
            className={`모바일메뉴버튼 z-10 ${styles.mobile} 
            ${open ? styles.active : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span className="absolute block w-[1px] h-[1px] overflow-hidden">
              모바일메뉴
            </span>
          </button>
        </div>
      </div>
      {/* 모바일 */}
      {/* 모바일 페이지 */}
      {open && <MobileHeadMenu open={open} setOpen={setOpen} />}
      {/* 모바일하단 네비 */}
      <MobileFootMenu open={open} setOpen={setOpen} />
    </header>
  );
}
