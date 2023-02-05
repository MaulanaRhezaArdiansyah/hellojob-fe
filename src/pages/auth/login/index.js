import React from "react";
import { Link } from "react-router-dom";
import { FormLogin } from "./FormLogin";
import { BgAuth } from "../../../components/bgauth";
import { TabTitle } from "../../../utils/GeneralFunc";

export const Login = () => {
  TabTitle("HelloJob - Login");
  return (
    <main className="w-full h-screen md:h-[120vh] bg-base flex px-3 md:px-10 py-6 gap-5">
      <BgAuth />
      <section className="w-full md:w-1/2 px-3 py-8 gap-5 flex flex-col">
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl font-bold text-utama">Halo, Pewpeople</h4>
          <p className="text-[#46505C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
        {/* <form action="" className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label for="">Email</label>
            <input
              type="email"
              placeholder="Masukan alamat email"
              className="py-5 px-3 base-rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label for="">Kata Sandi</label>
            <input
              type="password"
              placeholder="Masukan kata sandi"
              className="py-5 px-3 base-rounded"
            />
          </div>
        </form> */}
        {/* <p className="text-end">Lupa kata sandi?</p> */}
        {/* <button className="w-full bg-orange text-white py-5 base-rounded font-bold">
          Masuk
        </button> */}
        {/* <Link to="/">
          <OrangeBtn text="Masuk" />
        </Link> */}
        <FormLogin />
        <p className="text-center">
          Anda belum punya akun?{" "}
          <Link to="/optionregister">
            <span className="text-orange">Daftar disini</span>
          </Link>
        </p>
      </section>
    </main>
  );
};
