"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSettingModal } from "@/context/communitysetting";
const MemberComponent = (props: any) => {
  const [isLoading1, setLoading1] = useState<boolean>(true);
  const [isLoading2, setLoading2] = useState<boolean>(true);
  const [hidden, setHidden] = useState<boolean>(true);
  const {communityMemberProfileModal, setCommunityMemberProfileModal} = useSettingModal()
  useEffect(() => {
    if (isLoading1 && isLoading2) {
      setHidden(false);
    }
  }, [isLoading1, isLoading2]);
  return (
    <>
      {hidden && (
        <div className="w-full rounded-[20px] h-[200px] bg-[#171717] animate-pulse mr-[10px] flex flex-none mt-[10px]"></div>
      )}
      <button
        className={`w-full h-[70px] bg-[#181818] rounded-[17px] inline-flex justify-between py-[12px] px-[15px] items-center ${
          hidden && "hidden"
        }`}
        onClick={() => setCommunityMemberProfileModal(!communityMemberProfileModal)}
      >
        <div className="inline-flex items-center">
          <Image
            src="/avatar/6.svg"
            width={0}
            height={0}
            alt=""
            className="w-[50px] h-auto"
            priority={true}
            onLoad={() => {
              setLoading1(false);
            }}
          />
          <div className="ml-[10px] text-left">
            <p className="text-[14px]">Bronxatory2038</p>
            <p className="text-[12px] text-[#494949]">Owner</p>
          </div>
        </div>
        <div className="inline-flex">
          <Image
            src="/icon/person.svg"
            width={0}
            height={0}
            alt=""
            className="w-[35px] h-auto"
            priority={true}
            onLoad={() => {
              setLoading2(false);
            }}
          />
        </div>
      </button>
    </>
  );
};
export default MemberComponent;
