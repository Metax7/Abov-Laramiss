import React from "react";
import { AiOutlineHeart, AiFillEye, AiOutlineArrowRight } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";

const ProductsCard = (props) => {
  return (
    <>
      <div className="flex justify-center ml-3 lg:ml-0">
        <div className="flex flex-col group">
          <div className="relative overflow-hidden">
            <img
              className="group-hover:scale-110 transition-all duration-700"
              src={props.image}
              alt=""
            />
            <div className="absolute top-[15px] left-[10px]">
              {props.sale ? (
                <div className="flex flex-col space-y-2 text-sm text-center">
                  <span className="py-1 px-3 bg-main-yellow text-white font-bold font-rubik">
                    SALE
                  </span>
                  <span className="py-1 px-3 bg-white text-black font-bold font-rubik">
                    -{props.discount}%
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="absolute text-lg top-[10px] right-[10px] space-y-1">
              <a
                className="block p-3 bg-main-bg-gray text-main-yellow scale-0 hover:bg-main-yellow hover:text-white group-hover:scale-100 transition-all duration-500"
                href="#"
              >
                <AiOutlineHeart />
              </a>
              <a
                className="block p-3 bg-main-bg-gray text-main-yellow scale-0 hover:bg-main-yellow hover:text-white group-hover:scale-100 transition-all duration-500"
                href="#"
              >
                <BiRefresh />
              </a>
              <a
                className="block p-3 bg-main-bg-gray text-main-yellow scale-0 hover:bg-main-yellow hover:text-white group-hover:scale-100 transition-all duration-500"
                href="#"
              >
                <AiFillEye />
              </a>
            </div>
          </div>
          <div className="p-7 bg-main-bg-gray" style={props.productStyle}>
            <h4 className="font-prata text-white text-xl">{props.name}</h4>
            <div className="flex items-center justify-between">
              <span className="font-bold text-main-yellow text-lg font-rubik">
                {props.sale ? (
                  <div className="text-main-yellow">
                    <span>
                      ${props.cost - props.cost * (props.discount / 100)}
                    </span>
                    <span className="text-sm text-[#777] line-through ml-1">
                      ${props.cost}
                    </span>
                  </div>
                ) : (
                  <div className="text-main-yellow" href="#">
                    ${props.cost}
                  </div>
                )}
              </span>
              <a
                className="text-main-yellow text-xl relative translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                href="#"
              >
                <AiOutlineArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
