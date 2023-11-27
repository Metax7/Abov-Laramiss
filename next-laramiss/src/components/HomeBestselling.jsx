import TextureRing from "@/assets/img/texture-ring.png";
import Image from "next/image";
import HomeBlockText from "./HomeBlockText";
import ProductsSlider from "./ProductsSlider";

const HomeBestselling = () => {
  return (
    <div className="w-full bg-main-light dark:bg-main-dark py-32 px-7 overflow-hidden relative">
      <Image
        className="absolute bottom-0 left-[-220px] hidden xl:block"
        src={TextureRing}
        alt=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="lg:flex max-lg:flex-col space-y-5 lg:space-x-16">
          <HomeBlockText
            title="Bestselling Products"
            subTitle="BUY NOW"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat you have to understand this."
            button="SHOP NOW"
            descStyle="text-main-light-dark-choco dark:text-white"
          />
          <div className="lg:w-full">
            <ProductsSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBestselling;
