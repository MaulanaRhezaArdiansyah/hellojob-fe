import React from "react";

export const AddPortfolioForm = () => {
  return (
    <form
      encType="multipart/form-data"
      className="portfolio shadow-2xl w-full h-[30%] bg-white base-rounded p-5 flex flex-col gap-y-4"
    >
      <div className="border-b-[1px] border-[#C4C4C4] w-full pb-3 mb-3">
        <h3 className="text-2xl font-bold text-[#1F2A36]">Portfolio</h3>
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Nama aplikasi :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder="Masukkan nama aplikasi"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Link repository :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder="Masukkan link repository"
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Upload gambar :
        </label>
        <input
          type="file"
          name="portfolio_image"
          accept="image/*"
          className="border-[1px] border-[#E2E5ED] base-rounded h-80 py-5 px-3 focus:outline-none"
          placeholder="Masukkan link repository"
        />
      </div>
      <button className="bg-transparent text-orange py-5 px-6 border-[1px] border-[#FBB017] hover:bg-orange hover:text-white duration-200 base-rounded">
        Tambah portfolio
      </button>
    </form>
  );
};
