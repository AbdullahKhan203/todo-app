import React from "react";
import hamberger from "@/public/assets/images/hamberger.png";
import leftHomeIcon from "@/public/assets/images/leftHomeIcon.png";
import Image from "next/image";
import Searchbar from "../(components)/searchbar/Searchbar";
import ListButtons from "../(components)/listButtons/ListButtons";
import ShortBtn from "../(components)/shortBtn/ShortBtn";
import AddOrEditListBtn from "../(components)/addOrEditListBtn/AddOrEditListBtn";

const page = () => {
  return (
    <div className="m-auto container-fluid h-screen w-screen flex justify-center items-center absolute inset-0 bg-[#232020] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]  ">
      <div className="h-[100%] w-[100%] absolute">
        <div className="h-[8%] border-3 flex justify-between px-2 items-center  relative">
          <Image
            className="h-[48px] w-[48px]   ml-2"
            src={leftHomeIcon}
            alt="toogle"
          />
          <Image className="h-[48px] w-[48px]" src={hamberger} alt="toogle" />
        </div>
        <div className="h-[18%] w-[100%] bg-transparent-500 flex flex-col justify-end items-center">
          <input
            className="border-[5px] border-transparent-600 focus:border-orange-600 focus:outline-none h-[58px] w-[447px] rounded-[16px] px-[19px] bg-[black] text-white mx-autoc mt-[10px]"
            type="text"
            placeholder="[list]"
          />
        </div>
       
        <div className="bg-transparent-500 h-[33%] w-[100%] flex justify-center items-center">
          <div className="w-[80%] h-[80%]  flex flex-wrap justify-center items-center  overflow-auto">
            <ListButtons bgColor='red' btnText="Red Buttonasdadad" />
            <ListButtons bgColor="red" btnText="Red Buttonasdadad" />
            <ListButtons bgColor="red" btnText="Red Buttonasdadad" />
            <ListButtons bgColor="red" btnText="Red Buttonasdadad" />
            <ListButtons bgColor="red" btnText="Red Buttonasdadad" />
            <ListButtons bgColor="red" btnText="Red Buttonasdadad" />
          </div>
        </div>
        <div className="h-[12%] w-[100%] bg-transparent-500 flex justify-center items-start" >
            <AddOrEditListBtn btnText="Edit List" />
        </div>
      </div>
    </div>
  );
};

export default page;
