"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useWallet } from "@/providers/WalletProvider";

const Marketplace = () => {
  const router = useRouter();
  const { network, walletID } = useWallet();
  const xKey = process.env.NEXT_PUBLIC_API_KEY.toString();
  const endPoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const [NFTs, setNFTs] = useState([]);

  useEffect(() => {
    if (walletID) {
      const endpoint = `${endPoint}nft/read_all`;

      axios
        .get(endpoint, {
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
          console.log(res.data.result);
        })
        .catch((err) => {
          setNFTs([]);
        });
    }
  }, [walletID]);

  return (
    <>
      <div className="w-full h-full bg-[#121212]">
        <div className="w-full h-full bg-[#121212] flex flex-col px-[50px] overflow-auto">
          <div className="w-full inline-flex items-center justify-between mt-[20px]">
            <p className="text-[20px]">Transfer NFTs between Wallets</p>
            <div className="inline-flex items-center">
              <button>
                <Image
                  src="/icon/view_flex.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[15px] mr-[20px]"
                />
              </button>
              <button>
                <Image
                  src="/icon/view_inline.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[15px]"
                />
              </button>
            </div>
          </div>

          <div className="w-full h-full mt-[30px] mb-[30px] overflow-auto relative">
            <div className="w-full flex-none grid grid-cols-4 gap-[20px] overflow-auto absolute max-h-full">
              {NFTs.map((nft) => (
                <button
                  onClick={() => router.push(`/transfer/${nft.mint}`)}
                  key={nft.mint}
                  className="relative"
                >
                  <img
                    src={nft.cached_image_uri}
                    alt="nft_image"
                    className="rounded-[18px]"
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
