'use client';

import { useRef, useState } from 'react';
import styles from './LectureSearch.module.css';
import { useLectureContext } from '@/context/LecutureContext';
import Link from 'next/link';

// 하드코딩
const first = ['수영', '헬스', '필라테스'];
const second: { [key: string]: string[] } = {
  수영: ['새벽수영', '오전수영', '저녁수영', '자유수영'],
  헬스: ['헬스', 'TRX'],
  필라테스: ['필라테스(월수)', '필라테스(화목)', '필라테스(금)'],
};

export default function LectureSearch() {
  const [selectIdx, setselectIdx] = useState(-1);
  const [select2thIdx, setselect2thIdx] = useState(-1);

  const { inpValue, setInpValue, btnValue, setBtnValue } = useLectureContext();
  // console.log(inpValue, btnValue);
  const inpRef = useRef<HTMLInputElement | null>(null);

  function inpSearch() {
    setInpValue(inpRef.current?.value as string);

    setselectIdx(-1);
    setselect2thIdx(-1);

    // setCurrentPage(1);
  }
  function handleInpEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      inpSearch();
    }
  }

  function handleResert() {
    setselectIdx(-1);
    setselect2thIdx(-1);
  }

  return (
    <div id="상단">
      {/* 전체 */}
      <h2 className="max-sm:pt-[14px] pb-[15px] max-sm:pb-[15px] font-[Noto_Sans_KR,sans-serif] font-bold text-[32px] text-gray-600 max-sm:text-[22px] max-md:text-[44px] text-center tracking-[-1.5px]">
        프로그램 추첨신청
      </h2>
      <p className="pt-[16px] max-sm:pt-[10px] max-md:pt-[22px] pb-[6px] font-medium max-sm:text-[11px] max-md:text-[22px] text-right max-md:text-start">
        ※ 성별 및 연령대에 따라 신청강좌가 제한됩니다.
      </p>
      <div className="border border-[#d8e2e5]">
        <ul
          className="flex  [&>li>h5]:bg-[#f7f9fa]  [&>li>h5]:border-b-1  [&>li>h5]:border-[#d8e2e5]
          [&>li:last-child>div]:border-r-0 [&>li>div]:border-r-1 [&>li>div]:border-[#d8e2e5] [&>li>div]:h-[180px] [&>li>h5]:text-center 
          [&>li>h5>button]:px-[6px] [&>li>h5>button]:h-[50px] [&>li>h5>button]:w-full [&>li>h5>button]:py-[1px] [&>li>h5>button]:text-point2
          max-md:flex-wrap max-md:[&>li>h5>button]:h-[46px] max-md:[&>li:nth-child(2)>div]:border-r-0 
          max-sm:[&>li>h5>button]:h-[38px] max-sm:[&>li>h5>button]:text-[13px] max-sm:[&>li:last-child>div]:h-[160px]"
        >
          {/* 종목 */}
          <li className="w-full max-md:w-1/2">
            <h5>
              <button className="max-md:border-r-1 max-md:border-[#d8e2e5]">
                <span className="relative icon-downArr font-medium">종목</span>
              </button>
            </h5>
            <div>
              <ul className=" [&>li>button]:w-full [&>li>button]:h-[45px]  [&>li>button]:text-start">
                {first.map((item, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        setselectIdx(idx);
                        setBtnValue(item);
                        // setCurrentPage(1);
                        console.log(btnValue);
                      }}
                      className={`"text-[13px] max-md:text-[16px] max-sm:text-[13px]"
                      ${
                        selectIdx === idx
                          ? 'bg-point2 text-[#fff]'
                          : 'bg-[#fff] text-[#666]'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* 강습반 */}
          <li className="w-full max-md:w-1/2 ">
            <h5>
              <button className="relative icon-nextArr">
                <span className="relative icon-downArr font-medium">
                  강습반
                </span>
              </button>
            </h5>
            <div>
              <ul className="[&>li>button]:h-[45px] [&>li>button]:w-full [&>li>button]:text-start">
                {second[first[selectIdx]] ? null : (
                  <li className="text-center pt-[20px]">
                    종목을 선택해 주세요
                  </li>
                )}

                {second[first[selectIdx]]?.map((lesson, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        setselect2thIdx(idx);
                        setBtnValue(lesson);
                        // setCurrentPage(1);
                        console.log(btnValue);
                      }}
                      className={`text-[13px] max-md:text-[16px] max-sm:text-[13px]
                        ${
                          select2thIdx === idx
                            ? 'bg-point2 text-white'
                            : 'bg-white text-[#666]'
                        }
                        `}
                    >
                      {lesson}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          {/* 강습명,검색 */}
          <li className="w-full max-md:w-full">
            <h5>
              <button className="relative icon-nextArr max-md:border-t-1 max-md:border-[#d8e2e5] font-medium">
                강습명
              </button>
            </h5>
            <div
              className="mx-auto pt-[20px] w-[90%] text-[13px] text-gray-400 
            max-md:text-[18px]
            max-sm:text-[12px]"
            >
              <input
                ref={inpRef}
                defaultValue={inpValue}
                onKeyUp={handleInpEnter}
                placeholder="강습명을 입력하세요."
                className="py-[1px] pr-[50px] pl-[10px] border-[#e3e3e3] border-[3px] rounded-[4px] w-full h-[44px] roudned-[4px] 
              max-md:h-[60px] max-sm:h-[35px]"
              />
              <div className="relative mt-[7px] mb-[2px] pr-[5px] pl-[22px] icon-srcBox max-sm:px-0">
                원하시는 종목 및 강습반을 선택해 주세요.
                <br />
                강습명 검색시 선택된 종목, 강습반은 초기화 됩니다.
              </div>
              <p
                className="mt-[3px] mb-[2px] pr-[5px] pl-[22px] 
              max-md:mt-[7px] 
              max-sm:mt-[6px] max-sm:px-0"
              >
                강좌명 검색시 띄어쓰기를 주의하세요.
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* 태그 */}
      <div
        className="flex justify-between items-center p-[10px] border-x-1 border-[#d8e2e5] border-b-1 min-h-[60px] bg-[#f8f8f8]
        max-md:min-h-[82px] 
        max-sm:min-h-[60px] max-sm:flex-col max-sm:gap-[10px]"
      >
        <div>
          <ul className="flex gap-[5px] ">
            {first[selectIdx] && (
              <li>
                <button
                  onClick={() => alert('첫번째는 삭제불가')}
                  className={`${styles.tagBtn} text-[12px] max-md:text-[16px] max-sm:text-[12px] max-sm:h-[28px] max-sm:leading-[12px]`}
                >
                  {first[selectIdx]}
                </button>
              </li>
            )}

            {second[first[selectIdx]]?.[select2thIdx] && (
              <li>
                <button
                  onClick={() => {
                    setselect2thIdx(-1);
                    // setBtnValue(이전상태);
                  }}
                  className={` ${styles.tagBtn} text-[12px] max-md:text-[16px] max-sm:text-[12px] max-sm:h-[28px] max-sm:leading-[12px]`}
                >
                  {second[first[selectIdx]][select2thIdx]}
                </button>
              </li>
            )}
          </ul>
        </div>
        <div>
          <Link className="text-[#fff]" href="/">
            <button
              className={`${styles.tag1} ${styles.btn} text-[13px] max-md:text-[18px] max-sm:text-[12px]`}
              onClick={handleResert}
            >
              초기화
            </button>
          </Link>
          <button
            onClick={inpSearch}
            className={`${styles.tag2} ${styles.btn} text-[13px] max-md:text-[18px] max-sm:text-[12px]`}
          >
            강좌검색
          </button>
        </div>
      </div>
    </div>
  );
}
