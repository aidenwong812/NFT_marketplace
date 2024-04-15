"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NewNFTs = (props: any) => {
  const router = useRouter();

  return (
    <>
      <button
        className={`w-full flex-none relative hover:opacity-70 transition-all duration-100`}
        onClick={() => {
          router.push(`/marketplace/${props.mint}`);
        }}
      >
        <img
          src={props.cached_image_uri}
          width={0}
          height={0}
          alt=""
          className="w-full h-auto rounded-[18px]"
        />
        <div className="w-full h-[50%] bg-black absolute bottom-0 rounded-[18px] bg-opacity-25 backdrop-blur-[10px] flex-row px-[15px] py-[15px]">
          <div className="w-full inline-flex justify-between items-center">
            <p>Supernova ITALY †</p>
            <Image
              src={props.item.avatar}
              width={0}
              height={0}
              alt=""
              className="w-[20px] h-auto"
              priority={true}
            />
          </div>
          <div className="w-full inline-flex items-center justify-between mt-[5px]">
            <div className="h-[30px] w-[76px] rounded-full bg-white bg-opacity-[9%] inline-flex px-[3px] items-center text-[8px]">
              <Image
                src={props.item.user}
                width={0}
                height={0}
                alt=""
                className="w-[20px] h-auto mr-[5px]"
                priority={true}
              />
              Kemoutyo
            </div>
            <div className="inline-flex items-center">
              <div className="text-right mr-[5px]">
                <p className="text-[9px]">7,12 SOL</p>
                <p className="text-[5px]">3 212 USD</p>
              </div>
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[18px] h-auto"
                priority={true}
              />
            </div>
          </div>
        </div>
      </button>
    </>
  );
};
export default NewNFTs;
