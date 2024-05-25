import React from 'react'

interface AddOrEditListBtnProps{
    btnText:string;
}

const AddOrEditListBtn: React.FC<AddOrEditListBtnProps>  = ({btnText}) => {
  return (
    <div className='bg-[#ff7315] w-[228px] h-[63px] flex justify-center items-center rounded-[55px]'>
        <p className='leading-[39px] text-[30px]'>{btnText}</p>
    </div>
  )
}

export default AddOrEditListBtn