import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import CardImg1 from "../../assets/img/collection-img1.jpg";
import CardImg2 from "../../assets/img/collection-img2.jpg";
import CardImg3 from "../../assets/img/collection-img3.jpg";
import HomeCollectionCard from "../../components/HomeCollectionCard";
import Title from "../../components/Title";

const HomeCollection = () => {
  const cards = [
    {
      image: CardImg1,
      title: "Wedding Ring",
      subtitle: "Machine Design , 24 Carat",
      desc: "$345/10gm",
      titleStyle: "text-white font-prata text-xl",
      subtitleStyle: "text-[#bdbdbd] text-sm font-rubik",
      descStyle: "text-main-yellow font-bold font-rubik",
    },
    {
      image: CardImg2,
      title: "Gold Neckless",
      subtitle: "Machine Design , 24 Carat",
      desc: "$345/10gm",
      titleStyle: "text-white font-prata text-xl",
      subtitleStyle: "text-[#bdbdbd] text-sm font-rubik",
      descStyle: "text-main-yellow font-bold font-rubik",
    },
    {
      image: CardImg3,
      title: "Barry Gold Bangle",
      subtitle: "Machine Design , 24 Carat",
      desc: "$345/10gm",
      titleStyle: "text-white font-prata text-xl",
      subtitleStyle: "text-[#bdbdbd] text-sm font-rubik",
      descStyle: "text-main-yellow font-bold font-rubik",
    },
    {
      image: CardImg1,
      title: "Gold Earring",
      subtitle: "Machine Design , 24 Carat",
      desc: "$345/10gm",
      titleStyle: "text-white font-prata text-xl",
      subtitleStyle: "text-[#bdbdbd] text-sm font-rubik",
      descStyle: "text-main-yellow font-bold font-rubik",
    },
  ];

  return (
    <>
      <div className="w-full bg-main-bg-gray py-16">
        <div className="max-w-screen-lg mx-auto px-7">
          <div className="flex flex-col items-center justify-center space-y-10">
            <Title title="Trending Collection" subtitle="AVAIL OUR OFFER">
              <a className="text-main-yellow flex items-center" href="#">
                View more
                <span className="ml-3">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {cards.map((item, index) => {
                return (
                  <HomeCollectionCard
                    {...item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCollection;
