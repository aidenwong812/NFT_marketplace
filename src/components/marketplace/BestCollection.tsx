"use client";
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const BestCollection = (props: any) => {
  const router = useRouter();
  // const [loading1, setLoading1] = useState<boolean>(true);
  // const [loading2, setLoading2] = useState<boolean>(true);
  // const [loading, setLoading] = useState<boolean>(true)
  // useEffect(() => {
  //   if(!loading1 && !loading2) {
  //     setLoading(false)
  //   }
  // }, [loading1, loading2])
  return (
    <>
    {/* {loading && <div className="w-[200px] rounded-[12px] bg-[#191919] animate-pulse h-[170px]"></div>} */}
      <button
        className={`w-[200px] relative flex-none mb-[20px] hover:opacity-70`}
        onClick={() => {
          router.push(`/nfts/${props.item.id}`);
        }}
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
        <div className="w-full h-[50%] bg-black absolute bottom-0 rounded-[25px] bg-opacity-25 backdrop-blur-[10px] flex-row">
          <div className="w-full flex justify-center mt-[-45px]">
            <Image
              src={props.item.avatar}
              width={0}
              height={0}
              alt=""
              className="w-[70px] h-auto"
              priority={true}
              // onLoad={() => setLoading2(false)}
            />
          </div>
          <p className="text-center">KitshunaFowu</p>
          <p className="text-center text-[10px]">1 092 People</p>
        </div>
      </button>
    </>
  );
};
export default BestCollection;
