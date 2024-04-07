"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import HomeLoader from "./home/loader";
import NotificationLoader from "./notification/loader";
import CommunityHeaderLoader from "./community/loading";
import CommunitySettingHeader from "./communitySetting";
import CommunityOverviewHeader from "./communityOverview";
import MarketplaceHeaderLoader from "./marketplace/loading";
import FriendLoader from "./friends/loading"
import NFTHeader from "./nft";
const MarketplaceHeader = dynamic(() => import("./marketplace"), {ssr:false , loading : () => <MarketplaceHeaderLoader/>})
const HomeHeader = dynamic(() => import("./home"), {
  ssr: false,
  loading: () => <HomeLoader />,
});
const CommunityHeader = dynamic(() => import("./community"), {ssr:false, loading: () => <CommunityHeaderLoader/>})
const NotificationHeader = dynamic(() => import("./notification"), {
  ssr: false,
  loading: () => <NotificationLoader />,
});
const ChatHeader = dynamic(() => import("./chats"))
const FriendsHeader = dynamic(() => import("./friends"), {ssr:false, loading: () => <FriendLoader/>})
const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full h-[100px] border-b-[1px] border-b-[#2A2A2A] flex-none mobile:px-[50px] px-[20px] prevent-select bg-[#121212]">
        {pathname === "/home" ? (
          <HomeHeader />
        ) : pathname === "/notification" ? (
          <NotificationHeader />
        ) : pathname.includes("/community/") || pathname === "/community" ? (
          <CommunityHeader />
        ) : pathname === "/communitySetting" ? (
          <CommunitySettingHeader />
        ) : pathname === "/communityOverview" ? (
          <CommunityOverviewHeader />
        ) : pathname === "/marketplace" ? (
          <MarketplaceHeader />
        ) : pathname === "/nfts" || pathname.includes("/nfts/") ? (
          <NFTHeader />
        ) : pathname.includes("/chats/") || pathname === "/chats" ? (
          <ChatHeader />
        ) : pathname === "/friends" ? <FriendsHeader /> :null}
      </div>
    </>
  );
};
export default Header;
