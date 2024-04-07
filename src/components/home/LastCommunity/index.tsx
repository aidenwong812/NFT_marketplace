"use client";
import React, { useState } from "react";
import Image from "next/image";
const lastCommunityList = [
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
  {
    image: "/home/lastcommunity.svg",
    childrenAvatar: "/avatar/12.svg",
  },
];
function BlurImage({ image }: any) {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      {isLoading && (
        <div className="w-[165px] h-full bg-[#171717] animate-pulse mr-[10px] rounded-[12px] flex-none"></div>
      )}
      <Image
        alt=""
        src={image}
        width={0}
        height={0}
        priority={true}
        className={`w-[165px] h-auto duration-700 opacity-100 ${
          isLoading && "hidden"
        }`}
        onLoad={() => setLoading(false)}
      />
    </>
  );
}

const LastCommunity = () => {
  const [closeShow, setCloseShow] = useState<boolean>(true);
  const handleClose = () => {
    setCloseShow(false);
  };
  return (
    <div className="w-full mt-[20px] relative">
      <div className="text-[22px]">Last Community</div>
      <div className="overflow-auto w-full inline-flex mt-[20px] gap-[10px] h-[200px] relative">
        <div className="w-full h-full absolute inline-flex">
          {lastCommunityList.map((item, index) => (
            <BlurImage image={item.image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LastCommunity;
