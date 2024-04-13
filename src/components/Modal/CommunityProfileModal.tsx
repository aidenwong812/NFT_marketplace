"use client";
import React, { useState } from "react";
import { useSettingModal } from "@/providers/SettingModalProvider";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
const CommunityProfileModal = () => {
  const { communityProfileModal, setCommunityProfileModal } = useSettingModal();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname()
  return (
    <>
      <div
        className={`${
          communityProfileModal && pathName.includes("/community") ? "w-[400px]" : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full bg-[#171717] px-[26px] pt-[50px] pb-[50px] flex-col flex">
          <div className="w-full inline-flex justify-between items-center">
            <p className="text-[17px]">Community Profile</p>
            <button
              onClick={() => {
                setDropdown(!dropdown);
              }}
            >
              <Image
                src="/icon/detail.svg"
                width={0}
                height={0}
                className="w-[3px] h-auto"
                alt=""
              />
            </button>
            {dropdown ? (
              <>
                <div className="fixed left-0 right-0 top-0 bottom-0" onClick={() => {setDropdown(false)}}></div>
                <div className="absolute z-10 top-[80px] right-[30px] bg-[#343434] bg-opacity-40 backdrop-blur-[12px] px-[20px] flex flex-col py-[15px] text-[14px] font-thin rounded-[10px] gap-[12px] w-[150px]">
                  <button
                    className="text-left inline-flex items-center"
                    onClick={() => {
                      setCommunityProfileModal(false);
                      setDropdown(false)
                      router.push("/communityOverview");
                    }}
                  >
                    <Image
                      className="mr-[10px] mt-[-4px] w-[14px] h-auto"
                      src="/icon/overview.svg"
                      width={0}
                      height={0}
                      alt=""
                    />
                    Overview
                  </button>
                  <button
                    className="text-left inline-flex items-center"
                    onClick={() => {
                      setCommunityProfileModal(false),
                      setDropdown(false);
                      router.push("/communitySetting");
                    }}
                  >
                    <Image
                      className="mr-[10px] mt-[-4px] ml-[-2px]"
                      src="/icon/setting.svg"
                      width={17}
                      height={17}
                      alt=""
                    />
                    Settings
                  </button>
                </div>
              </>
            ) : null}
          </div>
          <div className="w-full h-full relative overflow-auto">
            <div className="flex justify-center w-full">
              <Image
                src="/avatar/2.svg"
                width={80}
                height={80}
                alt=""
                className="mt-[30px]"
              />
            </div>
            <p className="flex justify-center w-full mt-[20px]">Fernado TOYs</p>
            <p className="flex justify-center w-full text-[10px]">
              66,2k Members
            </p>
            <div className="inline-flex w-full justify-center mt-[20px]">
              <button className="w-[85px] h-[32px] bg-[#53FAFB] rounded-full inline-flex items-center justify-center mr-[10px]">
                <p className="text-[10px] text-black font-bold">Joined</p>
                <Image
                  className="mt-[1px] ml-[10px] w-[10px] h-auto"
                  src="/icon/dropdown.svg"
                  width={0}
                  height={0}
                  alt=""
                />
              </button>
              <button className="w-[120px] h-[32px] bg-[#FFFFFF] bg-opacity-10 rounded-full inline-flex items-center justify-center">
                <Image
                  className="mt-[1px] w-[12px] h-auto"
                  src="/icon/mute.svg"
                  width={0}
                  height={0}
                  alt=""
                />
                <p className="text-[10px] text-white ml-[7px]">Following</p>
                <Image
                  className="mt-[3px] ml-[8px] w-[9px] h-auto"
                  src="/icon/dropdown_white.svg"
                  width={0}
                  height={0}
                  alt=""
                />
              </button>
            </div>
            <div className="w-[330px] h-[65px] border-[1px] border-[#2F2F2F] rounded-[12px] flex items-center mt-[20px] flex-none">
              <div className="grid grid-cols-4 w-full">
                <div className="flex items-center justify-center border-r border-r-[#2F2F2F]">
                  <div>
                    <p className="text-center">120k</p>
                    <p className="w-full text-[10px] text-center text-[#868686] mt-[-4px]">
                      Volume
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center border-x border-x-[#2F2F2F]">
                  <div>
                    <p className="text-center">90,4k</p>
                    <p className="w-full text-[10px] text-center text-[#868686] mt-[-4px]">
                      Floor Price
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center border-x border-x-[#2F2F2F]">
                  <div>
                    <p className="text-center">2,3%</p>
                    <p className="w-full text-[10px] text-center text-[#868686] mt-[-4px]">
                      Listed
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center border-l border-l-[#2F2F2F]">
                  <div>
                    <p className="text-center">4k</p>
                    <p className="w-full text-[10px] text-center text-[#868686] mt-[-4px]">
                      Owners
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-[12px] text-[#868686] mt-[20px]">
              The terms and conditions contained in this Agreement shall
              constitute agreements and written. Read More
            </p>
            <div className="w-[340px] inline-flex items-center">
              <Image
                className="ml-[-40px] w-[200px] h-auto"
                src="/avatar/avatarbundle.svg"
                width={0}
                height={0}
                alt=""
              />
              <div className="mt-[-20px] ml-[-40px]">
                <p>+239</p>
                <p className="text-[10px] text-[#888888]">
                  Mutual Friends Joined
                </p>
              </div>
              <button className="w-[95px] h-[40px] bg-[#53FAFB] bg-opacity-10 mt-[-20px] ml-[15px] rounded-full text-[12px]">
                View All
              </button>
            </div>
            <div className="w-full grid grid-cols-4 text-[13px] font-bold gap-[10px]">
              <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:text-black text-[#606060]">
                Media
              </button>
              <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:text-black text-[#606060]">
                Documents
              </button>
              <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:text-black text-[#606060]">
                Voices
              </button>
              <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:text-black text-[#606060]">
                Links
              </button>
            </div>
            <div className="w-full grid grid-cols-3 gap-[10px] overflow-auto h-[250px] mt-[20px]">
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
            </div>
            
          </div>
          <button className="w-full h-[50px] bg-[#53FAFB] mt-[20px] rounded-[12px] flex items-center justify-center text-black font-bold">
              <Image
                src="/icon/send.svg"
                width={0}
                height={0}
                alt=""
                className="w-[20px] mr-[20px]"
              />
              <p>Share Link a Friend</p>
            </button>
        </div>
      </div>
    </>
  );
};
export default CommunityProfileModal;
