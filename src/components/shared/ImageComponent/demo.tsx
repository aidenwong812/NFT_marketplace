"use client";
import React, { useState } from "react";
import Image from "next/image";
const ImageComponent = (props: any) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  return (
    <>
      {isLoading && (
        <div className="w-full aspect-[2.5/3] bg-[#171717] animate-pulse mr-[10px] rounded-[12px] flex flex-none"></div>
      )}
      <Image
        alt=""
        src={props.src}
        width={0}
        height={0}
        priority={true}
        className={`w-full ${props.height ? `h-${props.height}px` : "h-auto"} rounded-[24px] duration-700 opacity-100 ${
          isLoading && "hidden"
        }`}
        onLoad={() => {setLoading(false)}}
      />{" "}
    </>
  );
};
export default ImageComponent;
