import React from "react";
import Image from "next/image";
const NFTHeader = () => {
  return (
    <div className="w-full flex items-end">
      <div className="w-[354px] inline-flex items-center mt-[40px]">
        <div className="relative">
          <Image
            src="/icon/search_grey.svg"
            width={0}
            height={0}
            alt="logo"
            className="w-[14px] h-auto absolute left-[25px] top-[13px]"
          />
          <input
            className="py-[12px] mobile:w-[300px] w-[170px] outline-none bg-[#181818] px-[50px] text-[14px] rounded-[12px] placeholder:text-[#4C4C4C] placeholder:text-[12px]"
            placeholder="Search NFT"
          />
        </div>
        <button className="flex items-center justify-center bg-[#53FAFB] rounded-[10px] w-[43px] ml-[10px] h-[43px]">
          <Image
            src="/icon/browse.svg"
            width={0}
            height={0}
            className="w-[20px] h-auto"
            alt=""
          />
        </button>
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
export default NFTHeader;
