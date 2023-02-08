import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const AddPortfolioForm = () => {
  const [portfolio, setPortfolio] = useState({
    app_name: "",
    link_repo: "",
    portfolio_image: "",
  });
  const [image, setImage] = useState(null);

  const portfolioFormData = new FormData();
  portfolioFormData.append("app_name", portfolio.app_name);
  portfolioFormData.append("link_repo", portfolio.link_repo);
  portfolioFormData.append("portfolio_image", image);

  const { userId } = useParams();

  const handleAddPortfolio = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:5000/api/v1/addPortfolio/${userId}`,
      data: portfolioFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((result) => {
        console.log(result.data.data);
        setPortfolio(result.data.data);
        alert(result.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <form
      onSubmit={handleAddPortfolio}
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
          onChange={(e) => {
            console.log(e.target.value);
            setPortfolio({
              ...portfolio,
              app_name: e.target.value,
            });
          }}
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
          onChange={(e) => {
            console.log(e.target.value);
            setPortfolio({
              ...portfolio,
              link_repo: e.target.value,
            });
          }}
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
          onChange={(e) => {
            console.log(e.target.files[0]);
            setImage(e.target.files[0]);
          }}
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
