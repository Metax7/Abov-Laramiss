import HomeAbout from "@/components/HomeAbout";
import HomeBestselling from "@/components/HomeBestselling";
import HomeBlogSection from "@/components/HomeBlogSection";
import HomeCategories from "@/components/HomeCategories";
import HomeCollection from "@/components/HomeCollection";
import HomeCounter from "@/components/HomeCounter";
import HomeMain from "@/components/HomeMain";
import HomeMenuGallery from "@/components/HomeMenuGallery";
import HomeNewCollection from "@/components/HomeNewCollection";
import HomeOnSaleProducts from "@/components/HomeOnSaleProducts";
import HomeOurProducts from "@/components/HomeOurProducts";
import HomeRareCollections from "@/components/HomeRareCollections";
import HomeShopSection from "@/components/HomeShopSection";
import HomeSpecial from "@/components/HomeSpecial";
import HomeVideoSection from "@/components/HomeVideoSection";

export default function Home() {
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
      <HomeSpecial />
      <HomeVideoSection />
      <HomeShopSection />
      <HomeBlogSection />
    </>
  );
}
