import React from "react";
import LogoSvg from "../assets/img/logo.svg";

const Title = ({ title, subtitle, children }) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-5">
        <div className="p-3 relative before:absolute before:w-[100px] sm:after:w-[160px] before:h-[1px] before:bg-[#40403b] before:right-full before:top-[50%] after:absolute after:w-[100px] sm:before:w-[160px] after:h-[1px] after:bg-[#40403b] after:left-full after:top-[50%]">
          <img className="w-10" src={LogoSvg} alt="" />
        </div>
        <p className="text-[#777] font-bold font-rubik tracking-widest">{subtitle}</p>
        <h1 className="text-white text-center text-3xl sm:text-5xl lg:text-7xl font-prata">
          {title}
        </h1>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Title;
