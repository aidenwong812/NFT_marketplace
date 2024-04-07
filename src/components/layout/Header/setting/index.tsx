"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const LanguagesHeader = dynamic(() => import("./headers/Languages"));
const SecurityHeader = dynamic(() => import("./headers/Security"));
const AccountHeader = dynamic(() => import("./headers/Account"));
const SettingHeader = () => {
  const pathName = usePathname();
  return (
    <>
      <div className="w-full h-[100px] flex-none border-b-[1px] border-[#2A2A2A] mobile:px-[50px] px-[20px]">
        {pathName === "/setting" ? (
          <p className="text-[25px] mt-[40px]">My Profile</p>
        ) : pathName === "/setting/languages" ? (
          <LanguagesHeader />
        ) : pathName === "/setting/security" ? (
          <SecurityHeader />
        ) : pathName === "/setting/account" ? (
          <AccountHeader />
        ) : null}
      </div>
    </>
  );
};
export default SettingHeader;
