"use client";
import React from "react";
import Image from "next/image"
import { useSettingModal } from "@/context/communitysetting";
const CommunityFooter = () => {
  const {callActionModal, setCallActionModal} = useSettingModal()
  return (
    <>
      <div
        className={`inline-flex bg-[#121212] h-[100px] border-t-[1px] border-t-[#2A2A2A] bottom-0 items-center justify-center w-full flex-none`}
      >
        <div className="relative w-[97%] h-[50px]">
          <input
            className="w-full h-full bg-[#131313] outline-none border border-[#4C4C4C] rounded-[14px] px-[70px] placeholder-[#4C4C4C]"
            placeholder="Write your message"
          />
          <div className="absolute left-0 h-full w-[70px] top-0 items-center justify-center inline-flex">
            <button>
              <Image
                width={0}
                height={0}
                alt=""
                src="/icon/clip.svg"
                className="w-[15px] h-auto"
              />
            </button>
            <button>
              <Image
                width={0}
                height={0}
                alt=""
                src="/icon/smile.svg"
                className="ml-[10px] w-[15px] h-auto"
              />
            </button>
          </div>
          <div className="absolute right-0 h-full w-[70px] top-0 items-center justify-center inline-flex">
            <button onClick={() => setCallActionModal(!callActionModal)}>
              <Image
                width={0}
                height={0}
                alt=""
                src="/icon/mic.svg"
                className="w-[15px] h-auto mr-[10px]"
              />
            </button>
            <button className="bg-[#53FAFB] ml-[5px] p-[10px] rounded-[7px] mr-[10px]">
              <Image
                width={0}
                height={0}
                alt=""
                src="/icon/send.svg"
                className="w-[15px] h-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommunityFooter;
