import { homeMainProducts } from "@/data/HomeMainProducts";
import Link from "next/link";

const HomeMainProducts = () => {
  return (
    <>
      <div className="relative -top-20 lg:-top-10 z-20 max-w-screen-lg mx-auto p-10 bg-main-light-choco dark:bg-main-gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {homeMainProducts.map((item, index) => {
            return (
              <Link
                key={index}
                className="group relative overflow-hidden p-5 border-2 border-main-light dark:border-[#40403b] space-y-3 hover:bg-main-light-dark-choco dark:hover:bg-main-dark hover:border-main-bg-dark transition-all duration-300"
                href={"#"}
              >
                <div className="bg-main-yellow p-5 inline-block">
                  {item.product_icon}
                </div>
                <h5 className="text-white text-xl font-prata">
                  {item.product_name}
                </h5>
                <p className="text-sm text-main-light-dark-choco dark:text-[#777] font-rubik font-semibold group-hover:text-white transition-all duration-300">
                  {item.product_count} Products
                </p>
                <span className="absolute -right-5 -bottom-5 text-[#777] text-8xl invisible opacity-0 group-hover:visible group-hover:opacity-20 group-hover:bottom-0 group-hover:right-0 transition-all duration-300">
                  {item.product_icon}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeMainProducts;
