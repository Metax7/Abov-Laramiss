import Link from "next/link";

const HomeMainText = () => {
  return (
    <div className="space-y-12">
      <span className="font-rubik font-bold text-[#777]">
        JEWERLY DESIGN WITH LOVE
      </span>
      <h1 className="font-prata text-main dark:text-white text-5xl font-normal sm:text-7xl xl:text-8xl">
        High-End <br /> Jewelry Items
      </h1>
      <ul className="font-semibold font-rubik sm:flex max-sm:flex-col max-lg:justify-center max-sm:space-y-12 sm:space-x-10">
        <li>
          <Link
            className="px-10 py-5 border-2 border-main-yellow bg-main-yellow text-white hover:bg-transparent hover:text-main-yellow transition-all duration-300"
            href={"#"}
          >
            BUY NOW
          </Link>
        </li>
        <li>
          <Link
            className="px-10 py-5 border-2 border-main-gray text-[#777] hover:bg-main-yellow hover:text-white hover:shadow-[0_14px_24px_0_rgba(0,0,0,1)] dark:hover:shadow-[0_14px_24px_0_rgba(190,173,142,.4)] transition-all duration-300"
            href={"#"}
          >
            EXPLORE NOW
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeMainText;
