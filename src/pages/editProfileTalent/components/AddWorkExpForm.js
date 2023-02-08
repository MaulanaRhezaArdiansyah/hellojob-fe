import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const AddWorkExpForm = () => {
  const [workData, setWorkData] = useState({
    nama_perusahaan: "",
    posisi: "",
    tanggal_masuk: "",
    tanggal_keluar: "",
    deskripsi: "",
  });
  const { userId } = useParams();
  const handleAddWorkExp = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:5000/api/v1/addExperience/${userId}`,
      data: workData,
    })
      .then((result) => {
        setWorkData(result.data.data);
        alert(result.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <form
      onSubmit={handleAddWorkExp}
      className="work-experience shadow-2xl w-full h-[35%] bg-white base-rounded p-5 flex flex-col gap-y-4"
    >
      <div className="border-b-[1px] border-[#C4C4C4] w-full pb-3 mb-3">
        <h3 className="text-2xl font-bold text-[#1F2A36]">Pengalaman kerja</h3>
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Nama perusahaan :
        </label>
        <input
          onChange={(e) => {
            setWorkData({
              ...workData,
              nama_perusahaan: e.target.value,
            });
          }}
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
          onChange={(e) => {
            setWorkData({
              ...workData,
              posisi: e.target.value,
            });
          }}
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
          onChange={(e) => {
            setWorkData({
              ...workData,
              tanggal_masuk: e.target.value,
            });
          }}
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
          onChange={(e) => {
            setWorkData({
              ...workData,
              tanggal_keluar: e.target.value,
            });
          }}
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
          onChange={(e) => {
            setWorkData({
              ...workData,
              deskripsi: e.target.value,
            });
          }}
          name=""
          id=""
          cols="25"
          rows="10"
          placeholder="Deskripsikan pekerjaan Anda"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none "
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-transparent text-orange py-5 px-6 border-[1px] border-[#FBB017] hover:bg-orange hover:text-white duration-200 base-rounded"
      >
        Tambah pengalaman kerja
      </button>
    </form>
  );
};
