"use client";
import React from "react";
import SliderLoader from "@/components/home/Slider/loader";
import dynamic from "next/dynamic";
import RecommandLoader from "@/components/home/Recommand/loader";
import LastCommunityLoader from "@/components/home/LastCommunity/loader";
const Slider = dynamic(() => import("@/components/home/Slider"), {
  ssr: false,
  loading: () => <SliderLoader />,
});
const Recommand = dynamic(() => import("@/components/home/Recommand")
// , {
//   ssr: false,
//   loading: () => <RecommandLoader />,
// }
);
const LastCommunity = dynamic(() => import("@/components/home/LastCommunity"), 
// {
//   ssr: false,
//   loading: () => <LastCommunityLoader />,
// }
);
const Home = () => {
  return (
    <>
      <div
        className="w-full mobile:px-[50px] px-[20px] h-full overflow-auto prevent-select"
        style={{ height: "var(--homemain-height)" }}
      >
        <Slider />
        <Recommand />
        <LastCommunity />
      </div>
    </>
  );
};
export default Home;
