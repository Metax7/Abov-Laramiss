"use client";
import SwiperButtons from "./SwiperButtons";

const SliderWithButtons = ({
  title,
  subTitle,
  children,
  swiper,
  containerStyle,
  btnStyle,
  titleStyle,
}) => {
  return (
    <>
      <div className={`${containerStyle} w-full px-7 sm:px-20 xl:px-0 py-24`}>
        <div className="max-w-screen-lg mx-auto">
          <div className="space-y-10">
            <div className="flex items-center justify-between">
              <div className="space-y-5">
                <span className="text-main-light-dark-choco dark:text-[#777] font-rubik font-bold">
                  {subTitle}
                </span>
                <h1
                  className={`${titleStyle} font-prata text-4xl md:text-6xl lg:text-7xl`}
                >
                  {title}
                </h1>
              </div>
              <div className="max-md:hidden">
                <SwiperButtons prevBtnStyle={btnStyle} swiper={swiper} />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderWithButtons;
