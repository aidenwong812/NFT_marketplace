"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSettingModal } from "@/providers/SettingModalProvider";
import Image from "next/image";
const searchResultItem = () => {
  return (
    <div className="inline-flex justify-between items-center w-full mb-[10px]">
      <div className="inline-flex items-center">
        <Image
          src="/avatar/2.svg"
          width={0}
          height={0}
          alt=""
          className="w-[45px] h-auto"
        />
        <div className="ml-[10px]">
          <p className="text-[13px]">@KitshunaFowyu</p>
          <p className="text-[10px] text-[#4C4C4C] mt-[-2px]">
            121,9k Items – 23,9K Active
          </p>
        </div>
      </div>
      <button className="w-[75px] h-[35px] bg-[#53FAFB] bg-opacity-10 rounded-full text-[#53FAFB] text-[12px]">
        Leave
      </button>
    </div>
  );
};
const UserSearchModal = () => {
  const pathName = usePathname();
  const { userSearchModal, setUserSearchModal } = useSettingModal();
  const [close, setClose] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    if (search) {
      setClose(true);
    } else {
      setClose(false);
    }
  }, [search]);
  return (
    <>
      <div
        className={`${
          userSearchModal && pathName.includes("/community/")
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full  px-[30px] pt-[30px] pb-[40px] relative">
          <button className="absolute right-[30px] top-[30px]" onClick={() => {setUserSearchModal(false)}}>
            <Image src="/icon/close.svg" width={0} height={0} alt="" className="w-[12px] h-auto"/>
          </button>
          <div className="w-[340px] h-full relative">
            <div className="w-full relative mt-[40px]">
              <input
                className="bg-[#252525] w-full text-[#B3B3B3] placeholder-[#4C4C4C] outline-none p-[14px] pl-[40px] rounded-[12px] text-[14px] h-[40px] align-bottom"
                placeholder="Search Community"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <Image
                className="absolute left-[15px] top-[13px] w-[15px] h-auto"
                src="/icon/search_grey.svg"
                width={0}
                height={0}
                alt="logo"
              />
              {close ? (
                <button
                  onClick={() => {
                    setSearch("");
                  }}
                >
                  <Image
                    className="absolute right-[12px] top-[8px]"
                    src="/icon/close_black.svg"
                    width={25}
                    height={25}
                    alt="logo"
                  />
                </button>
              ) : null}
            </div>
            <div className="w-full inline-flex justify-between mt-[20px] items-end">
              <p>Results</p>
              <p className="text-[13px] text-[#53FAFB]">Clear All</p>
            </div>
            <p className="text-[#656565] text-[13px] mt-[5px]">
              105 Items Found
            </p>
            <div className="absolute bottom-[20px] w-full inline-flex justify-center">
              <button className="text-[#787878] border border-[#787878] px-[40px] py-[7px] rounded-full">
                See more
              </button>
            </div>
            <div className="absolute top-[130px] bottom-[80px] overflow-auto left-0 right-0">
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
              {searchResultItem()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserSearchModal;
