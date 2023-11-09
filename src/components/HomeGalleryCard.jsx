import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const HomeGalleryCard = (props) => {
  return (
    <div>
      <div
        className={`${props.bgStyle} relative flex z-10 flex-col justify-center items-center py-52 bg-center bg-cover bg-no-repeat w-full h-450px before:absolute before:inset-0 before:bg-[rgba(40,47,54,0.62)] hover:before:bg-[#1535549e] before:z-20 before:transition-all before:ease-in before:duration-400 group`}
      >
        <div className="relative z-30 flex flex-col space-y-2 items-center text-white group-hover:invisible group-hover:opacity-0 transition-all duration-500 ease-linear">
          <div>
            <AiOutlinePlus />
          </div>
          <h4 className="font-bold text-2xl font-prata">{props.title}</h4>
        </div>
        <div className="absolute top-[40%] flex invisible opacity-0 flex-col items-center text-white group-hover:visible group-hover:opacity-100 z-30 transition-all duration-500 ease-linear space-y-3">
          <h4 className="font-bold text-2xl font-prata">{props.hiddenTitle}</h4>
          <p className="text-sm font-medium text-center px-5 md:px-0">
            {props.hiddenDesc}
          </p>
          <a className="flex items-center font-medium" href="#">
            <span className="mr-3">
              <BsArrowRight />
            </span>
            Buy now
          </a>
        </div>
        <a
          className="absolute z-30 bottom-10 py-3 px-5 border-2 border-main-bg-gray group-hover:border-white hover:bg-main-yellow hover:shadow-[0_14px_24px_0_rgba(190,173,142,.4)] font-bold font-rubik text-white transition-all duration-300"
          href="#"
        >
          STARTING AT <span>{props.cost}</span>
        </a>
      </div>
    </div>
  );
};

export default HomeGalleryCard;
