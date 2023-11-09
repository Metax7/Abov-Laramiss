import React from "react";

const HomeCollectionCard = (props) => {
  return (
    <>
      <a href="#" className="group">
        <div className="overflow-hidden">
          <img
            className="group-hover:scale-110 transition-all duration-500"
            src={props.image}
            alt=""
          />
        </div>
        <div
          className={`${props.cardBodyStyle} text-center flex flex-col p-5 items-center justify-center space-y-3`}
        >
          <h1 className={`${props.titleStyle}`}>{props.title}</h1>
          <p className={`${props.subtitleStyle}`}>{props.subtitle}</p>
          <p className={`${props.descStyle}`}>{props.desc}</p>
        </div>
      </a>
    </>
  );
};

export default HomeCollectionCard;
