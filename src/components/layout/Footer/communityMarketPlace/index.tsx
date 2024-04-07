"use client";
import React from "react";
import Image from "next/image"
export default function Footer() {
  return (
    <>
      <div
        className={`w-full h-[100px] bg-[#121212] border-t-[1px] border-t-[#2A2A2A] mobile:px-[50px] px-[20px] flex items-center flex-none`}
      >
        <div className="flex items-center w-full overflow-auto h-full relative">
          <div className="flex items-center justify-between w-full min-w-[705px] absolute">
            <div className="flex-row items-center">
              <p className="text-[12px] text-[#6D6D6D]">Floor Price</p>
              <div className="inline-flex align-bottom">
                <Image
                  src="/icon/sol.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[20px]"
                />
                <div className="inline-flex items-end">
                  <p className="text-[20px] ml-[5px] font-bold">32.92</p>
                  <p className="text-[#FF5252] ml-[5px]">-5.9%</p>
                </div>
              </div>
            </div>
            <div className="flex-row items-center">
              <p className="text-[12px] text-[#6D6D6D]">Top Offer</p>
              <div className="inline-flex align-bottom">
                <Image
                  src="/icon/sol.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[20px]"
                />
                <div className="inline-flex items-end">
                  <p className="text-[20px] ml-[5px] font-bold">11.2</p>
                </div>
              </div>
            </div>
            <div className="flex-row items-center">
              <p className="text-[12px] text-[#6D6D6D]">24h Vol</p>
              <div className="inline-flex align-bottom">
                <Image
                  src="/icon/sol.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[20px]"
                />
                <div className="inline-flex items-end">
                  <p className="text-[20px] ml-[5px] font-bold">1.4k</p>
                </div>
              </div>
            </div>
            <div className="flex-row items-center">
              <p className="text-[12px] text-[#6D6D6D]">24h Sales</p>
              <div className="inline-flex align-bottom">
                <Image
                  src="/icon/sol.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[20px]"
                />
                <div className="inline-flex items-end">
                  <p className="text-[20px] ml-[5px] font-bold">42</p>
                </div>
              </div>
            </div>
            <div className="flex-row items-center">
              <p className="text-[12px] text-[#6D6D6D]">24h Attempts</p>
              <div className="inline-flex align-bottom">
                <div className="inline-flex items-end">
                  <p className="text-[20px] ml-[5px] font-bold">✨️ 9</p>
                </div>
              </div>
            </div>
            <div className="flex-row items-center">
              <p className="text-[12px] text-[#6D6D6D]">All Vol</p>
              <div className="inline-flex align-bottom">
                <div className="inline-flex items-end">
                  <p className="text-[20px] font-bold">2.2M</p>
                </div>
              </div>
            </div>
            <div className="flex-row items-center">
              <p className="text-[12px] text-[#6D6D6D]">Listed / Supply</p>
              <div className="inline-flex align-bottom">
                <div className="inline-flex items-end">
                  <p className="text-[20px] font-bold">695 / 10.2K</p>
                  <p className="text-[#5C5C5C] ml-[5px]">5.9%</p>
                </div>
              </div>
            </div>
            <div className="flex-row items-center">
              <p className="text-[12px] text-[#6D6D6D]">Owners</p>
              <div className="inline-flex align-bottom">
                <div className="inline-flex items-end">
                  <p className="text-[20px] font-bold">10.2K </p>
                  <p className="text-[#5C5C5C] ml-[5px]">5.9%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
