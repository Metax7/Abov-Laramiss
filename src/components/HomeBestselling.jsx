'use client'

import TextureRing from "@/assets/img/texture-ring.png";
import Image from "next/image";
import HomeBlockText from "./HomeBlockText";
import ProductSwiperSlider from "./ProductSwiperSlider";
import { useState } from "react";

const HomeBestselling = () => {

  const [swiper, setSwiper] = useState(null);
  const links = [
    {
      href: "",
      text:"SHOP NOW"
    }
  ]
  return (
    <div className="relative w-full py-32 overflow-hidden bg-main-light dark:bg-main-dark px-7">
      <Image
        className="absolute bottom-0 left-[-220px] hidden xl:block"
        src={TextureRing}
        alt=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="space-y-5 lg:flex max-lg:flex-col lg:space-x-16">
          <HomeBlockText
            title="Bestselling Products"
            subTitle="BUY NOW"
            titleStyle="text-main-gray dark:text-white"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat you have to understand this."
            links={links}
            descriptionStyle="text-main-light-dark-choco"
          />
          <div className="lg:w-full">
            <ProductSwiperSlider setSwiper={setSwiper} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBestselling;
