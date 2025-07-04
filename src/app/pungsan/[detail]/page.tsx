'use client';
import { useParams } from 'next/navigation';
import React from 'react';

export default function page() {
  const params = useParams();
  const detailId = params?.detail;
  console.log(params);

  return (
    <main className="pt-[129px] pb-[100px] max-md:pt-[76px] max-md:mx-[15px] max-sm:mx-[7px] max-sm:pt-[60px] max-sm:pb-[30px]">
      <div className="max-w-[1200px] mx-auto bg-white ">
        <div className="h-[300px] bg-sky-100 text-center leading-[300px]">
          {detailId} 디테일페이지임
        </div>
      </div>
    </main>
  );
}
