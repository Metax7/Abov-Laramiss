"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { ProductCardData } from "@/data/ProductsCardData";
import ProductsCard from "./ProductsCard";

const ProductSwiperSlider = ({ setSwiper, productStyle }) => {
  const handleSwiper = (swiperInstance) => {
    setSwiper(swiperInstance);
  };

  return (
    <>
      <div>
        <Swiper
          spaceBetween={10}
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
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={handleSwiper}
        >
          {ProductCardData.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <ProductsCard {...item} productStyle={productStyle} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductSwiperSlider;
