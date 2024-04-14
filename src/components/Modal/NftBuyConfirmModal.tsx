"use client";
import React from "react";
import Image from "next/image";
import { useSettingModal } from "@/providers/SettingModalProvider";
import { usePathname } from "next/navigation";
const NftBuyConfirmModal = (props: any) => {
  const { nftBuyConfirmModal, setNftBuyConfirmModal } = useSettingModal();
  const pathName = usePathname();
  return (
    <>
      <div
        className={`${
          nftBuyConfirmModal && pathName.includes("/nfts/")
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full relative overflow-auto px-[30px] pb-[50px]">
          <div className="w-[340px] h-full overflow-auto">
            <button
              onClick={() => setNftBuyConfirmModal(false)}
              className="mt-[60px]"
            >
              <Image
                src="/icon/back_bgwhite.svg"
                width={0}
                height={0}
                alt=""
                className="w-[30px] h-auto"
              />
            </button>
            <p className="w-full text-center text-[14px] mt-[150px]">
              Are you sure you want to buy <br /> from SOFT COQ INU for
              12.02 SOL?
            </p>
            <button className="w-full h-[45px] rounded-full border-[1px] border-[#686868] inline-flex items-center px-[30px] justify-between mt-[100px]">
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[20px] h-auto"
              />
              <p>12.02 SOL</p>
              <div></div>
            </button>
            <button className="w-full h-[45px] rounded-full border-[1px] border-[#686868] inline-flex items-center px-[30px] justify-center mt-[30px]">
              <p>30 Days</p>
            </button>
            <div className="grid grid-cols-2 gap-[20px] w-full mt-[100px]">
              <button
                className="w-full h-[40px] border-[1px] border-[#50FFFF] text-[#50FFFF] font-bold rounded-full text-[13px]"
                onClick={() => setNftBuyConfirmModal(false)}
              >
                Cancel
              </button>
              <button
                className="w-full h-[40px] bg-[#50FFFF] text-black font-bold rounded-full text-[13px]"
                onClick={() => setNftBuyConfirmModal(false)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NftBuyConfirmModal;
