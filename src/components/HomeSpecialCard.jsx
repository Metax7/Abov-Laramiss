import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomeSpecialCard = ({
  image,
  title,
  desc,
  refStyle,
  titleStyle,
  descStyle,
}) => {
  return (
    <>
      <div className="relative group overflow-hidden after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[rgba(36,39,42,0.47)]">
        <div
          className={`${image} group-hover:scale-110 w-full h-full bg-cover bg-center transition-all duration-500`}
        ></div>
        <div className="absolute left-8 bottom-8 z-20 right-8">
          <h3>
            <Link
              className={`${titleStyle} text-white text-3xl font-prata transition-all duration-300`}
              href={"#"}
            >
              {title}
            </Link>
          </h3>
          <Link
            href={"#"}
            className={`${descStyle} block text-[#a3a3a3] text-sm font-rubik pr-16 md:pr-28 lg:pr-32 transition-all duration-300`}
          >
            {desc}
          </Link>
        </div>
        <Link
          href={"#"}
          className={`${refStyle} border-2 border-[#ffffff33] text-white z-20 p-5 absolute right-8 bottom-8 rounded-full text-lg text-center translate-y-28 invisible opacity-0 hover:bg-main-bg-dark group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-500`}
        >
          <AiOutlineArrowRight />
        </Link>
      </div>
    </>
  );
};

export default HomeSpecialCard;
