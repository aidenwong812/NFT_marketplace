"use client";
import React, { useState } from "react";
import Image from "next/image";
const AccountSetting = () => {
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  return (
    <>
      <div className="w-full h-full mobile:px-[50px] px-[20px] pt-[50px] overflow-auto">
        <div className="w-full h-full">
          <div className="flex items-center justify-center">
            <button className="bg-[#191919] w-[150px] aspect-square rounded-[20px] flex items-center justify-center">
              <div className="w-[50px] aspect-square rounded-[12px] bg-[#53FAFB] bg-opacity-5 flex items-center justify-center">
                <Image
                  src="/icon/camera_green.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[20px] h-auto"
                />
              </div>
            </button>
          </div>
          <div className="w-full grid mobile:grid-cols-2 grid-cols-1 gap-[20px] mt-[20px]">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword1(e.target.value);
              }}
              className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px]"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
              className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px]"
            />
          </div>
          <p className="w-full mt-[10px] text-[#707070] text-[12px] mobile:px-[30px] px-[10px]">The terms and conditions contained in this Agreement shall constitute the entire agreement between ...</p>
          <p className="w-full mt-[30px] text-[15px] text-[#494949]">Setting 01</p>
          <input
            placeholder="Bio"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px] mt-[10px]"
          />
          <p className="w-full mt-[30px] text-[15px] text-[#494949]">Username</p>
          <input
            placeholder="username"
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px] mt-[10px]"
          />
        </div>
      </div>
    </>
  );
};
export default AccountSetting;
