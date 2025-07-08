import Link from 'next/link';
import React from 'react';

export default function BreadcrumbNavi({ path }: { path: string[] }) {
  return (
    <div
      className="text-[13px] leading-[24px] text-[#222] font-medium
    max-md:text-[18px]
    max-sm:text-[13px]"
    >
      <ul className="flex">
        <li className="w-[13px] h-[24px] ">
          <Link
            href="/"
            className="block relative  font-[nc-font] h-full text-[#222]
            after:content-['\e92c'] after:absolute after:top-0 after:left-0 after:h-[24px]
            "
          ></Link>
        </li>

        {path.map((label, idx) => (
          <React.Fragment key={idx}>
            <li
              className="w-[30px] h-[24px] 
            max-md:w-[43px] max-md:h-[34px]
            max-sm:w-[30px] max-sm:h-[24px]
            "
            >
              <span
                className="block relative
                after:content-[''] after:absolute after:top-[9px] after:left-[14px] after:border-3 after:border-transparent after:border-l-4 after:border-l-[#222]
                max-md:after:left-[20px]
                max-sm:after:left-[14px]"
              ></span>
            </li>
            <li>
              <span className="whitespace-nowrap">{label}</span>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
