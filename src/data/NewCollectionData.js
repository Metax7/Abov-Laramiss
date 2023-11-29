import NewBracelet from "@/assets/img/new-bracelet.png";
import NewNecklace from "@/assets/img/new-necklace.png";
import NewEarring from "@/assets/img/new-earring.png";
import {
  GiFeatherNecklace,
  GiDropEarrings,
  GiNecklaceDisplay,
} from "react-icons/gi";

export const newCollectionData = [
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
