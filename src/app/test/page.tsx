'use client';
import React from 'react';
import styles from '../rent/rent.module.css';

import { format, add, sub, parse, startOfWeek, getDay } from 'date-fns';
import { ko } from 'date-fns/locale';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// 한국어 설정 date-fns

// localizer 생성 (date-fns + locale 한국어)
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: (date: number) => startOfWeek(date, { weekStartsOn: 1 }), // 요일시작
  getDay,
  locales: { ko: ko },
});

// 예시 일정 (필수 형식: title, start, end)
const events = [
  {
    title: '대관',
    start: new Date(2025, 6, 5, 10, 0), // 7월 5일 10시
    end: new Date(2025, 6, 5, 11, 0), // 7월 5일 11시
  },
];

export default function page() {
  const date = new Date();
  console.log(date, '///js 날짜');

  const fnsDate = format(date, 'yyyy-MM-dd');
  console.log(fnsDate, '///기본포맷 날짜');

  const addDate = add(date, { days: 4 });
  console.log(addDate, '///4일 더하기 날짜');

  const subDate = sub(date, { months: 1 });
  console.log(subDate, '///1달 뺴기 날짜');

  const koDate = format(date, 'yyyy-MM-dd', { locale: ko });
  console.log(koDate, '///KO 로케일 날짜');

  return (
    <main className="pt-[129px] pb-[60px] max-md:pt-[78px] max-sm:pt-[60px]">
      <div className="mt-[30px] min-h-[800px] max-md:mt-[57px] max-sm:mt-[40px] max-sm:min-h-[600px]">
        <div className="래퍼 max-w-[1240px] mx-auto">
          <div
            className="flex mx-auto justify-between max-w-[1240px] px-[20px]
              max-md:block
              max-sm:px-[7px]"
          >
            {/*  */}
            <div className="max-w-[1200px] w-full mx-auto bg-white ">
              {/*  */}
              <div className="위">
                <div className="머리 pb-[15px]">
                  <h2
                    className="
                  font-bold text-[28px] text-gray-600 text-center my-[20px]"
                  >
                    풍산멀티스포츠센터
                    <br />
                    온라인대관서비스
                  </h2>
                </div>

                <ul className="버튼들 my-[20px] flex justify-center items-center">
                  <li>
                    <button
                      className={`${styles.cateBtn} ${styles.active} bg-point1 text-white`}
                    >
                      다목적체육관
                    </button>
                  </li>
                  <li>
                    <button className={`${styles.cateBtn}`}>감일축구장</button>
                  </li>
                  <li>
                    <button className={`${styles.cateBtn}`}>감일풋살장</button>
                  </li>
                </ul>

                <div className="캘린더">
                  <div className=" bg-sky-50">
                    {/*  */}
                    <div className="mb-[20px] relative">
                      <div className="flex justify-center items-center text-[20px]  h-[52px]">
                        <button>{'<'}</button>
                        <div>2025년 07</div>
                        <button>{'>'}</button>
                      </div>
                      <p className="absolute bottom-0 right-0 text-[15px]">
                        ※대관 날짜를 선택해 주세요.
                      </p>
                    </div>
                    {/*  */}
                    <div className="w-[1000px] mx-auto">
                      <h2>캘린더</h2>
                      <Calendar
                        views={['month']}
                        defaultView="month"
                        localizer={localizer} //날짜 설정 필수
                        events={events} // 표시할 일정들
                        startAccessor="start" //이벤트 시작시간 키
                        endAccessor="end" // 이벤트 종료시간 키
                        style={{ height: 600 }} //  높이 필수
                        culture="ko" // react-big-calendr 한국어 요일 표시
                      />
                    </div>
                    {/* 캘린더끝 */}
                  </div>
                </div>
              </div>
              {/*  */}
              <div></div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </main>
  );
}
