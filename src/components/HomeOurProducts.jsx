import { ProductCardData } from "@/data/ProductsCardData";
import ProductsCard from "./ProductsCard";
import Title from "./Title";

const HomeOurProducts = () => {
  return (
    <>
      <div className="w-full bg-main-light-choco dark:bg-main-dark px-7 sm:px-20 xl:px-0 py-24">
        <div className="max-w-screen-lg mx-auto space-y-5">
          <div>
            <Title title="Our Products" subtitle="FEATURED" titleStyle="text-white"/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ProductCardData.filter((item) => item.id <= 4).map((item) => {
              return <ProductsCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOurProducts;
