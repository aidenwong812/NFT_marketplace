"use client";
import React from "react";
import Image from "next/image";
import {useRouter, usePathname} from "next/navigation"
const HomeHeader = () => {
  const router = useRouter()
  return (
    <>
      <div className="w-full h-full mt-[30px]">
        <div className="w-full inline-flex justify-between items-center">
          <div>
            <p className="text-[12px]">Hello, Yazid!</p>
            <p className="text-[20px]">How are you today ?</p>
          </div>
          <button className="flex items-center justify-center px-[12px] rounded-[12px] bg-[#252525] h-[40px] hover:bg-[#363636]" onClick={() => router.push("/notification")}>
            <Image
              src="/icon/ring.svg"
              width={0}
              height={0}
              alt="logo"
              className="w-[20px] h-auto"
            />
          </button>
        </div>
      </div>
    </>
  );
};
export default HomeHeader;
