import React from 'react'
import Searchbar from '../(components)/searchbar/Searchbar'
import { AuthBtn } from '../(components)/authBtn/AuthBtn'

const page = () => {
  return (
    <>
      <div className="m-auto container-fluid h-screen w-screen flex justify-center items-center absolute inset-0 bg-[#232020] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div>
          <Searchbar inputName="password" inputPlaceholder="password" />
          <Searchbar inputName="Confirm Password" inputPlaceholder="Confirm Password" />
          <div className="w-[100%] flex justify-end">
          <span className="text-white mr-[5%]">forgot password?</span>
          </div>
         
          <AuthBtn signupSignin='Signup' />

        </div>
      </div>
    </>
  )
}

export default page