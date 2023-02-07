import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ExperiencePortfolio = () => {
  const userDetail = useSelector((state) => state.users);
  const userDataDetail = userDetail.data;
  const loadingUser = userDetail.loading;
  const errorUser = userDetail.error;
  const dispatch = useDispatch();
  const { userId } = useParams();

  // const dataPortfolio = userDataDetail[0] ? userDataDetail[0].portfolios : "";
  const dataPortfolio = userDataDetail.portfolio;
  console.log(userDataDetail.portfolio);

  return (
    <div className="experience-portfolio w-full bg-white base-rounded h-[160vh] md:h-[150vh] px-5 py-8 flex flex-col gap-y-8">
      <div className="category-navigation flex justify-center items-center md:justify-start gap-x-3">
        <button className="text-[#1F2A36] text-2xl font-bold">Portfolio</button>
        <button className="text-2xl">Pengalaman kerja</button>
      </div>
      <div className="portfolio-row flex flex-col md:flex-row md:flex-wrap gap-6 max-sm:gap-0">
        {dataPortfolio &&
          dataPortfolio.map((p) => {
            return p ? (
              <div
                key={p.portfolio_id}
                className="flex flex-col gap-y-3 w-72 h-64 max-sm:h-52 items-center justify-center"
              >
                <div className="app-image w-full shadow-md h-40 flex justify-center items-center base-rounded">
                  <a href={`${p.link_repo}`}>
                    <img
                      src={
                        p
                          ? `http://localhost:5000/uploads/images/${p.filename}`
                          : ""
                      }
                      alt=""
                      className="w-full h-full base-rounded"
                    />
                  </a>
                </div>
                <p className="text-center text-lg max-sm:hidden">
                  {p.app_name}
                </p>
              </div>
            ) : (
              ""
            );
          })}
        {/* <div className="flex flex-col gap-y-3 w-72 h-64 max-sm:h-52 items-center justify-center">
          <div className="app-image w-full h-40 flex justify-center items-center base-rounded">
            <img
              src={require("../../../assets/img/reminder-app.png")}
              alt=""
              className="w-full h-full base-rounded"
            />
          </div>
          <p className="text-center text-lg max-sm:hidden">Reminder app</p>
        </div>
        <div className="flex flex-col gap-y-3 w-72 h-64 max-sm:h-52 items-center justify-center">
          <div className="app-image w-full h-40 flex justify-center items-center base-rounded">
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
