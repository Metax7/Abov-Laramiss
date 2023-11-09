import React from "react";

const HomeCollectionCard = (props) => {
  return (
    <>
      <div className="space-y-5">
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition-all duration-300"
            src={props.image}
            alt=""
          />
        </div>
        <div className="text-center space-y-3">
          <h1 className="text-white font-prata text-xl ">{props.title}</h1>
          <p className="text-[#bdbdbd] text-sm font-rubik">{props.desc}</p>
          <p className="text-main-yellow font-bold font-rubik">{props.cost}</p>
        </div>
      </div>
    </>
  );
};

export default HomeCollectionCard;
