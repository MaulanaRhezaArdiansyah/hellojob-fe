import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataUsers } from "../../../redux/actions/users";

export const AddSkillForm = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();
  const dataSkillArray = userDataDetail.skills;

  const [skill, setSkill] = useState({
    skill_name: "",
  });
  //   const [refetchSkill, setRefetchSkill] = useState(false);
  const [validate, setValidate] = useState({
    error: false,
    message: "",
  });
  const handleAddSkill = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:5000/api/v1/addSkill/${userId}`,
      data: skill,
    })
      .then((result) => {
        alert(result.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
        // setValidate({ error: true, message: err.response.data.message });
      });
  };

  useEffect(() => {
    dispatch(getDataUsers(`/${userId}`));
  }, []);
  return (
    <form
      onSubmit={handleAddSkill}
      className="skill shadow-2xl w-full h-[15%] bg-white base-rounded p-5 flex flex-col gap-y-4"
    >
      <div className="border-b-[1px] border-[#C4C4C4] w-full pb-3 mb-3">
        <h3 className="text-2xl font-bold text-[#1F2A36]">Skill</h3>
      </div>
      <div className="input-skill flex justify-between w-full gap-x-1 ">
        <input
          onChange={(e) => {
            setSkill({
              ...skill,
              skill_name: e.target.value,
            });
          }}
          type="text"
          placeholder="Tambah skill"
          className="py-5 px-3 w-[70%] border-[1px] border-[#E2E5ED] focus:outline-none base-rounded"
        />
        <button
          //   onClick={() => {
          //     setRefetchSkill(true);
          //   }}
          type="submit"
          className="bg-orange w-[30%] text-white py-5 px-6 base-rounded border-[1px] border-[#fbb017] hover:bg-transparent hover:text-orange duration-200"
        >
          Simpan
        </button>
      </div>
      <div className="result-skill-row flex flex-wrap gap-2">
        {dataSkillArray
          ? dataSkillArray.map((sk) => {
              return (
                <div
                  key={sk.skill_id}
                  className="skill-box flex p-2 bg-orange base-rounded justify-between w-40"
                >
                  <p className="text-white">{sk.skill_name}</p>
                  <div className="flex items-center justify-center gap-x-3">
                    <img
                      src={require("../../../assets/img/edit.png")}
                      alt=""
                      className="border-[1px] border-white base-rounded p-1"
                    />
                    <img
                      src={require("../../../assets/img/delete.png")}
                      alt=""
                      className="border-[1px] border-white base-rounded p-1"
                    />
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      {/* {validate.error ? (
        <p className="text-red-500 italic">{validate.message}</p>
      ) : (
        ""
      )} */}
    </form>
  );
};
