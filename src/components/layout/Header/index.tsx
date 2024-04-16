"use client";
import React from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import NotificationLoader from "./notification/loader";
import MarketplaceHeaderLoader from "./marketplace/loading";
import NFTHeader from "./nft";
import CommonHeader from "./common";
const MarketplaceHeader = dynamic(() => import("./marketplace"), {
  ssr: false,
  loading: () => <MarketplaceHeaderLoader />,
});
const NotificationHeader = dynamic(() => import("./notification"), {
  ssr: false,
  loading: () => <NotificationLoader />,
});
const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full h-[100px] border-b-[1px] border-b-[#2A2A2A] flex-none mobile:px-[50px] px-[20px] prevent-select bg-[#121212]">
        {pathname === "/notification" ? (
          <NotificationHeader />
        ) : pathname === "/marketplace" ||
          pathname.includes("/marketplace/") ? (
          <MarketplaceHeader />
        ) : pathname === "/nfts" || pathname.includes("/nfts/") ? (
          <NFTHeader />
        ) : (
          <CommonHeader />
        )}
      </div>
    </>
  );
};
export default Header;
