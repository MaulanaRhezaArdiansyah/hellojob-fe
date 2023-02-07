import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";

export const ProfileRecruiter = () => {
  // const userDetail = useSelector((state) => state.users);
  // const userDataDetail = userDetail.data;
  // const loadingUser = userDetail.loading;
  // const errorUser = userDetail.error;
  // const dispatch = useDispatch();
  // const { userId } = useParams();

  // useEffect(() => {
  //   dispatch(getDataUsers(`/${userId}`));
  // }, []);
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();
  console.log(userDataDetail);

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, []);
  return (
    <>
      <Navbar />
      <main className="w-full h-[150vh] md:h-[200vh] pt-40 px-3 flex justify-center bg-base">
        <div className="profile-container w-full md:w-[80%] h-[70%] relative flex flex-col items-center base-rounded shadow-xl">
          <div className="section-purple w-full h-[15%] md:h-[30%] bg-purple rounded-tl-md rounded-tr-md"></div>
          <div className="section-white w-full h-[85%] md:h-[70%] bg-white rounded-bl-md rounded-br-md"></div>
          <div className="profile-content absolute w-full h-full flex flex-col justify-center items-center px-10">
            <div className="h-64 w-full flex flex-col justify-center items-center gap-y-2">
              <div className="user-avatar w-full flex justify-center items-center">
                <img
                  src={
                    userDataDetail.avatar
                      ? `http://localhost:5000/uploads/images/${userDataDetail.avatar}`
                      : ""
                  }
                  alt=""
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h2 className="text-2xl font-extrabold">
                {userDataDetail.perusahaan}
              </h2>
              <h4 className="font-bold">{userDataDetail.bidang_perusahaan}</h4>
              <div className="flex gap-x-2 justify-center items-center">
                <img src={require("../../assets/img/loc.png")} alt="" />
                <p className="text-[#9EA0A5]">{userDataDetail.domisili}</p>
              </div>
            </div>
            <div className="description text-center w-[80%]">
              <p className="text-[#9EA0A5]">
                {userDataDetail ? userDataDetail.description : ""}
              </p>
            </div>
            <button className="bg-purple base-rounded px-3 py-3 w-[60%] md:w-[40%] text-white duration-200 hover:bg-purple-800 mb-5 mt-5">
              Edit profile
            </button>
            <div className="socmed flex flex-col justify-center items-start gap-y-3">
              <div className="flex gap-x-3 justify-center items-center">
                <img src={require("../../assets/img/mail.png")} alt="" />
                <p className="text-[#9EA0A5]">
                  {userDataDetail ? userDataDetail.email : ""}
                </p>
              </div>
              <div className="flex gap-x-3 justify-center items-center">
                <img src={require("../../assets/img/instagram.png")} alt="" />
                <p className="text-[#9EA0A5]">
                  {userDataDetail ? userDataDetail.akun_instagram : ""}
                </p>
              </div>
              <div className="flex gap-x-3 justify-center items-center">
                <img src={require("../../assets/img/phone.png")} alt="" />
                <p className="text-[#9EA0A5]">
                  {userDataDetail ? userDataDetail.phone : ""}
                </p>
              </div>
              <div className="flex gap-x-3 justify-center items-center">
                <img src={require("../../assets/img/linkedin.png")} alt="" />
                <p className="text-[#9EA0A5]">
                  {userDataDetail ? userDataDetail.akun_linkedin : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
