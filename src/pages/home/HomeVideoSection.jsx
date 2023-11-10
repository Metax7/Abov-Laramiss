import React from "react";
import HomeBlockText from "../../components/HomeBlockText";
import { BsFillPlayFill } from "react-icons/bs";

const HomeVideoSection = () => {
  return (
    <>
      <div className="w-full bg-main-bg-dark py-24 px-7 sm:px-20 xl:px-0 relative">
        <div className="max-w-screen-lg mx-auto">
          <div className="relative z-20 flex max-lg:flex-col-reverse">
            <div className="lg:w-1/2 max-lg:mt-10">
              <HomeBlockText
                title="Make Your Day Brighter ."
                subTitle="DESIGN VIDEO"
                desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat you have to understand this."
                button="SEE MORE"
              />
            </div>
            <div className="lg:w-1/2">
              <div className="bg-video-bg bg-no-repeat bg-center h-full max-lg:py-40 flex items-center justify-center">
                <a
                  href=""
                  className="bg-main-bg-gray p-8 text-white rounded-full text-4xl relative popup-video"
                >
                  <BsFillPlayFill />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-main-yellow right-0 top-0 z-10 h-full w-[30%] max-lg:w-full max-lg:h-[30%]">
          <div className="relative w-full h-full before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-10 before:bg-video-pattern before:bg-cover before:bg-center"></div>
        </div>
      </div>
    </>
  );
};

export default HomeVideoSection;
