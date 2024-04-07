"use client";
import React, { useState } from "react";
import Image from "next/image";
const ChatsHeader = () => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <div className="w-full inline-flex justify-between mt-[40px]">
        {loading && (
          <div className={`inline-flex items-center`}>
            <div className="w-[45px] aspect-square rounded-full bg-[#171717] animate-pulse"></div>
            <div className="ml-[10px]">
              <div className="w-[100px] h-[20px] rounded-[10px] bg-[#171717] animate-pulse mb-[3px]"></div>
              <div className="w-[150px] h-[20px] rounded-[10px] bg-[#171717] animate-pulse"></div>
            </div>
          </div>
        )}
        <button
          className={`inline-flex items-center hover:opacity-70 ${
            loading && "hidden"
          }`}
        >
          <Image
            src="/avatar/20.svg"
            width={0}
            height={0}
            alt=""
            priority={true}
            className="w-[45px] h-auto"
            onLoad={() => {
              setLoading(false);
            }}
          />
          <div className="ml-[10px]">
            <p>Group #0001</p>
            <p className="text-[#50FFFF] text-[12px]">Samir is typing ...</p>
          </div>
        </button>
        <div className="w-[250px] relative">
          {loading && <div className="w-full rounded-[10px] bg-[#171717] animate-pulse h-[40px]"></div>}

          <Image
            src="/icon/search_grey.svg"
            width={0}
            height={0}
            alt="logo"
            className={`w-[14px] h-auto absolute left-[25px] top-[13px] ${loading && "hidden"}`}
          />
          <input
            className={`py-[10px] w-full outline-none bg-[#181818] px-[50px] text-[14px] rounded-[12px] placeholder:text-[#4C4C4C] placeholder:text-[12px] ${loading && "hidden"}`}
            placeholder="Search Friends"
          />
        </div>
        <div className="inline-flex">
          {loading && <div className="w-[40px] rounded-[10px] aspect-square bg-[#171717] animate-pulse mr-[20px]"></div>}
          <Image
            width={0}
            height={0}
            src="/icon/phone.svg"
            alt=""
            className={`w-[20px] h-auto mr-[20px] ${loading && "hidden"}`}
          />
          {loading && <div className="w-[40px] rounded-[10px] aspect-square bg-[#171717] animate-pulse mr-[20px]"></div>}
          <Image
            width={0}
            height={0}
            src="/icon/camera_white.svg"
            alt=""
            className={`w-[27px] h-auto mr-[20px] ${loading && "hidden"}`}
          />
          {loading && <div className="w-[40px] rounded-[10px] aspect-square bg-[#171717] animate-pulse mr-[20px]"></div>}
          <Image
            width={0}
            height={0}
            src="/icon/detail.svg"
            alt=""
            className={`w-[5px] h-auto ${loading && "hidden"}`}
          />
        </div>
      </div>
    </>
  );
};
export default ChatsHeader;
