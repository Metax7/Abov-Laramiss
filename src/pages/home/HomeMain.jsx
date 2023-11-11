import React from "react";
import HomeMainText from "../../components/HomeMainText";
import HomeMainImage from "../../components/HomeMainImage";
import HomeMainProducts from "../../components/HomeMainProducts";

const HomeMain = () => {
  return (
    <div className="w-full py-16 px-7 sm:px-20 xl:px-0 bg-main-light dark:bg-main-dark">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex-col">
          <div className="flex max-lg:flex-col space-y-10 items-center justify-center">
            <div className="max-lg:w-full lg:w-1/2 max-lg:text-center">
              <HomeMainText />
            </div>
            <div className="max-lg:w-full lg:w-1/2 ">
              <HomeMainImage />
            </div>
          </div>
          <div>
            <HomeMainProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
