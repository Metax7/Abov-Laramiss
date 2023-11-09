import React from "react";
import Title from "../../components/Title";
import HomeSpecialCard from "../../components/HomeSpecialCard";

const HomeSpecial = () => {
  const specialCardData = [
    {
      image: "bg-special-face p-[265px]",
      title: "Ariel Rings",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    },
    {
      image: "bg-special-ring p-32",
      title: "Ariel Rings",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    },
    {
      image: "bg-special-necklace p-32",
      title: "Ariel Rings",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    },
  ];

  return (
    <>
      <div className="w-full bg-main-bg-gray px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto space-y-5">
          <div>
            <Title
              title="Special Products"
              subtitle="MAY BE YOU HAVE EARNED IT"
            />
          </div>
          <div className="flex max-lg:flex-col max-lg:space-y-5 lg:space-x-5">
            <div className="lg:w-1/2">
              <HomeSpecialCard {...specialCardData[0]} />
            </div>
            <div className="flex flex-col space-y-5 lg:w-1/2">
              {specialCardData.slice(1).map((item, index) => {
                return <HomeSpecialCard {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSpecial;
