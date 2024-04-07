import React from "react";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/layout/Footer/community/Footer"));
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
