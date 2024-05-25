// import React from "react";

// interface shortBtn {
//   text: string;
//   bgColor: any;
//   textColor: string;
// }

// const getBgColorClass = (bgColor: any) => {
//   if (bgColor.startsWith("#")) {
//     return `bg-${bgColor.slice(1)}`;
//   } else {
//     return `bg-${bgColor}`;
//   }
// };

// const ShortBtn: React.FC<shortBtn> = ({ text, bgColor, textColor }) => {
//   return (
//     <div
//       className={`border-[5px] border-[#ff7315] focus:outline-none flex justify-center align-center h-[50px] w-[318px] rounded-[30px] bg-[${bgColor}] my-2 mx-auto`}
//     >
//       <p className={`my-auto text-${textColor}-500 `}>{text}</p>
//     </div>
//   );
// };

// export default ShortBtn;


















import React from "react";

interface ShortBtnProps {
  text: string;
  bgColor: string;
  textColor: string;
}

const ShortBtn: React.FC<ShortBtnProps> = ({ text, bgColor, textColor }) => {
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
      className={`border-[5px] border-[#ff7315] focus:outline-none flex justify-center align-center h-[50px] w-[318px] rounded-[30px] ${bgColorClass} my-2 mx-auto`}
    >
      <p className={`my-auto text-${textColor}-500`}>{text}</p>
    </div>
  );
};

export default ShortBtn;







