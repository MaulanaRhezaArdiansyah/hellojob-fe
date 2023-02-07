import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { getDataUsers } from "../../redux/actions/users";

export const Hire = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, []);
  console.log(userDataDetail);

  const dataSkill = userDataDetail.skills ? userDataDetail.skills : "";

  const resDataSkill = dataSkill
    ? dataSkill.map((s) => {
        return s;
      })
    : "";
  return (
    <>
      <Navbar />
      <main className="w-full bg-base h-[300vh] md:h-[200vh] pt-28 px-3 flex flex-col md:flex-row md:px-32 gap-16">
        <div className="profile-card bg-white w-full md:w-[60%] base-rounded h-[130vh] px-5 py-5 flex flex-col gap-y-8">
          <div className="bio flex flex-col gap-y-3 ">
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
        </div>
        <section className="w-full flex flex-col h-[130vh] gap-y-6 p-4">
          <div className="flex flex-col gap-y-5 pb-8">
            <h2 className="text-4xl">
              Hubungi{" "}
              <span className="font-bold">
                {userDataDetail ? userDataDetail.name : ""}
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label for="">Tujuan tentang pesan ini</label>
            <input
              type="text"
              placeholder="Project"
              className="p-5 base-rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label for="">Pesan</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Deskripsikan/jelaskan lebih detail"
              className="p-5 base-rounded"
            ></textarea>
          </div>
          <button className="bg-orange py-5 base-rounded text-white font-bold">
            Kirim
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};
