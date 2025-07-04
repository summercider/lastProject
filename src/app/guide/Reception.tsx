import React from 'react';
import styles from './styles/Guide.module.css';

export default function Reception() {
  return (
    <div
      className="[&_*_h4]:text-[24px] [&_*_h4]:text-[#222] [&_*_h4]:font-extrabold [&_*_h4]:mb-[15px]
      [&>div]:mt-[30px]
      [&_*_th]:h-[60px] [&_*_th]:bg-[#0e1727] [&_*_th]:text-[#fff] 
      [&_*_td]:text-center [&_*_td]:h-[59px]
      max-md:[&_*_h4]:text-[16px]
    "
    >
      {/* 1 */}
      <div className="relative">
        <h4>기존회원 재등록</h4>
        <p className={`${styles['scroll-txt']}`}>
          가로로 스크롤 하여 보실 수 있습니다.
        </p>
        <div className="flex mb-[30px] ">
          <table className=" w-[180px] text-[13px]">
            <thead>
              <tr>
                <th
                  className={`border-r-1 border-[#0e1727]
                  ${styles['table-separate']}`}
                >
                  접수분류
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r-1 border-b-1 border-[#e5e7ee] text-gray-600 font-semibold">
                  기존회원 접수
                  <br />
                  (재등록기간)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-[calc(100%-180px)] overflow-x-auto">
            <table className="min-w-[700px] text-[13px] ">
              <thead>
                <tr>
                  <th>접수기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    매월 13일 ~ 19일
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="p-[20px] mt-[10px] mb-[30px] border-1 border-[#e5e7ee] rounded-[5px]">
          <ul className="font-medium ml-[15px]">
            <li className={`${styles['list-dot']}`}>
              ※ 센터 운영에 따라 재등록 접수기간은 변경될 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
      {/* 2 */}
      <div className="relative">
        <h4>재등록 접수시간안내</h4>
        <p className={`${styles['scroll-txt']}`}>
          가로로 스크롤 하여 보실 수 있습니다.
        </p>
        <div className="flex mb-[30px] ">
          <table className=" w-[180px] text-[13px]">
            <thead>
              <tr>
                <th
                  className={`border-r-1 border-[#0e1727]
                  ${styles['table-separate']}`}
                >
                  접수요일
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r-1 border-b-1 border-[#e5e7ee] text-gray-600 font-semibold">
                  평일(월~금)
                </td>
              </tr>
              <tr>
                <td className="border-r-1 border-b-1 border-[#e5e7ee] text-gray-600 font-semibold">
                  토요일, 일요일
                  <br />
                  (2, 4째주)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-[calc(100%-180px)] overflow-x-auto">
            <table className="min-w-[700px] text-[13px]">
              <thead>
                <tr>
                  <th>접수시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b-1 border-[#e5e7ee]">06:00~21:00</td>
                </tr>
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] ">
                    09:00-17:00
                    <br />
                    점심시간(11:30~12:30) 접수불가
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div>
        <h4>재등록 접수장소</h4>
        <div className="p-[20px] mt-[10px] mb-[30px] border-1 border-[#e5e7ee] rounded-[5px]">
          <ul className="ml-[15px]">
            <li className={`${styles['list-dot']}`}>
              풍산멀티스포츠센터 홈페이지 -
              https://online.hanamsport.or.kr/pungsan/
            </li>
            <li className={`${styles['list-dot']}`}>
              풍산멀티스포츠센터 – 안내데스크
            </li>
          </ul>
        </div>
      </div>
      {/* 4 */}
      <div>
        <h4>재등록방법</h4>
        <div className="p-[20px] mt-[10px] mb-[30px] border-1 border-[#e5e7ee] rounded-[5px]">
          <ul className="ml-[15px]">
            <li>
              <strong className={`${styles['list-dot']}`}>온라인 등록</strong>
              <ul className="mt-[5px]">
                <li className={`${styles['list-hyphen']} tracking-[-1px] `}>
                  풍산멀티스포츠센터 홈페이지 접속 – 「수강신청 –
                  로그인(온라인아이디가 없는 경우 회원가입) – 마이페이지 -
                  내강좌 – 재수강강좌」 - 재수강목록 - 재수강강좌 선택 –
                  「결제대기」 내역에서 결제
                </li>
              </ul>
            </li>
            <li className="mt-[9px]">
              <strong className={`${styles['list-dot']}`}>
                오프라인(키오스크) 재등록
              </strong>
              <ul className="mt-[5px]">
                <li className={`${styles['list-hyphen']}`}>
                  키오스크에서 재등록 선택 후 회원카드 인식 – 재등록 과목 선택
                  및 결제
                </li>
              </ul>
            </li>
            <li className="mt-[9px]">
              <strong className={`${styles['list-dot']}`}>
                오프라인(방문) 재등록
              </strong>
              <ul className="mt-[5px]">
                <li className={`${styles['list-hyphen']}`}>
                  회원카드 지참 후 안내데스크에서 재등록 및 결제
                  <br /> 대리접수일 경우, 수강생의 신분증 또는 회원카드 지참 후
                  방문
                  <br />※ 결제까지 완료되지 않은 경우 재등록이 정상적으로
                  이뤄지지 않았으니 결제내역을 필히 확인 바랍니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* 5 */}
      <div className="relative">
        <h4>추첨접수기간</h4>
        <p className={`${styles['scroll-txt']}`}>
          가로로 스크롤 하여 보실 수 있습니다.
        </p>
        <div className="flex mb-[30px] ">
          <table className=" w-[180px] text-[13px] [&_*_td]:h-[49px]">
            <thead>
              <tr>
                <th
                  className={`border-r-1 border-[#0e1727]
                  ${styles['table-separate']}`}
                >
                  접수분류
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[413px]">
                <td className="border-r-1 border-b-1 border-[#e5e7ee] text-gray-600 font-semibold ">
                  2025년
                  <br />
                  신규회원
                  <br />
                  사전접수
                </td>
              </tr>
              <tr>
                <td className="border-r-1 border-b-1 border-[#e5e7ee] text-gray-600 font-semibold">
                  추첨접수 시간
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-[calc(100%-180px)] overflow-x-auto">
            <table className="min-w-[700px] text-[13px] [&_*_td]:border-r-1 [&_*_td]:last:border-r-0">
              <thead>
                <tr>
                  <th colSpan={6}>접수기간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    월
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    접수일
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    추첨일
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    월
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    접수일
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    추첨일
                  </td>
                </tr>
                {/* row 1 */}
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    1
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    21~22
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    23(목)
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    7
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    22~23
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    24(목)
                  </td>
                </tr>
                {/*  row 2 */}
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    2
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    21~24
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    25(화)
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    8
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    21~22
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    25(월)
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    3
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    21~24
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    25(화)
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    9
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    23~24
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    25(목)
                  </td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    4
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    22~23
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    24(목)
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    10
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    21~22
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    23(목)
                  </td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    5
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    21~22
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    23(금)
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    11{' '}
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    21~24
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    25(화)
                  </td>
                </tr>
                {/*  row 6 */}
                <tr>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    6
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    23~24
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    25(수)
                  </td>
                  <td className="border-b-1 border-[#e5e7ee] text-gray-600 ">
                    12
                  </td>
                  <td
                    colSpan={2}
                    className="border-b-1 border-[#e5e7ee] text-gray-600 "
                  >
                    11월 중 별도 공지
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={6}
                    className="border-b-1 border-[#e5e7ee] text-gray-600 "
                  >
                    06:00 ~ 23:59
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div>
        <h4>추첨접수방법(온라인으로만 실시)</h4>
        <div className="p-[20px] mt-[10px] mb-[30px] border-1 border-[#e5e7ee] rounded-[5px]">
          <ul className="ml-[15px]">
            <li>
              <span className={`${styles['list-dot']}`}>
                풍산멀티스포츠센터 홈페이지 접속 – 「수강신청 –
                로그인(온라인아이디가 없는 경우 회원가입) - 프로그램 추첨신청」
                – 프로그램목록에서 수강신청
              </span>
              <br />※ 신청한 내역은 「마이페이지 – 내 강좌– 추첨접수내역」에서
              확인 및 취소 가능
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
