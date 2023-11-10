import React from "react";
import Title from "../../components/Title";
import { ProductCardData } from "../../data/ProductsCardData";
import ProductsCard from "../../components/ProductsCard";

const HomeOnSaleProducts = () => {

  const productStyle = {
    backgroundColor: "#1c1b19",
  };

  return (
    <>
      <div className="w-full bg-main-bg-gray px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto space-y-5">
          <div>
            <Title title="On Sale Products" subtitle="LATEST" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ProductCardData.filter((item) => item.sale === true).map(
              (item) => {
                return <ProductsCard productStyle={productStyle} key={item.id} {...item} />;
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOnSaleProducts;
