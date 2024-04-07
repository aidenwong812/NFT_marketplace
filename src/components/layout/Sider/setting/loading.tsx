"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
const SettingItem = (props: any) => {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <>
      <button
        className={`w-full inline-flex items-center mb-[15px] px-[15px] py-[10px] rounded-[14px] hover:bg-[#53FAFB] hover:bg-opacity-10 ${
          props.siderWidth > 270 ? "justify-between" : "justify-center"
        } ${pathName === props.url ? "bg-[#53FAFB] bg-opacity-10" : ""}`}
        onClick={() => {
          router.push(props?.url);
        }}
      >
        <div className="inline-flex items-center justify-center">
          <div className="h-[28px] w-[28px]">
            <Image
              src={props.icon}
              width={0}
              height={0}
              alt=""
              className="w-[28px] h-auto"
            />
          </div>
          {props.siderWidth > 270 ? (
            <p className={`text-[14px] ml-[10px]`}>{props.title}</p>
          ) : null}
        </div>
        {props.siderWidth > 270 ? (
          <p className={`text-[14px] ml-[10px]`}>
            <div className="w-[8px] h-[8px]">
              <Image
                src="/icon/right.svg"
                width={0}
                height={0}
                alt=""
                className="w-[8px] h-auto"
              />
            </div>
          </p>
        ) : null}
      </button>
    </>
  );
};
const SettingSider = () => {
  const [transition, setTransition] = useState<boolean>(true);
  const [siderWidth, setSiderWidth] = useState<number>(350);
  const [closeButton, setCloseButton] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const router = useRouter();
  const handleCloseSiderBar = () => {
    setSiderWidth(80);
    const sidebar = document.querySelector(
      ".settingBar-current"
    ) as HTMLElement;
    sidebar.style.width = `${80}px`;
    setCloseButton(false);
  };
  useEffect(() => {
    const handle = document.querySelector(".settingBar-handle") as HTMLElement;
    const sidebar = document.querySelector(
      ".settingBar-current"
    ) as HTMLElement;
    if (!handle || !sidebar) {
      return;
    }

    let isResizing = false;
    let lastDownX = 0;

    handle.addEventListener("mousedown", (e: MouseEvent) => {
      isResizing = true;
      lastDownX = e.clientX || 0;
      setTransition(false);
    });

    document.addEventListener("mousemove", (e: Event) => {
      if (!isResizing) return;

      const width = (e as MouseEvent).clientX;
      if (width > 350) {
        setSiderWidth(350);
        sidebar.style.width = `${350}px`;
      } else if (width > 80) {
        setSiderWidth(width);
        sidebar.style.width = `${width}px`;
      } else {
        setSiderWidth(80);
        sidebar.style.width = `${80}px`;
      }
    });

    document.addEventListener("mouseup", () => {
      isResizing = false;
      setTransition(true);
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
      document.removeEventListener("mouseup", () => {});
    };
  }, []);
  return (
    <>
      <div
        className={`w-[350px] h-full bg-[#0E0E0E] desktop:block hidden ${
          siderWidth > 125 ? "px-[35px]" : "px-[5px]"
        }  overflow-auto desktop:flex-none prevent-select settingBar-current relative ${
          transition ? "transition-all duration-200" : "transition-none"
        }`}
      >
        <div
          className="settingBar-handle"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "1px",
            cursor: "ew-resize",
          }}
        ></div>
        <div
          className={`w-full items-center ${
            siderWidth > 270 ? "justify-between" : "justify-center"
          } inline-flex mt-[33px]`}
        >
          <button
            className="flex items-center"
            onClick={() => router.push("/home")}
          >
            <div className="w-[40px] aspect-square rounded-full bg-[#181818] animate-pulse"></div>
          </button>
          <p className="text-[18px] mt-[-10px]">
            <div className="w-[100px] rounded-full h-[30px] bg-[#181818] animate-pulse"></div>
          </p>
          {siderWidth > 270 ? <div className="w-[40px]"></div> : ""}
        </div>

        <div className="inline-flex justify-between items-center w-full mt-[30px]">
          <div className="relative">
            <div className="w-[220px] bg-[#181818] rounded-full h-[40px] animate-pulse"></div>
          </div>
        </div>
        <div
          className={`w-full inline-flex  mt-[40px] items-center ${
            siderWidth < 270 ? "justify-center" : "justify-between"
          }`}
        >
          <div
            className={`inline-flex items-center rounded-[10px] bg-[#181818] animate-pulse h-[50px] w-full`}
          ></div>
        </div>
        <div className="w-[200px] h-[30px] rounded-[10px] bg-[#181818] animate-pulse mt-[20px] mb-[30px]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-[200px] h-[30px] rounded-[10px] bg-[#181818] animate-pulse mt-[20px] mb-[30px]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
        <div className="w-full h-[40px] mb-[15px] rounded-[10px] animate-pulse bg-[#181818]"></div>
      </div>
    </>
  );
};
export default SettingSider;
