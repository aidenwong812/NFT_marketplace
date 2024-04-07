"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
const CommunityHeader = (props: any) => {
  const pathName = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setWindowWidth(windowWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial margin calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className={`w-full flex  mt-[40px] justify-between`}>
        <div className="w-full inline-flex justify-between">
          <div className="inline-flex">
            <div className="w-[40px] h-[40px] rounded-[10px] bg-[#181818] animate-pulse mr-[20px]"></div>
            <div>
              <div className="w-[100px] h-[20px] rounded-full bg-[#181818] animate-pulse mb-[5px]"></div>
              <div className="w-[150px] h-[15px] rounded-full bg-[#181818] animate-pulse"></div>
            </div>
          </div>
          <div className="inline-flex">
            <div className="w-[40px] h-[40px] rounded-[10px] bg-[#181818] animate-pulse mr-[20px]"></div>
            <div className="w-[220px] h-[40px] rounded-[10px] bg-[#181818] animate-pulse mr-[20px]"></div>
            <div className="w-[40px] h-[40px] rounded-[10px] bg-[#181818] animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommunityHeader;
