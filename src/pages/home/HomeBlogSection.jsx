import React, { useState } from "react";
import SwiperButtons from "../../components/SwiperButtons";
import ProductSwiperSlider from "../../components/ProductSwiperSlider";
import BlogSwiperSlider from "../../components/BlogSwiperSlider";

const HomeBlogSection = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <>
      <div className="w-full bg-main-bg-dark px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto">
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <div className="space-y-5">
                <span className="text-[#777] font-rubik font-bold">BLOG</span>
                <h1 className="text-white font-prata text-4xl md:text-6xl lg:text-7xl">
                  News Feeds
                </h1>
              </div>
              <div className="max-md:hidden">
                <SwiperButtons
                  prevBtnStyle="bg-main-bg-gray hover:bg-main-yellow hover:shadow-[0_14px_24px_0_rgba(190,173,142,.4)]"
                  swiper={swiper}
                />
              </div>
            </div>
            <div>
              <BlogSwiperSlider setSwiper={setSwiper} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlogSection;