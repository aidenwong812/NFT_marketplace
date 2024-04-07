"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const CommunityOverviewHeader = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-full relative">
        <div className="inline-flex items-center absolute left-0 mt-[40px]">
          <button onClick={() => router.back()} className="z-10 hover:opacity-70">
            <Image
              src={"/icon/back_bgwhite.svg"}
              width={0}
              height={0}
              alt=""
              className="w-[30px] h-auto"
            />
          </button>
          <p className="ml-[15px]">Back</p>
        </div>
        <div className="w-full h-full items-center text-[22px] justify-center flex">
          Overview
        </div>
      </div>
    </>
  );
};
export default CommunityOverviewHeader;
