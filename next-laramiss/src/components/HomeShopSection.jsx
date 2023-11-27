"use client";

import { useState } from "react";
import SwiperButtons from "./SwiperButtons";
import ProductSwiperSlider from "./ProductSwiperSlider";

const HomeShopSection = () => {
  const [swiper, setSwiper] = useState(null);

  const productStyle = {
    backgroundColor: "#1c1b19",
  };

  return (
    <>
      <div className="w-full bg-main-light dark:bg-main-gray px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto">
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <div className="space-y-5">
                <span className="text-main-light-dark-choco dark:text-[#777] font-rubik font-bold">
                  SHOP
                </span>
                <h1 className="text-white font-prata text-4xl md:text-6xl lg:text-7xl">
                  Latest Products
                </h1>
              </div>
              <div className="max-md:hidden">
                <SwiperButtons
                  prevBtnStyle="bg-main-light-dark-choco hover:bg-main-yellow hover:shadow-[0_5px_40px_0_rgba(0,0,0,1)] dark:hover:shadow-[0_14px_24px_0_rgba(190,173,142,.4)]"
                  swiper={swiper}
                />
              </div>
            </div>
            <div>
              <ProductSwiperSlider
                productStyle={productStyle}
                setSwiper={setSwiper}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeShopSection;