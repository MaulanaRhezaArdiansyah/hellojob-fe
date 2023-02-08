import axios from "axios";
import React, { useEffect, useState } from "react";
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

  const [bioData, setBioData] = useState({
    name: "",
    job_desk: "",
    job_status: "",
    domisili: "",
    akun_instagram: "",
    akun_github: "",
    // akun_gitlab: ""
    description: "",
    avatar: "",
  });

  const bioFormData = new FormData();
  bioFormData.append("name", bioData.name);
  bioFormData.append("job_desk", bioData.job_desk);
  bioFormData.append("job_status", bioData.job_status);
  bioFormData.append("domisili", bioData.domisili);
  bioFormData.append("akun_instagram", bioData.akun_instagram);
  bioFormData.append("akun_github", bioData.akun_github);
  bioFormData.append("description", bioData.description);
  bioFormData.append("avatar", bioData.avatar);

  const handleEditBio = (event) => {
    event.preventDefault();
    axios({
      method: "PATCH",
      url: `http://localhost:5000/api/v1/users/${userId}`,
      data: bioFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        setBioData(result.data.data);
        alert(result.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, []);
  return (
    <form
      onSubmit={handleEditBio}
      className="data-diri shadow-2xl w-full h-[45%] bg-white base-rounded p-5 flex flex-col gap-y-4"
    >
      <div className="border-b-[1px] border-[#C4C4C4] w-full pb-3 mb-3">
        <h3 className="text-2xl font-bold text-[#1F2A36]">Data diri</h3>
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Nama lengkap :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              name: e.target.value,
            });
          }}
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
          onChange={(e) => {
            setBioData({
              ...bioData,
              job_desk: e.target.value,
            });
          }}
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
          Job status :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              job_status: e.target.value,
            });
          }}
          type="text"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none"
          placeholder={
            userDataDetail.job_status
              ? userDataDetail.job_status
              : "Masukkan job status"
          }
        />
      </div>
      <div className="flex flex-col gap-y-1 ">
        <label htmlFor="" className="text-[#9EA0A5]">
          Domisili :
        </label>
        <input
          onChange={(e) => {
            setBioData({
              ...bioData,
              domisili: e.target.value,
            });
          }}
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
            onChange={(e) => {
              setBioData({
                ...bioData,
                akun_instagram: e.target.value,
              });
            }}
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
            onChange={(e) => {
              setBioData({
                ...bioData,
                akun_github: e.target.value,
              });
            }}
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
          onChange={(e) => {
            setBioData({
              ...bioData,
              description: e.target.value,
            });
          }}
          name=""
          id=""
          cols="25"
          rows="10"
          placeholder="Tuliskan deskripsi singkat"
          className="border-[1px] border-[#E2E5ED] base-rounded py-5 px-3 focus:outline-none "
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-orange text-white py-5 px-6 base-rounded self-end border-[1px] border-[#fbb017] hover:bg-transparent hover:text-orange duration-200"
      >
        Simpan
      </button>
    </form>
  );
};
