// import React from 'react'

// interface btnColor{
//     btnColor:String;
//     btnText:string;
// }

// const ListButtons:React.FC<btnColor> = ({btnColor,btnText}) => {
//   return (

//     <div className={`bg-${btnColor} h-[58px] `}>
//        {btnText}
//     </div>
//   )
// }

// export default ListButtons

import React from "react";

interface BtnColor {
  bgColor: string;
  btnText: string;
}
 

const ListButtons: React.FC<BtnColor> = ({ bgColor, btnText }) => {
    // Function to determine the background color class
 const getBgColorClass = (color: string) => {
    if (color.startsWith("#")) {
      // If color is a code, return the code without "#" symbol
      return `bg-[${color.slice(1)}]`;
    } else {
      // If color is a name, return the color name
      return `bg-[${color}]`;
    }
  };

  // Get the background color class based on the bgColor prop
  const bgColorClass = getBgColorClass(bgColor);
  return (
    <div
      className={`${bgColorClass} bg-[red] h-[58px] min-w-[10px] max-w-[500px] flex justify-center items-center rounded-[30px] xsm:my-2  md:my-0  mx-2 px-2 py-2 `}
    >
      <p className="text-[28px]">{btnText}</p>
    </div>
  );
};

export default ListButtons;
