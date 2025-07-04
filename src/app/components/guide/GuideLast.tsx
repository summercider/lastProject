'use client';

export default function GuideLast() {
  return (
    <div>
      {/* 7 */}
      <div className="mt-[30px] py-[30px] pl-[30px] pr-[10px] text-start bg-[#f8f8f8] text-[#222]  font-medium">
        <p
          className="pl-[14px] relative
          before:content-['\E846'] before:font-['nc-font'] before:text-[14px] before:left-0 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:block before:absolute
          max-md:text-[23px]
          max-sm:text-[12px]
          "
        >
          접수 및 환불 등 자세한 정보는 풍산멀티스포츠센터 홈페이지를
          참고하세요.
        </p>
      </div>
      {/* 8 */}
      <div className="mt-[28px] text-right mb-[60px] max-sm:text-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(
              'https://hanamsport.or.kr/wwwroot/ps/guide/receipt_info.php'
            );
          }}
          className="group py-[22px] pl-[28px] pr-[58px] border-2 leading-[1] border-[#0a0a0a] text-[#0a0a0a] 
        hover:bg-point1 hover:text-[#fff] hover:border-point1 "
        >
          <span
            className=" relative block
            after:content-['\e801'] after:right-[-30px] after:top-0 after:w-[12px] after:h-[12px] after:ml-[60px] after:absolute after:font-['nc-font'] after:inline-block after:text-[#a0a0a0]  group-hover:after:text-[#fff]
          "
          >
            홈페이지 바로가기
          </span>
        </button>
      </div>
    </div>
  );
}
