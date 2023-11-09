import React from "react";
import { GiBigDiamondRing, GiNecklaceDisplay } from "react-icons/gi";
import HomeAboutCard from "../../components/HomeAboutCard";
import HomeAboutText from "../../components/HomeAboutText";
import HomeAboutImg from "../../assets/img/about-image.jpg";
import CardImg from "../../assets/img/home-about-card-img.jpg";
import CardImg2 from "../../assets/img/home-about-card-img2.jpg";

const HomeAbout = () => {
  const homeAboutCard = [
    {
      title: "New Rings",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      icon: <GiBigDiamondRing />,
      showText: true,
      showImage: false,
    },
    {
      image: CardImg,
      showText: false,
      showImage: true,
    },
    {
      image: CardImg2,
      showText: false,
      showImage: true,
    },
    {
      title: "Wedding Collection",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
      icon: <GiNecklaceDisplay />,
      showText: true,
      showImage: false,
    },
  ];

  return (
    <div className="w-full bg-main-bg-dark pt-16 pb-24 relative">
      <div className="max-w-screen-lg mx-auto px-7 sm:px-20 xl:px-0">
        <div className="max-lg:flex-col lg:flex items-center justify-center max-md:space-y-7 lg:space-x-10">
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-7 lg:w-1/2 z-50 max-lg:max-w-screen-sm mx-auto">
            {homeAboutCard.map((item, index) => {
              return (
                <HomeAboutCard
                  key={index}
                  {...item}
                  isLower={index === 1 || index === 3}
                />
              );
            })}
          </div>
          <div className="relative lg:w-1/2 z-40">
            <HomeAboutText />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10">
        <div className="relative before:absolute before:right-0 before:top-0 before:w-full before:h-full before:bg-cover before:bg-center before:bg-no-repeat before:bg-home-about-pattern">
          <img src={HomeAboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
