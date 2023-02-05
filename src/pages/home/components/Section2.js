import React from "react";
import image2 from "../../../assets/img/lp-2.png";

export const Section2 = () => {
  return (
    <section className="flex flex-col gap-y-6 md:flex-row-reverse w-full md:gap-x-10 md:h-[80vh]">
      <div className="flex flex-col gap-y-6 md:w-1/2 justify-center">
        <h2 className="text-utama text-3xl md:text-4xl font-bold">
          Kenapa harus mencari tallent di HelloJob?
        </h2>
        <ul className="flex flex-col gap-y-6">
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-purple.png")} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-purple.png")} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-purple.png")} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="flex gap-x-2 items">
            <img src={require("../../../assets/img/list-purple.png")} alt="" />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </ul>
      </div>
      <div
        className="w-full h-[50vh] md:h-full bg-cover bg-no-repeat md:w-1/2 justify-center"
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
    </section>
  );
};
