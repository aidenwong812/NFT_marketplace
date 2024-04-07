"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const FriendsHeaderLoader = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full inline-flex justify-between mt-[40px] items-center">
          <div className="inline-flex items-center text-[20px]">
            <div className="w-[50px] aspect-square bg-[#181818] animate-pulse rounded-full"></div>
            <div className="ml-[20px] mt-[-5px] mobile:block hidden bg-[#181818] w-[100px] h-[20px] animate-pulse rounded-full"></div>
          </div>
          <div className="mobile:w-[400px] w-[250px] h-[40px] rounded-[10px] bg-[#181818] animate-pulse relative">
          </div>
        </div>
      </div>
    </>
  );
};
export default FriendsHeaderLoader;
