"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import ImageComponent from "@/components/shared/ImageComponent/demo";
import { useWallet } from "@/providers/WalletProvider";
import signAndConfirmTransaction from "@/lib/signAndConfirmTransaction";

const NFT = () => {
  const router = useRouter();
  const { network, walletID } = useWallet()

  const xKey = process.env.NEXT_PUBLIC_API_KEY.toString()
  const endPoint = process.env.NEXT_PUBLIC_API_ENDPOINT

  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState("")
  const [name, setName] = useState("")
  const [symbol, setSymbol] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")
  const [royalty, setRoyalty] = useState(0)
  const [maxSupply, setMaxSupply] = useState(0)

  const handleMint = () => {
    const data = {
      network,
      wallet: walletID,
      name,
      symbol,
      description,
      external_url: url,
      max_supply: maxSupply,
      royalty,
      file,
    }

    const endpoint = `${endPoint}nft/create_detach`

    axios.post(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": xKey,
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      }
    }).then(async res => {
      if (res.data.success === true) {
        const transaction = res.data.result.encoded_transaction
        const mint = res.data.result.mint
        const ret_result = await signAndConfirmTransaction(network, transaction)
      }
    })
  }

  return (
    <>
      <div className="w-full h-full relative overflow-auto">
        <div className="w-full flex flex-col px-[50px] bg-[#121212] overflow-auto absolute h-full">
          <div className="w-full flex justify-center">
            <div className="mt-[30px] w-full inline-flex justify-between items-center mb-[30px]">
              <p className="text-[25px]">
                New NFT
              </p>
            </div>
          </div>
          <div className="w-full pb-[30px] overflow-auto h-full">
            <div className="w-full flex flex-col justify-center items-center overflow-auto gridWidth:h-full gap-[40px]">
              <div className="gridWidth:flex gridWidth:flex-row gridWidth:gap-[40px] overflow-auto">
                <div className="flex flex-col gap-[30px] w-[380px] flex-none justify-between mb-[50px] gridWidth:mb-0">
                  <div className="w-full flex-1">
                    <label htmlFor="file" className="cursor-pointer">
                      {
                        file ? (
                          <ImageComponent src={preview} />
                        ) : (
                          <div className="flex items-center justify-center gap-[20px] w-full h-full duration-700 opacity-100 border-[2px] border-dashed rounded-[18px]">
                            <Image src="/icon/upload.svg" width="25" height="25" alt="icon" />
                            <p>
                              Select File
                            </p>
                          </div>
                        )
                      }
                    </label>
                    <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        setFile(e.target.files[0])
                        setPreview(URL.createObjectURL(e.target.files[0]))
                      }} />
                  </div>
                  <div className="w-full inline-flex items-center justify-between">
                    <button
                      className="inline-flex"
                    >
                      <img
                        width={0}
                        height={0}
                        alt=""
                        src={"/avatar/21.png"}
                        className="w-[45px] h-auto rounded-[8px]"
                      />
                      <div className="ml-[20px] text-left">
                        <p>SOFT COQ INU</p>
                        <p className="text-[12px] text-[#7A7A7A]">
                          66,2k Members – 272 Active
                        </p>
                      </div>
                    </button>
                    <button className="inline-flex items-center justify-center w-[100px] h-[35px] bg-[#53FAFB] rounded-full">
                      <p className="text-[13px] text-black font-bold">Joined</p>
                      <Image
                        src="/icon/dropdown.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[10px] ml-[10px]"
                      />
                    </button>
                  </div>
                </div>
                <div className="h-full gridWidth:w-[500px] w-[380px] flex flex-col overflow-auto flex-1 px-[20px] gap-[25px]">
                  <input
                    placeholder="Enter NFT Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px]"
                  />
                  <input
                    placeholder="symbol"
                    onChange={(e) => {
                      setSymbol(e.target.value);
                    }}
                    className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px]"
                  />
                  <textarea
                    placeholder="Enter Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px]"
                  />
                  <input
                    placeholder="Enter URL"
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                    className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px]"
                  />
                  <div className="flex items-center gap-[20px]">
                    <input
                      placeholder="Enter Max Supply"
                      type="number"
                      onChange={(e) => {
                        setMaxSupply(Number(e.target.value));
                      }}
                      className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px]"
                    />
                    <input
                      placeholder="Enter Loyalty"
                      type="number"
                      onChange={(e) => {
                        setRoyalty(Number(e.target.value));
                      }}
                      className="bg-[#191919] border-none outline-none placeholder:text-[#707070] py-[15px] px-[25px] w-full rounded-[12px] text-[14px]"
                    />
                  </div>
                </div>
              </div>
              <button
                className="w-[130px] h-[45px] rounded-full border border-[#53FAFB] text-[#53FAFB] mr-[10px] hover:bg-[#53FAFB] hover:text-black"
                onClick={handleMint}
              >
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NFT;
