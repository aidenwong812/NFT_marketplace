"use client";
import React, { useEffect, useState, useRef } from "react";
import NamePhoneNumber from "@/components/auth/namePhoneNumber";
import Lottie from "lottie-react";
import Image from "next/image";
import animationData from "../../../../public/register/check_animation.json";
import VerificationInput from "react-verification-input";
import { useRouter } from "next/navigation";
import ImageComponent from "@/components/shared/ImageComponent/demo";
import { CreateUserDto } from "../../../dto/user.dto";
import { generateOtpCode } from "@/lib/utils";
// import { createNewUser } from "@/lib/firebase";
const Signup = () => {
  const [page, setPage] = useState(0);
  const handleChangePage = (number: number) => {
    setPage(number);
  };
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [signIn, setSignIn] = useState<boolean>(false);
  const [userAcc, setUserAcc] = useState<CreateUserDto>({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    avatar: "",
    wallet: [],
    chatHistory: [],
    isSignedIn: signIn,
    accessToken: "",
    expiresIn: "",
  });
  const [otpCode, setOtpCode] = useState<Number>();
  const verificationInputRef = useRef<HTMLInputElement>(null);

  const handleGetValue = () => {
    if (verificationInputRef.current) {
      const value = verificationInputRef.current.value;
      console.log("Value from child component:", value);
      if (Number(value) === otpCode) {
        setPage(5);
      }
    }
  };

  // const handleContinue = async () => {
  //   try {
  //     await createNewUser(userAcc);
  //     setSignIn(true);
  //     router.push("/home");
  //     console.log(userAcc.isSignedIn);
  //   } catch (error) {
  //     console.error("Failed to create user:", error);
  //   }
  // };
  const handleToBack = () => {
    setPage(page - 1);
  };
  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    // Handle the selected image file here
  };
  const router = useRouter();
  useEffect(() => {
    setOtpCode(generateOtpCode());
  }, []);
  useEffect(() => {
    console.log(page);
  }, [page]);
  useEffect(() => {
    if (password && confirmPassword && password === confirmPassword)
      setShow(true);
    else setShow(false);
  }, [password, confirmPassword]);
  useEffect(() => {
    console.log("userAcc===>", userAcc);
  }, [userAcc]);
  const handleSendOtp = async () => {
    console.log(otpCode);
    try {
      await fetch("../../api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userAcc?.email, otpCode: otpCode }),
      })
        .then((res) => res.json())
        .then(() => {
          setPage(3);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const handleContinue = async () => {
    try {
      await fetch("../../api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userAcc.name,
          email: userAcc.email,
          password: userAcc.password,
          phoneNumber: userAcc.phoneNumber,
          avatar: userAcc.avatar,
          wallet: userAcc.wallet,
          chatHistory: userAcc.chatHistory,
          isSignedIn: userAcc.isSignedIn,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          router.push("/home");
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={`inline-flex absolute w-full h-full bg-[#101010]`}>
      <div className="w-[50%] desktop:flex hidden mt-[160px] justify-center relative">
        <div>
          {page === 0 ? (
            <>
              <div className="text-white text-[35px] font-abeezeeItalic mt-[100px]">
                Create your account, <br />
                Signup Now!
              </div>
              <div className="text-[#4C4C4C] font-ttfirs mt-[30px] text-[20px]">
                We have sent the verification OTP
                <br /> to yazidelkherrati@gmail.com
              </div>
            </>
          ) : null}
        </div>
      </div>
      {page === 0 || page === 1 ? (
        <div className="desktop:w-[45%] w-full">
          <div className="w-full flex justify-center items-center h-full">
            <div className="desktop:w-[65%] w-[90%]">
              {page === 0 ? (
                <NamePhoneNumber
                  handleChangePage={handleChangePage}
                  setUserAcc={setUserAcc}
                />
              ) : page === 1 ? (
                <>
                  <div className="fixed right-0 top-0 left-0 bottom-0 prevent-select bg-[#101010] mobile:px-[100px] px-[50px] overflow-auto">
                    <div className="w-full h-full">
                      <div className="mobile:mt-[100px] mt-[50px] inline-flex w-full justify-between items-center">
                        <button onClick={() => handleChangePage(0)}>
                          <div className="w-[40px] hover:opacity-80 transition-all duration-100">
                            <ImageComponent
                              src="/icon/back_bgwhite.svg"
                              height={40}
                            />
                          </div>
                        </button>

                        <button
                          className="inline-flex items-center"
                          onClick={() => {
                            handleChangePage(2);
                          }}
                        >
                          Skip
                          <Image
                            src="/icon/arrow_right.svg"
                            width={0}
                            height={0}
                            alt=""
                            className="w-[20px] h-auto ml-[10px]"
                          />
                        </button>
                      </div>
                      <div className="w-full justify-center inline-flex mobile:mt-[150px] mt-[50px]">
                        <div className="w-[200px] aspect-square rounded-full bg-[#191919] flex items-center justify-center text-[#4C4C4C] text-[60px]">
                          YE
                        </div>
                      </div>
                      <div className="w-full flex justify-center">
                        <button className="w-[300px] h-[50px] rounded-[12px] inline-flex items-center justify-center bg-[#131313] mt-[30px] text-[13px] hover:opacity-70 transition-all duration-100">
                          <div className="w-[20px] mr-[10px]">
                            <ImageComponent
                              src="/icon/upload.svg"
                              height={20}
                            />
                          </div>
                          Add Profile Picture
                        </button>
                      </div>
                      <div className="w-full flex justify-center">
                        <button
                          className="w-[300px] h-[50px] rounded-[12px] inline-flex items-center justify-center bg-[#1B1B1B] mt-[15px] text-[13px] font-abeezeeItalic hover:opacity-70 transition-all duration-100"
                          onClick={() => {
                            handleChangePage(2);
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
      {page === 2 ? (
        <>
          <div className="fixed right-0 left-0 top-0 bottom-0 mobile:px-[100px] px-[20px] mobile:pt-[100px] pt-[40px] overflow-auto">
            <div>
              <Image
                src="/icon/back_bgwhite.svg"
                className="w-[40px] h-auto"
                width={0}
                height={0}
                alt=""
              />
            </div>
            <div className="w-full inline-flex justify-center mt-[40px]">
              <div className="relative w-[150px]">
                <ImageComponent src="/avatar/1.svg" height={150} />
                <div className="w-[22px] h-[22px] border-[3px] border-black rounded-full bg-white flex items-center justify-center absolute right-[10px] top-[10px] text-black text-[10px]">
                  18
                </div>
              </div>
            </div>
            <div className="w-full inline-flex justify-center mt-[40px]">
              <button
                className="w-[250px] h-[40px] bg-[#50FFFF] rounded-[12px] text-black font-abeezeeItalic text-[12px] hover:opacity-70 transition-all duration-100"
                onClick={handleSendOtp}
              >
                Log in
              </button>
            </div>
            <button className="w-full text-center text-[#53FAFB] text-[12px] mt-[20px]">
              Recovery account?
            </button>
            <p className="w-full text-center text-[12px] mt-[50px]">
              Back to Register or Sign
            </p>
            <div className={`w-full flex justify-center font-ttfirs mt-[40px]`}>
              <div className="inline-flex">
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
            <p className="w-full text-center text-[12px] text-[#565656] mt-[30px]">
              By creating your account, you agree in the Biples <br />{" "}
              <span className="text-white">Privacy policy</span> and{" "}
              <span className="text-white">Termes & Conditions</span>
            </p>
          </div>
        </>
      ) : page === 3 ? (
        <>
          <div className="fixed right-0 left-0 top-0 bottom-0 mobile:px-[100px] px-[20px] flex flex-row mobile:pt-[100px] pt-[40px] overflow-auto">
            <div className="desktop:block hidden desktop:w-[45%] h-full">
              <button
                onClick={() => {
                  setPage(2);
                }}
              >
                <Image
                  src="/icon/back_bgwhite.svg"
                  className="w-[40px] h-auto hover:opacity-70"
                  width={0}
                  height={0}
                  alt=""
                />
              </button>
              <p className="text-[30px] mt-[100px] font-abeezeeItalic">
                Check your email, Verify the OTP Codes
              </p>
              <p className="text-[17px] text-[#4C4C4C] mt-[30px]">
                We have sent the verification OTP to <br />
                yazidelkherrati@gmail.com
              </p>
            </div>
            <div className="desktop:w-[65%] w-full">
              <div className="w-full inline-flex justify-center mobile:mt-[140px] mt-[40px]">
                <VerificationInput
                  classNames={{
                    character:
                      "bg-[#191919] rounded-[20px] border-none outline-[1px] flex items-center justify-center outline-[#53FAFB] text-white",
                    container: "h-[100px] w-[400px]",
                  }}
                  ref={verificationInputRef}
                  length={5}
                  placeholder=""
                />
              </div>
              <div className="w-full inline-flex justify-center mt-[30px] items-center">
                <div className="w-[15px]">
                  <ImageComponent src="/icon/clock.svg" height={15} />
                </div>
                <p className="text-[12px] text-[#4C4C4C] mt-[3px] ml-[5px]">
                  Time of Request new OTP 0:59
                </p>
              </div>
              <div className="w-full flex justify-center mt-[150px] text-black">
                <button
                  className="w-[270px] h-[40px] rounded-[12px] bg-[#50FFFF] font-abeezeeItalic hover:opacity-70 transition-all duration-100"
                  onClick={handleGetValue}
                >
                  Next
                </button>
              </div>
              <div>
                <p className="w-full text-center text-[12px] mt-[30px]">
                  Don’t received email?{" "}
                  <button className="text-[#53FAFB]">Click to resend</button>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : page === 4 ? (
        <>
          <div className="fixed right-0 left-0 top-0 bottom-0 mobile:px-[100px] px-[20px] flex flex-row mobile:pt-[100px] pt-[40px] overflow-auto">
            <div className="desktop:block hidden desktop:w-[45%] h-full">
              <button
                onClick={() => {
                  setPage(2);
                }}
              >
                <Image
                  src="/icon/back_bgwhite.svg"
                  className="w-[40px] h-auto hover:opacity-70"
                  width={0}
                  height={0}
                  alt=""
                />
              </button>
              <p className="text-[30px] mt-[100px] font-abeezeeItalic">
                Rest your account, Verify you now.
              </p>
              <p className="text-[17px] text-[#4C4C4C] mt-[30px]">
                You can reset your password now, Make sure you remember or you
                can reset It again.
              </p>
            </div>
            <div className="desktop:w-[65%] w-full flex justify-center">
              <div className="w-full flex justify-center">
                <div className="mobile:w-[80%] w-full flex flex-col mt-[150px]">
                  <div className="flex items-center relative w-full">
                    <Image
                      src={"/icon/lock.svg"}
                      alt={"refresh"}
                      width={0}
                      height={0}
                      className="absolute color-white ml-[29px] w-[15px] h-auto"
                    />
                    <input
                      className="w-full bg-[#191919] text-white text-[14px] placeholder-[#4C4C4C] outline-none py-[15px] rounded-[15px] pl-[55px] pr-[55px]"
                      placeholder={`Type your password`}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <Image
                      src={"/icon/eye.svg"}
                      alt={"refresh"}
                      width={0}
                      height={0}
                      className="absolute color-white right-[25px] w-[15px] h-auto"
                    />
                  </div>
                  <div className="flex items-center relative w-full mt-[20px]">
                    <Image
                      src={"/icon/lock.svg"}
                      alt={"refresh"}
                      width={0}
                      height={0}
                      className="absolute color-white ml-[29px] w-[15px] h-auto"
                    />
                    <input
                      className="w-full bg-[#191919] text-white text-[14px] placeholder-[#4C4C4C] outline-none py-[15px] rounded-[15px] pl-[55px] pr-[55px]"
                      placeholder={`Type your password`}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                    />
                    <Image
                      src={"/icon/eye.svg"}
                      alt={"refresh"}
                      width={0}
                      height={0}
                      className="absolute color-white right-[25px] w-[15px] h-auto"
                    />
                  </div>
                  <div
                    className={`w-full text-center text-[#53FAFB] text-[12px] mt-[15px] ${
                      show ? "block" : "hidden"
                    }`}
                  >
                    Great Your Password is matched!
                  </div>
                  <button
                    className="w-full rounded-[12px] bg-[#50FFFF] h-[45px] text-black mt-[100px] font-abeezeeItalic hover:bg-opacity-70 transition-all duration-100"
                    onClick={() => {
                      setPage(5);
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : page === 5 ? (
        <>
          <div className="fixed right-0 left-0 top-0 bottom-0 px-[10px] flex justify-center overflow-auto">
            <div className="mobile:w-[40%] w-full">
              <p className="text-center text-[30px] mt-[200px] font-abeezeeItalic">
                Verification Completed, <br />
                Click continue
              </p>
              <p className="text-center text-[15px] mt-[20px] text-[#4C4C4C]">
                We have sent the verification OTP <br /> to
                yazidelkherrati@gmail.com
              </p>
              <div className="w-full flex justify-center">
                <Lottie
                  animationData={animationData}
                  className="flex justify-center items-center w-[300px]"
                  loop={false}
                />
              </div>
              <div className="w-full flex justify-center">
                <button
                  className="w-[300px] h-[40px] bg-[#50FFFF] rounded-[12px] text-black font-abeezeeItalic hover:bg-opacity-70 transition-all duration-100"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
              <div className="w-full h-[50px]"></div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};
export default Signup;
