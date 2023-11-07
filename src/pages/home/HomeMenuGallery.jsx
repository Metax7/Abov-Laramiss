import React from "react";
import HomeGalleryCard from "../../components/HomeGalleryCard";

const HomeMenuGallery = () => {
  const cards = [
    {
      title: "Handmade Earring",
      hiddenTitle: "Handmade Earring",
      hiddenDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
      cost: "$299",
      bgStyle: "bg-menu-gallery-1",
    },
    {
      title: "Diamond Nosering",
      hiddenTitle: "Diamond Nosering",
      hiddenDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
      cost: "$499",
      bgStyle: "bg-menu-gallery-2",
    },
    {
      title: "Silver Bracelet",
      hiddenTitle: "Silver Bracelet",
      hiddenDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
      cost: "$299",
      bgStyle: "bg-menu-gallery-3",
    },
    {
      title: "Gold Pendents",
      hiddenTitle: "Gold Pendents",
      hiddenDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
      cost: "$199",
      bgStyle: "bg-menu-gallery-4",
    },
  ];

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            return (
              <HomeGalleryCard
                key={index}
                title={card.title}
                hiddenTitle={card.hiddenTitle}
                hiddenDesc={card.hiddenDesc}
                cost={card.cost}
                bgStyle={card.bgStyle}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeMenuGallery;
