"use client";
import React from "react";
import { useRouter } from "next/navigation";

const AccountHeader = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full justify-between inline-flex items-end mt-[40px]">
        <button
          className="text-[#53FAFB]"
          onClick={() => {
            router.back();
          }}
        >
          Back
        </button>
        <p className="text-[22px]">Edit Profile</p>
        <p></p>
      </div>
    </>
  );
};
export default AccountHeader;
