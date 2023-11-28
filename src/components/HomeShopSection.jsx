"use client";

import { useState } from "react";
import ProductSwiperSlider from "./ProductSwiperSlider";
import SliderWithButtons from "./sliderWithButtons";

const HomeShopSection = () => {
  const [swiper, setSwiper] = useState(null);

  const productStyle = {
    backgroundColor: "#1c1b19",
  };

  return (
    <>
      <SliderWithButtons
        title="Latest Products"
        subTitle="SHOP"
        titleStyle="text-main-gray dark:text-white"
        containerStyle="bg-main-light dark:bg-main-gray"
        swiper={swiper}
        btnStyle="bg-main-light-dark-choco dark:bg-main-dark hover:shadow-[0_5px_40px_0_rgba(0,0,0,1)] dark:hover:shadow-[0_14px_24px_0_rgba(190,173,142,.4)]"
      >
        <div>
          <ProductSwiperSlider
            productStyle={productStyle}
            setSwiper={setSwiper}
          />
        </div>
      </SliderWithButtons>
    </>
  );
};

export default HomeShopSection;
