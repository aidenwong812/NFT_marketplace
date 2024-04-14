"use client";
import React from "react";
import Image from "next/image";
import { useSettingModal } from "@/providers/SettingModalProvider";
import { usePathname } from "next/navigation";
const NftBuyModal = (props: any) => {
  const { nftBuyModal, setNftBuyModal } = useSettingModal();
  const pathName = usePathname();
  return (
    <>
      <div
        className={`${
          nftBuyModal &&
          (pathName.includes("/nfts/"))
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full relative overflow-auto px-[30px] pb-[50px] flex-none flex">
          <div className="w-[340px] h-full overflow-auto flex-none">
            <button onClick={() => setNftBuyModal(false)} className="mt-[60px]">
              <Image
                src="/icon/back_bgwhite.svg"
                width={0}
                height={0}
                alt=""
                className="w-[30px] h-auto"
              />
            </button>
            <div className="w-full flex justify-center mt-[180px]">
              <div className="w-[150px] h-[40px] rounded-full border-[#53FAFB] border-[1px] flex items-center justify-center text-[#53FAFB] text-[14px]">
                <Image
                  src="/icon/sol.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[20px] h-auto mr-[10px]"
                />
                12.02 SOL
              </div>
            </div>
            <p className="w-full text-center text-[14px] mt-[100px]">
              Are you sure you want to buy <br /> from SOFT COQ INU for
              12.02 SOL?
            </p>
            <button
              className="w-full h-[40px] bg-[#50FFFF] text-black font-bold rounded-full text-[13px] mt-[80px]"
              onClick={() => setNftBuyModal(false)}
            >
              Confirm
            </button>
            <button
              className="w-full h-[40px] border-[1px] border-[#50FFFF] text-[#50FFFF] font-bold rounded-full text-[13px] mt-[20px]"
              onClick={() => setNftBuyModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NftBuyModal;
