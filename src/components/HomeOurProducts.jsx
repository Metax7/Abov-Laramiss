import { ProductCardData } from "@/data/ProductsCardData";
import ProductsCard from "./ProductsCard";
import StandartContainer from "./StandartContainer";

const HomeOurProducts = () => {
  return (
    <>
      <StandartContainer
        title="Our Products"
        subtitle="FEATURED"
        titleStyle="text-white"
        bodyStyle="bg-main-light-choco dark:bg-main-dark"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ProductCardData.filter((item) => item.id <= 4).map((item) => {
            return <ProductsCard key={item.id} {...item} />;
          })}
        </div>
      </StandartContainer>
    </>
  );
};

export default HomeOurProducts;
