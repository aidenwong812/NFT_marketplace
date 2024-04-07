"use client";
import React, {useState} from "react";
import Image from "next/image";
const Page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <>
      <div className="w-full h-full relative">
        <div className="w-full h-full absolute overflow-auto">
          <div className="w-full justify-center inline-flex mt-[30px]">
            {loading && <div className="w-[100px] aspect-square rounded-full bg-[#121212] animate-pulse opacity-100"></div>}
            <Image
              src="/avatar/20.svg"
              width={0}
              height={0}
              alt=""
              className={`w-[100px] h-auto ${loading && "hidden"}`}
              priority={true}
              onLoad={() => {setLoading(false)}}
            />
          </div>
          <p className="w-full text-center text-[20px] mt-[10px]">
            Group #0001
          </p>
          <p className="w-full text-center text-[14px] mt-[10px] text-[#5D5D5D]">
            The terms and conditions contained in this Agreement and
            understandings, whether oral or written.
          </p>
          <p className="w-full text-center text-[16px] mt-[30px] text-[#5D5D5D]">
            Samit is created the Group of : Group #0001
          </p>
          <button className="w-full text-center text-[#50FFFF] mt-[20px]">
            Click to Invite People
          </button>
        </div>
      </div>
    </>
  );
};
export default Page;
