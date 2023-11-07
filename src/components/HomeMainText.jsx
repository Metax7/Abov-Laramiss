import React from "react";

const HomeMainText = () => {
  return (
    <div className="space-y-12">
      <span className="font-rubik font-bold text-[#777]">
        JEWERLY DESIGN WITH LOVE
      </span>
      <h1 className="font-prata text-white text-5xl font-normal sm:text-7xl xl:text-8xl">
        High-End <br /> Jewelry Items
      </h1>
      <ul className="font-semibold font-rubik sm:flex max-sm:flex-col max-lg:justify-center max-sm:space-y-12 sm:space-x-10">
        <li>
          <a
            className="px-10 py-5 border-2 border-main-yellow bg-main-yellow text-white hover:bg-transparent hover:text-main-yellow transition-all duration-300"
            href="#"
          >
            BUY NOW
          </a>
        </li>
        <li>
          <a
            className="px-10 py-5 border-2 border-main-bg-gray text-[#777] hover:bg-main-yellow hover:text-white hover:shadow-[0_14px_24px_0_rgba(190,173,142,.4)] transition-all duration-300"
            href="#"
          >
            EXPLORE NOW
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeMainText;
