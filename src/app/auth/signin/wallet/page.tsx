"use client";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const ImageComponent = dynamic(() => import("@/components/shared/ImageComponent/demo"))
const WalletRegisterPage = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="mobile:w-[400px] mobile:h-[500px] w-full h-full mobile:rounded-[30px] bg-[#191919] px-[50px]">
          <p className="text-center text-[17px] font-bold mt-[50px]">
            Connect to Account 1
          </p>
          <p className="text-center text-[17px] font-bold">(0xce819...82838)</p>
          <div className="w-full inline-flex justify-center mt-[30px]">
            <Image
              src="/icon/metamask.svg"
              width={0}
              height={0}
              alt=""
              className="w-[100px] h-auto"
            />
          </div>
          <div className="w-full inline-flex justify-center mt-[20px]">
            <div className="w-[25px]">
              <ImageComponent
                src="/icon/loading.svg"
                height={25}
              />
            </div>
          </div>
          <p className="text-center text-[13px] mt-[10px]">
            Opening Metamask ...
          </p>
          <div className="w-full inline-flex justify-center items-center mt-[30px]">
            <button
              className="border-[1px] border-white w-[120px] h-[40px] rounded-full mr-[15px] text-[13px]"
              onClick={() => {
                router.push("/auth/register");
              }}
            >
              Cancel
            </button>
            <button
              className="bg-[#53FAFB] w-[120px] h-[40px] rounded-full text-black text-[13px] font-bold hover:bg-opacity-75 transition-all duration-100"
              onClick={() => {
                router.push("/auth/signup");
              }}
            >
              Connect
            </button>
          </div>
          <p className="text-center text-[12px] mt-[20px]">
            See Adresse, Account Balance, Activity and <br />
            suggest transactions to approve
          </p>
        </div>
      </div>
    </>
  );
};
export default WalletRegisterPage;
