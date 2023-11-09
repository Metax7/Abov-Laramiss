import React from "react";
import { GiDropEarrings, GiBigDiamondRing } from "react-icons/gi";
import { AiOutlineUser, AiOutlineLike } from "react-icons/ai";
import HomeCounterCard from "../../components/HomeCounterCard";

const HomeCounter = () => {
  const counterData = [
    {
      icon: <GiBigDiamondRing />,
      count: 84,
      countMK: "k",
      desc: "Jewelriess in Album",
    },
    {
      icon: <AiOutlineLike />,
      count: 10,
      countMK: "M",
      desc: "Jewelriess in Album",
    },
    {
      icon: <GiDropEarrings />,
      count: 2,
      countMK: "k",
      desc: "Jewelriess in Album",
    },
    {
      icon: <AiOutlineUser />,
      count: 100,
      countMK: "M",
      desc: "Jewelriess in Album",
    },
  ];

  return (
    <>
      <div className="w-full bg-main-bg-dark px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto">
          <div
            id="counter-section"
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            {counterData.map((item, index) => {
              return <HomeCounterCard key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCounter;
