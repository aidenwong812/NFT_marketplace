"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import SiderList from "./sider"
const Sider = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [siderWidth, setSiderWidth] = useState<number>(300);
  const [logout, setLogout] = useState<boolean>(false);
  const [loading1, setLoading1] = useState<boolean>(false);
  const [loading2, setLoading2] = useState<boolean>(false);
  const [closeButton, setCloseButton] = useState<boolean>(true);
  const [transition, setTransition] = useState<boolean>(true);
  const handleOpenLogout = () => {
    setLogout(!logout);
  };
  // const [loading, setLoading] = useState<boolean>(true);
  const handleCloseSiderBar = () => {
    setSiderWidth(80);
    const sidebar = document.querySelector(".resize-current") as HTMLElement;
    sidebar.style.width = `${80}px`;
    setCloseButton(false);
  };

  useEffect(() => {
    const handle = document.querySelector(".resize-handle") as HTMLElement;
    const sidebar = document.querySelector(".resize-current") as HTMLElement;

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
      if (width > 300) {
        setSiderWidth(300);
        sidebar.style.width = `${300}px`;
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
        className={`desktop:flex-none prevent-select desktop:flex hidden justify-center bg-[#171717] h-full relative resize-current w-[300px] overflow-auto ${
          transition ? "transition-[width] duration-200" : "transition-none"
        }`}
      >
        <div
          className="resize-handle"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "1px",
            cursor: "ew-resize",
          }}
        ></div>
        <button
          className={`absolute right-[40px] top-[60px] ${
            siderWidth > 250 ? "block" : "hidden"
          }`}
          onClick={() => handleCloseSiderBar()}
        >
          <Image
            src="/icon/close.svg"
            width={0}
            height={0}
            alt=""
            className="w-[15px] h-auto"
          />
        </button>
        <div className="w-[80%] flex flex-col h-full">
          <div
            className={`mt-[65px]  ${
              siderWidth > 250
                ? "inline-flex ml-[20px] mb-[30px]"
                : `flex justify-center mb-[40px]`
            }`}
          >
            <div
              className={`h-auto ${siderWidth > 250 ? "w-[50px]" : "w-[40px]"}`}
            >
              {/* {loading && (
                <div className="w-full aspect-square bg-[#121212] rounded-[10px]"></div>
              )} */}
              <img
                src="/icon/new-logo.jpg"
                width={0}
                height={0}
                alt=""
                className={`w-full h-auto`}
                // priority={true}
                // onLoad={() => setLoading(false)}
              />
            </div>
          </div>

          <SiderList pathname={pathname} siderWidth={siderWidth} />

          <div className="bottom-0">
            <ul className="text-white text-md mt-5">
              <button
                className={`mt-[35px] inline-flex w-full hover:opacity-70 transition-all duration-100 ${
                  siderWidth > 250 ? "ml-[22px]" : "justify-center"
                }`}
                onClick={() => router.push("/setting")}
              >
                <div className="w-[40px]">
                  {loading1 && <div className="w-[40px] h-[40px] bg-[#181818] rounded-full animate-pulse"></div>}
                  <Image
                    width={0}
                    height={0}
                    alt=""
                    className={`w-[40px] h-auto ${loading1 && "hidden"}`}
                    src="/avatar/1.svg"
                    priority={true}
                    onLoad={() => setLoading1(false)}
                  />
                </div>
                {siderWidth > 250 ? (
                  <div className={`ml-[10px] flex-row font-ttfirs`}>
                    <div className="text-[#575757] text-[12px]">
                      Good morning
                    </div>
                    <div className="text-[14px]">Yazid KHERRATI!</div>
                  </div>
                ) : null}
              </button>
              {siderWidth > 250 ? (
                <div className="w-full flex justify-center mt-[15px]">
                  <div className="w-[200px] h-[70px] bg-[#4F4F4F] bg-opacity-10 rounded-[20px] flex-col justify-center hover:opacity-70 transition-all duration-100">
                    <p className="text-[#A9A9A9] text-[14px] mt-[7px] text-center">
                      Level 5
                    </p>
                    <div className="w-full flex justify-center mt-[5px]">
                      {loading2 && <div className="w-[150px] h-[30px] rounded-[10px] animate-pulse"></div>}
                      <Image
                        src="/sider/processBar.svg"
                        width={0}
                        height={0}
                        alt={"logo"}
                        priority={true}
                        className={`w-[150px] h-auto ${loading2 && "hidden"}`}
                        onLoad={() => {setLoading2(false)}}
                      />
                    </div>
                    <p className="text-[#A9A9A9] text-[10px] mt-[7px] text-center">
                      XP. 150/1500 XP
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="w-full inline-flex items-center justify-center">
                <button
                  className={`${
                    siderWidth > 250 ? "w-[200px]" : "px-[7px] mb-[20px]"
                  } h-[40px] rounded-full border border-[#535353] inline-flex items-center justify-center font-ttfirs text-[12px] mt-[15px] hover:opacity-70 transition-all duration-100`}
                >
                  <Image
                    src="/icon/metamask.svg"
                    width={0}
                    height={0}
                    alt={"logo"}
                    priority={true}
                    className="w-[25px] h-auto"
                  />
                  {siderWidth > 250 ? (
                    <>
                      <div className="ml-[7px] mr-[7px]">
                        920xUhjdhbw...wdfe
                      </div>
                      <Image
                        src="/icon/copy.svg"
                        width={0}
                        height={0}
                        alt={"logo"}
                        priority={true}
                        className="w-[15px] h-auto"
                      />
                    </>
                  ) : null}
                </button>
              </div>
              {siderWidth > 250 ? (
                <button
                  className="w-full inline-flex items-center justify-center text-[#FF5252] font-ttfirs font-thin text-[13px] mt-[30px] mb-[30px] hover:opacity-70"
                  onClick={handleOpenLogout}
                >
                  Logout{" "}
                  <Image
                    className="ml-[10px] w-[14px] h-auto"
                    src="/icon/logout.svg"
                    width={0}
                    height={0}
                    alt={"logo"}
                    priority={true}
                  />
                </button>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      {logout === true ? (
        <>
          <div
            className="fixed right-0 left-0 top-0 bottom-0 z-10"
            onClick={handleOpenLogout}
          ></div>
          <div className="w-[350px] fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[220px] bg-[#181818] border border-[#393939] rounded-[20px]">
            <p className="w-full flex justify-center text-[20px] font-bold mt-[30px]">
              Logout
            </p>
            <p className="w-full flex justify-center mt-[20px]">
              Are you sure, you want to log out?
            </p>
            <div className="w-full flex justify-center mt-[30px]">
              <button
                className="w-[120px] h-[45px] border border-[#53FAFB] rounded-full text-[#53FAFB] text-[14px] mr-[15px] hover:opacity-70"
                onClick={handleOpenLogout}
              >
                Cancel
              </button>
              <button
                className="w-[120px] h-[45px] bg-[#53FAFB] rounded-full text-black text-[14px] font-bold hover:opacity-70"
                onClick={handleOpenLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
export default Sider;
