import type { Metadata } from "next";
import SettingModalProvider from "@/providers/SettingModalProvider";
import dynamic from "next/dynamic";
import SiderLoader from "@/components/layout/Sider/loading";
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: "SOFT COQ INU",
  description: "SOFT COQ INU",
};
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import WalletProvider from "@/providers/WalletProvider";

const Sider = dynamic(() => import("@/components/layout/Sider"), {
  ssr: false,
  loading: () => <SiderLoader />,
});
const Header = dynamic(() => import("@/components/layout/Header"));
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
const NftListModal = dynamic(() => import("@/components/Modal/NftListModal"));
const NftUnListModal = dynamic(() => import("@/components/Modal/NftUnListModal"));
const NftTransferModal = dynamic(
  () => import("@/components/Modal/NftTransferModal")
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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <WalletProvider>
            <Sider />
            <div className="flex-col flex w-full h-full">
              <Header />
              {children}
            </div>
            <FriendProfileModal />
            <UserSearchModal />
            <NewCommunityModal />
            <NewChannelModal />
            <NewRoomModal />
            <NftBuyModal />
            <NftBuyConfirmModal />
            <NftListModal />
            <NftUnListModal />
            <NftTransferModal />
            <CallActionModal />
            <NewGroupModal />
          </WalletProvider>
        </SettingModalProvider>
      </body>
    </html>
  );
}
