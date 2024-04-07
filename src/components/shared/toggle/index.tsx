"use client";
import React from "react";
const Toggle = (props: any) => {
  return (
    <>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={props.setting}
          onClick={props.hhandleSetting}
        />
        <div
          className={`relative w-11 h-6 rounded-full peer dark:peer-focus:ring-blue-800 ${
            !props.setting ? "bg-[#363636]" : ""
          } peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full border-none after:content-[''] after:absolute after:top-0.5 after:start-[2px] ${
            props.setting === true ? "after:bg-black" : "after:bg-[#565656]"
          } after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#50FFFF]`}
        ></div>
      </label>
    </>
  );
};
export default Toggle;
