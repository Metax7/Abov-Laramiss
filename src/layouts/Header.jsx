import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import headerLogo from "../assets/img/logo.svg";
import ThemeSwitch from "../theme/themeSwitch";
import { Link } from "react-router-dom";
// import SubMenu from "../components/subMenu";
// import { IoIosArrowForward } from "react-icons/io";
import { HeaderDrawer } from "../components/HeaderDrawer";

const Header = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-main-bg-dark">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex bg-main-bg-gray justify-around lg:justify-between items-center px-3 py-3 font-prata lg:mx-3 xl:mx-0">
            <div className="flex">
              <Link>
                <div className="flex space-x-3">
                  <img src={headerLogo} alt="" />
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
              <ul className="lg:flex space-x-3 xl:space-x-8 text-white font-bold hidden">
                <li className="relative group py-10 hover:text-main-yellow transition-all duration-300 cursor-pointer">
                  Home
                  {/* <SubMenu>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Home 1
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Home 2
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Home 3
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Home 4
                      </li>
                    </Link>
                  </SubMenu> */}
                </li>
                <li className="py-10 hover:text-main-yellow transition-all duration-300 cursor-pointer">
                  Categories
                </li>
                <li className="py-10 hover:text-main-yellow transition-all duration-300 cursor-pointer">
                  Diamond
                </li>
                <li className="relative group py-10 hover:text-main-yellow transition-all duration-300 cursor-pointer">
                  Blog
                  {/* <SubMenu>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Blog Grid Sidebar
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Blog Details
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Blog Grid
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Blog List
                      </li>
                    </Link>
                  </SubMenu> */}
                </li>
                <li className="relative group py-10 hover:text-main-yellow transition-all duration-300 cursor-pointer">
                  Pages
                  {/* <SubMenu>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        About
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Classification
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Account
                      </li>
                    </Link>
                    <Link>
                      <li className="relative flex items-center justify-between px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear group/gallery">
                        Gallery
                        <span>
                          <IoIosArrowForward />
                        </span>
                        <ul className="absolute top-0 left-full invisible opacity-0 group-hover/gallery:opacity-100 group-hover/gallery:visible bg-main-bg-dark w-[250px] transition-all duration-300">
                          <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                            ape
                          </li>
                          <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                            ape
                          </li>
                        </ul>
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Team
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Typography
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Error 404
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Coming Soon
                      </li>
                    </Link>
                  </SubMenu> */}
                </li>
                <li className="relative group py-10 hover:text-main-yellow transition-all duration-300 cursor-pointer">
                  Shop
                  {/* <SubMenu>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Shop Left Sidebar
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Shop Left Sidebar v2
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Shop Right Sidebar
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Shop Right Sidebar v2
                      </li>
                    </Link>
                    <Link>
                      <li className="px-5 py-4 hover:bg-main-yellow hover:text-white transition-all duration-400 ease-linear">
                        Product Details
                      </li>
                    </Link>
                  </SubMenu> */}
                </li>
                <li className="py-10 hover:text-main-yellow transition-all duration-300 cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex space-x-2 xl:space-x-8">
                <li className="hidden lg:block p-5 border cursor-pointer hover:bg-main-yellow transition-all duration-300 ease-linear border-[#8585856f] text-white">
                  <AiOutlineUser />
                </li>
                <li className="hidden lg:block p-5 border cursor-pointer hover:bg-main-yellow transition-all duration-300 ease-linear border-[#8585856f] text-white">
                  <AiOutlineSearch />
                </li>
                <li className="">
                  <HeaderDrawer />
                </li>
                <li className="hidden lg:block p-5 border cursor-pointer hover:bg-main-yellow transition-all duration-300 ease-linear border-[#8585856f] text-white">
                  <BsBag />
                </li>
                <li className="hidden lg:block border cursor-pointer hover:bg-main-yellow transition-all duration-300 ease-linear border-[#8585856f] text-white">
                  <ThemeSwitch />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
