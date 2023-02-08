import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";
import { AddPortfolioForm } from "./components/AddPortfolioForm";
import { AddSkillForm } from "./components/AddSkillForm";
import { AddWorkExpForm } from "./components/AddWorkExpForm";
import { EditBioForm } from "./components/EditBioForm";

export const EditProfileTalent = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <main className="h-[600vh] sm:h-[700vh] lg:h-[600vh] w-full bg-base pt-28 max-sm:pt-16 px-3 flex flex-col gap-y-5  md:gap-x-6 md:flex-row md:px-32 md:pt-40">
        <section className="w-full md:w-[60%] h-[90vh] md:h-[120vh] flex flex-col gap-y-5 sm:mb-10">
          <div className="profile-card shadow-2xl bg-white w-full base-rounded h-[80%] md:h-[150vh] px-5 py-5 flex flex-col gap-y-8">
            <div className="bio flex flex-col gap-y-3">
              <div className=" w-full flex justify-center items-center">
                <img
                  src={
                    userDataDetail.avatar
                      ? `http://localhost:5000/uploads/images/${userDataDetail.avatar}`
                      : ""
                  }
                  alt={userDataDetail.name}
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-[#1F2A36]">
                  {userDataDetail ? userDataDetail.name : ""}
                </h2>
                <p className="text-lg text-[#1F2A36]">
                  {userDataDetail ? userDataDetail.job_desk : ""}
                </p>
                <p className="text-[#9EA0A5]">
                  {userDataDetail ? userDataDetail.job_status : ""}
                </p>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex gap-x-2 items-center">
                  <img src={require("../../assets/img/loc.png")} alt="" />
                  <p className="text-[#9EA0A5]">
                    {userDataDetail ? userDataDetail.domisili : ""}
                  </p>
                </div>
                <div className="flex gap-x-2 items-center">
                  <img src={require("../../assets/img/phone.png")} alt="" />
                  <p className="text-[#9EA0A5]">
                    {userDataDetail ? userDataDetail.phone : ""}
                  </p>
                </div>
                <p className="text-[#9EA0A5] pt-2">
                  {userDataDetail ? userDataDetail.description : ""}
                </p>
              </div>
            </div>
          </div>
          <button className="bg-purple text-white base-rounded py-5 border-[1px] border-[#5E50A1] hover:bg-transparent hover:text-purple duration-200">
            Ubah Password
          </button>
          <button
            onClick={() => navigate("/home")}
            className="bg-transparent text-purple base-rounded py-5 border-[1px] border-[#5E50A1] hover:bg-purple hover:text-white duration-200"
          >
            Kembali
          </button>
        </section>
        <section className="w-full h-[450vh] sm:h-[500vh] md:h-[500vh] flex flex-col gap-y-5">
          <EditBioForm />
          <AddSkillForm />
          <AddWorkExpForm />
          <AddPortfolioForm />
        </section>
      </main>
      <Footer />
    </>
  );
};
