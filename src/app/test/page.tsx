'use client';
import React from 'react';

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
    <main className="py-[200px] ">
      <div className="w-[1000px] mx-auto">
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
    </main>
  );
}
