import React from "react";
const Loading = () => {
  return (
    <>
      <div
        className={`desktop:flex-none prevent-select desktop:flex hidden justify-center bg-[#171717] h-full relative w-[300px] overflow-auto`}
      >
        <div className="w-[80%] flex flex-col h-full">
          <div className={`h-auto w-[50px] mt-[65px] mb-[30px]`}>
            <div className="w-full aspect-square bg-[#121212] rounded-[10px] ml-[10px]"></div>
          </div>
          <div className="w-full h-[42px] rounded-[10px] bg-[#121212] animate-pulse mt-[10px] mb-[10px]"></div>
          <div className="w-full h-[42px] rounded-[10px] bg-[#121212] animate-pulse mb-[10px]"></div>
          <div className="w-full h-[42px] rounded-[10px] bg-[#121212] animate-pulse mb-[10px]"></div>
          <div className="w-full h-[42px] rounded-[10px] bg-[#121212] animate-pulse mb-[10px]"></div>
          <div className="w-full h-[42px] rounded-[10px] bg-[#121212] animate-pulse mb-[10px]"></div>
          <div className="w-full h-[42px] rounded-[10px] bg-[#121212] animate-pulse mb-[10px]"></div>
        </div>
      </div>
    </>
  );
};
export default Loading;