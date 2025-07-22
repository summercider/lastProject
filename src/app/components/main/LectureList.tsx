'use client';
import { useEffect } from 'react';
import styles from './LectureList.module.css';
import { useLectureContext } from '@/context/LecutureContext';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Pagination from '@/app/components/main/Pagination';

type SalesItem = {
  Age_From: number;
  Age_To: number;
  Capacity: number;
  Lesson_ID: string;
  Lottery_Yn: string;
  Month_Qty: string;
  OnLine_YN: string;
  Place_Code: string;
  Sales_Code: string;
  Sales_Item_Name: string;
  Start_Time: string;
  Unit_Price: number;
  Use_Week: string;
};
const placeCode: { [key: string]: string } = {
  '001': '수영장',
  '002': '헬스장',
  '019': '안무연습실',
  '020': '필라테스 교육장',
  '999': '강의실',
};
const cateCode: { [key: string]: string } = {
  '001': '수영',
  '002': '헬스',
  '019': '댄스',
  '020': '필라테스',
  '999': '안전교육',
};
const teacherCode: { [key: string]: string } = {
  '999': '양진서',
};
const dayCode = ['월', '화', '수', '목', '금', '토', '일'];
function getDaysFromCode(code: string) {
  if (code?.length !== 7) return '잘못된 코드';
  return code
    .split('')
    .map((char, idx) => (char === '1' ? dayCode[idx] : null))
    .filter(Boolean);
}
function getTargetFromAge(Age_From: number, Age_To: number) {
  if (Age_From >= 7 && Age_To <= 12) {
    return '어린이';
  }

  if (Age_From >= 7 && Age_To <= 14) {
    return '초등생';
  }

  if (Age_From >= 13 && Age_To <= 18) {
    return '어린이청소년';
  }

  if (Age_From >= 14 && Age_From <= 99) {
    return '14세이상';
  }

  if (Age_From >= 19 && Age_To <= 99) {
    return '성인남녀';
  }
  return '-';
}

