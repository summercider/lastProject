import React from 'react';
import styles from './styles/Guide.module.css';

export default function Refund() {
  return (
    <div
      className="[&_*_h4]:text-[24px] [&_*_h4]:text-[#222] [&_*_h4]:font-extrabold [&_*_h4]:mb-[15px]
      [&>div]:mt-[30px]
      [&_*_th]:h-[60px] [&_*_th]:bg-[#0e1727] [&_*_th]:text-[#fff]
      [&_*_td]:text-center [&_*_td]:h-[59px] 
      max-md:[&_*_h4]:text-[16px]

    "
    >
      <div className="relative">
        <h4>환불안내</h4>
        <p className={`${styles['scroll-txt']}`}>
          가로로 스크롤 하여 보실 수 있습니다.
        </p>
        <div className="flex ">
          <table className=" w-[180px] text-[13px]">
            <thead>
              <tr className="border-r-1 border-[#0e1727]">
                <th className={`${styles['table-separate']}`}>구분</th>
              </tr>
            </thead>
            <tbody
              className="[&_*_td]:h-[136px] text-[#000] font-semibold 
              [&>tr]:border-b-1 [&>tr]:border-r-1 [&>tr]:border-[#e5e7ee]"
            >
              <tr>
                <td>환불안내</td>
              </tr>
              <tr>
                <td>환불절차</td>
              </tr>
              <tr>
                <td>팩스 및 메일접수</td>
              </tr>
            </tbody>
          </table>
          <div className="w-[calc(100%-180px)] overflow-x-auto">
            <table className="min-w-[700px] text-[13px]">
              <thead>
                <tr>
                  <th>내용</th>
                </tr>
              </thead>
              <tbody
                className="[&_*_td]:h-[136px] [&_*_td]:text-start 
              [&>tr]:border-b-1  [&>tr]:border-[#e5e7ee]"
              >
                <tr>
                  <td>
                    <ul className="ml-[20px]">
                      <li className={`${styles['list-dot-refund']} `}>
                        프로그램 환불은 신청일로부터 남은 수강일수(30일기준)
                        또는 강습횟수를 기준으로 환불처리가 됩니다.
                      </li>
                      <li className={`${styles['list-dot-refund']}`}>
                        프로그램 개시 1일 전 : 전액 환불
                      </li>
                      <li className={`${styles['list-dot-refund']}`}>
                        프로그램 개시 후 : 환불신청일로부터 이용종료일까지 남은
                        수강일수 또는 횟수계산(강습 참여여부와 무관함)
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul className="ml-[20px]">
                      <li className={`${styles['list-dot-refund']}`}>
                        1. 환불신청서 작성
                      </li>
                      <li className={`${styles['list-dot-refund']}`}>
                        2. 구비서류 : 환불신청서, 신분증, 회원증,계좌번호(자녀
                        또는 대리신청일 경우, 가족관계증명서 또는 등본 관계증명
                        확인 필수)
                      </li>
                      <li className={`${styles['list-dot-refund']}`}>
                        3. 환불 행정조치
                      </li>
                      <li className={`${styles['list-dot-refund']}`}>
                        4. 환불시행
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul className="ml-[20px]">
                      <li className={`${styles['list-dot-refund']}`}>
                        신청방법
                        <br />
                        1. 안내데스크 방문접수(대리신청 가능)
                        <br />
                        2. 풍산멀티스포츠센터 홈페이지 접속 – 이용안내 – 환불 –
                        환불신청서 다운로드 후 작성
                        <br />
                        pungsaninfo@huic.co.kr 이메일송부 또는 팩스 031-730-4898
                        전송 - 유선확인
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
