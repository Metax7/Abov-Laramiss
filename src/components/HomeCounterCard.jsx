import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const HomeCounterCard = ({ icon, count, desc, countMK }) => {
  const [counterInView, setCounterInView] = useState(false);

  const handleScroll = () => {
    const counterSection = document.querySelector("#counter-section");
    if (counterSection) {
      const rect = counterSection.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setCounterInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        <div className="text-main-yellow text-5xl sm:text-6xl md:text-7xl">{icon}</div>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-rubik font-bold">
          {counterInView && (
            <CountUp delay={0.4} duration={5} start={0} end={count} />
          )}
          {countMK}
          <span className="text-sm">+</span>
        </h1>
        <p className="text-[#777] font-rubik font-bold ">{desc}</p>
      </div>
    </>
  );
};

export default HomeCounterCard;
