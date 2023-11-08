import React from "react";

const HomeRareCollections = () => {
  return (
    <div className="w-full bg-main-bg-dark py-28 bg-rare bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#353530] after:-z-10 after:opacity-60">
      <div className="max-w-screen-lg mx-auto px-7 sm:px-20 xl:px-0">
        <div className="space-y-5">
          <div>
            <span className="font-bold text-[#777] font-rubik">BUY NOW</span>
            <h2 className="font-prata text-4xl sm:text-5xl lg:text-7xl text-white mt-4">
              Rare Collection
            </h2>
          </div>
          <p className="sm:pr-24 lg:pr-96 font-rubik text-[#777] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, aliquip ex ea commodo consequat you have to
            understand this.
          </p>
          <a
            className="inline-block text-white font-bold font-rubik px-10 py-5 border-2 border-main-yellow bg-main-yellow hover:bg-transparent hover:text-main-yellow transition-all duration-300"
            href="#"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeRareCollections;
