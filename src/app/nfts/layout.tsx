"use client";
import React from "react";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full h-full bg-[#121212] flex flex-col">{children}</div>
    </>
  );
};
export default Layout;
