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
  const getDetailUser = (id) => {
    // console.log(id);
    navigate(`/profile/talent/${id}`);
  };
  console.log(usersData);
  useEffect(() => {
    dispatch(getDataUsers(`/`));
  }, []);

  if (loadingUsers) {
    return <h1>Loading...</h1>;
  }
  return usersData.map((item) => {
    return (
      <div
        key={item.id}
        className="talent-list talent-list-row border-b-[2px] border-[#F2F3F4] w-full h-[60vh] flex flex-col md:flex-row items-center justify-center gap-y-3 md:px-5"
      >
        <div className="w-full md:w-[20%] flex items-center justify-center md:justify-start  ">
          <img src={require("../../assets/img/harry.png")} alt="" />
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
            getDetailUser(item.id);
          }}
          className="bg-purple px-8 py-3 base-rounded text-white"
        >
          Lihat Profile
        </button>
      </div>
    );
  });
};
