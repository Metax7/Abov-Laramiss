import HomeSpecialCard from "./HomeSpecialCard";
import StandartContainer from "./StandartContainer";

const HomeSpecial = () => {
  const specialCardData = [
    {
      image: "bg-special-face p-[265px]",
      title: "Ariel Rings",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    },
    {
      image: "bg-special-ring p-32",
      title: "Ariel Rings",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    },
    {
      image: "bg-special-necklace p-32",
      title: "Ariel Rings",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore magna aliqua.",
    },
  ];

  return (
    <>
      <StandartContainer
        title="Special Products"
        subtitle="MAY BE YOU HAVE EARNED IT"
        titleStyle="text-main-gray dark:text-white"
        bodyStyle="bg-main-light dark:bg-main-gray"
      >
        <div className="flex max-lg:flex-col max-lg:space-y-5 lg:space-x-5">
          <div className="lg:w-1/2">
            <HomeSpecialCard {...specialCardData[0]} />
          </div>
          <div className="flex flex-col space-y-5 lg:w-1/2">
            {specialCardData.slice(1).map((item, index) => {
              return <HomeSpecialCard key={index} {...item} />;
            })}
          </div>
        </div>
      </StandartContainer>
    </>
  );
};

export default HomeSpecial;
