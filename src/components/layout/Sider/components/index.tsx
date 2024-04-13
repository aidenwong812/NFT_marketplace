"use client";
import React, { useEffect, useState } from "react";
import ImageComponent from "@/components/shared/ImageComponent/demo";
import { useRouter } from "next/navigation";
import Image from "next/image";
const _renderLinkItem = (props: any) => {
  const router = useRouter();
  const handleNavigate = (_url: string) => {
    router.push(_url);
  };
  // const [loading, setLoading] = useState<boolean>(true);
  return (
    <div className="w-full items-center justify-center flex">
      {/* {loading=== true && (
        <div
          className={`relative mb-[10px] py-3 ${
            props.siderWidth < 250 ? "justify-center w-[40px]" : "px-5 w-full"
          } rounded-[10px] bg-[#121212] animate-pulse`}
        ></div>
      )} */}
      {/* <div className={`${loading ? "hidden" : "block"}`}> */}
      <li
        onClick={() => handleNavigate(props._url)}
        className={`relative flex items-center mb-[10px] py-3 focus:bg-[#50FFFF0D] ${
          props.siderWidth < 250 ? "justify-center w-[40px]" : "px-5 w-full"
        } text-white hover:border-[#F7F9FC] hover:bg-[#50FFFF0D] cursor-pointer text-sm rounded-[10px] font-ttfirs ${
          props._url === "/home" && props._url === props.pathname
            ? "bg-[#50FFFF0D] border-none"
            : props._url !== "/home" && props.pathname.includes(props._url)
            ? "bg-[#50FFFF0D] border-none"
            : ""
        }`}
      >
        {props._url === "/home" && props._url === props.pathname ? (
          <div
            className={`${props.siderWidth > 250 ? `mr-[15px]` : ""} w-[20px]`}
          >
            <Image
              src={props._clickedIcon}
              height={0}
              width={0}
              alt=""
              className="w-[20px] h-auto"
            />
          </div>
        ) : props._url !== "/home" && props.pathname.includes(props._url) ? (
          <div
            className={`${props.siderWidth > 250 ? `mr-[15px]` : ""} w-[20px]`}
          >
            <Image
              src={props._clickedIcon}
              width={0}
              height={0}
              alt=""
              className="w-[20px] h-auto"
              priority={true}
            />
          </div>
        ) : (
          <div
            className={`${props.siderWidth > 250 ? `mr-[15px]` : ""} w-[18px]`}
          >
            <Image
              src={props._icon}
              height={0}
              width={0}
              alt=""
              className="w-[18px] h-auto"
            />
          </div>
        )}
        {props.siderWidth > 250 ? (
          <>
            {props._name}
            {props._url === "/home" && props._url === props.pathname ? (
              <>
                <div className="absolute right-[20px] w-[8px]">
                  <Image
                    src="/icon/active.svg"
                    height={0}
                    width={0}
                    alt=""
                    className="w-[8px] h-auto"
                  />
                </div>
              </>
            ) : props._url !== "/home" &&
              props.pathname.includes(props._url) ? (
              <div className="absolute right-[20px] w-[8px]">
                <Image
                  src="/icon/active.svg"
                  height={0}
                  width={0}
                  className="w-[8px] h-auto"
                  alt=""
                />
              </div>
            ) : (
              <></>
            )}
          </>
        ) : null}
      </li>
    </div>
    // </div>
  );
};
export default _renderLinkItem;
