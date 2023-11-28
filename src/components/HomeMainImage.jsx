"use client";

import Slider from "react-slick";
import HomeMainImg from "@/assets/img/homeMainImg.jpg";
import HomeMainImg2 from "@/assets/img/homeMainImg2.png";
import Image from "next/image";

const HomeMainImage = () => {
  const imagesData = [
    {
      image: HomeMainImg,
      alt: "Image First",
    },
    {
      image: HomeMainImg2,
      alt: "Image Second",
    },
  ];

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {imagesData &&
            imagesData.map((item, index) => {
              return (
                <div key={index}>
                  <Image
                    className="w-full h-full zoom"
                    priority
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default HomeMainImage;
