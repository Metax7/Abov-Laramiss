import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const SwiperButtons = ({ swiper, prevBtnStyle }) => {
  return (
    <>
      <div className="relative flex space-x-5">
        <button
          onClick={() => swiper.slidePrev()}
          className={`${prevBtnStyle} p-6 text-2xl text-white transition-all duration-300`}
        >
          <AiOutlineArrowLeft />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="p-6 text-2xl bg-main-yellow shadow-[0_5px_40px_0_rgba(0,0,0,1)] dark:shadow-[0_14px_24px_0_rgba(190,173,142,.4)] text-white"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
};

export default SwiperButtons;
