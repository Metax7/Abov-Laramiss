import NewBracelet from "@/assets/img/new-bracelet.png";
import NewNecklace from "@/assets/img/new-necklace.png";
import NewEarring from "@/assets/img/new-earring.png";
import {
  GiFeatherNecklace,
  GiDropEarrings,
  GiNecklaceDisplay,
} from "react-icons/gi";
import HomeCollectionCard from "./HomeCollectionCard";
import Title from "./Title";

const HomeNewCollection = () => {
  const cardData = [
    {
      image: NewEarring,
      title: <GiDropEarrings />,
      subtitle: "Artifical Earings",
      desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet",
      titleStyle: "text-white text-5xl",
      subtitleStyle: "text-white font-prata text-3xl",
      descStyle: "text-[#777] text-sm font-rubik font-medium",
      cardBodyStyle: "bg-main-dark space-y-7",
    },
    {
      image: NewBracelet,
      title: <GiFeatherNecklace />,
      subtitle: "Bracelet Curb",
      desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet",
      titleStyle: "text-white text-5xl",
      subtitleStyle: "text-white font-prata text-3xl",
      descStyle: "text-[#777] text-sm font-rubik font-medium",
      cardBodyStyle: "bg-main-dark space-y-7",
    },
    {
      image: NewNecklace,
      title: <GiNecklaceDisplay />,
      subtitle: "Azrouel Variable",
      desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet",
      titleStyle: "text-white text-5xl",
      subtitleStyle: "text-white font-prata text-3xl",
      descStyle: "text-[#777] text-sm font-rubik font-medium",
      cardBodyStyle: "bg-main-dark space-y-7",
    },
  ];

  return (
    <>
      <div className="w-full bg-main-light dark:bg-main-gray px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto space-y-6">
          <div>
            <Title title="Handpicked Products" subtitle="NEW COLLECTION" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cardData.map((item, index) => {
              return <HomeCollectionCard key={index} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNewCollection;
