import React from "react";
import { homeMainProducts } from "../data/HomeMainProducts";

const HomeMainProducts = () => {
  return (
    <>
      <div className="relative -top-20 lg:-top-10 z-20 max-w-screen-lg mx-auto p-10 bg-main-bg-gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {homeMainProducts.map((item, index) => {
            return (
              <a
                className="group relative overflow-hidden p-5 border-2 border-[#40403b] space-y-3 hover:bg-main-bg-dark hover:border-main-bg-dark transition-all duration-300"
                href="#"
              >
                <div className="bg-main-yellow p-5 inline-block">
                  {item.product_icon}
                </div>
                <h5 className="text-white text-xl font-prata">
                  {item.product_name}
                </h5>
                <p className="text-sm text-[#777] font-rubik font-semibold group-hover:text-white transition-all duration-300">
                  {item.product_count} Products
                </p>
                <span className="absolute -right-5 -bottom-5 text-[#777] text-8xl invisible opacity-0 group-hover:visible group-hover:opacity-20 group-hover:bottom-0 group-hover:right-0 transition-all duration-300">
                  {item.product_icon}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeMainProducts;
