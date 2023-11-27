import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import headerLogo from "@/assets/img/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { HeaderDrawer } from "../HeaderDrawer";
import ThemeSwitch from "@/theme/themeSwitch";

const Header = () => {
  const headerMenu = [
    { title: "Home", link: "/" },
    { title: "Categories", link: "/" },
    { title: "Diamond", link: "/" },
    { title: "Blog", link: "/" },
    { title: "Pages", link: "/" },
    { title: "Shop", link: "/" },
    { title: "Contact", link: "/" },
  ];

  const headerSocialMenu = [
    <AiOutlineUser />,
    <AiOutlineSearch />,
    <HeaderDrawer />,
    <BsBag />,
    <ThemeSwitch />,
  ];

  return (
    <>
      <div
        id="header"
        className="w-full px-3 sm:px-7 bg-main-light dark:bg-main-dark"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex bg-main-light-choco dark:bg-main-gray justify-around lg:justify-between items-center px-3 py-3 font-prata lg:px-7">
            <div className="flex">
              <Link href={"/"}>
                <div className="flex space-x-3">
                  <Image className="w-12" src={headerLogo} alt="" />
                  <div className="text-main-yellow">
                    <h3 className="text-lg font-medium lg:text-2xl">
                      Laramiss
                    </h3>
                    <h6 className="font-rubik text-xs">LUXURY PIECES</h6>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <ul className="lg:flex space-x-2 text-sm xl:text-md 2xl:text-lg xl:space-x-8 text-white font-bold hidden">
                {headerMenu.map((item, index) => {
                  return (
                    <li key={index} className="">
                      <Link
                        className="block group py-10 hover:text-main-yellow transition-all duration-300 cursor-pointer"
                        href={item.link}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <ul className="flex space-x-2 xl:space-x-8">
                {headerSocialMenu.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`border cursor-pointer hover:bg-main-yellow transition-all duration-300 ease-linear border-white dark:border-[#8585856f] text-white ${
                        index === 2 || index === 4
                          ? "block"
                          : "hidden lg:block p-5"
                      }`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
