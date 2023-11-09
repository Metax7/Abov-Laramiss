import React from "react";
import Title from "../../components/Title";
import { ProductCardData } from "../../data/ProductsCardData";
import ProductsCard from "../../components/ProductsCard";

const HomeOurProducts = () => {
  return (
    <>
      <div className="w-full bg-main-bg-dark px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto space-y-5">
          <div>
            <Title title="Our Products" subtitle="FEATURED" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ProductCardData.filter((item) => item.id <= 4).map((item) => {
              return (
                <ProductsCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  cost={item.cost}
                  sale={item.sale}
                  discount={item.discount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOurProducts;
