"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const ImageComponent = dynamic(
  () => import("@/components/shared/ImageComponent/demo")
);
const Register = () => {
  const [signupType, setSignupType] = useState<string>("email");
  const [disable, setDisable] = useState<boolean>(true);
  const [gmailAddress, setGmailAddress] = useState("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const [iconLoading, setIconLoading] = useState<boolean>(true);
  const [userExist, setUserExist] = useState<boolean>(false);
  const [correctPwd, setCorrectPwd] = useState<boolean>(true);

  const handleChangeSignup = async () => {
    // router.push("/auth/signup");
    try {
      const response = await fetch("../../api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: gmailAddress, password: password }),
      });
      const { status, msg } = await response.json();
      if (status === 204) {
        setCorrectPwd(false);
      } else if (status === 400) {
        setUserExist(true);
      } else if (status === 200) {
        router.push("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChangeGmail = (e: any) => {
    if (e.target.value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    setGmailAddress(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className={`inline-flex absolute w-full h-full`}>
      <div className="desktop:w-[55%] desktop:block hidden bg-cover bg-center bg-[url('/bg.svg')]"></div>
      <div className="desktop:w-[45%] w-full bg-[#131313] overflow-auto">
        <div className="w-full bg-[#131313]">
          <div className="inline-flex w-full justify-center mt-[70px]">
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
          <div className="text-white font-abeezeeItalic text-center text-[20px] mt-[60px]">
            Welcome <br />
          </div>
          <div className="w-full flex items-center justify-center mt-[60px]">
            <div className="relative desktop:w-[65%] w-[90%] flex justify-center text-[14px]">
              <button
                className={`py-[9px] w-[50%] transition-all duration-100 hover:bg-opacity-[7%] hover:bg-[#53FAFB] ${
                  signupType == "email" ? "bg-[#53FAFB]" : ""
                } font-ttfirs bg-opacity-[5%] text-white rounded-full`}
                onClick={() => {
                  setSignupType("email");
                }}
              >
                Email Address
              </button>
              <button
                className={`py-[9px] w-[50%] transition-all duration-100 hover:bg-opacity-[7%] hover:bg-[#53FAFB] ${
                  signupType == "email" ? "" : "bg-[#53FAFB]"
                } font-ttfirs bg-opacity-[5%] text-white rounded-full`}
                onClick={() => {
                  setSignupType("phone");
                }}
              >
                Phone Number
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center ">
            <div className="desktop:w-[65%] w-[90%] flex items-center mt-[40px] relative">
              <Image
                src={"/icon/email.svg"}
                alt={"refresh"}
                width={0}
                height={0}
                className="absolute color-white ml-[25px] w-[20px] h-auto"
              />
              <input
                className="w-full bg-[#191919] text-white placeholder-[#4C4C4C] outline-none py-[15px] rounded-[15px] pl-[55px]"
                placeholder={`Type your Email`}
                onChange={(e) => {
                  handleChangeGmail(e);
                }}
              />
            </div>
            <div className="desktop:w-[65%] w-[90%] flex items-center mt-[40px] relative">
              <Image
                src={"/icon/email.svg"}
                alt={"refresh"}
                width={0}
                height={0}
                className="absolute color-white ml-[25px] w-[20px] h-auto"
              />
              <input
                className="w-full bg-[#191919] text-white placeholder-[#4C4C4C] outline-none py-[15px] rounded-[15px] pl-[55px]"
                placeholder={`Type your Password`}
                onChange={(e) => {
                  handlePassword(e);
                }}
              />
            </div>
          </div>
          <div className="w-full flex justify-center mt-[20px]">
            <button
              className={`desktop:w-[65%] w-[90%] flex items-center justify-center font-abeezeeItalic disabled:bg-[#282828] bg-[#50FFFF] disabled:text-[#6D6D6D] text-black mt-[20px] text-[15px] rounded-[15px] font-bold py-[15px] relative transition-all duration-300 hover:bg-opacity-[70%]`}
              disabled={disable}
              onClick={handleChangeSignup}
            >
              Sign In
            </button>
          </div>
          {userExist && (
            <div className="justify-center w-full flex">
              <p className="text-[#FF0000]">User does not exist!</p>
            </div>
          )}
          {!correctPwd && (
            <div className="justify-center w-full flex">
              <p className="text-[#FF0000]">Incorrect Password!</p>
            </div>
          )}
          <div
            className={`w-full flex justify-center font-ttfirs text-[12px] mt-[80px]`}
          >
            Or continue with
          </div>
          <div className={`w-full flex justify-center font-ttfirs mt-[40px]`}>
            <div className="inline-flex">
              <button
                className="w-[50px] h-[50px] rounded-[12px] bg-[#191919] items-center justify-center flex"
                onClick={() => router.push("/auth/register/wallet")}
              >
                <div className="w-[30px]">
                  <ImageComponent src={"/icon/phantom.svg"} height={30} />
                </div>
              </button>
              <button
                className="w-[50px] h-[50px] rounded-[12px] bg-[#191919] items-center justify-center flex ml-[10px]"
                onClick={() => router.push("/auth/register/wallet")}
              >
                <div className="w-[30px]">
                  <ImageComponent src={"/icon/backpack.svg"} height={30} />
                </div>
              </button>
              <button
                className="w-[50px] h-[50px] rounded-[12px] bg-[#191919] items-center justify-center flex ml-[10px]"
                onClick={() => router.push("/auth/register/wallet")}
              >
                <div className="w-[30px]">
                  <ImageComponent src={"/icon/bitrock.svg"} height={30} />
                </div>
              </button>
              <button
                className="w-[50px] h-[50px] rounded-[12px] bg-[#191919] items-center justify-center flex ml-[10px]"
                onClick={() => router.push("/auth/register/wallet")}
              >
                <div className="w-[30px]">
                  <ImageComponent src={"/icon/metamask.svg"} height={30} />
                </div>
              </button>
            </div>
          </div>
          <div
            className={`w-full flex justify-center font-ttfirs mt-[60px] text-[12px] text-[#565656] text-wrap`}
          >
            By creating your account, you agree in the Biples
          </div>
          <div
            className={`w-full justify-center font-ttfirs text-[12px] inline-flex mb-[50px]`}
          >
            Privacy policy{" "}
            <div className="ml-[5px] mr-[5px] text-[#565656]">and</div> Termes &
            Conditions
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
