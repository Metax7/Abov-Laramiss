import React, { useState } from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineTwitter,
  AiOutlineBehance,
  AiFillLinkedin,
  AiOutlineGoogle,
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { mobileDrawerList } from "./mobileDrawerList";

export function HeaderDrawer() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const [openMobileLists, setOpenMobileLists] = useState(
    Array(mobileDrawerList.length).fill(false)
  );

  const drawerList = [
    {
      title: "About Us",
      subItems: [],
    },
    {
      title: "Classification",
      subItems: [],
    },
    {
      title: "Shop",
      subItems: [
        "Shop Left Sidebar",
        "Shop Left Sidebar v2",
        "Shop Right Sidebar",
        "Shop Right Sidebar v2",
        "Shop Detail",
      ],
    },
    {
      title: "Blog",
      subItems: ["Blog Grid Sidebar", "BlogDetails", "Blog Grid", "Blog List"],
    },
    {
      title: "Our Gallery",
      subItems: [],
    },
    {
      title: "Team",
      subItems: [],
    },
    {
      title: "Contact Us",
      subItems: [],
    },
  ];

  const drawerContactList = [
    <BsFacebook />,
    <AiOutlineTwitter />,
    <AiOutlineBehance />,
    <AiFillLinkedin />,
    <AiOutlineGoogle />,
  ];

  return (
    <React.Fragment>
      <div className="p-3 md:p-5" onClick={openDrawer}>
        <AiOutlineMenu />
      </div>
      <Drawer
        open={open}
        size={400}
        onClose={closeDrawer}
        className="p-8 bg-main-bg-gray pb-32 text-white font-prata overflow-auto"
      >
        <div className="space-y-10 max-lg:hidden">
          <div className="space-y-5">
            <div className="text-end">
              <IconButton
                variant="text"
                onClick={closeDrawer}
                className="text-main-yellow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <h5 className="text-xl pl-5 border-l-2 border-main-yellow">
              Search room
            </h5>
            <form className="flex items-center" action="">
              <input
                className="bg-main-bg-dark font-sans px-7 py-4 w-full text-white outline-none"
                type="text"
                placeholder="Search your keyword..."
              />
              <Button
                className="bg-main-yellow px-5 py-4 rounded-none text-[23px] hover:text-black hover:bg-white transition-all duration-300"
                type="submit"
              >
                <AiOutlineSearch />
              </Button>
            </form>
          </div>
          <div className="space-y-5">
            <h5 className="text-xl pl-5 border-l-2 border-main-yellow">
              About us
            </h5>
            <p className="text-sm text-[#777] font-rubik">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              repellendus explicabo voluptas possimus blanditiis earum illo
              incidunt cupiditate, distinctio mollitia nostrum molestias
              quibusdam soluta dolor. Totam distinctio fugiat praesentium
              numquam!
            </p>
          </div>
          <div className="space-y-5">
            <h5 className="text-xl pl-5 border-l-2 border-main-yellow">
              Our Pages
            </h5>
            <ul className="text-[#777] font-rubik font-bold space-y-1">
              {drawerList.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    className="hover:text-main-yellow hover:pl-3 transition-all duration-300"
                    href="#"
                  >
                    {item.title}
                  </Link>
                  {item.subItems.length > 0 && (
                    <ul className="ml-4 space-y-1 mt-1">
                      {item.subItems.map((subItem, subItemIndex) => (
                        <li key={subItemIndex}>
                          <Link
                            className="hover:text-main-yellow hover:pl-3 transition-all duration-300"
                            href="#"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <h5 className="text-xl pl-5 border-l-2 border-main-yellow">
              Contact Us
            </h5>
            <ul className="flex space-x-1">
              {drawerContactList.map((item, index) => {
                return (
                  <li key={index} className="">
                    <a
                      className="block p-3 bg-main-yellow hover:bg-white hover:text-black transition-all duration-300"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="lg:hidden space-y-10">
          <div className="text-end">
            <IconButton
              variant="text"
              onClick={closeDrawer}
              className="text-main-yellow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <ul className="text-sm font-prata font-bold space-y-4">
            {mobileDrawerList.map((item, itemIndex) => (
              <li
                className=""
                key={itemIndex}
                onClick={() => {
                  const newOpenMobileLists = [...openMobileLists];
                  newOpenMobileLists[itemIndex] =
                    !newOpenMobileLists[itemIndex];
                  setOpenMobileLists(newOpenMobileLists);
                }}
              >
                <Link
                  className="hover:text-main-yellow transition-all duration-300 flex items-center justify-between"
                  href="#"
                >
                  {item.title}
                  {item.subItems.length > 0 && <IoIosArrowDown />}
                </Link>
                {item.subItems.length > 0 && (
                  <ul
                    className={
                      openMobileLists[itemIndex]
                        ? "mt-1 h-full overflow-visible text-[#777] font-rubik bg-main-bg-gray shadow-md"
                        : "mt-1 h-0 overflow-hidden text-[#777] font-rubik bg-main-bg-gray shadow-md"
                    }
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.subItems.map((subItem, subItemIndex) => (
                      <Link
                        key={subItemIndex}
                        className="hover:text-white hover:bg-main-yellow block px-6 py-3 transition-all duration-300"
                        href="#"
                      >
                        <li>{subItem}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
