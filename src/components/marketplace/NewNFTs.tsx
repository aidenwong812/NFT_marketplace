"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const NewNFTs = (props: any) => {
  // const router = useRouter();
  // const [loading1, setLoading1] = useState<boolean>(true);
  // const [loading2, setLoading2] = useState<boolean>(true);
  // const [loading3, setLoading3] = useState<boolean>(true);
  // const [loading4, setLoading4] = useState<boolean>(true);
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   if (!loading1 && !loading2 && !loading3 && !loading4) {
  //     setLoading(false);
  //   }
  // }, [loading1, loading2, loading3, loading4]);
  return (
    <>
      {/* {loading && (
        <div className="w-[200px] rounded-[12px] bg-[#191919] animate-pulse h-[210px]"></div>
      )} */}
      <button
        className={`w-[200px] flex-none relative mb-[20px] hover:opacity-70 transition-all duration-100`}
        // onClick={() => {
        //   router.push(`/nfts/${props.item.id}`);
        // }}
      >
        <img
          src={props.item.link}
          width={0}
          height={0}
          alt=""
          className="w-[200px] h-auto"
          // priority={true}
          // onLoad={() => setLoading1(false)}
        />
        <div className="w-full h-[40%] bg-black absolute bottom-0 rounded-[18px] bg-opacity-25 backdrop-blur-[10px] flex-row px-[15px] py-[15px]">
          <div className="w-full inline-flex justify-between items-center">
            <p>Supernova ITALY †</p>
            <Image
              src={props.item.avatar}
              width={0}
              height={0}
              alt=""
              className="w-[20px] h-auto"
              priority={true}
              // onLoad={() => setLoading2(false)}
            />
          </div>
          <div className="w-full inline-flex items-center justify-between mt-[5px]">
            <div className="h-[30px] w-[76px] rounded-full bg-white bg-opacity-[9%] inline-flex px-[3px] items-center text-[8px]">
              <Image
                src={props.item.user}
                width={0}
                height={0}
                alt=""
                className="w-[20px] h-auto mr-[5px]"
                priority={true}
                // onLoad={() => setLoading3(false)}
              />
              Kemoutyo
            </div>
            <div className="inline-flex items-center">
              <div className="text-right mr-[5px]">
                <p className="text-[9px]">7,12 SOL</p>
                <p className="text-[5px]">3 212 USD</p>
              </div>
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[18px] h-auto"
                priority={true}
                // onLoad={() => setLoading4(false)}
              />
            </div>
          </div>
        </div>
      </button>
    </>
  );
};
export default NewNFTs;
