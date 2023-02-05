import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const Portfolio = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  const dataPortfolio = userDataDetail[0] ? userDataDetail[0].portfolios : "";
  return (
    <div className="experience-portfolio bg-red-400 w-full base-rounded h-[160vh] px-5 py-5 flex flex-col gap-y-8">
      <div className="category-navigation flex gap-x-3">
        <button className="text-[#1F2A36] text-2xl font-bold">Portfolio</button>
        <button className="text-2xl">Pengalaman kerja</button>
      </div>
      <div className="portfolio-row flex flex-col gap-8">
        {dataPortfolio &&
          dataPortfolio.map((p) => {
            return p ? (
              <div key={p.portfolio_id} className="flex flex-col gap-y-3">
                <div className="app-image w-full h-[30vh] bg-yellow-400 flex justify-center items-center base-rounded">
                  <img
                    //   src={require("../../../assets/img/reminder-app.png")}
                    src={
                      p
                        ? `http://localhost:5000/uploads/images/${p.filename}`
                        : ""
                    }
                    alt=""
                    className="w-full h-full base-rounded"
                  />
                </div>
                <p className="text-center text-lg max-sm:hidden">
                  {p.app_name}
                </p>
              </div>
            ) : (
              ""
            );
          })}
        {/* <div className="flex flex-col gap-y-3">
          <div className="app-image w-full h-[30vh] bg-yellow-400 flex justify-center items-center base-rounded">
            <img
              src={require("../../../assets/img/reminder-app.png")}
              alt=""
              className="w-full h-full base-rounded"
            />
          </div>
          <p className="text-center text-lg max-sm:hidden">Reminder app</p>
        </div> */}
        {/* <div className="flex flex-col gap-y-3">
          <div className="app-image w-full h-[30vh] bg-yellow-400 flex justify-center items-center base-rounded">
            <img
              src={require("../../../assets/img/reminder-app.png")}
              alt=""
              className="w-full h-full base-rounded"
            />
          </div>
          <p className="text-center text-lg max-sm:hidden">Reminder app</p>
        </div> */}
      </div>
    </div>
  );
};
