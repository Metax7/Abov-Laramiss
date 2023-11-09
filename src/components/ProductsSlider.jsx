import React from "react";
import Slider from "react-slick";
import ProductsCard from "./ProductsCard";
import { ProductCardData } from "../data/ProductsCardData";

const ProductsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {ProductCardData.map((item, index) => (
          <div key={index}>
            <ProductsCard
              {...item}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ProductsSlider;
