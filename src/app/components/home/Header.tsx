'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';
import ModalLogin from '@/app/member/(.)login/modal';
import { useEffect, useState } from 'react';
import MobileHeadMenu from '@/app/components/home/MobileHeadMenu';
import MobileFootMenu from '@/app/components/home/MobileFootMenu';
import { usePathname } from 'next/navigation';

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

  const [chat, setChat] = useState(true);

  const [messages, setMessages] = useState([
    { sender: 'AI', text: '안녕하세요! 무엇을 도와드릴까요?' },
  ]);
  const [inpMsg, setInpMsg] = useState('');

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

  // 제출하면 fetch
  const url = 'https://api.yjins-aws.com/chat';
  const handleSendMessage = async (
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent
  ) => {
    e?.preventDefault();

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: inpMsg }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const aiMessage = { sender: 'AI', text: data.response || '응답 없음' };
      setMessages((prev) => [aiMessage, ...prev]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        { sender: 'AI', text: '오류가 발생했어요. 다시 시도해 주세요.' },
        ...prev,
      ]);
    }

    setInpMsg('');
  };

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
                href={'/rent'}
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
          {chat && (
            <div className="px-[10px] pt-[30px] pb-[10px] bg-point2 opacity-90 absolute w-[200px] h-[400px] top-[20px] flex flex-col justify-between">
              <button
                className="absolute right-0 top-0 text-[12px] text-[#fff]"
                onClick={() => setChat(false)}
              >
                접어두기
              </button>
              <div className=" text-center">
                <h2 className=" font-bold text-point1">AI 문의하기</h2>
              </div>

              {/* <div className="flex flex-col-reverse gap-2 overflow-y-auto flex-1">
                {messages.map((msg, i) => (
                  <div key={i} className="bg-[#fff] rounded-[10px] p-1 text-sm">
                    {msg}
                  </div>
                ))}
              </div> */}
              <div className="flex flex-col-reverse gap-2 overflow-y-auto flex-1">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-2 rounded-lg text-sm ${
                        msg.sender === 'user'
                          ? 'bg-point1 text-white'
                          : 'bg-white text-black'
                      }`}
                    >
                      <p className="text-[10px] mb-1 font-semibold">
                        {msg.sender === 'user' ? '나' : 'AI'}
                      </p>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <form onSubmit={handleSendMessage} className="flex">
                  <input
                    value={inpMsg}
                    onChange={(e) => setInpMsg(e.target.value)}
                    className="border-1 border-point1 w-full bottom-0 placeholder:text-center mt-[20px] placeholder:text-[#fff] text-[#fff]"
                    placeholder="질문을 입력하세요"
                  />
                </form>
                <button
                  onClick={handleSendMessage}
                  className=" border-1 block  bg-point1 border-point1 p-0 text-[12px] text-[#fff] w-full"
                >
                  전송
                </button>
              </div>
            </div>
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
