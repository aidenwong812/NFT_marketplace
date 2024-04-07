"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MessageComponent from "@/components/community/Message";
import { useSettingModal } from "@/context/communitysetting";
const messages = [
  {
    type: "context",
    sender: "Mussa OUEL",
    avatar: "/avatar/3.svg",
    message:
      "Hello world please let me know if this NFTs can be more than cryptocurrencies in the mint world of NFTs, you can use our platform",
    emoji: ["sweat_smile", "hot_face"],
    readStatus: true,
    when: "Yesterday 03 : 21 PM",
  },
  {
    type: "voice",
    sender: "Mussa OUEL",
    avatar: "/avatar/3.svg",
    length: "0:20",
  },
  {
    type: "voice",
    sender: "Mussa OUEL",
    avatar: "/avatar/3.svg",
    length: "0:20",
  },
  {
    type: "file",
    sender: "Samuel",
    avatar: "/avatar/3.svg",
    emoji: ["sweat_smile"],
    fileName: "Fichier.pdf",
    size: "291MB",
  },
  {
    type: "context",
    sender: "Samuel",
    avatar: "/avatar/3.svg",
    message:
      "https://www.figma.com/proto/9gJc4pLy1Vkc7Dq0rJrXij/Biples-Mobile?node-id=377-1543&scaling=scale-down Check It here @yazidkherrati Check NOW!!!",
    emoji: [],
    readStatus: true,
    when: "Yesterday 03 : 21 PM",
  },
  {
    type: "image",
    sender: "Mussa OUEL",
    link: "/message/1.svg",
    avatar: "/avatar/3.svg",
    emoji: [],
    readStatus: true,
    when: "Yesterday 03 : 21 PM",
  },

  {
    type: "context",
    sender: "Mussa OUEL",
    avatar: "/avatar/3.svg",
    message:
      "Hello world please let me know if this NFTs can be more than cryptocurrencies in the mint world of NFTs, you can use our platform",
    emoji: ["sweat_smile", "hot_face"],
    readStatus: true,
    when: "Yesterday 03 : 21 PM",
  },
  {
    type: "voice",
    sender: "Mussa OUEL",
    avatar: "/avatar/3.svg",
    length: "0:20",
  },
  {
    type: "voice",
    sender: "Mussa OUEL",
    avatar: "/avatar/3.svg",
    length: "0:20",
  },
  {
    type: "file",
    sender: "Samuel",
    avatar: "/avatar/3.svg",
    emoji: ["sweat_smile"],
    fileName: "Fichier.pdf",
    size: "291MB",
  },
  {
    type: "context",
    sender: "Samuel",
    avatar: "/avatar/3.svg",
    message:
      "https://www.figma.com/proto/9gJc4pLy1Vkc7Dq0rJrXij/Biples-Mobile?node-id=377-1543&scaling=scale-down Check It here @yazidkherrati Check NOW!!!",
    emoji: [],
    readStatus: true,
    when: "Yesterday 03 : 21 PM",
  },
  {
    type: "image",
    sender: "Mussa OUEL",
    link: "/message/1.svg",
    avatar: "/avatar/3.svg",
    emoji: [],
    readStatus: true,
    when: "Yesterday 03 : 21 PM",
  },
];
const Community = () => {
  let messageCounter = true;
  const { friendProfileModal, setFriendProfileModal } = useSettingModal();
  const Message = (index: number) => {
    if (index === 0) {
      return (
        <div className="w-full mt-[20px]">
          <div className="inline-flex items-start">
            <button
              className="mr-[20px]"
              onClick={() => setFriendProfileModal(!friendProfileModal)}
            >
              <Image
                src={messages[index].avatar}
                width={0}
                height={0}
                alt=""
                className="w-[40px] h-auto"
              />
            </button>
            <div>
              <p className="text-[#2770FF] mt-[5px] mb-[5px] text-[14px]">
                {messages[index].sender}
              </p>
              {MessageComponent(messages[index], messageCounter)}
            </div>
          </div>
        </div>
      );
    } else {
      if (messages[index].sender === messages[index - 1].sender) {
        if (messageCounter === true) {
          return (
            <div className="w-full mt-[10px]">
              <div className="inline-flex">
                <div className="ml-[60px]">
                  {MessageComponent(messages[index], messageCounter)}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="w-full mobile:text-right text-left mt-[10px]">
              <div className="inline-flex text-left mobile:mr-[60px] mobile:ml-0 ml-[60px] mr-0">
                <div className="w-full">
                  {MessageComponent(messages[index], messageCounter)}
                </div>
              </div>
            </div>
          );
        }
      } else {
        messageCounter = !messageCounter;
        if (messageCounter === false) {
          return (
            <div className="w-full mobile:text-right text-left mt-[10px]">
              <div className="mobile:text-right flex mobile:flex-row-reverse items-start">
                <button
                  className="mobile:ml-[20px] mobile:mr-0 mr-[20px]"
                    onClick={() => setFriendProfileModal(!friendProfileModal)}
                >
                  <div className="w-[40px] flex flex-none">
                    <Image
                      src={messages[index].avatar}
                      width={0}
                      height={0}
                      alt=""
                      className="w-[40px] h-auto"
                    />
                  </div>
                </button>
                <div>
                  <p className="text-[#2770FF] mt-[5px] mb-[5px] text-[14px]">
                    {messages[index].sender}
                  </p>
                  {MessageComponent(messages[index], messageCounter)}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="w-full mt-[10px]">
              <div className="inline-flex text-left items-start">
                <button
                  className="mr-[20px]"
                    onClick={() => setFriendProfileModal(!friendProfileModal)}
                >
                  <div className="w-[40px] flex flex-none">
                    <Image
                      src={messages[index].avatar}
                      width={0}
                      height={0}
                      alt=""
                      className="w-[40px] h-auto"
                    />
                  </div>
                </button>
                <div>
                  <p className="text-[#2770FF] mt-[5px] mb-[5px] text-[14px]">
                    {messages[index].sender}
                  </p>
                  {MessageComponent(messages[index], messageCounter)}
                </div>
              </div>
            </div>
          );
        }
      }
    }
  };
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setWindowWidth(windowWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial margin calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="w-full h-full relative">
        <div
          ref={chatContainerRef}
          className={`flex-row px-[40px] overflow-auto w-full flex-initial h-full absolute`}
        >
          {messages.map((item, index) => (
            <div key={index} className="w-full">
              {Message(index)}
            </div>
          ))}
          <div className="w-full h-[20px]"></div>
        </div>
      </div>
    </>
  );
};
export default Community;
