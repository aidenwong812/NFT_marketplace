"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"
const CommunityOverview = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const tradingData = [
    {
      date: "APR 23",
      sales: "25 ETH",
      volume: "25 ETH",
      growth: "25.23%",
      price: "25 SOL",
    },
    {
      date: "APR 23",
      sales: "25 ETH",
      volume: "25 ETH",
      growth: "25.23%",
      price: "25 SOL",
    },
    {
      date: "APR 23",
      sales: "25 ETH",
      volume: "25 ETH",
      growth: "25.23%",
      price: "25 SOL",
    },
    {
      date: "APR 23",
      sales: "25 ETH",
      volume: "25 ETH",
      growth: "25.23%",
      price: "25 SOL",
    },
    {
      date: "APR 23",
      sales: "25 ETH",
      volume: "25 ETH",
      growth: "25.23%",
      price: "25 SOL",
    },
    {
      date: "APR 23",
      sales: "25 ETH",
      volume: "25 ETH",
      growth: "25.23%",
      price: "25 SOL",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setWindowWidth(windowWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial margin calculation

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        className={`bg-[#121212] mobile:px-[50px] px-[20px] pt-[40px] overflow-auto h-full prevent-select`}
      >
        <div
          className={`w-full grid gap-[20px] h-auto ${
            windowWidth > 1290 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <div>
            <p className="text-[#656565] mb-[10px]">Insights</p>
            <div className="bg-[#161616] border border-[#212121] rounded-[20px] inline-flex items-center w-full justify-center mobile:px-[20px] px-[10px] py-[35px]">
              <div>
                <Image
                  src="/overview/circleChart.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[50px] h-auto"
                />
              </div>
              <div className="ml-[20px] mr-[20px]">
                <p className="mobile:text-[23px] text-[15px]">Insights</p>
                <p className="mobile:text-[13px] text-[10px]">Balance Trends</p>
              </div>
              <div className="h-[50px] border-l-[1px] border-l-[#50FFFF]"></div>
              <div className="ml-[30px] mr-[20px]">
                <p className="mobile:text-[23px] text-[15px]">87, 9 SOL</p>
                <p className="mobile:text-[13px] text-[10px]">
                  +4.3% vs last week
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#656565] mb-[10px]">Insights</p>
            <div className="bg-[#161616] border border-[#212121] rounded-[20px] inline-flex items-center w-full h-[125px] justify-center mobile:px-[20px] px-[15px] py-[20px]">
              <div>
                <p className="text-[#656565] text-[13px]">Sales/month</p>
                <p className="font-semibold text-[18px] mt-[3px]">133 units</p>
                <div className="rounded-full w-[70px] h-[25px] bg-[#FF5353] bg-opacity-35 mt-[3px] inline-flex items-center justify-center">
                  <div>
                    <Image
                      src="/icon/down_red.svg"
                      width={0}
                      height={0}
                      alt=""
                      className="w-[8px] h-auto"
                    />
                  </div>
                  <p className="text-[10px] ml-[5px]">23.24%</p>
                </div>
              </div>
              <div className="ml-[40px]">
                <Image
                  src="/overview/splineChart_red.png"
                  width={275}
                  height={275}
                  alt=""
                  className=" h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full grid gap-[20px] h-auto mt-[20px] ${
            windowWidth > 1290 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          <div>
            <p className="text-[#656565] mb-[10px]">Sales report</p>
            <div className="bg-[#161616] border border-[#212121] rounded-[20px] w-full mobile:px-[25px] px-[15px] py-[20px]">
              <div className="inline-flex">
                <p className="text-[17px] mr-[5px]">Daily</p>
                <div className="flex items-center">
                  <Image
                    src="/icon/dropdown_white.svg"
                    width={0}
                    height={0}
                    alt=""
                    className="w-[10px] h-auto"
                  />
                </div>
              </div>
              <div className="w-full relative">
                <Image
                  src="/overview/splineChart_blue.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-[1000px] h-auto"
                />
              </div>
              <div className="w-full overflow-auto">
                <table className="table-auto mt-[10px] w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Sales</th>
                      <th className="px-4 py-2">Volume</th>
                      <th className="px-4 py-2">Growth</th>
                      <th className="px-4 py-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradingData.map((item, index) => (
                      <tr key={index}>
                        <td className="text-center">{item.date}</td>
                        <td className="text-center">{item.sales}</td>
                        <td className="text-center">{item.volume}</td>
                        <td className="w-full justify-center inline-flex">
                          <Image
                            className="mr-[5px] w-[10px] h-auto"
                            src="/icon/rise_green.svg"
                            width={0}
                            height={0}
                            alt=""
                          />
                          {item.growth}
                        </td>
                        <td className="text-center">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div>
              <p className="text-[#656565] mb-[10px]">Revenue</p>
              <div className="bg-[#161616] border border-[#212121] rounded-[20px] inline-flex items-center w-full h-[125px] justify-center mobile:px-[20px] px-[15px] py-[20px]">
                <div>
                  <p className="text-[#656565] text-[13px]">Revenue/month</p>
                  <p className="font-semibold text-[18px] mt-[3px]">23K SOL</p>
                  <div className="rounded-full w-[70px] h-[25px] bg-[#53FAFB] bg-opacity-20 mt-[3px] inline-flex items-center justify-center">
                    <div>
                      <Image
                        src="/icon/rise_green.svg"
                        width={0}
                        height={0}
                        alt=""
                        className="w-[8px] h-auto"
                      />
                    </div>
                    <p className="text-[10px] ml-[5px]">23.24%</p>
                  </div>
                </div>
                <div className="ml-[40px]">
                  <Image
                    src="/overview/splineChart_green.png"
                    width={250}
                    height={250}
                    alt=""
                    className="w-auto h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="h-full flex flex-col">
                <p className="text-[#656565] mb-[10px]">Revenue</p>
                <div className="bg-[#161616] border border-[#212121] rounded-[20px] w-full h-full mobile:px-[20px] px-[15px] py-[20px] flex flex-col">
                  <p className="w-full justify-center inline-flex text-[25px]">
                    Balance: 125 235 SOL
                  </p>
                  <div className="w-full flex justify-center h-full items-center">
                    <Image
                      src="/overview/percentage_blue.png"
                      width={275}
                      height={275}
                      alt=""
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CommunityOverview;
