'use client';
import Discount from '@/app/guide/Discount';
import Reception from '@/app/guide/Reception';
import Refund from '@/app/guide/Refund';
import { useState } from 'react';

export default function GuideTabs() {
  const [tab, setTab] = useState<'reception' | 'refund' | 'discount'>(
    'reception'
  );

  return (
    <>
      <ul
        className="mb-[40px] flex justify-center w-full  [&>li]:w-full mt-[10px]
"
      >
        <li className="flex justify-center items-center ">
          <button
            onClick={() => setTab('reception')}
            className={`w-full h-[60px]  border-1 border-[#e5e7ee] py-0 border-r-0 
            max-md:text-[30px]
            max-sm:text-[13px] max-sm:h-[40px]
              ${
                tab === 'reception'
                  ? 'text-[#fff]  bg-point1'
                  : 'text-[#393939] bg-white'
              }
              `}
          >
            접수안내
          </button>
        </li>
        <li>
          <button
            onClick={() => setTab('refund')}
            className={`w-full h-[60px]  border-1 border-[#e5e7ee] py-0 border-r-0
            max-md:text-[30px]
            max-sm:text-[13px] max-sm:h-[40px]
              ${
                tab === 'refund'
                  ? 'text-[#fff]  bg-point1'
                  : 'text-[#393939] bg-white'
              }
              `}
          >
            환불안내
          </button>
        </li>
        <li>
          <button
            onClick={() => setTab('discount')}
            className={`w-full h-[60px]  border-1 border-[#e5e7ee] py-0
            max-md:text-[30px]
            max-sm:text-[13px] max-sm:h-[40px]
              ${
                tab === 'discount'
                  ? 'text-[#fff]  bg-point1'
                  : 'text-[#393939] bg-white'
              }
              `}
          >
            할인안내
          </button>
        </li>
      </ul>

      {/*  탭에 따라 다른 컴포넌트 렌더 */}
      {tab === 'reception' && <Reception />}
      {tab === 'refund' && <Refund />}
      {tab === 'discount' && <Discount />}
    </>
  );
}
