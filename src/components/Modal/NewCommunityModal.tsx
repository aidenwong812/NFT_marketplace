"use client";
import React, { useState, useEffect } from "react";
import { useSettingModal } from "@/providers/SettingModalProvider";
import { usePathname } from "next/navigation";
import Image from "next/image";
const NewCommunityModal = () => {
  const { newCommunityModal, setNewCommunityModal } = useSettingModal();
  const pathName = usePathname();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  };
  const handlePage = () => {
    setPage(page + 1);
  };
  const handleCreate = () => {
    setNewCommunityModal(false);
    setTimeout(() => {
      setPage(0);
    }, 1000);
  };
  const handlePreviousPage = () => {
    if (page !== 0) {
      setPage(page - 1);
      setDescription("");
      setName("");
    } else {
      setNewCommunityModal(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (
        !(
          newCommunityModal &&
          (pathName.includes("/community/") || pathName === "/community")
        )
      ) {
        setPage(0);
      }
    }, 1000);
  }, [newCommunityModal]);
  useEffect(() => {
    if (name && description) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, description]);
  return (
    <>
      <div
        className={`${
          newCommunityModal &&
          (pathName.includes("/community/") || pathName === "/community")
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full relative px-[30px] pb-[50px] flex flex-col">
          <button
            className="w-[340px] inline-flex items-center mt-[60px]"
            onClick={handlePreviousPage}
          >
            <Image
              className="mr-[30px] w-[30px] h-auto"
              src="/icon/back_bgwhite.svg"
              width={0}
              height={0}
              alt=""
            />
          </button>
          {page === 0 ? (
            <>
              <div className="w-[340px] h-full overflow-auto">
                <p className="mt-[50px] text-[20px]">Create New Community</p>
                <p className="mt-[15px] text-[12px] text-[#707070]">
                  The terms and conditions contained in this Agreement shall
                  constitute the entir
                </p>
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
                  placeholder="Description is here"
                  onChange={handleDescription}
                />
                <p className="text-[#707070] text-[13px] mt-[20px] mb-[20px]">
                  The terms and conditions contained in.
                </p>
              </div>
              <button
                className="w-full h-[40px] flex-none disabled:bg-[#212121] disabled:text-[#878787] rounded-[12px] bg-[#53FAFB] text-black mb-[20px] bottom-0"
                disabled={disable}
                onClick={handlePage}
              >
                Next
              </button>
            </>
          ) : page === 1 ? (
            <>
              <div className="w-full h-full overflow-auto">
                <p className="text-[20px] mt-[50px]">Create New Community</p>
                <p className="text-[12px] text-[#707070] mt-[15px]">
                  The terms and conditions contained in this Agreement shall
                  constitute the entir
                </p>
                <div className="w-full flex justify-center mt-[80px]">
                  <div className="w-[150px] h-[150px] bg-[#222222] rounded-[20px] flex items-center justify-center font-metana text-[50px] text-[#4C4C4C]">
                    GW
                  </div>
                </div>
                <button className="w-full h-[50px] bg-[#131313] rounded-[12px] mt-[50px] inline-flex items-center justify-center">
                  <Image
                    src="/icon/upload.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[20px] h-auto"
                  />
                  <p className="ml-[10px] text-[15px]">Add Profile Picture</p>
                </button>
              </div>
              <button
                className="w-full h-[50px] bg-[#53FAFB] flex-none rounded-[12px] mt-[20px] inline-flex items-center justify-center"
                onClick={handleCreate}
              >
                <p className="text-black font-bold">Create</p>
              </button>
              <div className="w-full flex items-center justify-center bottom-0 mb-[20px]">
                <button
                  className="text-[17px] font-thin mt-[40px]"
                  onClick={handleCreate}
                >
                  Skip this later
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default NewCommunityModal;
