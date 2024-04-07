"use client";
import React, { ChangeEvent } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const ImageComponent = dynamic(
  () => import("@/components/shared/ImageComponent/demo")
);

interface PhoneNumberProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const PhoneNumber: React.FC<PhoneNumberProps> = ({ handleChange }) => {
  return (
    <>
      <div className="flex items-center mt-[20px] relative">
        <div className="absolute ml-[25px] w-[20px]">
          <ImageComponent src="/icon/france.svg" height={20} />
        </div>
        <div className="absolute text-white ml-[55px] font-ttfirs font-thin text-[14px] top-[17px]">
          +33
        </div>
        <div className="absolute text-[#393939] ml-[93px]">|</div>
        <input
          name="phoneNumber"
          className="w-full text-[14px] bg-[#191919] placeholder:font-ttfirs text-white placeholder-[#4C4C4C] outline-none py-[15px] rounded-[15px] pl-[103px] pr-[20px]"
          placeholder={`Type your phone number`}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
export default PhoneNumber;
