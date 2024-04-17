"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useWallet } from "@/providers/WalletProvider";
import { toast } from "react-toastify";
import Image from "next/image";

const Marketplace = () => {
  const router = useRouter();
  const { network, walletID, setActiveNFTs } = useWallet();

  const [NFTs, setNFTs] = useState([]);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (walletID) {
      const xKey = process.env.NEXT_PUBLIC_API_KEY.toString();
      const endPoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
      const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;

      let nftUrl = `${endPoint}marketplace/active_listings?network=${network}&marketplace_address=${marketplaceAddress}`;

      axios
        .get(nftUrl, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": xKey,
          },
        })
        .then((res) => {
          if (res.data.success === true) {
            setActiveNFTs(res.data.result);
            const mints = res.data.result.map((one) => one.nft_address);
            setListings(mints);
          } else {
            setActiveNFTs([]);
            toast.info("No NFTs");
          }
        })
        // Catch errors if any
        .catch((err) => {
          toast.warning(err.response);
          setActiveNFTs([]);
        });

      nftUrl = `${endPoint}nft/read_all`;

      axios
        .get(nftUrl, {
          headers: {
            "x-api-key": xKey,
          },
          params: {
            network: network,
            address: walletID,
          },
        })
        .then((res) => {
          if (res.data.success === true) {
            setNFTs(res.data.result);
          } else {
            setNFTs([]);
          }
        })
        .catch((err) => {
          toast.error("Error loading NFTs");
          setNFTs([]);
        });
    }
  }, [walletID]);

  return (
    <>
      <div className="w-full h-full bg-[#121212]">
        <div className="w-full h-full bg-[#121212] flex flex-col px-[50px]">
          <p className="text-[20px] mt-[20px]">My NFTs</p>

          <div className="w-full h-full mt-[30px] mb-[30px] relative">
            <div className="w-full flex-none grid grid-cols-4 gap-[30px] absolute max-h-full">
              {NFTs.map((nft) => (
                <button
                  onClick={() => router.push(`/nfts/${nft.mint}`)}
                  key={nft.mint}
                  className="relative"
                >
                  {listings.includes(nft.mint) && (
                    <Image
                      src="/home/sale_ribbon.png"
                      width={100}
                      height={0}
                      alt=""
                      className="absolute -right-2 -top-2"
                      priority={true}
                    />
                  )}
                  <img
                    src={nft.cached_image_uri}
                    alt="nft_image"
                    className="rounded-[18px] w-full aspect-[4/3]"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Marketplace;
