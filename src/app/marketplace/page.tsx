"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useSettingModal } from "@/providers/SettingModalProvider";
const BestCollection = dynamic(
  () => import("@/components/marketplace/BestCollection")
);
const NewNFTS = dynamic(() => import("@/components/marketplace/NewNFTs"));
const Page = () => {
  const router = useRouter();
  const bestCollections = [
    { link: "/marketplace/1.svg", avatar: "/avatar/18.svg", id: 1 },
    { link: "/marketplace/2.svg", avatar: "/avatar/18.svg", id: 2 },
    { link: "/marketplace/3.svg", avatar: "/avatar/18.svg", id: 3 },
    { link: "/marketplace/1.svg", avatar: "/avatar/18.svg", id: 4 },
    { link: "/marketplace/2.svg", avatar: "/avatar/18.svg", id: 5 },
    { link: "/marketplace/3.svg", avatar: "/avatar/18.svg", id: 6 },
    { link: "/marketplace/1.svg", avatar: "/avatar/18.svg", id: 7 },
    { link: "/marketplace/2.svg", avatar: "/avatar/18.svg", id: 8 },
    { link: "/marketplace/3.svg", avatar: "/avatar/18.svg", id: 9 },
    { link: "/marketplace/1.svg", avatar: "/avatar/18.svg", id: 10 },
    { link: "/marketplace/2.svg", avatar: "/avatar/18.svg", id: 11 },
  ];
  const explorer = [
    {
      link: "/chicken/6.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 1,
    },
    {
      link: "/chicken/1.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 2,
    },
    {
      link: "/chicken/2.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 3,
    },
    {
      link: "/chicken/3.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 4,
    },
    {
      link: "/chicken/4.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 5,
    },
    {
      link: "/chicken/5.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 6,
    },
    {
      link: "/chicken/6.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 7,
    },
    {
      link: "/chicken/1.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 8,
    },
    {
      link: "/chicken/2.jpg",
      avatar: "/avatar/2.svg",
      user: "/avatar/17.svg",
      id: 9,
    },
  ];
  const newNfts = [
    { logo: "/marketplace/logo.svg" },
    { logo: "/marketplace/logo.svg" },
    { logo: "/marketplace/logo.svg" },
    { logo: "/marketplace/logo.svg" },
    { logo: "/marketplace/logo.svg" },
    { logo: "/marketplace/logo.svg" },
    { logo: "/marketplace/logo.svg" },
    { logo: "/marketplace/logo.svg" },
  ];
  return (
    <>
      <div className="w-full h-full bg-[#121212] mobile:px-[50px] px-[20px] pt-[30px] pb-[50px] overflow-auto prevent-select">
        <div className="w-full h-full relative overflow-auto flex flex-col gap-[20px]">
          <div>
            <div className="flex items-center justify-between">
              <p className="text-[20px]">Best & Trends Collections</p>
              <button className="w-[130px] h-[45px] rounded-full border border-[#53FAFB] text-[#53FAFB] mr-[10px] hover:bg-[#53FAFB] hover:text-black" onClick={() => router.push("/nfts/new")}>
                New NFT
              </button>
            </div>
            <div className="w-full h-[200px] overflow-auto">
              <div className="mt-[20px] w-full overflow-auto inline-flex gap-[15px] absolute">
                {bestCollections.map((item, index) => (
                  <div key={index}>
                    <BestCollection item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="text-[20px]">Explore New NFTs</p>
            <div className="w-full mt-[20px] relative h-[250px] overflow-auto">
              <div className="w-full overflow-auto inline-flex gap-[10px] absolute">
                {explorer.map((item, index) => (
                  <div key={index}>
                    <NewNFTS item={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
