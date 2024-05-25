import React from "react";
import Searchbar from "../(components)/searchbar/Searchbar";
import profileImgSelector from '@/public/assets/images/profileImageSelector.png'
import Image from "next/image";
import ShortBtn from "../(components)/shortBtn/ShortBtn";


const page = () => {
  return (
    <>
      <div className="m-auto container-fluid h-screen w-screen flex justify-center items-center absolute inset-0 bg-[#232020] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div>
          <p className="self-auto text-[124px] text-white leading-[139.98px] ">Setting</p>
          <div className=" w-[157px] h-[157px]  mx-auto flex relative">
          <div className="h-[156px] w-[156px] border-[1px] rounded-full"></div>
          <Image className="absolute bottom-4 right-2 h-[20px] w-[20px]" src={profileImgSelector} alt="image selector"  />

          </div>
          <Searchbar inputName="password" inputPlaceholder="password" />
          <Searchbar
            inputName="Confirm Password"
            inputPlaceholder="Confirm Password"
          />
          <ShortBtn text='Change Password' bgColor="black" textColor="orange" />
          <ShortBtn text='Save Changes' bgColor="orange" textColor="black" />
        </div>
      </div>
    </>
  );
};

export default page;
