import React from "react";
import HomeMain from "./HomeMain";
import HomeAbout from "./HomeAbout";
import HomeCollection from "./HomeCollection";
import HomeMenuGallery from "./HomeMenuGallery";
import HomeRareCollections from "./HomeRareCollections";
import HomeBestselling from "./HomeBestselling";

const Home = () => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeCollection />
      <HomeMenuGallery />
      <HomeRareCollections />
      <HomeBestselling />
    </>
  );
};

export default Home;
