"use client";
import React from "react";
import Image from "next/image";
const Slider = () => {
  return (
    <>
      <div className={`overflow-auto h-[250px] relative mt-[20px]`}>
        <div className="h-full bg-cover bg-center bg-[url('/home/slider_bg.svg')] rounded-[12px]">
          <p className="w-full inline-flex justify-center mt-[50px] mobile:text-[25px] text-[15px]">
            Search on Communities on Biples
          </p>
          <div className="w-full flex justify-center mt-[20px]">
            <div className="w-[70%] h-[45px] rounded-[10px] bg-[#191818] border border-[#4C4C4C] inline-flex items-center justify-center px-[20px]">
              <Image
                src="/icon/search_grey.svg"
                width={0}
                height={0}
                alt=""
                className="w-[15px] mt-[-2px] h-auto"
              />
              <input
                className="ml-[12px] bg-transparent outline-none placeholder:text-[#4C4C4C] text-[14px] flex items-center w-[300px] max-w-[300px]"
                placeholder="Explore Communities, members or NFTs"
              />
            </div>
          </div>
          <div className="w-full flex justify-center mt-[15px]">
            <p className="mobile:w-[400px] w-[300px] text-center mobile:text-[12px] text-[8px]">
              Explore all categories of communities, chat with friends & <br/>Mint
              NFTs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
