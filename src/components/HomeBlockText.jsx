import Link from "next/link";

const HomeBlockText = ({
  title,
  subTitle,
  desc,
  button,
  button2,
  descStyle,
  titleStyle,
}) => {
  return (
    <>
      <div className="space-y-5 ">
        <div>
          <span className="font-bold text-[#777] font-rubik">{subTitle}</span>
          <h2
            className={`${titleStyle} font-prata text-4xl sm:text-5xl lg:text-7xl text-white mt-4`}
          >
            {title}
          </h2>
        </div>
        <p className={`${descStyle} font-rubik text-[#777] text-sm`}>{desc}</p>
        <ul className="sm:flex max-sm:flex-col max-lg:justify-center items-center max-sm:space-y-5 sm:space-x-10">
          <li>
            <Link
              className="inline-block text-white font-bold font-rubik px-12 py-4 border-2 border-main-yellow bg-main-yellow hover:bg-transparent hover:text-main-yellow transition-all duration-300"
              href={"#"}
            >
              {button}
            </Link>
          </li>
          <li>
            {button2 === true ? (
              <Link
                className="px-10 py-5 border-2 inline-block font-bold font-rubik border-main-gray text-[#777] hover:bg-main-yellow hover:text-white hover:shadow-[0_14px_24px_0_rgba(0,0,0,1)] dark:hover:shadow-[0_14px_24px_0_rgba(190,173,142,.4)] transition-all duration-300"
                href={"#"}
              >
                EXPLORE NOW
              </Link>
            ) : (
              ""
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomeBlockText;
