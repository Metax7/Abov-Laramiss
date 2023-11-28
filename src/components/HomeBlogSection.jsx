"use client";

import { useState } from "react";
import SwiperButtons from "./SwiperButtons";
import BlogSwiperSlider from "./BlogSwiperSlider";
import SliderWithButtons from "./sliderWithButtons";

const HomeBlogSection = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <>
      <div>
        <SliderWithButtons
          title="New Feeds"
          subTitle="BLOG"
          titleStyle="text-white"
          swiper={swiper}
          containerStyle="bg-main-light-choco dark:bg-main-dark"
          btnStyle="bg-main-light-dark-choco dark:bg-main-gray hover:shadow-[0_5px_40px_0_rgba(0,0,0,1)] dark:hover:shadow-[0_14px_24px_0_rgba(190,173,142,.4)]"
        >
          <div>
            <BlogSwiperSlider setSwiper={setSwiper} />
          </div>
        </SliderWithButtons>
      </div>
    </>
  );
};

export default HomeBlogSection;
