"use client";
import React, { useState } from "react";
import { useSettingModal } from "@/providers/SettingModalProvider";
import { usePathname } from "next/navigation";
import Image from "next/image";
const CallingModal = (props: any) => {
  return (
    <>
      <div className="w-full px-[15px] py-[10px] bg-[#202020] inline-flex items-center justify-between rounded-[12px] mb-[10px]">
        <div className="inline-flex items-center">
          <Image
            src={props.item.avatar}
            width={0}
            height={0}
            alt=""
            className="w-[40px] h-auto"
          />
          <div className="ml-[10px] text-left">
            <p className="text-[13px]">{props.item.name}</p>
            <div className="text-[10px]">
              {props.item.type === "screen" ? (
                <p className="text-[#4DE265]">Sharing Screen</p>
              ) : props.item.type === "speaking" ? (
                <p className="text-[#50FFFF]">Speaking</p>
              ) : props.item.type === "rase_hand" ? (
                <p className="text-[#50FFFF]">Raise hand</p>
              ) : props.item.type === "listening" ? (
                <p className="text-[#6F6F6F]">Listening</p>
              ) : null}
            </div>
          </div>
        </div>
        {props.item.type === "screen" ? (
          <Image
            src="/icon/share_screen.svg"
            alt=""
            className="w-[15px] h-auto"
            width={0}
            height={0}
          />
        ) : props.item.type === "speaking" ? (
          <Image
            src="/icon/mic_blue.svg"
            alt=""
            className="w-[20px] h-auto"
            width={0}
            height={0}
          />
        ) : props.item.type === "listening" ? (
          <Image
            src="/icon/mic_grey.svg"
            alt=""
            className="w-[20px] h-auto"
            width={0}
            height={0}
          />
        ) : null}
      </div>
    </>
  );
};
const CallActionModal = () => {
  const { callActionModal, setCallActionModal, calling, setCalling } =
    useSettingModal();
  const [call, setCall] = useState<boolean>(false);
  const callings = [
    { avatar: "/avatar/8.svg", type: "screen", name: "@KitshunaFowyu" },
    { avatar: "/avatar/8.svg", type: "speaking", name: "@KitshunaFowyu" },
  ];
  const callMembers = [
    { avatar: "/avatar/8.svg", type: "rase_hand", name: "@KitshunaFowyu" },
    { avatar: "/avatar/8.svg", type: "listening", name: "@KitshunaFowyu" },
    { avatar: "/avatar/8.svg", type: "listening", name: "@KitshunaFowyu" },
    { avatar: "/avatar/8.svg", type: "listening", name: "@KitshunaFowyu" },
    { avatar: "/avatar/8.svg", type: "listening", name: "@KitshunaFowyu" },
  ];
  const pathName = usePathname();

  return (
    <>
      {callActionModal && pathName.includes("/community") && call && (
        <>
          {/* <div className="fixed left-0 mobile:right-[400px] right-0 top-0 bottom-0 bg-black bg-opacity-[65%] backdrop-blur-[12px] flex items-center justify-center z-30" onClick={() => {setCall(false)}}></div> */}
          <div className="fixed left-0 mobile:right-[400px] right-0 top-0 bottom-0 flex items-center justify-center z-30">
            <div
              className="w-full h-full bg-black bg-opacity-[65%] backdrop-blur-[12px]"
              onClick={() => {
                setCall(false);
              }}
            ></div>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[75%]">
              <Image
                src="/call/bg.svg"
                width={0}
                height={0}
                alt=""
                className="w-auto h-auto"
              />
              <div className="absolute left-[3%] bottom-[5%] w-full">
                <Image
                  src="/call/person.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[15%] h-auto"
                />
              </div>
              <div className="absolute right-[3%] bottom-[55%] w-full">
                <div className="w-full absolute">
                  <div className="absolute right-0 w-[5%]">
                    <Image
                      src="/icon/share_screen_grey.svg"
                      className="w-full h-auto mb-[15%]"
                      width={0}
                      height={0}
                      alt=""
                    />
                    <Image
                      src="/icon/add_person_grey.svg"
                      className="w-full h-auto mb-[15%]"
                      width={0}
                      height={0}
                      alt=""
                    />
                    <Image
                      src="/icon/audio_call_grey.svg"
                      className="w-full h-auto mb-[15%]"
                      width={0}
                      height={0}
                      alt=""
                    />
                    <Image
                      src="/icon/camera_call_grey.svg"
                      className="w-full h-auto mb-[15%]"
                      width={0}
                      height={0}
                      alt=""
                    />
                    <Image
                      src="/icon/mic_call_grey.svg"
                      className="w-full h-auto mb-[15%]"
                      width={0}
                      height={0}
                      alt=""
                    />
                    <button
                      onClick={() => {
                        setCall(false);
                        setCalling(false);
                      }}
                    >
                      <Image
                        src="/icon/call_off.svg"
                        className="w-full h-auto"
                        width={0}
                        height={0}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute right-[3%] top-[5%] w-full">
                <button className="w-full absolute">
                  <div className="absolute right-0 w-[5%] aspect-square rounded-full border-[1px] border-white items-center justify-center flex">
                    <Image
                      src="/icon/zoom_call.svg"
                      width={0}
                      height={0}
                      alt=""
                      className="w-[50%] h-auto"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className={`${
          callActionModal && pathName.includes("/community")
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full bg-[#171717] px-[26px] pt-[50px] pb-[50px]">
          <div className="w-[340px] h-full flex flex-col">
            <div className="inline-flex justify-between w-full items-center">
              <button
                onClick={() => {
                  setCallActionModal(false);
                }}
              >
                <Image
                  src="/icon/back_bgwhite.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[30px] h-auto"
                />
              </button>
              <p>Call Actions</p>
              <Image
                src="/icon/detail_white.svg"
                width={0}
                height={0}
                alt=""
                className="w-[30px] h-auto"
              />
            </div>
            <div className="w-full mt-[100px] h-full overflow-auto">
              <div className="w-full">
                {callings.map((item, index) => (
                  <button
                    className="w-full"
                    key={index}
                    onClick={() => setCall(!call)}
                  >
                    <CallingModal item={item} />
                  </button>
                ))}
              </div>
              <p className="mt-[30px]">Members</p>
              <div className="w-full mt-[30px]">
                {callMembers.map((item, index) => (
                  <button
                    className="w-full"
                    key={index}
                    onClick={() => {
                      setCall(!call);
                      setCalling(!calling);
                    }}
                  >
                    <CallingModal item={item} />
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full mt-[20px] inline-flex justify-between bottom-0">
              <Image
                src="/icon/audio_call.svg"
                width={0}
                height={0}
                alt=""
                className="w-[50px] h-auto"
              />
              <Image
                src="/icon/addperson_call.svg"
                width={0}
                height={0}
                alt=""
                className="w-[50px] h-auto"
              />
              <Image
                src="/icon/camera_call.svg"
                width={0}
                height={0}
                alt=""
                className="w-[50px] h-auto"
              />
              <Image
                src="/icon/mic_call.svg"
                width={0}
                height={0}
                alt=""
                className="w-[50px] h-auto"
              />
              <button
                onClick={() => {
                  setCall(false);
                  setCalling(false);
                }}
              >
                <Image
                  src="/icon/call_off.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[50px] h-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CallActionModal;
