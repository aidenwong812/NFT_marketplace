"use client";
import React from "react";
import Image from "next/image";
const Loading = () => {
  return (
    <div className={`w-full h-full items-center flex justify-center font-ttfirs bg-[#131313]`}>
      <div className="flex-row w-auto justify-center">
        <Image src={"/essential/icon.svg"} alt={"refresh"} width={0} height={0} className="w-[65px] h-auto"/>
        <div className={`mt-[20px] text-[14px] font-ttfirs`}>Opening ...</div>
      </div>
    </div>
  );
};
export default Loading;