// ---
export default function LectureList() {
  const {
    // totalPage,
    setTotalPage,
    currentPage,
    inpValue,
    // setInpValue,
    btnValue,
    // setBtnValue,
  } = useLectureContext();
  const router = useRouter();

  // console.log(inpValue, btnValue, '컨택스트 확인@@@@@@@@@@@@@@');
  // const params = useParams();
  // const detailParams = params?.detail;

  const { isPending, data, isError, error } = useQuery<{
    total: string;
    data: SalesItem[];
  }>({
    queryKey: ['salefilter', btnValue, inpValue, currentPage],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/saleitem?page=${currentPage}&btnValue=${btnValue}&inpValue=${inpValue}`
      ).then((res) => res.json()), // {data:SalesItem[]}
  });
  const saleItems = data?.data;

  // ----------
  // const [currentpage,setCurrentPage] = useState(1)  //이건 context에 있음
  //  total을 받음 ex) 184
  useEffect(() => {
    if (data?.total) {
      setTotalPage(Math.ceil(Number(data.total) / 10)); // 전체페이지 ex) 184/10 = ceil(18.4) > 19
    }
  }, [data?.total, setTotalPage]);

  // // 19개를 배열안에넣기 - 19페이지니까 19개의 버튼이 필요함
  // const buttons = Array.from({ length: totalPage }, (_, i) => i + 1); // [1, 2, 3, ..., 19]
  // // 이버튼들로 map돌리라니까 버튼이 많네? ----↘
  // // --------------------
  // const buttonsPerGroup = 3; // 버튼 3개 씩보여줄거임
  // const pageGroup = Math.floor((currentPage - 1) / buttonsPerGroup); //그룹계산
  // const start = pageGroup * buttonsPerGroup; //인덱스 시작
  // const end = start + buttonsPerGroup; //인덱스 끝

  // const currentButtons = buttons.slice(start, end); //최종 보여주는 버튼들
  // pagination컴포넌트로 옮김
  // // --------------
  // console.log(initialData, '서버 초기 데이터');
  // console.log(saleItems, '리엑트쿼리 데이터입니다');

  if (isError) return <>{error.message}</>;
  if (isPending) return <>로딩중!!!!!</>;
  return (
    <>
      <div id="하단" className=" mt-[35px]">
        <div className="pt-[16px] pb-[10px] relative ">
          <p
            className="text-right text-point1 font-medium 
        max-md:text-start max-md:text-[33px]
        max-sm:text-[14px]"
          >
            {data?.total} 개
          </p>
          <p className="md:hidden absolute top-1/2 right-0 text-[14px] text-[#999]">
            ※ 좌우로 밀어보세요 ↔
          </p>
        </div>
        {/* 표 */}
        <div>
          <div className="flex border-t-3 border-t-[#0e1727] border-b-[#e1e1e1]">
            <ul className="text-[12px]">
              <div
                className="w-[210px] border-[#ddd] border-b-1 border-r-1 pl-[15px] h-[50px] font-medium text-gray-600 bg-[#f4f5f6] leading-[50px]
            max-sm:w-[158px] max-sm:pl-[12px] "
              >
                강좌명
              </div>
              {saleItems?.map((list, idx) => (
                <li
                  className={`${styles.lecturetitle} 
                ${idx % 2 === 0 ? '' : `bg-blue-50`}`}
                  key={idx}
                >
                  {list.Sales_Item_Name}
                  {/* lineheight뺴고 flex+items-center */}
                </li>
              ))}
            </ul>
            <div className="overflow-auto">
              <table className="min-w-[678px]">
                <colgroup>
                  <col className="w-[12%]" />
                  <col className="w-[07%]" />
                  <col className="w-[07%]" />
                  <col className="w-[10%]" />
                  <col className="w-[10%]" />
                  <col className="w-[18%]" />
                  <col className="w-[10%]" />
                  <col className="w-[10%]" />
                  <col className="w-[08%]" />
                </colgroup>
                <thead className={styles.lecturehead}>
                  <tr className="[&>th]:whitespace-nowrap [&>th]:border-r-1 [&>th]:border-b-1 [&>th]:border-[#ddd] [&>th]:last:border-r-0 ">
                    <th>업장</th>
                    <th>종목</th>
                    <th>강사명</th>
                    <th>교육시간</th>
                    <th>교육대상</th>
                    <th>수강료(개월/원)</th>
                    <th>정원(명)</th>
                    <th>상태</th>
                    <th>신청</th>
                  </tr>
                </thead>
                <tbody
                  className={`${styles.lecturelist} text-center text-[11px]`}
                >
                  {saleItems?.map((list, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? '' : `bg-blue-50`}>
                      <td className="text-[12px] h-[60px] text-gray-600 font-medium ">
                        {placeCode[list.Place_Code] || '모름'}
                      </td>
                      <td>{cateCode[list.Place_Code] || '알수없음'}</td>
                      <td>{teacherCode[list.Lesson_ID] || '-'}</td>
                      <td>{getDaysFromCode(list.Use_Week)}</td>
                      <td>{getTargetFromAge(list.Age_From, list.Age_To)}</td>
                      <td>
                        <table>
                          <tbody className={`${styles.lectureprice}`}>
                            <tr>
                              <td>{list.Month_Qty}</td>
                              <td>{list.Unit_Price || '문의'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <table>
                          <tbody className={`${styles.lecturelimit}`}>
                            <tr>
                              <td>정원</td>
                              <td>접수</td>
                            </tr>
                            <tr>
                              <td>{list.Capacity}</td>
                              <td>-</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>
                        <span className={styles.draw}>
                          {list.Lottery_Yn === 'Y' ? '추첨접수' : '추첨아님'}
                        </span>
                      </td>
                      <td>
                        <button
                          className={`${styles.apply} whitespace-nowrap`}
                          onClick={() => {
                            const detailId = `${list.Sales_Code}N${idx}`;
                            router.push(`/pungsan/${detailId}`);
                          }}
                        >
                          {list.OnLine_YN === 'Y' ? '신청하기' : '신청불가'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* <Pagination currentButtons={currentButtons} /> */}
      <Pagination />
    </>
  );
}
