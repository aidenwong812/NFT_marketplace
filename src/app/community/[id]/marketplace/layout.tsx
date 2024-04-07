"use client";
import dynamic from "next/dynamic";
import React from "react";
const Footer = dynamic(() => import("@/components/layout/Footer/communityMarketPlace"))
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full h-full flex flex-col bg-[#121212]">
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
