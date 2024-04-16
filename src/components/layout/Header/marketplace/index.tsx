"use client";
import React, { useState } from "react";
import Image from "next/image";
const MarketplaceHeader = () => {
  const [loading1, setLoading1] = useState<boolean>(true);

  return (
    <div className="w-full flex items-end">
      <div className="w-[358px] inline-flex mt-[40px]">
        {loading1 && (
          <div className="bg-[#252525] animate-pulse rounded-[10px] w-[43px] aspect-square mr-[10px]"></div>
        )}
        <button
          className={`flex items-center justify-center bg-[#252525] rounded-[10px] w-[43px] mr-[10px] ${
            loading1 && "hidden"
          }`}
        >
          <Image
            src="/icon/browse_white.svg"
            width={0}
            height={0}
            className="w-[20px] h-auto"
            alt=""
            priority={true}
            onLoad={() => {
              setLoading1(false);
            }}
          />
        </button>
        <div className="relative">
          <Image
            src="/icon/search_grey.svg"
            width={0}
            height={0}
            alt="logo"
            className="w-[14px] h-auto absolute left-[25px] top-[13px]"
          />
          <input
            className="py-[10px] w-[250px] outline-none bg-[#252525] px-[50px] text-[14px] rounded-[12px] placeholder:text-[#4C4C4C] placeholder:text-[12px]"
            placeholder="Search NFTs Collections"
          />
        </div>
      </div>
      <Image
        src="/home/title.png"
        width={600}
        height={0}
        className="mb-2 ml-5"
        alt="title"
      />
    </div>
  );
};
export default MarketplaceHeader;
