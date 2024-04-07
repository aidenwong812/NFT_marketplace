import React, { useState, useEffect } from "react";
import Image from "next/image";
import ImageComponent from "@/components/shared/ImageComponent/index";
const Message = (props: any) => {
  const [isLoading1, setLoading1] = useState(true);
  const [isLoading2, setLoading2] = useState(true);
  const [isLoading3, setLoading3] = useState(true);
  const [isLoading4, setLoading4] = useState(true);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    if (!isLoading1 && !isLoading2 && !isLoading3) {
      if (props.item?.type !== "Shared" && isLoading4) setHidden(false);
      else if (!isLoading4) setHidden(false);
    }
  }, [isLoading1, isLoading2, isLoading3, isLoading4]);
  return (
    <>
      {hidden && (
        <div className="w-full rounded-[20px] h-[200px] bg-[#171717] animate-pulse mr-[10px] flex flex-none mt-[10px]"></div>
      )}
      {props ? (
        <div
          className={`w-full bg-[#BABABA] bg-opacity-5 rounded-[20px] inline-flex px-[40px] py-[30px] mt-[10px] ${
            hidden && "hidden"
          }`}
        >
          <div className="inline-flex">
            <div className="inline-flex items-center h-[40px]">
              <div className="w-[7px] flex flex-none prevent-select">
                <ImageComponent
                  image={"/icon/online.svg"}
                  isLoading={isLoading1}
                  setLoading={setLoading1}
                  width={7}
                />
              </div>
              <div className="relative w-[50px] flex flex-none ml-[10px] prevent-select">
                <ImageComponent
                  image={props.item?.avatar}
                  isLoading={isLoading2}
                  setLoading={setLoading2}
                  width={40}
                />
                <div className="absolute right-[10px] bottom-[0px] prevent-select">
                  {props.item?.onlineStatus ? (
                    <div>
                      <ImageComponent
                        image={"/icon/online_black.svg"}
                        isLoading={isLoading3}
                        setLoading={setLoading3}
                        width={10}
                      />
                    </div>
                  ) : (
                    <ImageComponent
                      image={"/icon/offline.svg"}
                      isLoading={isLoading3}
                      setLoading={setLoading3}
                      width={10}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex-row ml-[20px] font-ttfirs text-[14px] mt-[8px]">
              <div className="">
                {props.item?.who}{" "}
                <span className="text-[#999999]">
                  {props.item?.type}{" "}
                  {props.item?.type === "Shared" ? "an image into" : "you in a"}{" "}
                </span>
                {props.item?.where}
              </div>
              {props.item?.type === "Shared" && (
                <div className="mt-[10px] mb-[10px]">
                  <ImageComponent
                    image={props.item?.image + ""}
                    isLoading={isLoading4}
                    setLoading={setLoading4}
                    width={250}
                  />
                </div>
              )}
              {props.item?.context && (
                <p className="text-[#545454] mt-[10px] max-w-[800px] mb-[10px]">
                  {props.item?.context}
                </p>
              )}

              <p className="text-[#545454]">{props.item?.date}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[200px] bg-[#171717] animate-pulse mb-[10px]"></div>
      )}
    </>
  );
};
export default Message;
