import React from "react";
import LogoSvg from "../../assets/img/logo.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import CardImg1 from "../../assets/img/collection-img1.jpg";
import CardImg2 from "../../assets/img/collection-img2.jpg";
import CardImg3 from "../../assets/img/collection-img3.jpg";
import HomeCollectionCard from "../../components/HomeCollectionCard";

const HomeCollection = () => {
  const cards = [
    {
      image: CardImg1,
      title: "Wedding Ring",
      desc: "Machine Design , 24 Carat",
      cost: "$345/10gm",
    },
    {
      image: CardImg2,
      title: "Gold Neckless",
      desc: "Machine Design , 24 Carat",
      cost: "$345/10gm",
    },
    {
      image: CardImg3,
      title: "Barry Gold Bangle",
      desc: "Machine Design , 24 Carat",
      cost: "$345/10gm",
    },
    {
      image: CardImg1,
      title: "Gold Earring",
      desc: "Machine Design , 24 Carat",
      cost: "$345/10gm",
    },
  ];

  return (
    <>
      <div className="w-full bg-main-bg-gray py-16">
        <div className="max-w-screen-lg mx-auto px-7">
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="flex flex-col items-center space-y-5">
              <div className="p-3 relative before:absolute before:w-[100px] sm:after:w-[160px] before:h-[1px] before:bg-[#40403b] before:right-full before:top-[50%] after:absolute after:w-[100px] sm:before:w-[160px] after:h-[1px] after:bg-[#40403b] after:left-full after:top-[50%]">
                <img className="w-10" src={LogoSvg} alt="" />
              </div>
              <p className="text-[#777] font-bold font-rubik">
                AVAIL OUR OFFER
              </p>
              <h1 className="text-white text-3xl sm:text-5xl lg:text-7xl font-prata">
                Trending Collection
              </h1>
              <div>
                <a className="text-main-yellow flex items-center" href="#">
                  View more
                  <span className="ml-3">
                    <AiOutlineArrowRight />
                  </span>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {cards.map((item, index) => {
                return (
                  <HomeCollectionCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    cost={item.cost}
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
