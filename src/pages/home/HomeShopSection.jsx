import React, { useState } from "react";
import ProductSwiperSlider from "../../components/ProductSwiperSlider";
import SwiperButtons from "../../components/SwiperButtons";

const HomeShopSection = () => {
  const [swiper, setSwiper] = useState(null);

  const productStyle = {
    backgroundColor: "#1c1b19",
  };

  return (
    <>
      <div className="w-full bg-main-bg-gray px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto">
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <div className="space-y-5">
                <span className="text-[#777] font-rubik font-bold">SHOP</span>
                <h1 className="text-white font-prata text-4xl md:text-6xl lg:text-7xl">
                  Latest Products
                </h1>
              </div>
              <div className="max-md:hidden">
                <SwiperButtons swiper={swiper} />
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
