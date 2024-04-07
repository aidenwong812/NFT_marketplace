import React from "react";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="w-full h-full bg-[#121212]">
        {children}
      </div>
    </>
  );
};
export default Layout;
