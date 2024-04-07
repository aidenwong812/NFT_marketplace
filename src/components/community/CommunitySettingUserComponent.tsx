"use client";
import React from "react";
import Image from "next/image";
import { useSettingModal } from "@/context/communitysetting";
const UserComponent = () => {
  const { communityMemberProfileModal, setCommunityMemberProfileModal } =
    useSettingModal();
  return (
    <button
      className="w-full h-[70px] bg-[#181818] rounded-[17px] inline-flex justify-between py-[12px] px-[15px] items-center"
      onClick={() => {setCommunityMemberProfileModal(!communityMemberProfileModal)}}
    >
      <div className="inline-flex items-center">
        <Image
          src="/avatar/5.svg"
          width={0}
          height={0}
          alt=""
          className="w-[50px]"
        />
        <div className="ml-[10px] text-left">
          <p className="text-[14px]">Bronxatory2038</p>
          <p className="text-[12px] text-[#494949]">Member</p>
        </div>
      </div>
      <div className="inline-flex">
        <Image
          src="/icon/active_blue.svg"
          width={0}
          height={0}
          alt=""
          className="w-[35px] mr-[12px]"
        />
        <Image
          src="/icon/message_grey.svg"
          width={0}
          height={0}
          alt=""
          className="w-[35px]"
        />
      </div>
    </button>
  );
};
export default UserComponent;
