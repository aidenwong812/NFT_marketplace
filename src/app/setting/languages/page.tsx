"use client";
import React, { useState } from "react";
import Image from "next/image";
const LangageComponent = (props: any) => {
  return (
    <>
      <button
        className="w-full h-[50px] rounded-[12px] bg-[#191919] mb-[5px] px-[20px] inline-flex items-center justify-between text-[#868686]"
        onClick={() => {
          props.setCurrentLanguage(props.item.id);
        }}
      >
        <p>{props?.item.country}</p>
        {props.item.id === props.currentLanguage ? (
          <Image
            src="/icon/checkRing.svg"
            alt=""
            width={0}
            height={0}
            className="w-[15px] h-auto"
          />
        ) : (
          <div></div>
        )}
      </button>
    </>
  );
};
const Languages = () => {
  const languages = [
    { country: "Country 01", id: "country1" },
    { country: "Country 02", id: "country2" },
    { country: "Country 03", id: "country3" },
    { country: "Country 04", id: "country4" },
    { country: "Country 05", id: "country5" },
    { country: "Country 06", id: "country6" },
    { country: "Country 07", id: "country7" },
    { country: "Country 08", id: "country8" },
    { country: "Country 09", id: "country9" },
    { country: "Country 10", id: "country10" },
  ];
  const [currentLanguage, setCurrentLanguage] = useState<string>("country1");
  return (
    <>
      <div className="w-full h-full mobile:px-[50px] px-[20px] pt-[40px] prevent-select overflow-auto">
        <div className="w-full h-full relative">
          <p className="text-[#494949] mb-[10px]">Select Langauge</p>
          {languages.map((item, index) => (
            <LangageComponent
              key={index}
              item={item}
              setCurrentLanguage={setCurrentLanguage}
              currentLanguage={currentLanguage}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Languages;
