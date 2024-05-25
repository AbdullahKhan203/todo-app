// import React from "react";

// const Searchbar = (inputName: string, inputPlaceholder: string) => {
//   return (
//     <>
//       <div className="border border-orange-600 h-58 w-[447px] rounded-[30px]">
//         <h3>{inputName}</h3>
//         <input type="text" placeholder={inputPlaceholder} />
//       </div>
//     </>
//   );
// };

// export default Searchbar;



import React from "react";

interface SearchbarProps {
  inputName: string;
  inputPlaceholder: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ inputName, inputPlaceholder }) => {
  return (
    <>
      <div className="my-2">
        <h3 className="text-white  px-6">{inputName}</h3>
        <input className="border-[5px] border-orange-600 focus:border-orange-600 focus:outline-none relative h-[35px] w-[447px] rounded-[30px] px-[19px] bg-[black] text-white" type="text" placeholder={inputPlaceholder} />

      </div>
    </>
  );
};

export default Searchbar;
