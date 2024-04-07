"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSettingModal } from "@/context/communitysetting";
import UserComponent from "@/components/community/CommunitySettingUserComponent";
import MemberComponent from "@/components/community/CommunitySettingMemberComponent";
const CommunitySetting = (props: any) => {
  const [place, setPlace] = useState<string>("marketplace");
  const [privateStatus, setPrivateStatus] = useState<boolean>(true);
  const { communitySettingmodal, setCommunitySettingmodal } = useSettingModal();
  const handleOpenProfileModal = () => {
    setCommunitySettingmodal(!communitySettingmodal);
  };
  return (
    <div className="w-full h-full bg-[#121212] px-[44px] relative overflow-auto">
      <div className="inline-flex mt-[22px]">
        <button
          className={`w-[190px] h-[45px] hover:opacity-70 ${
            place === "marketplace" ? "bg-[#50FFFF]" : ""
          } bg-opacity-10 rounded-full flex items-center justify-center`}
          onClick={() => setPlace("marketplace")}
        >
          {place === "marketplace" ? (
            <Image
              src="/icon/marketplace_blue.svg"
              width={0}
              height={0}
              alt=""
              className="w-[20px] h-auto"
            />
          ) : (
            <Image
              src="/icon/marketplace.svg"
              width={0}
              height={0}
              alt=""
              className="w-[20px] h-auto"
            />
          )}

          <p
            className={`${
              place === "marketplace" ? "text-[#50FFFF]" : ""
            } ml-[15px]`}
          >
            Marketplace
          </p>
        </button>
        <button
          className={`w-[170px] h-[45px] hover:opacity-70 ${
            place === "role" ? "bg-[#50FFFF]" : ""
          }  bg-opacity-10 rounded-full flex items-center justify-center`}
          onClick={() => {
            setPlace("role");
          }}
        >
          {place === "role" ? (
            <Image
              src="/icon/diamond_blue.svg"
              width={0}
              height={0}
              alt=""
              className="w-[20px] h-auto"
            />
          ) : (
            <Image
              src="/icon/diamond.svg"
              width={0}
              height={0}
              alt=""
              className="w-[20px] h-auto"
            />
          )}

          <p
            className={`${place === "role" ? "text-[#50FFFF]" : ""} ml-[15px]`}
          >
            Roles
          </p>
        </button>
      </div>
      {place === "marketplace" ? (
        <div className="w-full grid mobile:grid-cols-2 grid-cols-1 mt-[30px] gap-[40px]">
          <div>
            <p className="text-[#656565]">Marketplace status</p>
            <div className="w-full h-[55px] bg-[#1A1A1A] rounded-[12px] mt-[20px] px-[20px] py-[10px]">
              <div className="w-full h-full inline-flex justify-between">
                <div className="inline-flex items-center">
                  <Image
                    src="/icon/key.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[25px] h-auto"
                  />
                  <p className="ml-[10px]">Private Channel</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={() => setPrivateStatus(!privateStatus)}
                  />
                  <div className="relative w-9 h-5 rounded-full ring-[#50FFFF] ring-1 peer peer-focus:ring-1 dark:bg-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#50FFFF] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-transparent"></div>
                </label>
              </div>
            </div>
            <p className="text-[#707070] text-[14px] mt-[10px]">
              Tunn on or off to make private or public channel
            </p>
          </div>
          <div>
            <p className="text-[#9D9D9D]">Add link’s NFTs</p>
            <input
              className="w-full mt-[15px] border-b border-[#9D9D9D] bg-transparent pt-4 pb-1.5 text-white outline outline-0 placeholder:font-ttfirs focus:border-[#53FAFB] focus:outline-0 placeholder-[#9D9D9D] placeholder:text-[14px] text-[17px]"
              placeholder="Input link"
              // onChange={}
            />
            <div className="inline-flex items-center align-middle text-[#6D6D6D] mt-[10px]">
              Powered by{" "}
              <Image
                src="/icon/tensor.svg"
                width={0}
                height={0}
                alt=""
                className="w-[17px] mt-[3px] ml-[2px] mr-[2px]"
              />
              Tenso
            </div>
          </div>
          <div>
            <div className="w-full h-[55px] bg-[#1A1A1A] rounded-[12px] mt-[10px] px-[20px] py-[10px]">
              <div className="w-full h-full inline-flex justify-between">
                <div className="inline-flex items-center">
                  <Image
                    src="/icon/bookmark.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[20px] h-auto"
                  />
                  <p className="ml-[10px]">Marketplace Statue</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={() => setPrivateStatus(!privateStatus)}
                  />
                  <div className="relative w-9 h-5 rounded-full ring-[#50FFFF] ring-1 peer peer-focus:ring-1 dark:bg-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-[#50FFFF] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-transparent"></div>
                </label>
              </div>
            </div>
            <p className="text-[#707070] text-[14px] mt-[10px]">
              As a choice make your statue of Marketplace on/off
            </p>
          </div>
        </div>
      ) : place === "role" ? (
        <>
          <div className="w-full h-auto grid mobile:grid-cols-2 grid-cols-1 gap-[20px] mt-[40px]">
            <UserComponent />
            <UserComponent />
            <UserComponent />
            <UserComponent />
          </div>
          <p className="mt-[30px] text-[20px]">Members</p>
          <div className="w-full h-auto grid mobile:grid-cols-2 grid-cols-1 gap-[20px] mt-[20px] mb-[20px]">
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
            <MemberComponent />
          </div>
        </>
      ) : null}
    </div>
  );
};
export default CommunitySetting;
