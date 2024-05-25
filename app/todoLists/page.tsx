import React from "react";
import hamberger from "@/public/assets/images/hamberger.png";
import leftHomeIcon from "@/public/assets/images/leftHomeIcon.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="m-auto container-fluid h-screen w-screen flex justify-center items-center absolute inset-0 bg-[#232020] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
      <div className="h-full w-full relative  ">
        <div className="h-[8%] border-3 flex justify-between px-2 items-center">
          <Image
            className="h-[48px] w-[48px]  mt-[10px]"
            src={leftHomeIcon}
            alt="toogle"
          />
          <Image className="h-[48px] w-[48px]" src={hamberger} alt="toogle" />
        </div>

        <div className="h-[92%]  overflow-hidden">
          <div className="heading h-[20%] w-[100%] flex justify-center">
            <span className="mx-auto text-[124px] leading-[139.98px] text-white">
              Todo Lists.
            </span>
          </div>
          <div className="main w-[100%] h-[80%] overflow-auto flex flex-wrap">
            <div className="w-[100%] h-[100px] m-2 ">
              <p className="ml-[295px] underline text-white text-[64px] leading-[83.2px]">
                a
              </p>
              <p className="ml-[295px] underline text-white text-[64px] leading-[83.2px]">
                a
              </p>
              <p className="ml-[295px] underline text-white text-[64px] leading-[83.2px]">
                a
              </p>
              <p className="ml-[295px] underline text-white text-[64px] leading-[83.2px]">
                a
              </p>
              <p className="ml-[295px] underline text-white text-[64px] leading-[83.2px]">
                a
              </p>
              <p className="ml-[295px] underline text-white text-[64px] leading-[83.2px]">
                a
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
