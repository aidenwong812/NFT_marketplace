"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PhoneNumber from "@/components/auth/phoneNumber";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { validateUser } from "@/lib/firebase";
const ImageComponent = dynamic(
  () => import("@/components/shared/ImageComponent/demo")
);

const userExisted = async (email: string): Promise<boolean> => {
  const isExist = await validateUser("email", "users", email);
  return isExist;
};

const NamePhoneNumber = (props: any) => {
  const router = useRouter();
  const allFieldsNotEmpty = () => {
    return Object.values(user).every((value) => value.trim() !== "");
  };
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    phoneNumber: "",
  });

  const [vaildEmail, setValidEmail] = useState<boolean>(true);

  const handleChange = (e: any) => {
    // console.log("handleChange===>", e);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="flex items-center relative mb-[20px]">
        <div className="w-[20px] absolute color-white ml-[25px]">
          <ImageComponent src={"/icon/person_borderwhite.svg"} height={20} />
        </div>
        <input
          type="email"
          name="email"
          className="w-full bg-[#191919] text-[14px] text-white placeholder:font-ttfirs placeholder-[#4C4C4C] outline-none py-[15px] rounded-[15px] pl-[55px]"
          placeholder={`Type your Email`}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="flex items-center relative">
        <div className="w-[20px] absolute color-white ml-[25px]">
          <ImageComponent src={"/icon/person_borderwhite.svg"} height={20} />
        </div>
        <input
          name="name"
          className="w-full bg-[#191919] text-[14px] text-white placeholder:font-ttfirs placeholder-[#4C4C4C] outline-none py-[15px] rounded-[15px] pl-[55px]"
          placeholder={`Type your full name`}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <PhoneNumber handleChange={handleChange} />
      <div className="flex items-center mt-[20px] relative">
        <div className="w-[15px] absolute ml-[29px]">
          <ImageComponent src={"/icon/lock.svg"} height={15} />
        </div>
        <input
          type="password"
          name="password"
          className="w-full bg-[#191919] text-white text-[14px] placeholder-[#4C4C4C] outline-none py-[15px] rounded-[15px] pl-[55px] pr-[55px]"
          placeholder={`Type your Password`}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="absolute right-[25px] w-[15px]">
          <ImageComponent src={"/icon/eye.svg"} height={15} />
        </div>
      </div>
      <button
        className="w-full h-[45px] mt-[80px] bg-[#53FAFB] text-black rounded-[12px] font-abeezeeItalic text-[14px] hover:bg-opacity-[70%] transition-all duration-100"
        onClick={async () => {
          if (!(await userExisted(user.email)) && allFieldsNotEmpty()) {
            props.handleChangePage(1);
            props.setUserAcc(user);
            console.log("Use Infor ====>", user);
          }
          setValidEmail(false);
        }}
        disabled={!allFieldsNotEmpty()}
      >
        Create account
      </button>
      <button
        className="w-full inline-flex justify-center mt-[80px] text-[13px] font-ttfirs"
        onClick={() => {
          router.push("/auth/signin");
        }}
      >
        <Image
          src={"/icon/back.svg"}
          alt={"refresh"}
          width={20}
          height={20}
          className="mr-[10px] mt-[-1px]"
        />
        Back to <div className="text-[#53FAFB] ml-[5px]">Login</div>
      </button>
      {!vaildEmail && (
        <div className="text-[#FF0000] w-full justify-center">
          The email is already existed
        </div>
      )}
    </>
  );
};
export default NamePhoneNumber;
