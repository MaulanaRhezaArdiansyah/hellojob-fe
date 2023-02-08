import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataUsers } from "../../../redux/actions/users";

export const EditBioForm = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, []);
  return (
    <form className="data-diri shadow-2xl w-full h-[40%] bg-white base-rounded p-5 flex flex-col gap-y-4">
      <div className="border-b-[1px] border-[#C4C4C4] w-full pb-3 mb-3">
        <h3 className="text-2xl font-bold text-[#1F2A36]">Data diri</h3>
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Nama lengkap :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.name ? userDataDetail.name : "Masukkan nama lengkap"
          }
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Job desk :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.job_desk
              ? userDataDetail.job_desk
              : "Masukkan job desk"
          }
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Domisili :
        </label>
        <input
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.domisili
              ? userDataDetail.domisili
              : "Masukkan domisili"
          }
        />
      </div>
      <div className="socmed-row flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1 ">
          <label htmlFor="" className="text-[#9EA0A5]">
            Instagram :
          </label>
          <input
            type="text"
            className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
            placeholder={
              userDataDetail.akun_instagram
                ? userDataDetail.akun_instagram
                : "Masukkan Username IG"
            }
          />
        </div>
        <div className="flex flex-col gap-y-1 ">
          <label htmlFor="" className="text-[#9EA0A5]">
            Github :
          </label>
          <input
            type="text"
            className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
            placeholder={
              userDataDetail.akun_github
                ? userDataDetail.akun_github
                : "Masukkan Username Github"
            }
          />
        </div>
        <div className="flex flex-col gap-y-1 ">
          <label htmlFor="" className="text-[#9EA0A5]">
            Gitlab :
          </label>
          <input
            type="text"
            className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
            placeholder={
              userDataDetail.akun_gitlab
                ? userDataDetail.akun_gitlab
                : "Masukkan Username Gitlab"
            }
          />
        </div>
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
          placeholder="Tuliskan deskripsi singkat"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none "
        ></textarea>
      </div>
      <button className="bg-orange text-white py-5 px-6 base-rounded self-end border-[1px] border-[#fbb017] hover:bg-transparent hover:text-orange duration-200">
        Simpan
      </button>
    </form>
  );
};
