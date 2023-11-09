import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  GiBigDiamondRing,
  GiDropEarrings,
  GiNecklaceDisplay,
  GiGemPendant,
  GiFeatherNecklace,
  GiNecklace,
} from "react-icons/gi";
import { ProductCardData } from "../../data/ProductsCardData";
import ProductsCard from "../../components/ProductsCard";

const HomeCategories = () => {
  const data = [
    {
      label: "RINGS",
      icon: <GiBigDiamondRing />,
      value: "rings",
    },
    {
      label: "EARRINGS",
      icon: <GiDropEarrings />,
      value: "earrings",
    },
    {
      label: "NECKLACES",
      icon: <GiNecklaceDisplay />,
      value: "necklaces",
    },
    {
      label: "BRACELETS",
      icon: <GiGemPendant />,
      value: "bracelets",
    },
    {
      label: "ARMLETS",
      icon: <GiFeatherNecklace />,
      value: "armlets",
    },
    {
      label: "ANKLETS",
      icon: <GiNecklace />,
      value: "anklets",
    },
  ];

  return (
    <>
      <div className="w-full bg-main-bg-dark px-7 py-16">
        <div className="max-w-screen-lg mx-auto space-y-10">
          <div className="space-y-7">
            <span className="font-bold font-rubik text-[#777]">CATEGORIES</span>
            <h1 className="text-white font-prata text-4xl sm:text-7xl">
              Our Categories
            </h1>
          </div>
          <div>
            <Tabs value="rings" className="">
              <TabsHeader
                className="bg-transparent grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 md:gap-10 lg:gap-5"
                indicatorProps={{
                  className:
                    "bg-main-yellow shadow-none !text-gray-900 rounded-none",
                }}
              >
                {data.map(({ label, value, icon }) => (
                  <Tab
                    className="text-white py-7 bg-main-bg-gray font-bold"
                    key={value}
                    value={value}
                  >
                    <div className="text-7xl mb-5">{icon}</div>
                    <span className="text-sm">{label}</span>
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value }) => (
                  <TabPanel
                    className="flex flex-wrap items-center justify-center max-sm:space-y-5 sm:space-x-5"
                    key={value}
                    value={value}
                  >
                    {ProductCardData.filter(
                      (product) => product.category === value
                    ).map((product) => (
                      <ProductsCard
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        cost={product.cost}
                        sale={product.sale}
                        discount={product.discount}
                      />
                    ))}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategories;
