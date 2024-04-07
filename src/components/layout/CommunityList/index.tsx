"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useSettingModal } from "@/context/communitysetting";
const ChatList = (props: any) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <>
      <button
        className={`w-full h-[60px] inline-flex ${
          props.siderWidth < 188 ? "justify-center" : "justify-between"
        } mb-[5px] px-[12px] py-[5px] hover:bg-[#50FFFF] hover:bg-opacity-5 focus:bg-[#50FFFF] focus:bg-opacity-5 ${
          pathName === `/chats/${props.item.id}`
            ? "bg-[#50FFFF] bg-opacity-5"
            : ""
        } rounded-[10px] items-center`}
        onClick={() => {
          router.push(`/chats/${props.item.id}`);
        }}
      >
        <div className="inline-flex items-center">
          <Image
            src={props.item.avatar}
            alt=""
            width={0}
            height={0}
            className="w-[40px] h-auto"
          />
          <div className={`ml-[10px] ${props.siderWidth < 390 && "hidden"}`}>
            <p className="text-left">{props.item.groupname}</p>
            <p className="text-[10px] text-[#797C7B] text-left">
              {props.item.status}
            </p>
          </div>
        </div>
        <div
          className={`relative text-right ${
            props.siderWidth < 188 && "hidden"
          }`}
        >
          <p className="text-[#797C7B] text-[12px]">{props.item.lastseen}</p>
          <div className="inline-flex">
            {props.item.mute && (
              <Image
                src="/icon/ring_mute.svg"
                width={0}
                height={0}
                alt=""
                className="w-[15px] h-auto flex flex-none mr-[5px]"
              />
            )}
            {props.item.unreadMessage !== 0 ? (
              <div className="px-[5px] py-[2px] rounded-full bg-[#53FAFB] text-[10px] text-black">
                {props.item.unreadMessage}
              </div>
            ) : (
              <Image
                src="/icon/read.svg"
                width={0}
                height={0}
                alt=""
                className="w-[15px] h-auto"
              />
            )}
          </div>
        </div>
      </button>
    </>
  );
};
const CommunityList = (props: any) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("chat");
  const [siderWidth, setSiderWidth] = useState<number>(400);
  const handleSider = () => {
    setSiderWidth(80);
    const sidebar = document.querySelector(".resize-current1") as HTMLElement;
    sidebar.style.width = `${80}px`;
  };
  const communityList = [
    {
      icon: "/avatar/2.svg",
      id: 1,
      unReadMessage: 18,
      name: "Fernando TOYs",
    },
    {
      icon: "/avatar/2.svg",
      id: 2,
      unReadMessage: 0,
      name: "Fernando TOYs",
    },
    {
      icon: "/avatar/2.svg",
      id: 3,
      unReadMessage: 0,
      name: "Fernando TOYs",
    },
    {
      icon: "/avatar/2.svg",
      id: 4,
      unReadMessage: 0,
      name: "Fernando TOYs",
    },
    {
      icon: "/avatar/2.svg",
      id: 5,
      unReadMessage: 0,
      name: "Fernando TOYs",
    },
  ];
  const chats = [
    {
      avatar: "/avatar/8.svg",
      groupname: "Group #0001",
      status: "Samir is Typing ...",
      lastseen: "2 min ago",
      mute: true,
      unreadMessage: 3,
      readyStatus: false,
      id: 1,
    },
    {
      avatar: "/avatar/8.svg",
      groupname: "Dramatika FELHO",
      status: "Typing ...",
      lastseen: "2 min ago",
      mute: false,
      unreadMessage: 23,
      readyStatus: false,
      id: 2,
    },
    {
      avatar: "/avatar/8.svg",
      groupname: "T2OORO Grow",
      status: "Draft : https://emojipedia.org/super-bowl",
      lastseen: "Yesterday",
      mute: false,
      unreadMessage: 0,
      readyStatus: true,
      id: 3,
    },
  ];
  const router = useRouter();
  const pathName = usePathname();
  const {
    newCommunityModal,
    setNewCommunityModal,
    newGroupModal,
    setNewGroupModal,
  } = useSettingModal();
  const [selectCommunityType, setSelectCommunityType] =
    useState<boolean>(false);
  const [transition, setTransition] = useState<boolean>(true);
  const Components = (props: any) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
      <>
        {" "}
        <div
          className="has-tooltip text-[12px]"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span className="tooltip ml-[100px] w-[150px] mt-[-2px] h-[50px] rounded-[12px] bg-[#50FFFF] backdrop-blur-xl bg-opacity-35 p-1 text-left font-normal text-white shadow-lg flex items-center justify-center text-[14px]">
            {props.item.name}
          </span>
          <button
            className={`w-full flex items-center justify-center mt-[17px] relative hover:opacity-70 ${
              pathName === `/home/community/${props.item.id}`
                ? "border-r-[3px] border-r-[#53FAFB] rounded-l-full"
                : ""
            } `}
            onClick={() => {
              router.push(`/community/${props.item.id}`);
            }}
          >
            <Image width={45} height={45} alt="" src={props.item.icon} />
            {props.item.unReadMessage ? (
              <div className="absolute right-[10px] bottom-[-6px]">
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    width={20}
                    height={20}
                    alt=""
                    src="/icon/18active.svg"
                  />
                </div>
              </div>
            ) : null}
            {pathName === `/community/${props.item.id}` || hover ? (
              <>
                <div className="absolute border-r-[3px] rounded-l-full border-r-[#53FAFB] h-full right-0"></div>
              </>
            ) : null}
          </button>
        </div>
      </>
    );
  };
  let handle = document.querySelector(".resize-handle1") as HTMLElement;
  let sidebar = document.querySelector(".resize-current1") as HTMLElement;
  const [change, setChange] = useState(true)
  useEffect(() => {
    handle = document.querySelector(".resize-handle1") as HTMLElement;
    sidebar = document.querySelector(".resize-current1") as HTMLElement;
    setChange(!change)
  }, [pathName]);
  useEffect(() => {
    handle = document.querySelector(".resize-handle1") as HTMLElement;
    sidebar = document.querySelector(".resize-current1") as HTMLElement;
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
      const width = (e as MouseEvent).clientX - 300;
      if (width > 400) {
        setSiderWidth(400);
        sidebar.style.width = `${400}px`;
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
  }, [change]);
  return (
    <>
      {pathName === "/chats" || pathName.includes("/chats") ? (
        <div
          className={`w-[400px] desktop:block hidden resize-current1 justify-center bg-[#1C1C1C] h-full flex-none prevent-select ${
            siderWidth < 150 ? "px-[10px]" : "px-[30px]"
          } pt-[50px] relative ${
            transition ? "transition-[width] duration-200" : "transition-none"
          }`}
        >
          <div
            className="resize-handle1"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "10px",
              cursor: "ew-resize",
            }}
          ></div>
          <div className="w-full h-full">
            <div
              className={`w-full inline-flex items-center text-[20px] ${
                siderWidth < 188 ? "justify-center" : "justify-between"
              } relative ${siderWidth < 100 && "hidden"}`}
            >
              Chats
              <div
                className={`inline-flex items-center ${
                  siderWidth < 200 && "hidden"
                }`}
              >
                <Image
                  src="/icon/search_white.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[35px] h-auto mr-[8px]"
                />
                <button
                  onClick={() => {
                    setDropdown(!dropdown);
                  }}
                  className="hover:opacity-70 transition-all duration-100"
                >
                  <Image
                    src="/icon/create_chat.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[35px] h-auto"
                  />
                </button>
              </div>
            </div>
            <div
              className={`flex flex-col ${
                siderWidth < 100 && "justify-center w-full"
              }`}
            >
              <div
                className={`flex ${
                  siderWidth < 193 && "justify-center w-full"
                }`}
              >
                <div className="relative">
                  <button
                    className="w-[50px] aspect-square rounded-full bg-[#53FAFB] bg-opacity-20 flex items-center justify-center mt-[20px] hover:opacity-70 transition-all"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <Image
                      src="/icon/plus.svg"
                      width={0}
                      height={0}
                      alt=""
                      className="w-[17px] h-auto"
                    />
                  </button>
                  {dropdown && (
                    <div className="absolute right-[-185px] top-[20px] w-[160px] bg-[#434343] bg-opacity-[36%] rounded-[10px] px-[20px] py-[10px] backdrop-blur z-20">
                      <button className="inline-flex items-center">
                        <div>
                          <Image
                            src="/icon/overview.svg"
                            width={0}
                            height={0}
                            alt=""
                            className="w-[15px] h-auto"
                          />
                        </div>
                        <p className="ml-[10px] text-[13px] mt-[2px]">
                          Create Chat
                        </p>
                      </button>
                      <button
                        className="inline-flex items-center"
                        onClick={() => {
                          setNewGroupModal(!newGroupModal),
                            setDropdown(!dropdown);
                          handleSider();
                        }}
                      >
                        <div>
                          <Image
                            src="/icon/setting.svg"
                            width={0}
                            height={0}
                            alt=""
                            className="w-[18px] h-auto"
                          />
                        </div>
                        <p className="ml-[6px] text-[13px] mt-[2px]">
                          Create Group
                        </p>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`flex  ${
                  siderWidth < 193 ? "justify-center w-full ml-0" : "ml-[12px]"
                }`}
              >
                <p className="text-[12px] text-[#989898] mt-[10px]">Add</p>
              </div>
            </div>

            <div
              className={`w-full grid grid-cols-3 gap-[20px] mt-[30px] ${
                siderWidth < 250 && "hidden"
              }`}
            >
              <button
                className={`rounded-full  text-[14px] font-bold py-[7px] hover:bg-[#53FAFB] hover:bg-opacity-70 transition-all duration-100 ${
                  category === "chat"
                    ? "bg-[#53FAFB] text-black"
                    : "text-[#606060]"
                }`}
                onClick={() => {
                  setCategory("chat");
                }}
              >
                Chat
              </button>
              <button
                className={`rounded-full  text-[14px] font-bold py-[7px] hover:bg-[#53FAFB] hover:bg-opacity-70 transition-all duration-100 ${
                  category === "status"
                    ? "bg-[#53FAFB] text-black"
                    : "text-[#606060]"
                }`}
                onClick={() => setCategory("status")}
              >
                Status
              </button>
              <button
                className={`rounded-full  text-[14px] font-bold py-[7px] hover:bg-[#53FAFB] hover:bg-opacity-70 transition-all duration-100 ${
                  category === "call"
                    ? "bg-[#53FAFB] text-black"
                    : "text-[#606060]"
                }`}
                onClick={() => {
                  setCategory("call");
                }}
              >
                Calls
              </button>
            </div>
            <div
              className={`w-full h-[40px] bg-[#393939] bg-opacity-35 rounded-full inline-flex items-center px-[15px] justify-between mt-[20px] ${
                siderWidth < 200 && "hidden"
              }`}
            >
              <div className="inline-flex text-[13px] items-center">
                <div>
                  <Image
                    src="/icon/archieve.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[15px] h-auto"
                  />
                </div>
                <p className="mt-[3px] ml-[5px]">Archived</p>
              </div>
              <div className="bg-[#53FAFB] text-[12px] text-black px-[7px] rounded-full">
                23
              </div>
            </div>
            <div
              className={`w-[140px] h-[40px] mt-[20px] rounded-full border-[1px] border-[#353535] flex items-center px-[20px] text-[12px] text-[#797C7B] ${
                siderWidth < 200 && "hidden"
              }`}
            >
              <Image
                alt=""
                width={0}
                height={0}
                src="/icon/pin.svg"
                className="w-[15px] h-auto mr-[10px]"
              />
              Pined Chats
            </div>
            <div className="mt-[20px]">
              {chats.map((item, index) => (
                <div key={index}>
                  <ChatList item={item} siderWidth={siderWidth} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`!w-[80px] desktop:block hidden justify-center bg-[#1C1C1C] h-full flex-none prevent-select`}
        >
          <div className="w-full flex items-center justify-center mb-[30px] relative">
            <button
              className="h-[45px] w-[45px] mt-[60px] bg-[#53FAFB] bg-opacity-10 rounded-[12px] flex items-center justify-center hover:opacity-70"
              // onClick={() => setNewCommunityModal(!newCommunityModal)}
              onClick={() => {
                setSelectCommunityType(!selectCommunityType);
              }}
            >
              {selectCommunityType ? (
                <Image width={12} height={12} alt="" src="/icon/close.svg" />
              ) : (
                <Image width={15} height={15} alt="" src="/icon/plus.svg" />
              )}
            </button>
            {selectCommunityType ? (
              <>
                <div
                  className="fixed right-0 left-0 top-0 bottom-0 z-10"
                  onClick={() => setSelectCommunityType(!selectCommunityType)}
                ></div>
                <div className="absolute right-[-210px] w-[195px] bg-white z-10 top-[60px] bg-opacity-10 backdrop-blur-[12px] rounded-[9px] transition-all duration-100">
                  <button
                    className="flex items-center py-[10px] w-full pl-[20px]"
                    onClick={() => {
                      setNewCommunityModal(!newCommunityModal);
                      setSelectCommunityType(!selectCommunityType);
                    }}
                  >
                    <div className="inline-flex items-center">
                      <Image
                        src="/icon/pencil.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[15px] h-auto"
                      />
                      <p className="ml-[12px] text-[14px]">Create Community</p>
                    </div>
                  </button>
                  <button className="flex items-center pb-[10px] pl-[20px] w-full">
                    <div className="inline-flex items-center">
                      <Image
                        src="/icon/join.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[15px] h-auto"
                      />
                      <p className="ml-[12px] text-[14px]">Join Community</p>
                    </div>
                  </button>
                </div>
              </>
            ) : null}
          </div>
          {pathName === "/home" ||
          pathName === "/notification" ||
          pathName === "/friends" ||
          pathName === "/nfts" ||
          pathName === "/marketplace" ? null : (
            <>
              {communityList.map((item, index) => (
                <div key={index}>
                  <Components item={item} />
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CommunityList;
