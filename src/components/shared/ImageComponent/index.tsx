"use client";
import React from "react";
import Image from "next/image";
function BlurImage(props: any) {
  return (
    <>
      {props.image && (
        <Image
          alt=""
          src={props.image + ""}
          width={props.width}
          height={0}
          priority={true}
          className={`w-[${props.width}px] h-auto ${
            props.isLoading && "hidden"
          }`}
          onLoad={() => props.setLoading(false)}
        />
      )}
    </>
  );
}
export default BlurImage;
