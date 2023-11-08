import React from "react";
import HomeMain from "./HomeMain";
import HomeAbout from "./HomeAbout";
import HomeCollection from "./HomeCollection";
import HomeMenuGallery from "./HomeMenuGallery";
import HomeRareCollections from "./HomeRareCollections";

const Home = () => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeCollection />
      <HomeMenuGallery />
      <HomeRareCollections />
    </>
  );
};

export default Home;
