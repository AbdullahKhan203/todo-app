"use client";
import React, { useState } from "react";
import hamberger from "@/public/assets/images/hamberger.png";
import leftHomeIcon from "@/public/assets/images/leftHomeIcon.png";
import Image from "next/image";
import Searchbar from "../(components)/searchbar/Searchbar";
import ListButtons from "../(components)/listButtons/ListButtons";
import ShortBtn from "../(components)/shortBtn/ShortBtn";
import AddOrEditListBtn from "../(components)/addOrEditListBtn/AddOrEditListBtn";

const page = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="m-auto container-fluid h-screen w-screen flex justify-center items-center absolute inset-0 bg-[#232020] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] ">
      <div className="h-[100%] w-[100%] absolute">
        <div className="h-[8%] border-3 flex justify-between px-2 items-center  relative">
          <Image
            className="h-[48px] w-[48px]   ml-2"
            src={leftHomeIcon}
            alt="toogle"
          />
          <Image className="h-[48px] w-[48px]" src={hamberger} alt="toogle" />
        </div>
        <div className="h-[18%] w-[100%] flex flex-col justify-end items-center">
          <p className="text-[124px] leading-[139.98px] text-[white] font-stint-ultra-condensed">
            Home List
          </p>
        </div>
        <div className="h-[9%] w-[100%] flex justify-center items-end">
          <input
            className="rounded-[2px] h-[58px] w-[597px] text-[30px] px-7"
            type="text"
            placeholder="[task]"
          />
        </div>
       
      </div>
    </div>
  );
};

export default page;
