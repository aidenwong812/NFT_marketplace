const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="fixed right-0 left-0 top-0 bottom-0 bg-[#121212]">
        {children}
      </div>
    </>
  );
};
export default Layout;
