import React from "react";
import { Link } from "react-router-dom";
import { FormRegistTalent } from "./FormRegistTalent";
import { BgAuth } from "../../../components/bgauth";
import { TabTitle } from "../../../utils/GeneralFunc";

export const RegisterTalent = () => {
  TabTitle("HelloJob - Register");
  return (
    <main className="w-full h-[150vh] bg-base flex px-3 md:px-10 py-6 gap-5">
      <BgAuth />
      <section className="w-full md:w-1/2 px-3 py-8 gap-5 flex flex-col">
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl font-bold text-utama">Halo, Pewpeople</h4>
          <p className="text-[#46505C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
        <FormRegistTalent />
        <p className="text-center">
          Anda sudah punya akun?{" "}
          <Link to="/auth/login">
            <span className="text-orange">Masuk disini</span>
          </Link>
        </p>
      </section>
    </main>
  );
};
