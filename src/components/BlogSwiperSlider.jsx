"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import HomeSpecialCard from "./HomeSpecialCard";

const BlogSwiperSlider = ({ setSwiper }) => {
  const handleSwiper = (swiperInstance) => {
    setSwiper(swiperInstance);
  };

  const sliderData = [
    {
      image: "bg-blog-1 py-60",
      title: "Ruby on Rose Accessories and Blue Gemstones.",
      desc: "Read More ->",
      refStyle: "hidden",
      titleStyle: "hover:text-main-yellow",
      descStyle: "text-white mt-5 hover:text-main-yellow",
    },
    {
      image: "bg-blog-2 py-60",
      title: "Matching Jewellery Sets with your Outwear.",
      desc: "Read More ->",
      refStyle: "hidden",
      titleStyle: "hover:text-main-yellow",
      descStyle: "text-white mt-5 hover:text-main-yellow",
    },
    {
      image: "bg-blog-3 py-60",
      title: "New Retro Collection of Pendants and Ring sets.",
      desc: "Read More ->",
      refStyle: "hidden",
      titleStyle: "hover:text-main-yellow",
      descStyle: "text-white mt-5 hover:text-main-yellow",
    },
    {
      image: "bg-blog-4 py-60",
      title: "Special Wedding Rings Sets for Him and for Her.",
      desc: "Read More ->",
      refStyle: "hidden",
      titleStyle: "hover:text-main-yellow",
      descStyle: "text-white mt-5 hover:text-main-yellow",
    },
  ];

  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={false}
          slidesPerView={1}
          loop={true}
          speed={1200}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={handleSwiper}
        >
          {sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <HomeSpecialCard {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BlogSwiperSlider;
