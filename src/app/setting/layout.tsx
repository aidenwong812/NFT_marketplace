"use client";
import Header from "@/components/layout/Header/setting";
import dynamic from "next/dynamic";
import React from "react";
import SiderLoader from '@/components/layout/Sider/setting/loading'
const Sider = dynamic(() => import("@/components/layout/Sider/setting"), {ssr: false, loading : () => <SiderLoader />});
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="fixed right-0 left-0 top-0 bottom-0 bg-[#121212] flex flex-row">
        <Sider />
        <div className="w-full h-full flex flex-col">
            <Header/>
            {children}
        </div>
      </div>
    </>
  );
};
export default Layout;
