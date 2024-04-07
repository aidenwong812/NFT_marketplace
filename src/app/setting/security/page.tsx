"use client";
import React, {useState, useEffect} from "react";
const Security = () => {
  const [oldPassword, setOldPassword] = useState<string>("")
  const [newPassword, setNewPassword] = useState<string>("")
  return (
    <>
      <div className="w-full h-full pt-[50px] mobile:px-[50px] px-[20px] overflow-auto">
        <div className="w-full h-full">
          <p className="text-[#494949]">Old Password</p>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {setOldPassword(e.target.value)}}
            className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px] mt-[20px]"
          />
          <div className="w-full px-[20px] mt-[20px]">
            <p className="text-[#707070]">The terms and conditions contained in this Agreement shall constitute the entire agreement between ...</p>
          </div>
          <p className="text-[#494949] mt-[60px]">New Password</p>
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => {setNewPassword(e.target.value)}}
            className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px] mt-[20px]"
          />
          <input
            type="password"
            placeholder="New Password"
            onChange={(e) => {setNewPassword(e.target.value)}}
            className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px] mt-[20px]"
          />
        </div>
      </div>
    </>
  );
};
export default Security;
