"use client";
import React, { useState } from "react";
import { useSettingModal } from "@/providers/SettingModalProvider";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
const FriendProfileModal = () => {
  const { friendProfileModal, setFriendProfileModal } = useSettingModal();
  const [dropdown, setDropdown] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      <div
        className={`${
          friendProfileModal && pathName.includes("/community/")
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full bg-[#171717] px-[26px] pt-[50px] pb-[50px]">
          <div className="w-full h-full relative overflow-auto">
            <div className="w-full inline-flex justify-between items-center">
              <button
                onClick={() => setFriendProfileModal(!friendProfileModal)}
              >
                <Image
                  src="/icon/back_bgwhite.svg"
                  width={35}
                  height={35}
                  alt=""
                />
              </button>
              <p className="text-[15px]">Friend's Profile</p>
              <button
                onClick={() => setFriendProfileModal(!friendProfileModal)}
              >
                <Image
                  src="/icon/link.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[35px] h-auto"
                />
              </button>
            </div>
            <div className="flex justify-center w-full mt-[20px]">
              <Image src="/avatar/8.svg" width={0} height={0} alt="" className="w-[80px] h-auto"/>
            </div>
            <div className="inline-flex items-center justify-center w-full mt-[10px]">
              <p className="mr-[5px]">Kitshuna Fowyu</p>
              <Image src="/icon/check.svg" width={0} height={0} alt="" className="w-[15px] h-auto"/>
            </div>

            <p className="flex justify-center w-full text-[11px] text-[#979797]">
              @KitshunaFowyu
            </p>
            <div className="inline-flex w-full justify-center mt-[20px]">
              <button className="w-[100px] h-[40px] rounded-full inline-flex items-center justify-center mr-[10px] border-[1px] border-[#50FFFF]">
                <Image
                  className="mr-[5px] w-[15px] h-auto"
                  src="/icon/unfriend.svg"
                  width={0}
                  height={0}
                  alt=""
                />
                <p className="text-[11px] text-[#50FFFF] mt-[2px]">Unfriend</p>
              </button>
              <button className="w-[100px] h-[40px] rounded-full inline-flex items-center justify-center mr-[10px] border-[1px] border-[#353535]">
                <p className="text-[11px] text-white mt-[2px]">Message</p>
              </button>
            </div>
            <div className="w-[342px] h-[65px] border-[1px] border-[#2F2F2F] rounded-[12px] flex items-center mt-[20px]">
              <div className="grid grid-cols-4 w-full">
                <div className="flex items-center justify-center border-r border-r-[#2F2F2F]">
                  <div>
                    <p className="text-center">1298</p>
                    <p className="w-full text-[10px] text-center text-[#868686] mt-[-4px]">
                      Posts
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center border-x border-x-[#2F2F2F]">
                  <div>
                    <p className="text-center">90,4K</p>
                    <p className="w-full text-[10px] text-center text-[#868686] mt-[-4px]">
                      Saved
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center border-x border-x-[#2F2F2F]">
                  <div>
                    <p className="text-center">481,3K</p>
                    <p className="w-full text-[10px] text-center text-[#868686] mt-[-4px]">
                      Followers
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center border-l border-l-[#2F2F2F]">
                  <div>
                    <p className="text-center">81,3K</p>
                    <p className="w-full text-[10px] text-center text-[#868686] mt-[-4px]">
                      Likes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-[14px] text-[#868686] mt-[20px]">
              The terms and conditions contained in this Agreement and
              understandings.
            </p>
            <div className="text-center text-[12px] text-[#868686] mt-[20px] inline-flex w-full items-center justify-center">
              Member since 2019.{" "}
              <div>
                <Image
                  className="mr-[5px] ml-[10px] w-[15px] h-auto"
                  src="/icon/chain.svg"
                  width={0}
                  height={0}
                  alt=""
                />
              </div>
              <p className="text-white mt-[2px]">Tuerp.1lsuy</p>
            </div>
            <div className="w-full grid grid-cols-4 text-[13px] mt-[20px]">
              <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:bg-opacity-5 focus:text-white text-[#606060]">
                Items
              </button>
              <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:bg-opacity-5 focus:text-white text-[#606060]">
                Saved
              </button>
              <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:bg-opacity-5 focus:text-white text-[#606060]">
                Activity
              </button>
              <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:bg-opacity-5 focus:text-white text-[#606060]">
                Groups
              </button>
            </div>
            <div className="w-full grid grid-cols-3 gap-[10px] mt-[20px]">
              <img className="w-auto h-auto" src="/avatar/9.svg" />
              <img className="w-auto h-auto" src="/avatar/10.svg" />
              <img className="w-auto h-auto" src="/avatar/11.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/12.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/4.svg" />
              <img className="w-auto h-auto" src="/avatar/13.svg" />
              <img className="w-auto h-auto" src="/avatar/14.svg" />
              <img className="w-auto h-auto" src="/avatar/15.svg" />
              <img className="w-auto h-auto" src="/avatar/16.svg" />
              <img className="w-auto h-auto" src="/avatar/14.svg" />
              <img className="w-auto h-auto" src="/avatar/15.svg" />
              <img className="w-auto h-auto" src="/avatar/16.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendProfileModal;
