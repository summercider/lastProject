import styles from './rent.module.css';

export default function Rent() {
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
                  <div className="h-[450px] bg-sky-50">
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
                    <div>표ㅕ</div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div>아래</div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </main>
  );
}
