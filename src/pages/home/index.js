import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { TabTitle } from "../../utils/GeneralFunc";
import { Reviews } from "./components/Reviews";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { Section3 } from "./components/Section3";

export const LandingPage = () => {
  TabTitle("HelloJob");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="bg-base h-[450vh] gap-y-16 flex flex-col px-3 pt-20 md:px-32">
        <Section1 />
        <Section2 />
        <Section3 />
        <Reviews />
        <section>
          <div className="bg-purple w-full h-[20vh] md:h-[30vh] rounded-tl-3xl rounded-br-3xl flex justify-between items-center px-6 md:px-14">
            <p className="text-white text-xl md:text-3xl">
              Lorem ipsum dolor sit amet
            </p>
            <button
              onClick={() => {
                navigate("/home");
              }}
              className="base-rounded bg-white text-purple px-3 py-2 md:px-5 md:py-4 border-[1px] border-white hover:bg-transparent hover:text-white duration-200"
            >
              Mulai Dari Sekarang
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
