'use client';

import { useLectureContext } from '@/context/LecutureContext';
import styles from './Pagination.module.css';
// import page from '@/app/pungsan/[detail]/page';

export default function Pagination( //{}: // currentButtons,
  {
    // currentButtons: number[];
  }
) {
  const lectureContext = useLectureContext();

  // --------------
  // 19개를 배열안에넣기 - 19페이지니까 19개의 버튼이 필요함
  const buttons = Array.from(
    { length: lectureContext.totalPage },
    (_, i) => i + 1
  ); // [1, 2, 3, ..., 19]
  // 이버튼들로 map돌리라니까 버튼이 많네? ----↘
  const buttonsPerGroup = 3; // 버튼 3개 씩보여줄거임
  // 커렌트 어느 그룹계산 * current는 1부터시작이라 -1 (slice할떄 헷갈려)
  const pageGroup = Math.floor(
    (lectureContext.currentPage - 1) / buttonsPerGroup
  );
  const start = pageGroup * buttonsPerGroup; //인덱스 시작
  const end = start + buttonsPerGroup; //인덱스 끝

  const currentButtons = buttons.slice(start, end); //최종 보여주는 버튼들
  // --------------

  function handleDirection(direction: 'first' | 'prv' | 'nxt' | 'last') {
    if (direction === 'first') {
      lectureContext.setCurrentPage(1);
    }
    if (direction === 'prv') {
      const prvGroupStart = Math.max(1, pageGroup * buttonsPerGroup); //그룹벗어나는거 max로
      lectureContext.setCurrentPage(prvGroupStart);
    }
    if (direction === 'nxt') {
      const nxtGroupStart = Math.min(
        lectureContext.totalPage, // 그룹벗어나는거 min으로 막음
        (pageGroup + 1) * buttonsPerGroup + 1
      );
      lectureContext.setCurrentPage(nxtGroupStart);
    }
    if (direction === 'last') {
      lectureContext.setCurrentPage(lectureContext.totalPage);
    }
  }

  return (
    <div
      id="페이지번호"
      className="mt-[50px] mb-[40px] text-center flex justify-center gap-[4px]"
    >
      {/* <p className={styles.title}>테스트</p> */}
      {/* 처음 */}
      <button
        onClick={() => handleDirection('first')}
        className={`relative ${styles.first} `}
      ></button>
      {/* 이전- */}
      <button
        onClick={() => handleDirection('prv')}
        className={`relative ${styles.second}`}
      ></button>
      {/* 현재페이지 */}
      {currentButtons.map((page, idx) => (
        <button
          key={idx}
          className={`relative ${styles.num} ] ${
            lectureContext.currentPage === page
              ? 'bg-[#00c092] text-[#fff]'
              : 'bg-[#fff] text-[#666]'
          }`}
          onClick={() => {
            lectureContext.setCurrentPage(page);
          }}
        >
          {page}
        </button>
      ))}
      {/* 다음+ */}
      <button
        onClick={() => handleDirection('nxt')}
        className={`relative  ${styles.third} `}
      ></button>
      {/* 끝 */}
      <button
        onClick={() => handleDirection('last')}
        className={`relative ${styles.fourth}`}
      ></button>
    </div>
  );
}
