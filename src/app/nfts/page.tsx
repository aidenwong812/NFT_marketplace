"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageComponent from "@/components/shared/ImageComponent/demo";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useWallet } from "@/providers/WalletProvider";
// const NFTs = [
//   { image: "/nfts/1.svg", id: 1 },
//   { image: "/nfts/2.svg", id: 2 },
//   { image: "/nfts/3.svg", id: 3 },
//   { image: "/nfts/2.svg", id: 4 },
//   { image: "/nfts/2.svg", id: 5 },
//   { image: "/nfts/3.svg", id: 6 },
//   { image: "/nfts/4.svg", id: 7 },
//   { image: "/nfts/3.svg", id: 8 },
// ];
const Marketplace = () => {
  const router = useRouter();
  const { network, walletID } = useWallet()

  const [NFTs, setNFTs] = useState([])

  useEffect(() => {
    if (walletID) {
      const endpoint = "https://api.shyft.to/sol/v1/nft/read_all"

      axios.get(endpoint, {
        headers: {
          "x-api-key": "mMQyQQu1l0Tbz-Wr",
        },
        params: {
          network: network,
          address: walletID,
        }
      }).then(response => {
        const nfts = response.data.result
        setNFTs(nfts)
      })
    }
  }, [walletID])
  console.log(NFTs)

  return (
    <>
      <div className="w-full h-full bg-[#121212]">
        <div className="w-full h-full bg-[#121212] flex flex-col px-[50px] overflow-auto">
          <div className="w-full inline-flex items-center justify-between mt-[20px]">
            <p className="text-[20px]">My NFTs</p>
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
              {NFTs.map((item, index) => (
                <button
                  onClick={() => router.push(`/nfts/${item.id}`)}
                  key={index}
                >
                  <ImageComponent src={item.image} />
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
