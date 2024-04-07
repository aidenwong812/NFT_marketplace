"use client";
import React from "react";
import Image from "next/image"
import { useRouter } from "next/navigation";
const NotificationHeader = () => {
  const router = useRouter()
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full inline-flex justify-between mt-[40px] items-center">
          <div className="inline-flex items-center text-[20px]">
            <button onClick={() => router.push("/home")}>
              <Image
                src="/icon/back_black.svg"
                width={0}
                height={0}
                alt="logo"
                className="w-[50px] h-auto"
              />
            </button>
            <p className="ml-[20px] mt-[-5px] mobile:block hidden">
              Notifications
            </p>
          </div>
          <div className="mobile:w-[400px] w-[250px] relative">
            <Image
              src="/icon/search_grey.svg"
              width={0}
              height={0}
              alt="logo"
              className="w-[14px] h-auto absolute left-[25px] top-[13px]"
            />
            <input
              className="py-[10px] w-full outline-none bg-[#181818] px-[50px] text-[14px] rounded-[12px] placeholder:text-[#4C4C4C] placeholder:text-[12px]"
              placeholder="Search Friends"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default NotificationHeader;
