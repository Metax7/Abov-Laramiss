import React from "react";
import ProductsSlider from "../../components/ProductsSlider";
import TextureRing from "../../assets/img/texture-ring.png";

const HomeBestselling = () => {
  return (
    <div className="w-full bg-main-bg-dark py-32 px-7 overflow-hidden relative">
      <img
        className="absolute bottom-[-250px] left-[-220px] hidden lg:block"
        src={TextureRing}
        alt=""
      />
      <div className="max-w-screen-lg mx-auto">
        <div className="lg:flex max-lg:flex-col space-y-5 lg:space-x-16">
          <div className="space-y-5 ">
            <div>
              <span className="font-bold text-[#777] font-rubik">BUY NOW</span>
              <h2 className="font-prata text-4xl sm:text-5xl lg:text-7xl text-white mt-4">
                Bestselling Products
              </h2>
            </div>
            <p className="font-rubik text-[#777] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, aliquip ex ea commodo consequat you have to
              understand this.
            </p>
            <a
              className="inline-block text-white font-bold font-rubik px-12 py-4 border-2 border-main-yellow bg-main-yellow hover:bg-transparent hover:text-main-yellow transition-all duration-300"
              href="#"
            >
              SHOP NOW
            </a>
          </div>
          <div className="lg:w-full ">
            <ProductsSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBestselling;
