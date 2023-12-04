import { BsFillPlayFill } from "react-icons/bs";
import HomeBlockText from "./HomeBlockText";

const HomeVideoSection = () => {
  const links = [
    {
      href:"",
      text:"SEE MORE"
    }
  ]
  return (
    <>
      <div className="relative w-full py-24 bg-main-light-choco dark:bg-main-dark px-7 sm:px-20 xl:px-0">
        <div className="max-w-screen-lg mx-auto">
          <div className="relative z-20 flex max-lg:flex-col-reverse">
            <div className="lg:w-1/2 max-lg:mt-10">
              <HomeBlockText
                title="Make Your Day Brighter ."
                subTitle="DESIGN VIDEO"
                titleStyle="text-main-gray dark:text-white"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat you have to understand this."
                descriptionStyle="text-white"
                links={links}
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center justify-center h-full bg-center bg-no-repeat bg-video-bg max-lg:py-40">
                <a
                  href=""
                  className="relative p-8 text-4xl text-white rounded-full bg-main-gray popup-video"
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
