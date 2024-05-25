// import React from 'react';
// import Image from 'next/image';

// interface ButtonIconProps {
//     imgSrc: any;
//     signInWith: string;
//     imgWidth: string;
//     imgHeight: string;
// }

// const SignWithGoogle: React.FC<ButtonIconProps> = ({ imgSrc, signInWith, imgWidth,imgHeight }) => {
//     return (
//         <div className='border-[5px] border-orange-600 focus:border-orange-600 focus:outline-none flex justify-center align-center  h-[50px] w-[447px]  rounded-[30px]'>
//             <Image className={`w-${imgWidth} h-${imgHeight}`} src={imgSrc} alt="SVG Image" />
//             <p className='text-orange-500 my-auto'>{signInWith}</p>
//         </div>
//     );
// };

// export default SignWithGoogle;








import React from 'react';
import Image from 'next/image';

interface ButtonIconProps {
    imgSrc: any;
    signInWith: string;
    imgWidth: string;
    imgHeight: string;
}

const SignWithGoogle: React.FC<ButtonIconProps> = ({ imgSrc, signInWith, imgWidth, imgHeight }) => {
    return (
        <div className='border-[5px] border-orange-600 focus:border-orange-600 focus:outline-none flex justify-center align-center  h-[50px] w-[447px]  rounded-[30px]  bg-[black]'>
            <Image className={`w-${imgWidth} h-${imgHeight}`} src={imgSrc} alt="SVG Image" />
            <p className='text-orange-500 my-auto'>{signInWith}</p>
        </div>
    );
};

export default SignWithGoogle;

