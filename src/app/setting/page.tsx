"use client";
import React, { useState } from "react";
import Image from "next/image";
const SettingComponent = (props: any) => {
  return (
    <>
      <div
        className={`w-full h-[50px] bg-[#191919] px-[20px] mb-[3px] ${
          props.borderRadius === "top"
            ? "rounded-t-[12px]"
            : props.borderRadius === "full"
            ? "rounded-[12px]"
            : props.borderRadius === "bottom"
            ? "rounded-b-[12px]"
            : ""
        }`}
      >
        <div className="w-full h-full inline-flex items-center justify-between">
          <p>{props.title}</p>
          <div className="inline-flex">
            {props.disable && (
              <p className="mr-[15px] text-[#5A5A5A]">Disabled</p>
            )}
            <Image
              src="/icon/right_grey.svg"
              width={0}
              height={0}
              alt=""
              className="w-[8px] h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
const Setting = () => {
  const [setting1, setSetting1] = useState<boolean>(false);
  const handleSetting1 = () => {
    setSetting1(!setting1);
  };
  const [setting2, setSetting2] = useState<boolean>(false);
  const handleSetting2 = () => {
    setSetting2(!setting2);
  };
  return (
    <>
      <div className="mobile:px-[70px] px-[20px] w-full h-full overflow-auto">
        <div className="w-full h-full">
          <div className="mt-[50px] w-full">
            <p className="text-[#494949] mb-[20px]">Setting 01</p>
            <SettingComponent
              title="Setting 001"
              disable={true}
              borderRadius="full"
            />
          </div>
          <div className="mt-[30px] w-full">
            <p className="text-[#494949] mb-[20px]">Setting 01</p>
            <SettingComponent
              title="Setting 001"
              disable={true}
              borderRadius="top"
            />
            <SettingComponent
              title="Setting 001"
              disable={false}
              borderRadius="bottom"
            />
          </div>
          <div className="mt-[30px] w-full">
            <p className="text-[#494949] mb-[20px]">Setting 01</p>
            <SettingComponent
              title="Setting 001"
              disable={true}
              borderRadius="top"
            />
            <div className={`w-full h-[50px] bg-[#191919] px-[20px] mb-[3px]`}>
              <div className="w-full h-full inline-flex items-center justify-between">
                <p>Setting 001</p>
                <div className="inline-flex">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onClick={handleSetting1}
                    />
                    <div
                      className={`relative w-11 h-6 rounded-full peer dark:peer-focus:ring-blue-800 ${
                        !setting1 ? "bg-[#363636]" : ""
                      } peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full border-none after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
                        setting1 === true
                          ? "after:bg-black"
                          : "after:bg-[#565656]"
                      } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#50FFFF]`}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
            <div className={`w-full h-[50px] bg-[#191919] px-[20px] mb-[3px]`}>
              <div className="w-full h-full inline-flex items-center justify-between">
                <p>Setting 001</p>
                <div className="inline-flex">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      onClick={handleSetting2}
                    />
                    <div
                      className={`relative w-11 h-6 rounded-full peer dark:peer-focus:ring-blue-800 ${
                        !setting2 ? "bg-[#363636]" : ""
                      } peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full border-none after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
                        setting2 === true
                          ? "after:bg-black"
                          : "after:bg-[#565656]"
                      } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#50FFFF]`}
                    ></div>
                  </label>
                </div>
              </div>
            </div>
            <SettingComponent
              title="Setting 001"
              disable={true}
              borderRadius="bottom"
            />
          </div>
          <div className="mt-[50px] w-full">
            <p className="text-[#494949] mb-[20px]">Setting 01</p>
            <div
              className={`w-full h-[50px] bg-[#191919] px-[20px] mb-[3px] rounded-[12px]`}
            >
              <div className="w-full h-full inline-flex items-center justify-between">
                <p>Setting 001</p>
                <div className="inline-flex">
                  <Image
                    src="/icon/checkRing.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="w-[15px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[50px] w-full">
            <p className="text-[#494949] mb-[20px]">Setting 002</p>
            <div
              className={`w-full h-[50px] bg-[#191919] px-[20px] mb-[3px] rounded-t-[12px]`}
            >
              <div className="w-full h-full inline-flex items-center justify-between">
                <div className="inline-flex items-center">
                  <Image
                    src="/icon/languages.svg"
                    className="w-[25px] h-auto mr-[10px]"
                    width={0}
                    height={0}
                    alt=""
                  />
                  <p>Setting 001</p>
                </div>
                <div className="inline-flex">
                  <p className="mr-[15px] text-[#5A5A5A]">Disabled</p>
                  <Image
                    src="/icon/right_grey.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[8px] h-auto"
                  />
                </div>
              </div>
            </div>
            <div
              className={`w-full h-[50px] bg-[#191919] px-[20px] mb-[3px] rounded-b-[12px]`}
            >
              <div className="w-full h-full inline-flex items-center justify-between">
                <div className="inline-flex items-center">
                  <Image
                    src="/icon/languages.svg"
                    className="w-[25px] h-auto mr-[10px]"
                    width={0}
                    height={0}
                    alt=""
                  />
                  <p>Setting 001</p>
                </div>
                <div className="inline-flex">
                  <p className="mr-[15px] text-[#5A5A5A]">Disabled</p>
                  <Image
                    src="/icon/right_grey.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[8px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[50px] w-full">
            <p className="text-[#494949] mb-[20px]">Setting 01</p>
            <div
              className={`w-full h-[50px] bg-[#191919] px-[20px] mb-[3px] rounded-[12px]`}
            >
              <div className="w-full h-full inline-flex items-center justify-between">
                <div className="inline-flex items-center">
                  <p>Back up</p>
                </div>
                <div className="inline-flex">
                  <p className="mr-[15px] text-[#5A5A5A] mobile:w-full w-[50px] truncate">Server01/TestFolder/Data981712..</p>
                  <Image
                    src="/icon/right_grey.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[8px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[50px] w-full">
            <p className="text-[#494949] mb-[20px]">Setting 01</p>
            <div
              className={`w-full h-[50px] bg-[#191919] px-[20px] mb-[3px] rounded-[12px]`}
            >
              <div className="w-full h-full inline-flex items-center justify-between">
                <div className="inline-flex items-center">
                  <p>Back up</p>
                </div>
                <div className="inline-flex">
                  <p className="mr-[15px] text-[#5A5A5A] mobile:w-full w-[50px] truncate">Server01/TestFolder/Data981712..</p>
                  <Image
                    src="/icon/right_grey.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[8px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[30px]"></div>
        </div>
      </div>
    </>
  );
};
export default Setting;
