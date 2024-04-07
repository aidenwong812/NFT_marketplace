import React from "react";
const Loader = () => {
  return (
    <>
      <div className={`overflow-auto h-[250px] relative mt-[20px] animate-pulse`}>
        <div className="w-full h-full bg-[#171717] rounded-[15px]"></div>
      </div>
    </>
  );
};
export default Loader;
