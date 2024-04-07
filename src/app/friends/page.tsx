"use client";
import React, { useState } from "react";
import Image from "next/image";
const Friend = () => {
  const [category, setCategory] = useState<string>("add");

  return (
    <div className="w-full h-full mobile:px-[50px] px-[10px] bg-[#121212] relative flex flex-col prevent-select">
      <div className="inline-flex mt-[30px] overflow-auto">
        <button
          className={`px-[30px] pt-[10px] pb-[8px] inline-flex items-center w-[162px] flex-none ${
            category === "add"
              ? "bg-[#53FAFB] text-black"
              : "bg-[#1E1E1E] text-[#6D6D6D]"
          } text-[14px] inline-flex font-bold rounded-full mr-[10px]`}
          onClick={() => setCategory("add")}
        >
          {category === "add" ? (
            <Image
              src="/icon/add_friend_black.svg"
              width={0}
              height={0}
              alt=""
              className="w-[20px] mr-[10px] mt-[-2px]"
            />
          ) : (
            <Image
              src="/icon/add_friend.svg"
              width={0}
              height={0}
              alt=""
              className="w-[20px] mr-[10px]"
            />
          )}
          <p>Add Friend</p>
        </button>
        <button
          className={`px-[20px] py-[12px] w-[130px] flex-none ${
            category === "request"
              ? "bg-[#53FAFB] text-black"
              : "bg-[#1E1E1E] text-[#6D6D6D]"
          } text-[14px] inline-flex font-bold rounded-full mr-[10px]`}
          onClick={() => setCategory("request")}
        >
          <p>Request Sent</p>
        </button>
        <button
          className={`px-[20px] py-[12px] w-[153px] flex-none ${
            category === "suggestion"
              ? "bg-[#53FAFB] text-black"
              : "bg-[#1E1E1E] text-[#6D6D6D]"
          } text-[14px] inline-flex font-bold rounded-full mr-[10px] items-center`}
          onClick={() => setCategory("suggestion")}
        >
          <p>Suggestions</p>
          <div
            className={`px-[10px] py-[2px] ml-[5px] font-thin text-[10px] rounded-full bg-opacity-10 ${
              category === "suggestion"
                ? "bg-[#1E1E1E] text-[#6D6D6D] bg-opacity-10"
                : "bg-[#53FAFB] text-[#53FAFB] bg-opacity-10"
            }`}
          >
            213
          </div>
        </button>
        <button
          className={`px-[20px] py-[12px] w-[130px] flex-none ${
            category === "requests"
              ? "bg-[#53FAFB] text-black"
              : "bg-[#1E1E1E] text-[#6D6D6D]"
          } text-[14px] inline-flex font-bold rounded-full mr-[10px] items-center`}
          onClick={() => setCategory("requests")}
        >
          <p>Requests</p>
          <div
            className={`px-[10px] py-[2px] ml-[5px] font-thin text-[10px] rounded-full bg-opacity-10 ${
              category === "requests"
                ? "bg-[#1E1E1E] text-[#6D6D6D] bg-opacity-10"
                : "bg-[#53FAFB] text-[#53FAFB] bg-opacity-10"
            }`}
          >
            10
          </div>
        </button>
        <button
          className={`px-[20px] py-[12px] w-[92px] flex-none ${
            category === "blocked"
              ? "bg-[#53FAFB] text-black"
              : "bg-[#FF5252] bg-opacity-40 text-[#FF5252]"
          } text-[14px] inline-flex font-bold rounded-full mr-[10px]`}
          onClick={() => setCategory("blocked")}
        >
          <p>Blocked</p>
        </button>
      </div>
      {category === "add" ? (
        <div className="flex w-full h-full items-center justify-center">
          <div className="flex-col text-center">
            <p className="text-[30px]">Add friend</p>
            <p className="text-[15px] text-[#707070] mt-[30px]">
              You have no friends Yet.
            </p>
            <button className="bg-[#53FAFB] w-[350px] h-[50px] font-bold text-black text-[20px] rounded-[12px] mt-[30px] hover:opacity-70">
              Send Friend Request
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Friend;
