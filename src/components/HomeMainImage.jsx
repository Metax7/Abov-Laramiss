import React from "react";
import Slider from "react-slick";
import HomeMainImg from "../assets/img/homeMainImg.jpg";
import HomeMainImg2 from "../assets/img/homeMainImg2.png";

const HomeMainImage = () => {
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
          <div>
            <img className="w-full h-full" src={HomeMainImg} alt="" />
          </div>
          <div>
            <img className="w-full h-full" src={HomeMainImg2} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeMainImage;
