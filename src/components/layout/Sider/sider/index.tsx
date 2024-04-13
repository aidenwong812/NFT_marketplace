import ListComponent from "@/components/layout/Sider/components/index";

const SiderList1 = (props: any) => {
  return (
    <>
      <ul className="text-[#D4D4D4] text-md mt-[10px] h-full overflow-auto">
        <ListComponent
          _name="NFTs"
          _icon="/icon/NFT.svg"
          _clickedIcon="/icon/NFT_blue.svg"
          _url="/nfts"
          pathname={props.pathname}
          siderWidth={props.siderWidth}
        />
        <ListComponent
          _name="Marketplace"
          _icon="/icon/marketplace.svg"
          _clickedIcon="/icon/marketplace_blue.svg"
          _url="/marketplace"
          pathname={props.pathname}
          siderWidth={props.siderWidth}
        />
      </ul>
    </>
  );
};
export default SiderList1;
