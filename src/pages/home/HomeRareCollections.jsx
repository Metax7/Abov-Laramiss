import React from "react";
import HomeBlockText from "../../components/HomeBlockText";

const HomeRareCollections = () => {
  return (
    <div className="w-full bg-main-bg-dark py-28 bg-rare bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[#353530] after:-z-10 after:opacity-60">
      <div className="max-w-screen-lg mx-auto px-7 sm:px-20 xl:px-0">
        <HomeBlockText
          title="Rare Collections."
          subTitle="BUY NOW"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat you have to understand this."
          button="SHOP NOW"
        />
      </div>
    </div>
  );
};

export default HomeRareCollections;
