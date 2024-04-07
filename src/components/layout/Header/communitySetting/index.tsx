import React from "react";
import Image from "next/image"
import {useRouter} from "next/navigation";
const CommunitySettingHeader = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full h-full inline-flex justify-between mt-[10px]">
        <div className="inline-flex items-center">
          <button onClick={() => router.back()} className="z-10 hover:opacity-70">
            <Image
              src={"/icon/back_bgwhite.svg"}
              width={0}
              height={0}
              alt=""
              className="w-[30px] h-auto"
            />
          </button>
          <p className="ml-[15px]">Back</p>
        </div>
        <div className="items-center text-[22px] justify-center flex">
          Community’s Settings
        </div>
        <button className="text-[#50FFFF] hover:opacity-70">
            Save
          </button>
      </div>
    </>
  );
};
export default CommunitySettingHeader;