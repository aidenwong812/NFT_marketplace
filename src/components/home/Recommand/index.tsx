"use client";
import React, { useState } from "react";
import Image from "next/image";
const recommendList = [
  { image: "/home/recommendList/1.svg" },
  { image: "/home/recommendList/2.svg" },
  { image: "/home/recommendList/1.svg" },
  { image: "/home/recommendList/2.svg" },
  { image: "/home/recommendList/2.svg" },
  { image: "/home/recommendList/1.svg" },
  { image: "/home/recommendList/2.svg" },
  { image: "/home/recommendList/1.svg" },
  { image: "/home/recommendList/2.svg" },
];
function BlurImage({ image }: any) {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
        {
          isLoading && 
          <div className="w-[200px] h-full bg-[#171717] animate-pulse mr-[10px] rounded-[12px] flex flex-none"></div>
        }
        <Image
          alt=""
          src={image}
          width={0}
          height={0}
          priority={true}
          className={`w-[200px] h-auto duration-700 opacity-100 ${
            isLoading && "hidden"
          }`}
          onLoad={() => setLoading(false)}
        />   
    </>
  );
}
const Recommend = () => {
  const [closeShow, setCloseShow] = useState<boolean>(true);
  const handleClose = () => {
    setCloseShow(false);
  };

  return (
    <div className="w-full mt-[20px] relative">
      <div className="text-[22px]">Recommended</div>
      <div className="overflow-auto w-full inline-flex mt-[20px] h-[200px] relative">
        <div className="w-full overflow-auto inline-flex absolute h-full">
          {recommendList.map((item, index) => (
            <BlurImage image={item.image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Recommend;
