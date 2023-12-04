import HomeBlockText from "./HomeBlockText";

const HomeRareCollections = () => {
  const links = [
    {
      href:"",
      text:"SHOP NOW"
    }
  ]
  return (
    <div className="relative z-10 w-full overflow-hidden bg-center bg-no-repeat bg-cover py-28 bg-rare after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-main-gray after:-z-10 after:opacity-60">
      <div className="max-w-screen-lg mx-auto px-7 sm:px-20 xl:px-0">
        <HomeBlockText
          title="Rare Collections."
          subTitle="BUY NOW"
          titleStyle="text-white"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat you have to understand this."
          descriptionStyle="lg:pr-96"
          links={links}
        />
      </div>
    </div>
  );
};

export default HomeRareCollections;
