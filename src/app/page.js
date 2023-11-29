import HomeAbout from "@/components/HomeAbout";
import HomeBestselling from "@/components/HomeBestselling";
import HomeBlogSection from "@/components/HomeBlogSection";
import HomeCategories from "@/components/HomeCategories";
import HomeCollectionCard from "@/components/HomeCollectionCard";
import HomeCounter from "@/components/HomeCounter";
import HomeMain from "@/components/HomeMain";
import HomeMenuGallery from "@/components/HomeMenuGallery";
import HomeRareCollections from "@/components/HomeRareCollections";
import HomeShopSection from "@/components/HomeShopSection";
import HomeSpecial from "@/components/HomeSpecial";
import HomeVideoSection from "@/components/HomeVideoSection";
import ProductsCard from "@/components/ProductsCard";
import StandartContainer from "@/components/StandartContainer";
import UniCards from "@/components/UniCards";
import { collectionData } from "@/data/CollectionData";
import { newCollectionData } from "@/data/NewCollectionData";
import { ProductCardData } from "@/data/ProductsCardData";

export default function Home() {
  const productStyle = {
    backgroundColor: "#1c1b19",
  };

  return (
    <>
      <HomeMain />
      <HomeAbout />
      <StandartContainer
        title="Trending Collection"
        subtitle="AVAIL OUR OFFER"
        titleStyle="text-white"
        bodyStyle="bg-main-light-choco dark:bg-main-gray"
        children={
          <UniCards
            productComponent={(props) => <HomeCollectionCard {...props} />}
            data={collectionData}
          />
        }
      />
      <HomeMenuGallery />
      <HomeRareCollections />
      <HomeBestselling />
      <HomeCategories />
      <StandartContainer
        title="Handpicked Products"
        subtitle="NEW COLLECTION"
        titleStyle="text-main-gray dark:text-white"
        bodyStyle="bg-main-light dark:bg-main-gray"
        children={
          <UniCards
            cardStyle="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-5"
            productComponent={(props) => <HomeCollectionCard {...props} />}
            data={newCollectionData}
          />
        }
      />
      <StandartContainer
        title="Our Products"
        subtitle="FEATURED"
        titleStyle="text-white"
        bodyStyle="bg-main-light-choco dark:bg-main-dark"
        children={
          <UniCards
            productComponent={(props) => <ProductsCard {...props} />}
            filter={(item) => item.id <= 4}
            data={ProductCardData}
          />
        }
      />
      <StandartContainer
        title="On Sale Products"
        subtitle="LATEST"
        titleStyle="text-main-gray dark:text-white"
        bodyStyle="bg-main-light dark:bg-main-gray"
        children={
          <UniCards
            productComponent={(props) => (
              <ProductsCard productStyle={productStyle} {...props} />
            )}
            productStyle={productStyle}
            filter={(item) => item.sale === true}
            data={ProductCardData}
          />
        }
      />
      <HomeCounter />
      <HomeSpecial />
      <HomeVideoSection />
      <HomeShopSection />
      <HomeBlogSection />
    </>
  );
}
