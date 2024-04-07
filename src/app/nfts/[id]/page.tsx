"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageComponent from "@/components/shared/ImageComponent/demo";
import { useSettingModal } from "@/context/communitysetting";
const NFT = () => {
  const router = useRouter();
  const {nftBuyModal, setNftBuyModal, nftBuyConfirmModal, setNftBuyConfirmModal} = useSettingModal()
  return (
    <>
      <div className="w-full h-full relative overflow-auto">
        <div className="w-full flex flex-col px-[50px] bg-[#121212] overflow-auto absolute h-full">
          <div className="w-full flex justify-center">
            <div className="mt-[30px] w-full inline-flex justify-between items-center mb-[30px]">
              <button
                className="inline-flex items-center"
                onClick={() => {
                  router.back();
                }}
              >
                <Image
                  src="/icon/back_bgwhite.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[40px] h-auto"
                />
                <p className="text-[25px] ml-[20px]">
                  Supernova ITALY † #109829
                </p>
              </button>
              <button>
                <Image
                  src="/icon/detail.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[4px]"
                />
              </button>
            </div>
          </div>
          <div className="w-full pb-[30px] overflow-auto h-full">
            <div className="w-full flex justify-center items-center overflow-auto gridWidth:h-full">
              <div className="gridWidth:flex gridWidth:flex-row gridWidth:gap-[40px] overflow-auto">
                <div className="flex flex-col w-[380px] flex-none mb-[50px] gridWidth:mb-0">
                  <div className="w-[360px]">
                    <ImageComponent src="/nfts/5.svg" />
                  </div>
                  <div className="w-full inline-flex items-center justify-between mt-[30px]">
                    <button
                      className="inline-flex"
                    >
                      <Image
                        width={0}
                        height={0}
                        alt=""
                        src={"/avatar/2.svg"}
                        className="w-[45px] h-auto"
                      />
                      <div className="ml-[20px] text-left">
                        <p>Fernado TOYs</p>
                        <p className="text-[12px] text-[#7A7A7A]">
                          66,2k Members – 272 Active
                        </p>
                      </div>
                    </button>
                    <button className="inline-flex items-center justify-center w-[100px] h-[35px] bg-[#53FAFB] rounded-full">
                      <p className="text-[13px] text-black font-bold">Joined</p>
                      <Image
                        src="/icon/dropdown.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[10px] ml-[10px]"
                      />
                    </button>
                  </div>
                </div>
                <div className="h-full gridWidth:w-[500px] w-[380px] flex flex-col overflow-auto flex-none">
                  <div className="w-full inline-flex items-center justify-between">
                    <div className="inline-flex">
                      <Image
                        src="/avatar/17.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[50px] h-auto"
                      />
                      <div className="ml-[10px]">
                        <p>Kemoutyo FLW</p>
                        <p className="text-[12px] text-[#6F6666]">
                          21,2k Followers
                        </p>
                      </div>
                    </div>
                    <div className="inline-flex">
                      <Image
                        src="/icon/active_transparent.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[40px]"
                      />
                      <Image
                        src="/icon/message_grey.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[40px] ml-[10px]"
                      />
                    </div>
                  </div>
                  <div className="w-full inline-flex justify-between items-center mt-[20px]">
                    <div className="inline-flex">
                      <div className="mr-[10px]">
                        <p>7,12 SOL</p>
                        <p className="text-[12px]">3 212 USD</p>
                      </div>
                      <Image
                        src="/icon/sol.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[30px] h-auto"
                      />
                    </div>
                    <div className="inline-flex">
                      <button className="w-[130px] h-[45px] rounded-full border border-[#53FAFB] text-[#53FAFB] mr-[10px]" onClick={() => setNftBuyModal(!nftBuyModal)}>
                        Place a Bid
                      </button>
                      <button className="w-[130px] h-[45px] rounded-full bg-[#53FAFB] text-black font-bold text-[14px] flex items-center justify-center" onClick={() => setNftBuyConfirmModal(!nftBuyConfirmModal)}>
                        Collect Now!
                      </button>
                    </div>
                  </div>
                  <div className="inline-flex mt-[40px]">
                    <div className="flex-row items-center">
                      <div className="w-full justify-center flex mb-[3px]">
                        <Image
                          src="/icon/heart.svg"
                          width={0}
                          height={0}
                          alt=""
                          className="w-[25px] h-auto"
                        />
                      </div>
                      <p>28,4k</p>
                    </div>
                    <div className="flex-row items-center ml-[30px]">
                      <div className="w-full justify-center flex mb-[3.5px]">
                        <Image
                          src="/icon/forward.svg"
                          width={0}
                          height={0}
                          alt=""
                          className="w-[24px] h-auto"
                        />
                      </div>
                      <p>28,4k</p>
                    </div>
                  </div>
                  <div className="w-full grid grid-cols-4 text-[14px] mt-[30px] mb-[20px]">
                    <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:bg-opacity-5 focus:text-white text-[#606060]">
                      Overview
                    </button>
                    <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:bg-opacity-5 focus:text-white text-[#606060]">
                      Properties
                    </button>
                    <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:bg-opacity-5 focus:text-white text-[#606060]">
                      Offers
                    </button>
                    <button className="h-[40px] rounded-full focus:bg-[#53FAFB] focus:bg-opacity-5 focus:text-white text-[#606060]">
                      Active
                    </button>
                  </div>
                  <div className="w-full h-full overflow-auto text-[#707070]">
                    <p className="text-justify">
                      The terms and conditions contained in this on that
                      Agreement shall constitute the entire all previous things
                      of that agreements and understandings, whether oral or
                      written
                    </p>
                    <p className="text-justify mt-[20px]">
                      the entire all previous agreements and understandings,
                      whether oral or written{" "}
                      <span className="text-white text-[13px]">Read More</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NFT;
