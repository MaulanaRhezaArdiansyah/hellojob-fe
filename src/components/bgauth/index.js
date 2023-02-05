import React from "react";
import bgImage from "../../assets/img/bg-img.png";

export const BgAuth = () => {
  return (
    <section className="max-md:hidden w-1/2 bg-purple relative flex flex-col">
      <div
        className="w-full h-full opacity-20 bg-cover bg-no-repeat absolute"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <p className="text-2xl text-white absolute z-10 px-14 pt-10">HelloJob</p>
      <div className="absolute z-10 flex items-center h-full">
        <p className="text-6xl text-white px-14">
          Temukan developer berbakat & terbaik di berbagai bidang keahlian
        </p>
      </div>
    </section>
  );
};
