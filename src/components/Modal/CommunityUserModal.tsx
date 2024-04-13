"use client";
import React, { useState } from "react";
import { useSettingModal } from "@/providers/SettingModalProvider";
import { usePathname } from "next/navigation";
import Image from "next/image";
const CommunityUserModal = () => {
  const { communityMemberProfileModal, setCommunityMemberProfileModal } =
    useSettingModal();
  const [permissionStatus1, setPermissionStatus1] = useState<boolean>(false);
  const pathname = usePathname();
  const handlePermissionStatus1 = () => {
    setPermissionStatus1(!permissionStatus1);
  };
  const [permissionStatus2, setPermissionStatus2] = useState<boolean>(false);
  const handlePermissionStatus2 = () => {
    setPermissionStatus2(!permissionStatus2);
  };
  const [permissionStatus3, setPermissionStatus3] = useState<boolean>(false);
  const handlePermissionStatus3 = () => {
    setPermissionStatus3(!permissionStatus3);
  };
  const [permissionStatus4, setPermissionStatus4] = useState<boolean>(false);
  const handlePermissionStatus4 = () => {
    setPermissionStatus4(!permissionStatus4);
  };
  const [permissionStatus5, setPermissionStatus5] = useState<boolean>(false);
  const handlePermissionStatus5 = () => {
    setPermissionStatus5(!permissionStatus5);
  };
  return (
    <>
      <div
        className={`${
          communityMemberProfileModal && pathname === "/communitySetting"
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full bg-[#171717] flex flex-none z-10 px-[50px] overflow-auto">
          <div className="w-full h-full pb-[60px] flex flex-col">
            <div className="relative w-full inline-flex justify-center mt-[60px]">
              <p className="text-[20px]">Friend's Detail</p>
              <button
                onClick={() => setCommunityMemberProfileModal(false)}
                className="absolute right-0 flex items-center mt-[5px]"
              >
                <Image src="/icon/close.svg" width={15} height={15} alt="" />
              </button>
            </div>
            <div className="w-full h-full overflow-auto">
              <div className="relative w-full inline-flex justify-center mt-[60px]">
                <Image src="/avatar/7.svg" width={100} height={100} alt="" />
              </div>
              <p className="w-full flex justify-center text-[20px] mt-[10px]">
                Bronxatory2038
              </p>
              <p className="w-full flex justify-center text-[15px] text-[#494949]">
                Member
              </p>
              <p className="text-[15px] text-[#494949] mt-[30px]">
                Custom title
              </p>
              <button className="mt-[20px] w-full h-[50px] bg-[#2B2B2B] rounded-[12px] text-[#6D6D6D]">
                Custom Title
              </button>
              <p className="text-[15px] text-[#494949] mt-[30px]">
                Permissions
              </p>
              <div className="inline-flex justify-between items-center mt-[15px] w-full pr-[1px]">
                <p>Permission 1</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={handlePermissionStatus1}
                  />
                  <div
                    className={`relative w-11 h-6 rounded-full ring-[#6D6D6D] ring-1 peer peer-focus:ring-1 dark:bg-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
                      permissionStatus1
                        ? "after:bg-[#50FFFF]"
                        : "after:bg-[#6D6D6D]"
                    } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-transparent`}
                  ></div>
                </label>
              </div>
              <div className="inline-flex justify-between items-center mt-[15px] w-full pr-[1px]">
                <p>Permission 1</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={handlePermissionStatus2}
                  />
                  <div
                    className={`relative w-11 h-6 rounded-full ring-[#6D6D6D] ring-1 peer peer-focus:ring-1 dark:bg-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
                      permissionStatus2
                        ? "after:bg-[#50FFFF]"
                        : "after:bg-[#6D6D6D]"
                    } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-transparent`}
                  ></div>
                </label>
              </div>
              <div className="inline-flex justify-between items-center mt-[15px] w-full pr-[1px]">
                <p>Permission 1</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={handlePermissionStatus3}
                  />
                  <div
                    className={`relative w-11 h-6 rounded-full ring-[#6D6D6D] ring-1 peer peer-focus:ring-1 dark:bg-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
                      permissionStatus3
                        ? "after:bg-[#50FFFF]"
                        : "after:bg-[#6D6D6D]"
                    } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-transparent`}
                  ></div>
                </label>
              </div>
              <div className="inline-flex justify-between items-center mt-[15px] w-full pr-[1px]">
                <p>Permission 1</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={handlePermissionStatus4}
                  />
                  <div
                    className={`relative w-11 h-6 rounded-full ring-[#6D6D6D] ring-1 peer peer-focus:ring-1 dark:bg-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
                      permissionStatus4
                        ? "after:bg-[#50FFFF]"
                        : "after:bg-[#6D6D6D]"
                    } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-transparent`}
                  ></div>
                </label>
              </div>
              <div className="inline-flex justify-between items-center mt-[15px] w-full pr-[1px]">
                <p>Permission 1</p>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onClick={handlePermissionStatus5}
                  />
                  <div
                    className={`relative w-11 h-6 rounded-full ring-[#6D6D6D] ring-1 peer peer-focus:ring-1 dark:bg-transparent peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
                      permissionStatus5
                        ? "after:bg-[#50FFFF]"
                        : "after:bg-[#6D6D6D]"
                    } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-transparent`}
                  ></div>
                </label>
              </div>
            </div>
            <button
              className="mt-[100px] w-full h-[50px] bg-[#53FAFB] text-black rounded-[12px] font-bold bottom-0 flex-none"
              onClick={() => setCommunityMemberProfileModal(false)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommunityUserModal;
