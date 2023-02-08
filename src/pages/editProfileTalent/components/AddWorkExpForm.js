import React from "react";

export const AddWorkExpForm = () => {
  return (
    <form className="work-experience shadow-2xl w-full h-[35%] bg-white base-rounded p-5 flex flex-col gap-y-4">
      <div className="border-b-[1px] border-[#C4C4C4] w-full pb-3 mb-3">
        <h3 className="text-2xl font-bold text-[#1F2A36]">Pengalaman kerja</h3>
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Nama perusahaan :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder="Masukkan nama perusahaan"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Posisi :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder="Masukkan posisi Anda di perusahaan tersebut"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Tanggal masuk :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder="01-01-2023"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Tanggal keluar :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder="01-01-2025"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Deskripsi singkat :
        </label>
        <textarea
          name=""
          id=""
          cols="25"
          rows="10"
          placeholder="Deskripsikan pekerjaan Anda"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none "
        ></textarea>
      </div>
      <button className="bg-transparent text-orange py-5 px-6 border-[1px] border-[#FBB017] hover:bg-orange hover:text-white duration-200 base-rounded">
        Tambah pengalaman kerja
      </button>
    </form>
  );
};
