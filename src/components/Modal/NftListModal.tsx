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

const NftListModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { nftListModal, setNftListModal } = useSettingModal();
  const pathName = usePathname();
  const { network, selectedNFT, walletID } = useWallet();
  const xKey = process.env.NEXT_PUBLIC_API_KEY.toString();
  const endPoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

  const [price, setPrice] = useState(0);

  const handleList = () => {
    setIsLoading(true);
    const nftUrl = `${endPoint}marketplace/list`;

    const data = {
      network: network,
      marketplace_address: marketplaceAddress,
      nft_address: selectedNFT.mint,
      price: price,
      seller_wallet: walletID,
    };

    axios
      .post(nftUrl, data, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": xKey,
        },
      })
      // Handle the response from backend here
      .then(async (res) => {
        if (res.data.success === true) {
          const transaction = res.data.result.encoded_transaction;
          const ret_result = await signAndConfirmTransaction(
            network,
            transaction
          );
          toast.success("Listing success");
        } else {
          //setShowLister(false);
          toast.warning(res.data.message);
        }
      })
      // Catch errors if any
      .catch((err) => {
        toast.error("Listing failed");
        // navigate(`/my-listings`);
        //setShowLister(false);
      })
      .finally(() => {
        setPrice(0);
        setIsLoading(false);
        setNftListModal(false);
      });
  };

  return (
    <>
      <div
        className={`${
          nftListModal && pathName.includes("/nfts/") ? "w-[400px]" : "w-0"
        } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full relative overflow-auto px-[30px] pb-[50px] flex-none flex">
          <div className="w-[340px] h-full overflow-auto flex-none">
            <button
              onClick={() => setNftListModal(false)}
              className="mt-[60px]"
            >
              <Image
                src="/icon/back_bgwhite.svg"
                width={0}
                height={0}
                alt=""
                className="w-[30px] h-auto"
              />
            </button>
            <div className="w-full flex justify-center mt-[180px] relative">
              <Image
                src="/icon/sol.svg"
                width={0}
                height={0}
                alt=""
                className="w-[20px] h-auto absolute left-[96px] top-[12px]"
              />
              <input
                className="py-[10px] w-[180px] outline-none bg-[#252525] px-[50px] text-[14px] rounded-[12px] placeholder:text-[#4C4C4C] placeholder:text-[12px]"
                placeholder="Price"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <p className="absolute top-[8px] right-[90px] text-[#53FAFB]">
                SOL
              </p>
            </div>
            <p className="w-full text-center text-[14px] mt-[100px]">
              Are you sure you want to List <br /> for {price || 0} SOL?
            </p>
            <button
              className="w-full h-[40px] bg-[#50FFFF] text-black font-bold rounded-full text-[13px] mt-[80px]"
              onClick={handleList}
            >
              {isLoading ? <SpinnerWhite /> : "Confirm"}
            </button>
            <button
              className="w-full h-[40px] border-[1px] border-[#50FFFF] text-[#50FFFF] font-bold rounded-full text-[13px] mt-[20px]"
              onClick={() => {
                setNftListModal(false);
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
export default NftListModal;
