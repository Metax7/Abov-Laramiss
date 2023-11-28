import { ProductCardData } from "@/data/ProductsCardData";
import Title from "./Title";
import ProductsCard from "./ProductsCard";

const HomeOnSaleProducts = () => {

  const productStyle = {
    backgroundColor: "#1c1b19",
  };

  return (
    <>
      <div className="w-full bg-main-light dark:bg-main-gray px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto space-y-5">
          <div>
            <Title title="On Sale Products" subtitle="LATEST" titleStyle="text-main-gray dark:text-white"/>
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
