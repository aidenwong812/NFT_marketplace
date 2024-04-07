import React from "react";
const Loader = () => {
  return (
    <>
      <div className="w-full h-full mt-[30px]">
        <div className="w-full inline-flex justify-between items-center">
          <div>
            <div className="w-[100px] h-[25px] rounded-[10px] bg-[#191919] animate-pulse mb-[5px]"></div>
            <div className="w-[200px] h-[30px] rounded-[10px] bg-[#191919] animate-pulse"></div>
          </div>
          <button className="flex items-center justify-center px-[12px] rounded-[12px] bg-[#191919] h-[40px] hover:bg-[#363636] transition-all duration-100 aspect-square">
          </button>
        </div>
      </div>
    </>
  );
};
export default Loader;