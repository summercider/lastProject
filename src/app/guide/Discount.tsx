import React from 'react';
import styles from './styles/Guide.module.css';

export default function Discount() {
  return (
    <div
      className="mb-[30px]
      [&_*_h4]:text-[24px] [&_*_h4]:text-[#222] [&_*_h4]:font-extrabold [&_*_h4]:mb-[15px]
      [&>div]:mt-[30px]
      [&_*_td]:text-center
      max-md:[&_*_h4]:text-[16px]
    "
    >
      <div className="relative">
        <h4>할인율 및 할인안내</h4>
        <p className={`${styles['scroll-txt']}`}>
          가로로 스크롤 하여 보실 수 있습니다.
        </p>
        <div className="flex">
          {/* thead추가  */}
          <table className=" w-[180px] text-[13px]">
            <thead>
              <tr>
                <th
                  className={`h-[60px] bg-[#0e1727] border-r-1 border-[#0e1727] text-[#fff]
                  ${styles['table-separate']}`}
                >
                  할인율
                </th>
              </tr>
            </thead>
            <tbody className="[&>tr]:border-[#e5e7ee] [&>tr]:border-b-1 [&>tr]:border-r-1 text-[#000] font-semibold">
              <tr>
                <td className="h-[59px]">5%</td>
              </tr>
              <tr>
                <td className="h-[81px]">10%</td>
              </tr>
              <tr>
                <td className="h-[59px]">15%</td>
              </tr>
              <tr>
                <td className="h-[59px]">20%</td>
              </tr>
              <tr>
                <td className="h-[156px]">30%</td>
              </tr>
              <tr>
                <td className="h-[276px]">50%</td>
              </tr>
            </tbody>
          </table>

          <div className="w-[calc(100%-180px)] overflow-x-auto">
            <table className="min-w-[700px] text-[13px] font-medium">
              <thead>
                <tr>
                  <th className="h-[60px] bg-[#0e1727] text-[#fff]">
                    할인내용
                  </th>
                </tr>
              </thead>
              <tbody
                className="[&_*_td]:text-start 
            [&>tr]:border-[#e5e7ee] [&>tr]:border-b-1 
            [&>tr>td>ul]:ml-[20px]
            "
              >
                <tr>
                  <td className="h-[59px]">
                    <ul>
                      <li className={`${styles['list-dot-discount']} `}>
                        프로그램 3개월 장기등록
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="h-[81px]">
                    <ul>
                      <li className={`${styles['list-dot-discount']} `}>
                        프로그램 6개월 장기등록
                      </li>
                      <li className={`${styles['list-dot-discount']} `}>
                        가임여성할인(13~55세이하) - 수영장
                        프로그램(수영,아쿠아,월정기자유)에 한함
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="h-[59px]">
                    <ul>
                      <li className={`${styles['list-dot-discount']} `}>
                        프로그램 12개월 장기등록
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="h-[59px]">
                    <ul>
                      <li className={`${styles['list-dot-discount']} `}>
                        경로우대 - 65세이상인 회원대상 (모든 프로그램 적용)
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="h-[156px]">
                    <ul>
                      <li className={`${styles['list-dot-discount']} `}>
                        다자녀할인(강습프로그램에 한함 (배드민턴 개인강습 제외))
                        <br />
                        하남시에 주민등록을 두고 둘 이상의 자녀를 출산 또는
                        양육하는 가정으로 막내가 만 15세 이하인 가정에 한함
                      </li>
                      <li className={`${styles['list-dot-discount']} `}>
                        증빙서류 확인일부터 적용가능
                        <br /> 관내 거주 확인을 위한 등본 필수 지참
                      </li>
                      <li className={`${styles['list-dot-discount']} `}>
                        다문화가정 할인
                        <br />
                        「다문화가족지원법」 제2조 1항에 따른 다문화가족
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="h-[276px]">
                    <ul>
                      <li className={`${styles['list-dot-discount']} `}>
                        경기도 문화의 날 - ‘매달 마지막주 수요일’ 일일
                        자유이용프로그램 이용자에 한함
                      </li>
                      <li className={`${styles['list-dot-discount']} `}>
                        장애인 - 장애의 정도가 심한 장애인일 경우, 보호자
                        동반하에 동일 종목 수강 시 보호자 1인 포함(복지카드
                        소지자(본인)에 한함)
                      </li>
                      <li className={`${styles['list-dot-discount']} `}>
                        의사상자 - 「의사상자 등 예우 및 지원에 관한 법률
                        시행령」제17조의2 제1항에 해당하는 자
                      </li>
                      <li className={`${styles['list-dot-discount']} `}>
                        보훈대상할인
                        <ul>
                          - 국가유공자, 518민주유공자, 특수임무유공자,
                          독립유공자
                          <li>1. 유공자 본인과 그 배우자</li>
                          <li>
                            2. 유공자의 유족 중 선순위자. 이 경우 선순위자가 부
                            또는 모인 때에는 선순위자가 아닌 모 또는 부를 포함
                          </li>
                          <li>
                            3. 유공자 중 애국지사와 상이등급 1급·2급 또는 3급에
                            해당하는 사람의 활동을 보조하는 사람
                            <br /> (518민주화유공의 경우 민주화운동부상자 중
                            장해등급 1급·2급 또는 3급 판정을 받은 사람의 활동을
                            보조하는 사람 1명)
                            <br /> - 참전유공자 - 「참전유공자 예우 및 단체
                            설립에 관한 법률」제2조제2호에 해당하는 자 <br />-
                            고엽제후유의증 - 「고엽제후유의증 등 환자지원 및
                            단체설립에 관한 법률」 제8조의3에 해당하는 자<br />{' '}
                            - 국군포로 - 「 국군포로의 송환 및 대우 등에 관한
                            법률」제2조 제3호 또는 제5호에 해당하는 자
                          </li>
                        </ul>
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
