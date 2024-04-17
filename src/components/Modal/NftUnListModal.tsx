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

const NftUnListModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { nftUnListModal, setNftUnListModal } = useSettingModal();
  const pathName = usePathname();
  const { activeNFTs, network, selectedNFT } = useWallet();
  const xKey = process.env.NEXT_PUBLIC_API_KEY.toString();
  const endPoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

  const handleList = () => {
    setIsLoading(true);
    const nftUrl = `${endPoint}marketplace/unlist`;
    let nft = null;
    activeNFTs.map(one => {
      if (one.nft_address === selectedNFT.mint) {
        nft = one
        return;
      }
    });

    if (!nft) {
      toast.error("Unlisting failed");
      setIsLoading(false);
      setNftUnListModal(false);
    } else {
      const data = {
        network: network,
        marketplace_address: marketplaceAddress,
        list_state: nft.list_state,
        seller_wallet: nft.seller_address,
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
            toast.success("Unlisting success");
          } else {
            //setShowLister(false);
            toast.warning(res.data.message);
          }
        })
        // Catch errors if any
        .catch((err) => {
          toast.error("Unlisting failed");
          // navigate(`/my-listings`);
          //setShowLister(false);
        })
        .finally(() => {
          setIsLoading(false);
          setNftUnListModal(false);
        });
    }
  };

  return (
    <>
      <div
        className={`${nftUnListModal && pathName.includes("/nfts/") ? "w-[400px]" : "w-0"
          } flex flex-none h-full bg-[#171717] transition-all duration-500 overflow-auto modalWidth:static absolute right-0 z-20 prevent-select`}
      >
        <div className="w-[400px] h-full relative overflow-auto px-[30px] pb-[50px] flex-none flex">
          <div className="w-[340px] h-full overflow-auto flex-none">
            <button
              onClick={() => setNftUnListModal(false)}
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
            <p className="w-full text-center text-[14px] mt-[340px]">
              Are you sure you want to Unlist this NFT?
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
                setNftUnListModal(false);
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
export default NftUnListModal;
