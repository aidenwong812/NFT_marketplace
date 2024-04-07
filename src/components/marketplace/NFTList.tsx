import React from "react";
import Image from "next/image";
const NFTList = (props: any) => {
  return (
    <>
      <button
        className="w-full h-[60px] bg-[#181818] inline-flex justify-between px-[40px] mb-[20px] rounded-[12px] min-w-[600px] items-center hover:bg-opacity-70"
      >
        <div className="inline-flex items-center">
          <p>{props.index + 1}</p>
          <Image
            src={props.item.logo}
            width={0}
            height={0}
            alt=""
            className="w-[40px] ml-[30px]"
          />
          <p className="text-[12px] ml-[10px]">Claynosaurz</p>
        </div>
        <div className="inline-flex items-center gap-[15px]">
          <div>
            <div className="inline-flex items-center">
              <div>
                <Image
                  src="/icon/sol.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[7px] h-auto"
                />
              </div>
              <p className="text-[10px] ml-[5px]">200k</p>
            </div>
            <p className="text-[7px] text-[#6D6D6D]">Total volume</p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[7px] h-auto"
              />
              <p className="text-[10px] ml-[5px]">334.1k</p>
            </div>
            <p className="text-[7px] text-[#6D6D6D]">Floor price</p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[7px] h-auto"
              />
              <p className="text-[10px] ml-[5px]">200k</p>
            </div>
            <p className="text-[7px] text-[#6D6D6D]">Total volume</p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[7px] h-auto"
              />
              <p className="text-[10px] ml-[5px]">200k</p>
            </div>
            <p className="text-[7px] text-[#6D6D6D]">Total volume</p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[7px] h-auto"
              />
              <p className="text-[10px] ml-[5px]">200k</p>
            </div>
            <p className="text-[7px] text-[#6D6D6D]">Total volume</p>
          </div>
          <div>
            <div className="inline-flex items-center">
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[7px] h-auto"
              />
              <p className="text-[10px] ml-[5px]">200k</p>
            </div>
            <p className="text-[7px] text-[#6D6D6D]">Total volume</p>
          </div>
        </div>
      </button>
    </>
  );
};
export default NFTList;
