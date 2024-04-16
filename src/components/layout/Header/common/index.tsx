"use client";
import React, { useState } from "react";
import Image from "next/image";
const CommonHeader = () => {
  return (
    <div className="w-full h-[80px] relative">
      <Image
        src="/home/title.png"
        width={600}
        height={0}
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        alt="title"
      />
    </div>
  );
};
export default CommonHeader;
