import React from "react";

const HomeAboutText = () => {
  return (
    <div className="space-y-7 py-10">
      <span className="font-bold text-sm md:text-lg text-[#777] font-rubik">ABOUT US</span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-prata font-normal text-white">
        Crafting Jewellery Since 1990.
      </h1>
      <p className="text-sm font-rubik text-[#777]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dicta
        illo aliquam corporis doloribus obcaecati omnis, hic ad sapiente vel
        voluptatum aspernatur consequuntur saepe, quisquam nisi repudiandae
        libero! Dicta, placeat.
      </p>
      <div>
        <a
          className="py-5 px-12 text-white font-bold font-rubik bg-main-yellow border-2 border-main-yellow hover:bg-transparent hover:text-main-yellow transition-all duration-300"
          href=""
        >
          KNOW MORE
        </a>
      </div>
    </div>
  );
};

export default HomeAboutText;
