import React from "react";
import Searchbar from "../(components)/searchbar/Searchbar";
import SignWithGoogle from "../(components)/signWithGoogle/SignWithGoogle";
import GoogleLogo from "@/public/assets/images/googeIcon.png";
import { AuthBtn } from "../(components)/authBtn/AuthBtn";

export default function page() {
  return (
    <>
      <div className="m-auto container-fluid h-screen w-screen flex justify-center items-center absolute inset-0 bg-[#232020] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div>
          <Searchbar inputName="Name" inputPlaceholder="Name" />
          <Searchbar inputName="Email" inputPlaceholder="Email" />
          <Searchbar inputName="Password" inputPlaceholder="Password" />
         <Searchbar
            inputName="Confirm Password"
            inputPlaceholder="Confirm Password"
          />
          <SignWithGoogle
            imgHeight="2px" // Include the "px" suffix
            imgWidth="2px" // Include the "px" suffix
            imgSrc={GoogleLogo}
            signInWith="Signup   up    with    google"
          />
          <AuthBtn signupSignin='Signup' />
        </div>
      </div>
    </>
  );
}
