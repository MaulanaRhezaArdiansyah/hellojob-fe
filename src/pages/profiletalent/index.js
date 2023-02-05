import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";
import { TabTitle } from "../../utils/GeneralFunc";
import { ExperiencePortfolio } from "./components/ExperiencePortfolio";

export const ProfileTalent = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, []);

  const dataSkill = userDataDetail[0] ? userDataDetail[0].skills : "";

  const resDataSkill = dataSkill
    ? dataSkill.map((s) => {
        return s;
      })
    : "";
  const navigate = useNavigate();
  const getDetailUser = (id) => {
    navigate(`/profile/talent/hire/${id}`);
  };
  //   console.log(userDataDetail);
  TabTitle("HelloJob - Profile");
  if (loadingUser) {
    return <h1>Loading...</h1>;
  }
  if (errorUser) {
    return <h1>Error..</h1>;
  }
  return (
    <div className="relative">
      <Navbar />
      <main className="w-full h-[400vh] md:h-[300vh] bg-base relative">
        <div className="w-full h-[60vh] bg-purple"></div>
        <div className="w-full h-[200vh] bg-base"></div>
        <section className="w-full h-[350vh] md:h-[150vh] px-3 md:px-32 absolute z-10 top-20 px-3 flex flex-col md:flex-row md:pt-20 md:gap-x-10 gap-y-6">
          <div className="profile-card bg-white w-full md:w-[60%] base-rounded h-[130vh] md:h-[150vh] px-5 py-5 flex flex-col gap-y-8">
            <div className="bio flex flex-col gap-y-3 ">
              <div className=" w-full flex justify-center items-center">
                <img src={require("../../assets/img/harry.png")} alt="" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#1F2A36]">
                  {userDataDetail[0] ? userDataDetail[0].name : ""}
                </h2>
                <p className="text-lg text-[#1F2A36]">
                  {userDataDetail[0] ? userDataDetail[0].job_desk : ""}
                </p>
                <p className="text-[#9EA0A5]">
                  {userDataDetail[0] ? userDataDetail[0].job_status : ""}
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2 items-center">
                  <img src={require("../../assets/img/loc.png")} alt="" />
                  <p className="text-[#9EA0A5]">
                    {userDataDetail[0] ? userDataDetail[0].domisili : ""}
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <img src={require("../../assets/img/phone.png")} alt="" />
                  <p className="text-[#9EA0A5]">
                    {userDataDetail[0] ? userDataDetail[0].phone : ""}
                  </p>
                </div>
                <p className="text-[#9EA0A5] pt-2">
                  {userDataDetail[0] ? userDataDetail[0].description : ""}
                </p>
              </div>
              <button
                onClick={(id) => {
                  getDetailUser(userDataDetail[0].id);
                }}
                className="bg-purple base-rounded text-white mt-1 py-5"
              >
                Hire
              </button>
            </div>
            <div className="skill w-full flex flex-col gap-y-3">
              <h2 className="text-2xl font-bold text-[#1F2A36]">Skill</h2>
              <div className="flex flex-wrap gap-3">
                {resDataSkill
                  ? resDataSkill.map((skill) => {
                      return skill ? (
                        <p className="bg-[#FBB017] text-white px-8 py-2 border-[1px] border-[#b87a00] base-rounded">
                          {skill.skill_name}
                        </p>
                      ) : (
                        ""
                      );
                    })
                  : ""}
              </div>
            </div>
            <div className="socmed w-full flex flex-col gap-y-5 pt-6">
              <div className="flex gap-x-3 items-center">
                <img src={require("../../assets/img/mail.png")} alt="" />
                <p className="text-[#9EA0A5]">Louistommo@gmail.com</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img src={require("../../assets/img/instagram.png")} alt="" />
                <p className="text-[#9EA0A5]">@rhezaard</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img src={require("../../assets/img/github.png")} alt="" />
                <p className="text-[#9EA0A5]">@MaulanaRhezaArdiansyah</p>
              </div>
            </div>
          </div>
          <ExperiencePortfolio />
        </section>
      </main>
      <Footer />
    </div>
  );
};
