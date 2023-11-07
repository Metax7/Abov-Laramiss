import { IoIosArrowUp, IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import FooterLogo from "../assets/img/download.png";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { ImDiamonds, ImLocation2 } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import Header from "./Header";

const Footer = () => {
  const footerList = ["Home", "About", "News", "Gallery", "Contact"];

  const footerSocialList = [
    <FaFacebookF />,
    <AiOutlineInstagram />,
    <AiOutlineTwitter />,
  ];

  return (
    <>
      <div className="w-full py-16 bg-main-bg-dark bg-footer-bg">
        <div className="max-w-screen-2xl px-3 sm:px-7 2xl:px-0 mx-auto">
          <div className="lg:flex">
            <div className="lg:w-2/3">
              <div className="lg:flex justify-between items-center py-5">
                <div className="text-white group">
                  <a href="#header" className="flex items-center space-x-3">
                    <span className="p-3 bg-main-yellow">
                      <IoIosArrowUp />
                    </span>
                    <p className="text-md font-black group-hover:text-main-yellow transition-all duration-300">
                      BACK TO THE TOP
                    </p>
                  </a>
                </div>
                <div className="lg:flex lg:space-x-2 text-[#777] mr-5">
                  <select className="bg-transparent py-4 px-16 lg:py-5 lg:px-24">
                    <option value="English">English</option>
                    <option value="Espanol">Espanol</option>
                  </select>
                  <select className="bg-transparent py-4 px-16 lg:py-5 lg:px-24">
                    <option value="USD">USD</option>
                    <option value="GBP">GBR</option>
                    <option value="INR">INR</option>
                  </select>
                </div>
              </div>
              <div className="flex-col py-10 px-5 bg-main-bg-gray space-y-10">
                <div className="flex flex-wrap justify-between items-center">
                  <div>
                    <img className="" src={FooterLogo} alt="" />
                  </div>
                  <div>
                    <ul className="flex justify-center space-x-4">
                      {footerSocialList.map((item, index) => (
                        <li key={index}>
                          <a
                            className="block bg-[#2e2e2e] p-2 text-white hover:bg-main-yellow transition-all duration-200"
                            href="#"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <ul className="max-sm:flex-col sm:flex max-sm:space-y-2 sm:space-x-1 lg:space-x-3 text-sm lg:text-base text-white">
                    {footerList.map((item, index) => (
                      <li key={index} className="group">
                        <a
                          className="flex items-center group-hover:translate-x-2 group-hover:text-main-yellow transition-all duration-200"
                          href="#"
                        >
                          <ImDiamonds className="mr-1" /> {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"
                title="Map"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="bg-main-bg-gray">
            <div className="lg:flex px-5 sm:px-10 py-10 max-lg:space-y-10 items-center justify-between">
              <div className="max-md:flex-col md:flex max-md:space-y-5 md:space-x-20 max-md:items-center text-white">
                <div className="flex items-center space-x-3 group">
                  <div className="text-5xl text-main-yellow">
                    <BsTelephone />
                  </div>
                  <a
                    className="block cursor-pointer group-hover:text-main-yellow transition-all duration-300 "
                    href="tel:+98787676576577"
                  >
                    <p className="font-prata text-lg sm:text-xl md:text-2xl">
                      Phone Number
                    </p>
                    <p className="font-rubik">+987 876 765 76 577</p>
                  </a>
                </div>
                <div>
                  <div className="flex items-center space-x-3 group">
                    <div className="text-5xl text-main-yellow">
                      <IoIosMail />
                    </div>
                    <a
                      className="cursor-pointer group-hover:text-main-yellow transition-all duration-300 "
                      href="mailto:info@example.com"
                    >
                      <p className="font-prata text-lg sm:text-xl md:text-2xl">
                        Email Address
                      </p>
                      <p className="font-rubik">info@example.com</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="max-md:flex-col md:flex md:space-x-20 max-md:space-y-10">
                <form action="">
                  <div className="relative flex items-center w-full">
                    <div className="absolute left-0">
                      <button className="text-[#777] text-xl" type="submit">
                        <AiOutlineSearch />
                      </button>
                    </div>
                    <input
                      className="py-3 px-8 bg-transparent outline-none border-b border-gray-500 focus.border-b-2 focus.border-white transition-all duration-200"
                      type="text"
                      placeholder="Search..."
                    />
                  </div>
                </form>
                <div>
                  <div className="lg:flex lg:items-center lg:space-x-3 text-white group">
                    <a
                      className="lg:flex-col lg:items-center group-hover:text-main-yellow transition-all duration-200"
                      href=""
                    >
                      <p className="font-prata text-lg sm:text-xl md:text-2xl">
                        Office Address
                      </p>
                      <p className="font-rubik">14/A, Miranda City, NYC</p>
                    </a>
                    <p>
                      <ImLocation2 className="text-main-yellow text-4xl" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:flex-col md:flex max-md:space-y-5 justify-between bg-main-bg-gray px-10 py-10">
            <div className="font-bold text-[#777]">
              Copyright By@{" "}
              <a className="text-white border-b-2 border-white" href="">
                Example{" "}
              </a>
              - 2022
            </div>
            <div className="font-bold text-white">
              <a
                href="#"
                className="hover:text-main-yellow transition-all duration-200 pr-4 border-r-4 border-[#515050bc]"
              >
                Term of use
              </a>
              <a
                href="#"
                className="hover:text-main-yellow transition-all duration-200 pl-4"
              >
                Privacy Environmental Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
