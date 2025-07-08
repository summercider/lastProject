import LectureContainer from '@/app/components/main/LectureContainer';
import LectureList from '@/app/components/main/LectureList';
import LectureSearch from '@/app/components/main/LectureSearch';
// import Pagination from '@/app/components/main/Pagination';
// import { redirect } from 'next/navigation';

// import initialLectureFetch from '@/util/initialLectureFetch';

// type initialData = {
//   total: number;
//   page: number;
//   limit: number;
//   data: listData[];
// };

type listData = {
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

// type pageData = {
//   page: number;
//   total: number;
// };

// url노출,공유 X , 새로고침시 초기화, 서버/클라이언트 분명히 나누기위함
// 서버 패칭 > prop전달 list렌더
// 컴포너트 리패칭 > context+reactquery + querykey 리렌더
export default async function Home() {
  // const initialData: initialData = await initialLectureFetch();
  // console.log(initialData.data, initialData, '초기데이터');

  return (
    <main className="pt-[129px] pb-[100px] max-md:pt-[76px] max-md:mx-[15px] max-sm:mx-[7px] max-sm:pt-[60px] max-sm:pb-[30px]">
      <div className="max-w-[1200px] mx-auto bg-white ">
        {/* 서버패칭 > 컨테이너 컴포넌트 > List */}
        <LectureContainer>
          <LectureSearch />
          {/* <LectureList initialData={initialData.data} /> */}
          <LectureList />
        </LectureContainer>
      </div>
    </main>
  );
}
