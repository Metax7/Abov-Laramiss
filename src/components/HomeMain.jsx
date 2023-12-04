import HomeBlockText from "./HomeBlockText";
import HomeMainImage from "./HomeMainImage";
import HomeMainProducts from "./HomeMainProducts";

const HomeMain = () => {

  const links = [
    {
      text:"BUY NOW",
      href:""
    },
    {
      text:"EXPLORE NOW",
      href:""
    }
  ]

  return (
    <div className="w-full py-16 px-7 sm:px-20 xl:px-0 bg-main-light dark:bg-main-dark">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex-col">
          <div className="flex items-center justify-center space-y-10 max-lg:flex-col">
            <div className="max-lg:w-full lg:w-1/2 max-lg:text-center">
              <HomeBlockText
                title="High-End Jewelry Items"
                subTitle="JEWERLY DESIGN WITH LOVE"
                titleStyle="font-prata text-5xl font-normal sm:text-7xl xl:text-8xl text-main-gray dark:text-white"
                links={links}
              />
            </div>
            <div className="max-lg:w-full lg:w-1/2 ">
              <HomeMainImage />
            </div>
          </div>
          <div>
            <HomeMainProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
