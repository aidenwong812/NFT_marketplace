"use client";
import React from "react";
import Footer from "@/components/layout/Footer/communityMarketPlace";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full h-full bg-[#121212] flex flex-col">
        {children}
        <Footer/>
      </div>
    </>
  );
};
export default Layout;
