import React from "react";
import LogoSvg from "@/assets/img/logo.svg";
import Image from "next/image";

const Title = ({ title, subtitle, titleStyle }) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-5">
        <div className="p-3 relative before:absolute before:w-[100px] sm:after:w-[160px] before:h-[1px] dark:before:bg-[#40403b] before:bg-white before:right-full before:top-[50%] after:absolute after:w-[100px] sm:before:w-[160px] after:h-[1px] dark:after:bg-[#40403b] after:bg-white after:left-full after:top-[50%]">
          <Image className="w-10" src={LogoSvg} alt="" />
        </div>
        <p className="text-main-light-dark-choco dark:text-[#777] font-bold font-rubik tracking-widest">
          {subtitle}
        </p>
        <h1
          className={`${titleStyle} text-center text-3xl sm:text-5xl lg:text-7xl font-prata`}
        >
          {title}
        </h1>
      </div>
    </>
  );
};

export default Title;
