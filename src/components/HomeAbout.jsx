import React from "react";
import { GiBigDiamondRing, GiNecklaceDisplay } from "react-icons/gi";
import HomeAboutImg from "@/assets/img/about-image.jpg";
import CardImg from "@/assets/img/home-about-card-img.jpg";
import CardImg2 from "@/assets/img/home-about-card-img2.jpg";
import HomeAboutCard from "./HomeAboutCard";
import Image from "next/image";
import HomeBlockText from "./HomeBlockText";

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
 const links = [
    {
      text:"KNOW MORE",
      href:""
    }
  ]
  return (
    <div className="relative w-full pt-16 pb-24 bg-main-light dark:bg-main-dark">
      <div className="max-w-screen-lg mx-auto px-7 sm:px-20 xl:px-0">
        <div className="items-center justify-center max-lg:flex-col lg:flex max-lg:space-y-16 lg:space-x-10">
          <div className="relative z-40 grid grid-cols-1 mx-auto sm:grid-cols-2 gap-7 lg:w-1/2 max-lg:max-w-screen-sm">
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
          <div className="relative z-40 lg:w-1/2">
            <HomeBlockText
              title="Crafting Jewellery Since 1990."
              subTitle="ABOUT US"
              titleStyle="text-main-gray dark:text-white"
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta illo aliquam corporis doloribus obcaecati omnis, hic ad sapiente vel voluptatum aspernatur consequuntur saepe, quisquam nisi repudiandae libero! Dicta, placeat."
              links={links}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-10 hidden dark:block">
        <div className="relative dark:before:absolute dark:before:right-0 dark:before:top-0 dark:before:w-full dark:before:h-full dark:before:bg-cover dark:before:bg-center dark:before:bg-no-repeat dark:before:bg-home-about-pattern">
          <Image src={HomeAboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
