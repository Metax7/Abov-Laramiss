import React from "react";

function HomeAboutCard({
  title,
  description,
  image,
  showText,
  showImage,
  icon,
  isLower,
}) {
  return (
    <div className={`${isLower ? "relative sm:translate-y-8" : ""}`}>
      {showImage && (
        <img className="w-full h-full object-cover" src={image} alt={title} />
      )}
      {showText && (
        <div className="flex flex-col bg-main-bg-gray items-center text-center space-y-5 px-6 py-10 h-full">
          <span className="text-main-yellow text-6xl">{icon}</span>
          <a
            className="text-white font-normal font-prata text-3xl hover:text-main-yellow transition-all duration-300"
            href="#"
          >
            <h3>{title}</h3>
          </a>
          <p className="text-[#777] text-sm font-rubik">{description}</p>
        </div>
      )}
    </div>
  );
}

export default HomeAboutCard;
