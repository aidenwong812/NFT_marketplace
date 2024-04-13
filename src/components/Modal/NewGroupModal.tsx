"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSettingModal } from "@/providers/SettingModalProvider";
import Image from "next/image";
const NewRoomModal = () => {
  const pathName = usePathname();
  const { newGroupModal, setNewGroupModal } = useSettingModal();
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
    setNewGroupModal(!newGroupModal);
  };
  return (
    <>
      <div
        className={`${
          newGroupModal &&
          (pathName.includes("/chats/") || pathName === "/chats")
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full relative overflow-auto px-[30px] pb-[50px]">
          <div className="w-[340px] flex flex-col h-full">
            <div className="w-full">
              <button
                className="inline-flex items-center mt-[60px]"
                onClick={() => setNewGroupModal(!newGroupModal)}
              >
                <Image
                  className="mr-[30px] w-[30px] h-auto"
                  src="/icon/back_bgwhite.svg"
                  width={0}
                  height={0}
                  alt=""
                />
              </button>
              <p className="mt-[50px] text-[20px]">Create New Group</p>
              <p className="mt-[15px] text-[12px] text-[#707070]">
                The terms and conditions contained in this Agreement shall
                constitute the entir
              </p>
            </div>
            <div className="w-full h-full overflow-auto">
              <div className="w-full flex justify-center mt-[40px]">
                <div className="w-[150px] aspect-square rounded-full bg-[#222222] flex items-center justify-center">
                    <Image src="/icon/camera_outline.svg" alt="" width={0} height={0} className="w-[40px] h-auto"/>
                </div>
              </div>
              <p className="text-[#9D9D9D] text-[12px] mt-[50px]">
                Add name of Group
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
                placeholder="Description is here"
                onChange={handleDescription}
              />
              <p className="text-[#707070] text-[13px] mt-[20px]">
                The terms and conditions contained in.
              </p>
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
