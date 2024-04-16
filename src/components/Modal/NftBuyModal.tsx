"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useSettingModal } from "@/providers/SettingModalProvider";
import { useWallet } from "@/providers/WalletProvider";
import signAndConfirmTransaction from "@/lib/signAndConfirmTransaction";
import { toast } from "react-toastify";
import SpinnerWhite from "../notification/message/spinnerWhite";

const NftBuyModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathName = usePathname();
  const { nftBuyModal, setNftBuyModal } = useSettingModal();
  const { network, selectedNFT, walletID } = useWallet();

  const handleBuy = () => {
    setIsLoading(true);
    const xKey = process.env.NEXT_PUBLIC_API_KEY.toString();
    const endPoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

    const nftUrl = `${endPoint}marketplace/buy`;

    const data = {
      network,
      marketplace_address: marketplaceAddress,
      nft_address: selectedNFT.nft_address,
      price: Number(selectedNFT.price),
      seller_address: selectedNFT.seller_address,
      buyer_wallet: walletID,
    };

    axios
      .post(nftUrl, data, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": xKey,
        },
      })
      .then(async (res) => {
        if (res.data.success === true) {
          const transaction = res.data.result.encoded_transaction;
          const ret_result = await signAndConfirmTransaction(
            network,
            transaction
          );
          toast.success("Transaction success!");
        } else {
          toast.warning(res.data.message);
        }
      })
      // Catch errors if any
      .catch((err) => {
        toast.error("Transaction failed!");
      })
      .finally(() => {
        setIsLoading(false);
        setNftBuyModal(false);
      });
  };

  return (
    <>
      <div
        className={`${
          nftBuyModal && pathName.includes("/marketplace/")
            ? "w-[400px]"
            : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full relative overflow-auto px-[30px] pb-[50px] flex-none flex">
          <div className="w-[340px] h-full overflow-auto flex-none">
            <button onClick={() => setNftBuyModal(false)} className="mt-[60px]">
              <Image
                src="/icon/back_bgwhite.svg"
                width={0}
                height={0}
                alt=""
                className="w-[30px] h-auto"
              />
            </button>
            <div className="w-full flex justify-center mt-[180px]">
              <div className="w-[150px] h-[40px] rounded-full border-[#53FAFB] border-[1px] flex items-center justify-center text-[#53FAFB] text-[14px]">
                <Image
                  src="/icon/sol.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[20px] h-auto mr-[10px]"
                />
                {selectedNFT.price} SOL
              </div>
            </div>
            <p className="w-full text-center text-[14px] mt-[100px]">
              Are you sure you want to buy <br /> from SOFT COQ INU for{" "}
              {selectedNFT.price} SOL?
            </p>
            <button
              className="w-full h-[40px] bg-[#50FFFF] text-black font-bold rounded-full text-[13px] mt-[80px]"
              onClick={handleBuy}
            >
              {isLoading ? <SpinnerWhite /> : "Confirm"}
            </button>
            <button
              className="w-full h-[40px] border-[1px] border-[#50FFFF] text-[#50FFFF] font-bold rounded-full text-[13px] mt-[20px]"
              onClick={() => {
                setNftBuyModal(false);
                setIsLoading(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NftBuyModal;
