import React from 'react'

interface signupSignin{
    signupSignin:string;
}


export const AuthBtn:React.FC<signupSignin> = ({signupSignin}) => {
  return (
    
   <div className={`focus:outline-none flex justify-center align-center h-[50px] w-[447px] rounded-[30px] bg-[orange] my-2`}>
    <p className='my-auto text-black'>{signupSignin}</p>
</div>

  
  )
}
