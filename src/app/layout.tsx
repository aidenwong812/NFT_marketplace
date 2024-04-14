import type { Metadata } from "next";
import SettingModalProvider from "@/providers/SettingModalProvider";
import dynamic from "next/dynamic";
import FooterLoader from "@/components/layout/Footer/loader";
import SiderLoader from "@/components/layout/Sider/loading";
export const metadata: Metadata = {
  title: "SOFT COQ INU",
  description: "SOFT COQ INU",
};
import "./globals.css";
import WalletProvider from "@/providers/WalletProvider";

const Sider = dynamic(() => import("@/components/layout/Sider"), {
  ssr: false,
  loading: () => <SiderLoader />,
});
const Header = dynamic(() => import("@/components/layout/Header"));
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
  loading: () => <FooterLoader />,
});
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
const NftListModal = dynamic(
  () => import("@/components/Modal/NftListModal")
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
        <SettingModalProvider>
          <WalletProvider>
            <Sider />
            <div className="flex-col flex w-full h-full">
              <Header />
              {children}
              <Footer />
            </div>
            <FriendProfileModal />
            <UserSearchModal />
            <NewCommunityModal />
            <NewChannelModal />
            <NewRoomModal />
            <NftBuyModal />
            <NftBuyConfirmModal />
            <NftListModal />
            <CallActionModal />
            <NewGroupModal />
          </WalletProvider>
        </SettingModalProvider>
      </body>
    </html>
  );
}
