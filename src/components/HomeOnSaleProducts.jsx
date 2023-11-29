import { ProductCardData } from "@/data/ProductsCardData";
import ProductsCard from "./ProductsCard";
import StandartContainer from "./StandartContainer";

const HomeOnSaleProducts = () => {
  const productStyle = {
    backgroundColor: "#1c1b19",
  };

  return (
    <>
      <StandartContainer
        title="On Sale Products"
        subtitle="LATEST"
        titleStyle="text-main-gray dark:text-white"
        bodyStyle="bg-main-light dark:bg-main-gray"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ProductCardData.filter((item) => item.sale === true).map((item) => {
            return (
              <ProductsCard
                productStyle={productStyle}
                key={item.id}
                {...item}
              />
            );
          })}
        </div>
      </StandartContainer>
    </>
  );
};

export default HomeOnSaleProducts;
