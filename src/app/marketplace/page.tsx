"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useWallet } from "@/providers/WalletProvider";
import axios from "axios";
import { toast } from "react-toastify";

const NewNFTS = dynamic(() => import("@/components/marketplace/NewNFTs"));
const Page = () => {
  const { network, walletID, setActiveNFTs } = useWallet();

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const xKey = process.env.NEXT_PUBLIC_API_KEY.toString();
    const endPoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

    const nftUrl = `${endPoint}marketplace/active_listings?network=${network}&marketplace_address=${marketplaceAddress}`;

    axios
      .get(nftUrl, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": xKey,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setNfts(res.data.result);
          setActiveNFTs(res.data.result);
        } else {
          setNfts([]);
          toast.info("No NFTs");
        }
      })
      // Catch errors if any
      .catch((err) => {
        toast.warning(err.response.data.message);
        setNfts([]);
      });
  }, [walletID]);

  return (
    <>
      <div className="w-full h-full bg-[#121212] mobile:px-[50px] px-[20px] pt-[30px] pb-[50px] overflow-auto prevent-select">
        <div className="w-full h-full relative overflow-auto flex flex-col gap-[20px]">
          <p className="text-[25px]">Explore NFTs</p>
          <div className="w-full h-full mt-[20px] relative overflow-auto">
            {nfts.length > 0 ? (
              <div className="w-full overflow-auto grid grid-cols-4 gap-[30px] absolute">
                {nfts.map((item, index) => (
                  <div key={index}>
                    <NewNFTS item={item} />
                  </div>
                ))}
              </div>
            ) : (
              <p className="w-full h-full flex justify-center items-center text-[25px]">
                No NFTs
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
