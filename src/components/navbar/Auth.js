import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth = ({ setIsLogin }) => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-3">
      <div className="">
        <div className="dropdown dropdown-end z-20">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img src={require("../../assets/img/harry.png")} alt="" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 bg-slate-100 shadow menu menu-compact dropdown-content rounded-box w-52 z-20"
          >
            <li>
              <button
                // onClick={() => navigate("/profile")}
                className="hover:bg-amber-200 justify-between"
              >
                Profile
                <span className="badge bg-purple border-none text-white">
                  New
                </span>
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/home")}
                className="hover:bg-amber-200 justify-between"
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:bg-amber-200"
                onClick={() => {
                  localStorage.removeItem("@userLogin");
                  setIsLogin(false);
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
