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
        className={`w-full inline-flex items-center mb-[15px] px-[15px] py-[10px] rounded-[14px] hover:bg-[#53FAFB] hover:bg-opacity-10 focus:bg-[#53FAFB] focus:bg-opacity-10 ${
          props.siderWidth > 270 ? "justify-between" : "justify-center"
        } ${pathName === props.url ? "bg-[#53FAFB] bg-opacity-10" : ""}`}
        onClick={() => {
          router.push(props?.url);
        }}
      >
        <div className="inline-flex items-center justify-center">
          <Image
            src={props.icon}
            width={0}
            height={0}
            alt=""
            className="w-[28px] h-auto"
          />
          {props.siderWidth > 270 ? (
            <p className={`text-[14px] ml-[10px]`}>{props.title}</p>
          ) : null}
        </div>
        {props.siderWidth > 270 ? (
          <p className={`text-[14px] ml-[10px]`}>
            <Image
              src="/icon/right.svg"
              width={0}
              height={0}
              alt=""
              className="w-[8px] h-auto"
            />
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
        <button
          className={`absolute right-[40px] top-[40px] ${
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
        <div
          className={`w-full items-center ${
            siderWidth > 270 ? "justify-between" : "justify-center"
          } inline-flex mt-[33px] h-[40px]`}
        >
          <button
            className="flex items-center"
            onClick={() => router.push("/home")}
          >
            <Image
              src="/icon/back_black.svg"
              alt=""
              width={0}
              height={0}
              className="w-[40px] h-auto"
            />
          </button>
          <p className="text-[18px] mt-[-10px]">
            {siderWidth > 270 ? "Settings" : ""}
          </p>
          {siderWidth > 270 ? <div className="w-[40px]"></div> : ""}
        </div>

        <div className="inline-flex justify-between items-center w-full mt-[30px]">
          <div className="relative">
            <Image
              width={0}
              height={0}
              alt=""
              src="/icon/search_grey.svg"
              className="w-[13px] h-auto absolute left-[10px] top-[14px]"
            />
            <input
              className={`w-[220px] bg-[#181818] border-none outline-none rounded-full py-[10px] pl-[30px] text-[14px] ${
                siderWidth < 275 ? "hidden" : "block"
              }`}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <button
            className={`text-[12px] text-[#53FAFB] ${
              siderWidth < 345 ? "hidden" : "block"
            }`}
            onClick={() => {
              setSearch("");
            }}
          >
            Cancel
          </button>
        </div>
        <button
          className={`w-full inline-flex  mt-[40px] items-center h-[50px] ${
            siderWidth < 270 ? "justify-center" : "justify-between"
          }`}
          onClick={() => {
            router.push("/setting");
          }}
        >
          <div className={`inline-flex items-center`}>
            <div className="h-[50px]">
              <Image
                src="/avatar/19.svg"
                width={0}
                height={0}
                alt=""
                className="w-[50px] h-auto"
              />
            </div>
            <div
              className={`ml-[10px] ${siderWidth < 270 ? "hidden" : "block"}`}
            >
              <div className="inline-flex text-[14px]">
                <p>Kitshuna Fowyu</p>
                <Image
                  src="/icon/check.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[10px] h-auto ml-[5px]"
                />
              </div>
              <p className="text-[10px] text-[#979797] text-left">
                @KitshunaFowyu
              </p>
            </div>
          </div>
          <Image
            src="/icon/right.svg"
            className={`w-[8px] h-auto ${
              siderWidth < 270 ? "hidden" : "block"
            }`}
            alt=""
            width={0}
            height={0}
          />
        </button>
        {siderWidth > 270 ? (
          <p className="mt-[30px] mb-[30px]">Account Settings</p>
        ) : (
          <p className="mt-[30px] mb-[30px]"></p>
        )}
        <SettingItem
          icon="/icon/accountpreferences.svg"
          title="Account Preferences"
          siderWidth={siderWidth}
          url="/setting/account"
        />
        <SettingItem
          icon="/icon/notification.svg"
          title="Notifications"
          siderWidth={siderWidth}
          url="/setting/notifications"
        />
        <SettingItem
          icon="/icon/message.svg"
          title="Messages"
          siderWidth={siderWidth}
          url="/setting/messages"
        />
        <SettingItem
          icon="/icon/communities.svg"
          title="Communities"
          siderWidth={siderWidth}
          url="/setting/communities"
        />
        <SettingItem
          icon="/icon/saved.svg"
          title="Saved"
          siderWidth={siderWidth}
          url="/setting/saved"
        />
        {siderWidth > 270 ? (
          <p className="mt-[30px] mb-[30px]">App Settings</p>
        ) : (
          <p className="mt-[30px] mb-[30px]"></p>
        )}

        <SettingItem
          icon="/icon/security.svg"
          title="Sign & Security"
          siderWidth={siderWidth}
          url="/setting/security"
        />
        <SettingItem
          icon="/icon/DataPrivacy.svg"
          title="Data Privacy"
          siderWidth={siderWidth}
          url="/setting/dataPrivacy"
        />
        <SettingItem
          icon="/icon/languages.svg"
          title="Languages"
          siderWidth={siderWidth}
          url="/setting/languages"
        />
        <SettingItem
          icon="/icon/display.svg"
          title="Display"
          siderWidth={siderWidth}
          url="/setting/display"
        />
        <SettingItem
          icon="/icon/devices.svg"
          title="Devices"
          siderWidth={siderWidth}
          url="/setting/devices"
        />
        {siderWidth > 270 ? (
          <p className="mt-[30px] mb-[30px]">Wallet</p>
        ) : (
          <p className="mt-[30px] mb-[30px]"></p>
        )}

        <SettingItem
          icon="/icon/wallet.svg"
          title="Connect your wallet"
          siderWidth={siderWidth}
          url="/setting/wallet"
        />

        {siderWidth > 270 ? (
          <p className="mt-[30px] mb-[30px]">Others</p>
        ) : (
          <p className="mt-[30px] mb-[30px]"></p>
        )}
        <SettingItem
          icon="/icon/invite.svg"
          title="Invite Friends"
          siderWidth={siderWidth}
          url="/setting/invite"
        />
        <SettingItem
          icon="/icon/switch.svg"
          title="Switch or Add Accounts"
          siderWidth={siderWidth}
          url="/setting/switch"
        />
        <SettingItem
          icon="/icon/close_red.svg"
          title="Close Account"
          siderWidth={siderWidth}
          url="/setting/close"
        />
        <p className="mt-[30px] mb-[30px]"></p>
        <SettingItem
          icon="/icon/support.svg"
          title="Support & Help"
          siderWidth={siderWidth}
          url="/setting/support"
        />
        <SettingItem
          icon="/icon/info.svg"
          title="Infos & About"
          siderWidth={siderWidth}
          url="/setting/info"
        />
      </div>
    </>
  );
};
export default SettingSider;
