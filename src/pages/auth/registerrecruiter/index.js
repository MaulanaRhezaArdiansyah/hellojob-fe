import React from "react";
import { Link } from "react-router-dom";
import { FormRegistRecruiter } from "./FormRegistRecruiter";
import { BgAuth } from "../../../components/bgauth";
import { TabTitle } from "../../../utils/GeneralFunc";

export const RegisterRecruiter = () => {
  TabTitle("HelloJob - Register");
  return (
    <main className="w-full h-[160vh] md:h-[200vh] bg-base flex px-3 md:px-10 py-6 gap-5">
      <BgAuth />
      <section className="w-full md:w-1/2 px-3 py-8 gap-5 flex flex-col">
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl font-bold text-utama">
            Halo, HelloJobPeople
          </h4>
          <p className="text-[#46505C]">
            Rekrut talent yang akan mengubah jalan bisnis dari perusahaan Anda
            sekarang!
          </p>
        </div>
        <FormRegistRecruiter />
        <p className="text-center">
          Anda sudah punya akun?{" "}
          <Link to="/optionlogin">
            <span className="text-orange cursor-pointer">Masuk disini</span>
          </Link>
        </p>
      </section>
    </main>
  );
};
