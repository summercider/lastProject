'use client';
import { useState } from 'react';
import { LectureContext } from '@/context/LecutureContext';
// --------------------------------------------------------------------------------------------------------------------
/** context
 * 1. createContext 만들기 > lecturecontext.js
 * 2. useContext 커스텀훅 >
 * 3. Provider 컴포넌트
 * 4. Provider 감싸기
 * 5. 자식에서 상태호출
 */
// --------------------------------------------------------------------------------------------------------------------
/** tanstack
 * 1. queryClient 생성 ( new QueryClient)
 * 2. 사용할 layout이나 페이지 provider 감싸기
 * 3. 사용 페이지에서 queryKey,queryFn 리패칭
 * 4. mutation, invalidate
 */
// --------------------------------------------------------------------------------------------------------------------

export default function LectureContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [inpValue, setInpValue] = useState('');
  const [btnValue, setBtnValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // 현재페이지 (쿼리키)
  const [totalPage, setTotalPage] = useState(0); //총페이지

  return (
    <LectureContext.Provider
      value={{
        inpValue,
        setInpValue,
        btnValue,
        setBtnValue,
        totalPage,
        setTotalPage,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </LectureContext.Provider>
  );
}
