import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../assets/img/bg-img.png";
import { TabTitle } from "../../utils/GeneralFunc";

export const OptionLogin = () => {
  TabTitle("HelloJob");
  return (
    <main className="w-full h-screen bg-purple bg-cover bg-no-repeat relative">
      <div
        className="w-full h-full bg-cover bg-no-repeat bg-center opacity-20 absolute"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute z-10 w-full h-full px-3 py-6 md:px-60">
        <div className=" ">
          <p className="text-white text-2xl">HelloJob</p>
        </div>
        <div className="flex flex-col h-[80%]  justify-between pt-14">
          <h2 className="text-white text-4xl font-bold leading-10">
            Temukan developer berbakat & terbaik di berbagai bidang keahlian
          </h2>
          <div className="">
            <Link to="/auth/login">
              <button className="w-full bg-white text-purple py-5 base-rounded font-bold">
                Masuk sebagai pekerja
              </button>
            </Link>
            <div className="py-5">
              <div className="w-full h-[2px] bg-white relative">
                <p className="text-white bg-purple bg-opacity-20 text-center w-16 absolute -top-3 left-[40%] md:left-[47%]">
                  atau
                </p>
              </div>
            </div>
            <Link to="/auth/login">
              <button className="w-full bg-transparent text-white border-[1px] border-white py-5 base-rounded font-bold">
                Masuk sebagai perekrut
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
