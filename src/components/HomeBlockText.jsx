import React from "react";

const HomeBlockText = ({ title, subTitle, desc, button }) => {
  return (
    <>
      <div className="space-y-5 ">
        <div>
          <span className="font-bold text-[#777] font-rubik">{subTitle}</span>
          <h2 className="font-prata text-4xl sm:text-5xl lg:text-7xl text-white mt-4">
            {title}
          </h2>
        </div>
        <p className="font-rubik text-[#777] text-sm">{desc}</p>
        <a
          className="inline-block text-white font-bold font-rubik px-12 py-4 border-2 border-main-yellow bg-main-yellow hover:bg-transparent hover:text-main-yellow transition-all duration-300"
          href="#"
        >
          {button}
        </a>
      </div>
    </>
  );
};

export default HomeBlockText;
