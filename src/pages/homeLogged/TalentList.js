import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDataUsers } from "../../redux/actions/users";

export const TalentList = () => {
  const users = useSelector((state) => state.users);
  const usersData = users.data;
  const loadingUsers = users.loading;
  const errorUsers = users.error;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getDataUsers(`/`));
  }, []);
  if (loadingUsers) {
    return <h1>Loading...</h1>;
  }
  if (errorUsers) {
    return <h1>Error...</h1>;
  }
  return (
    <div className="talent-container bg-white w-full h-full base-rounded">
      {usersData.map((item) => {
        return (
          <div
            key={item.id}
            className="talent-list talent-list-row border-b-[2px] border-[#F2F3F4] w-full h-[60vh] flex flex-col md:flex-row items-center justify-center gap-y-3 md:px-5  gap-x-3"
          >
            <div className=" w-full md:w-[20%] md:h-[50%] flex items-center justify-center md:justify-center  ">
              <img
                src={
                  item.avatar
                    ? `http://localhost:5000/uploads/images/${item.avatar}`
                    : ""
                }
                alt=""
                className="w-32 h-32 rounded-full"
              />
            </div>
            <div className=" md:w-[60%] flex flex-col gap-y-3">
              <p className="text-2xl text-utama font-bold text-center md:text-left">
                {item.name}
              </p>
              <p className="text-center md:text-left">
                {item.job_desk} - {item.job_status}
              </p>
              <div className="flex items-center gap-x-2 self-center md:self-start">
                <img src={require("../../assets/img/loc.png")} alt="" />
                <p>{item.domisili}</p>
              </div>
              <div className="flex w-full gap-3 flex-wrap justify-center md:justify-start">
                {item.skills.map((index) => {
                  return index ? (
                    <p
                      key={index.skill_id}
                      className="bg-[#FBB017] text-white px-8 py-2 border-[1px] border-[#b87a00] base-rounded"
                    >
                      {index.skill_name}
                    </p>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
            <button
              onClick={(id) => {
                if (item.role === "pekerja") {
                  navigate(`/profile/talent/${item.id}`);
                } else {
                  navigate(`/profile/recruiter/${item.id}`);
                }
              }}
              className="bg-purple px-8 py-3 base-rounded text-white border-[1px] border-[#5E50A1] hover:bg-transparent hover:text-purple duration-200"
            >
              Lihat Profile
            </button>
          </div>
        );
      })}
    </div>
  );
};
