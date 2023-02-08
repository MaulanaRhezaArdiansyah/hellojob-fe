import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../../assets/img/bg-img.png";

export const Section1 = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-y-6 md:flex-row w-full md:gap-x-10 md:h-[80vh] py-10">
      <div className="flex flex-col gap-y-6 md:w-1/2 justify-center">
        <h2 className="text-utama text-3xl md:text-5xl font-bold">
          Talenta terbaik negeri untuk perubahan revolusi 4.0
        </h2>
        <p className="text-second">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
          ipsum et dui rhoncus auctor.
        </p>
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="bg-purple base-rounded text-white w-48 px-1 py-3 border-[1px] border-[#5E50A1] hover:bg-transparent hover:text-purple duration-200"
        >
          Mulai Dari Sekarang
        </button>
      </div>
      <div
        className="w-full h-[50vh] md:h-full bg-cover bg-no-repeat md:w-1/2 justify-center"
        style={{ backgroundImage: `url(${image1})` }}
      ></div>
    </section>
  );
};
