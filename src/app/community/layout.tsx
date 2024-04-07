"use client";
import React from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const Footer = dynamic(() => import("@/components/layout/Footer/community/Footer"));
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  return (
    <>
      <div className="w-full h-full flex flex-col">
        {children}
        {!pathName.includes("/community" && "/marketplace") && <Footer />}
      </div>
    </>
  );
};
export default Layout;
