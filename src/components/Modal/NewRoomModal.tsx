"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSettingModal } from "@/providers/SettingModalProvider";
import Image from "next/image";
const NewRoomModal = () => {
  const pathName = usePathname();
  const { newRoomModal, setNewRoomModal } = useSettingModal();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [enable, setEnable] = useState<boolean>(false);
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const handleCreate = () => {
    setNewRoomModal(!newRoomModal);
  };
  return (
    <>
      <div
        className={`${
          newRoomModal &&
          (pathName.includes("/community/") || pathName === "/community")
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full relative overflow-auto px-[30px] pb-[50px]">
          <div className="w-[340px] flex flex-col h-full">
            <div className="w-full">
              <button
                className="inline-flex items-center mt-[60px]"
                onClick={() => setNewRoomModal(!newRoomModal)}
              >
                <Image
                  className="mr-[30px] w-[30px] h-auto"
                  src="/icon/back_bgwhite.svg"
                  width={0}
                  height={0}
                  alt=""
                />
              </button>
              <p className="mt-[50px] text-[20px]">Create New Room</p>
              <p className="mt-[15px] text-[12px] text-[#707070]">
                The terms and conditions contained in this Agreement shall
                constitute the entir
              </p>
            </div>
            <div className="w-full h-full overflow-auto">
              <p className="text-[#9D9D9D] text-[12px] mt-[50px]">
                Add name here
              </p>
              <input
                className="w-full border-b border-[#9D9D9D] bg-transparent pt-2 pb-1.5 text-white outline outline-0 placeholder:font-ttfirs focus:border-[#53FAFB] focus:outline-0 placeholder-[#9D9D9D] placeholder:text-[14px]"
                placeholder="Name is here"
                onChange={handleName}
              />
              <p className="text-[#707070] text-[13px] mt-[20px]">
                The terms and conditions contained in.
              </p>
              <input
                className="mt-[20px] w-full border-b border-[#9D9D9D] bg-transparent pt-4 pb-1.5 text-white outline outline-0 placeholder:font-ttfirs focus:border-[#53FAFB] focus:outline-0 placeholder-[#9D9D9D] placeholder:text-[14px]"
                placeholder="Choose Emoji"
                onChange={handleDescription}
              />
              <p className="text-[#707070] text-[13px] mt-[20px]">
                The terms and conditions contained in.
              </p>
              <p className="text-[#9D9D9D] mt-[20px] text-[14px]">User Chat</p>
              <div className="w-full h-[50px] bg-[#131313] mt-[10px] rounded-[12px] px-[30px] flex justify-between items-center">
                <p>Enable</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={() => setEnable(!enable)}
                  />
                  <div
                    className={`relative w-11 h-6 rounded-full ring-[#6D6D6D] ring-1 peer peer-focus:ring-1 dark:bg-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
                      enable ? "after:bg-[#50FFFF]" : "after:bg-[#6D6D6D]"
                    } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-transparent`}
                  ></div>
                </label>
              </div>
            </div>
            <button
              className="w-full h-[40px] rounded-[12px] bg-[#53FAFB] text-black mt-[20px] bottom-0 flex-none"
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewRoomModal;
