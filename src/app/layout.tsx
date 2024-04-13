import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "@/components/provider";
import dynamic from "next/dynamic";
import HomeLoader from "@/components/layout/Header/loader";
import FooterLoader from "@/components/layout/Footer/loader";
import CommunityListLoader from "@/components/layout/CommunityList/loader";
import SiderLoader from "@/components/layout/Sider/loading";
export const metadata: Metadata = {
  title: "Bipple",
  description: "Bipple chat",
};
import "./globals.css";
const Sider = dynamic(() => import("@/components/layout/Sider"), {
  ssr: false,
  loading: () => <SiderLoader />,
});
const Header = dynamic(() => import("@/components/layout/Header"));
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
  loading: () => <FooterLoader />,
});
const CommunityList = dynamic(
  () => import("@/components/layout/CommunityList"),
  {
    ssr: false,
    loading: () => <CommunityListLoader />,
  }
);
const CommunityProfileModal = dynamic(
  () => import("@/components/Modal/CommunityProfileModal")
);
const CommunityUserModal = dynamic(
  () => import("@/components/Modal/CommunityUserModal")
);
const FriendProfileModal = dynamic(
  () => import("@/components/Modal/FriendProfileModal")
);
const UserSearchModal = dynamic(
  () => import("@/components/Modal/UserSearchModal")
);
const NewCommunityModal = dynamic(
  () => import("@/components/Modal/NewCommunityModal")
);
const NewChannelModal = dynamic(
  () => import("@/components/Modal/NewChannelModal")
);
const NewRoomModal = dynamic(() => import("@/components/Modal/NewRoomModal"));
const NftBuyModal = dynamic(() => import("@/components/Modal/NftBuyModal"));
const NftBuyConfirmModal = dynamic(
  () => import("@/components/Modal/NftBuyConfirmModal")
);
const CallActionModal = dynamic(
  () => import("@/components/Modal/CallActionModal")
);
const NewGroupModal = dynamic(() => import("@/components/Modal/NewGroupModal"));
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-ttfirs bg-cover bg-center bg-[url('/community/bg.svg')] -z-10 bg-[#121212] fixed left-0 right-0 top-0 bottom-0 flex flex-row">
        <Provider>
          <Sider />
          <div className="flex-col flex w-full h-full">
            <Header />
            {children}
            <Footer />
          </div>
          <CommunityProfileModal />
          <CommunityUserModal />
          <FriendProfileModal />
          <UserSearchModal />
          <NewCommunityModal />
          <NewChannelModal />
          <NewRoomModal />
          <NftBuyModal />
          <NftBuyConfirmModal />
          <CallActionModal />
          <NewGroupModal />
        </Provider>
      </body>
    </html>
  );
}
