import React from "react";
import HomeMain from "./HomeMain";
import HomeAbout from "./HomeAbout";
import HomeCollection from "./HomeCollection";
import HomeMenuGallery from "./HomeMenuGallery";
import HomeRareCollections from "./HomeRareCollections";
import HomeBestselling from "./HomeBestselling";
import HomeCategories from "./HomeCategories";
import HomeNewCollection from "./HomeNewCollection";
import HomeOurProducts from "./HomeOurProducts";
import HomeOnSaleProducts from "./HomeOnSaleProducts";
import HomeCounter from "./HomeCounter";

const Home = () => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeCollection />
      <HomeMenuGallery />
      <HomeRareCollections />
      <HomeBestselling />
      <HomeCategories />
      <HomeNewCollection />
      <HomeOurProducts />
      <HomeOnSaleProducts />
      <HomeCounter />
    </>
  );
};

export default Home;
