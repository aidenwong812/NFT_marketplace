"use client";
import React from "react";
import { usePathname } from "next/navigation";
const Loader = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/chats" || pathname.includes("/chats") ? (
        <div className="!w-[400px] desktop:block hidden justify-center bg-[#1C1C1C] h-full flex-none">
          <div className="w-full h-full px-[30px] pt-[50px]">
            <div className="w-full inline-flex items-center justify-between text-[20px] relative prevent-select">
              <div className="w-full h-[30px] rounded-[10px] bg-[#181818] animate-pulse"></div>
            </div>
            <div className="w-[50px] aspect-square rounded-full bg-[#181818] mt-[20px] animate-pulse"></div>
            <div className="w-full h-[40px] rounded-[10px] bg-[#181818] mt-[50px] animate-pulse"></div>
            <div className="w-full h-[40px] rounded-full bg-[#181818] mt-[20px] animate-pulse"></div>
            <div className="w-[150px] h-[40px] rounded-full bg-[#181818] mt-[20px] animate-pulse"></div>
            <div className="w-full h-[50px] rounded-[10px] bg-[#181818] mt-[20px] animate-pulse"></div>
            <div className="w-full h-[50px] rounded-[10px] bg-[#181818] mt-[20px] animate-pulse"></div>
            <div className="w-full h-[50px] rounded-[10px] bg-[#181818] mt-[20px] animate-pulse"></div>
            <div className="w-full h-[50px] rounded-[10px] bg-[#181818] mt-[20px] animate-pulse"></div>
          </div>
        </div>
      ) : (
        <div className="!w-[80px] desktop:block hidden justify-center bg-[#1C1C1C] h-full flex-none">
          <div className="w-full flex items-center justify-center mb-[30px] relative">
            <div className="w-[45px] h-[45px] mt-[60px] rounded-[12px] bg-[#121212] animate-pulse"></div>
          </div>
          <div className="w-full flex items-center justify-center mt-[17px]">
            <div className="w-[45px] h-[45px] rounded-[17px] bg-[#121212] animate-pulse"></div>
          </div>
          <div className="w-full flex items-center justify-center mt-[17px]">
            <div className="w-[45px] h-[45px] rounded-[17px] bg-[#121212] animate-pulse"></div>
          </div>
          <div className="w-full flex items-center justify-center mt-[17px]">
            <div className="w-[45px] h-[45px] rounded-[17px] bg-[#121212] animate-pulse"></div>
          </div>
          <div className="w-full flex items-center justify-center mt-[17px]">
            <div className="w-[45px] h-[45px] rounded-[17px] bg-[#121212] animate-pulse"></div>
          </div>
          <div className="w-full flex items-center justify-center mt-[17px]">
            <div className="w-[45px] h-[45px] rounded-[17px] bg-[#121212] animate-pulse"></div>
          </div>
        </div>
      )}
    </>
  );
};
export default Loader;
