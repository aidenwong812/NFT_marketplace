"use client";
import React from "react";
import Image from "next/image";
const TeamMember = () => {
  return (
    <>
      <div className="w-[180px] h-[220px] rounded-[12px] bg-[#1B1B1B]">
        <div className="w-full flex justify-center mt-[30px]">
          <Image
            src="/avatar/17.svg"
            width={0}
            height={0}
            alt=""
            className="w-[70px] h-auto"
          />
        </div>
        <p className="w-full text-center">Kitshun Fowyu</p>
        <p className="w-full text-center text-[11px] text-[#4C4C4C]">
          24 Mutual Friends
        </p>
        <div className="w-full flex justify-center">
          <button className="bg-[#53FAFB] rounded-full w-[100px] h-[35px] mt-[20px] text-black text-[12px] font-semibold flex items-center justify-center">
            Add Friend
          </button>
        </div>
      </div>
    </>
  );
};
const Team = () => {
  return (
    <>
      <div className="w-full h-full bg-[#121212] mobile:px-[50px] px-[20px] pt-[50px] overflow-auto prevent-select">
        <div className="w-full">
          <p className="text-[22px] mb-[22px]">Team</p>
          <div className="flex flex-wrap gap-[20px] mb-[30px]">
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
