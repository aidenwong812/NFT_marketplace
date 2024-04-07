"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageComponent from "@/components/shared/ImageComponent/demo";

const Auth = () => {
  const router = useRouter();
  const [iconLoading, setIconLoading] = useState<boolean>(true);

  const handleRegister = () => {
    router.push("/auth/signup");
  };
  const handleSingIn = () => {
    router.push("/auth/signin");
  };
  return (
    <div className={`absolute w-full h-full overflow-auto`}>
      <div className="w-full h-full bg-cover bg-center bg-[url('/bg.svg')] flex items-center justify-center">
        <div className="mobile:w-[450px] mobile:h-[600px] w-full h-full bg-gradient-to-br from-[#292929] to-black mobile:rounded-[20px] mobile:border mobile:border-[#3b3b3b]">
          <div className="inline-flex w-full justify-center mt-[60px]">
            {iconLoading && (
              <div
                className={`w-[200px] h-[53px] animate-pulse bg-[#171717] rounded-[12px]`}
              ></div>
            )}
            <Image
              width={0}
              height={0}
              src="/icon/logo_whole.svg"
              alt=""
              className={`w-[200px] h-auto ${iconLoading && "hidden"}`}
              priority={true}
              onLoad={() => {
                setIconLoading(false);
              }}
            />
          </div>
          <div className="text-[20px] mt-[40px] font-abeezeeItalic w-full justify-center flex">
            Let's get started
          </div>
          <div
            className={`text-[10px] mt-[40px] w-full justify-center text-center flex font-ttfirs`}
          >
            Our goal is to ensure that you have everything you need to feel{" "}
            <br /> comfortable, confident, and ready to make an impact.
          </div>
          <div className="w-full h-[50px] flex justify-center mt-[45px]">
            <div className="w-[280px] h-[45px] bg-[#222222] rounded-full border border-[#666666]">
              <button
                className={
                  "w-[50%] h-full rounded-full bg-[#50FFFF] text-black font-abeezeeItalic text-[13px] hover:bg-opacity-70 transition-all duration-100"
                }
                onClick={handleRegister}
              >
                Register
              </button>
              <button
                className={
                  "w-[50%] h-full rounded-full font-abeezeeItalic text-[12px]"
                }
                onClick={handleSingIn}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="text-[12px] mt-[40px] w-full justify-center flex font-ttfirs">
            Or continue with
          </div>
          <div className="w-full inline-flex justify-center mt-[40px]">
            <button className="w-[50px] mr-[10px] h-[50px] bg-[#898989] bg-opacity-[28%] rounded-[12px] flex items-center justify-center hover:bg-opacity-70 transition-all duration-100">
              <div className="w-[27px]">
                <ImageComponent src={"/icon/phantom.svg"} height={25} />
              </div>
            </button>
            <button className="w-[50px] h-[50px] mr-[10px] bg-[#898989] bg-opacity-[28%] rounded-[12px] flex items-center justify-center hover:bg-opacity-70 transition-all duration-100">
              <div className="w-[27px]">
                <ImageComponent src={"/icon/backpack.svg"} height={25} />
              </div>
            </button>
            <button className="w-[50px] h-[50px] mr-[10px] bg-[#898989] bg-opacity-[28%] rounded-[12px] flex items-center justify-center hover:bg-opacity-70 transition-all duration-100">
              <div className="w-[27px]">
                <ImageComponent src={"/icon/bitrock.svg"} height={25} />
              </div>
            </button>
            <button className="w-[50px] h-[50px] mr-[10px] bg-[#898989] bg-opacity-[28%] rounded-[12px] flex items-center justify-center hover:bg-opacity-70 transition-all duration-100">
              <div className="w-[27px]">
                <ImageComponent src={"/icon/metamask.svg"} height={25} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
