import React from "react";

export const Reviews = () => {
  const dataCardRev = [
    {
      avatar: "harry.png",
      name: "Harry Styles",
      job_desk: "Web Developer",
      reviews:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor",
    },
  ];
  return (
    <section className="flex flex-col gap-y-10 w-full h-[70vh] md:h-[100vh] pt-14">
      <h2 className="text-3xl md:text-4xl text-utama font-bold text-center">
        Their opinion about peworld
      </h2>
      <div className="row-card w-full flex items-center justify-center gap-x-6">
        {dataCardRev.map(({ avatar, name, job_desk, reviews }) => {
          return (
            <div className="card bg-white w-72 h-96 base-rounded flex flex-col items-center px-2 py-4 gap-y-3">
              <div className="flex items-center justify-center">
                <img
                  src={`http://localhost:3000/images/${avatar}`}
                  alt=""
                  className="rounded-full border-[4px] border-[#FBB0175E]"
                />
              </div>
              <h4 className="text-2xl text-utama">{name}</h4>
              <p className="text-[#9EA0A5]">{job_desk}</p>
              <p className="text-[#46505C] px-10 text-center">{reviews}</p>
            </div>
          );
        })}
        {/* <div className="card max-sm:hidden bg-white w-72 h-96 base-rounded flex flex-col items-center px-2 py-4 gap-y-3">
          <div className="flex items-center justify-center">
            <img
              src={require("../../../assets/img/harry.png")}
              alt=""
              className="rounded-full border-[4px] border-[#FBB0175E]"
            />
          </div>
          <h4 className="text-2xl text-utama">Harry Styles</h4>
          <p className="text-[#9EA0A5]">Web Developer</p>
          <p className="text-[#46505C] px-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div>
        <div className="card max-sm:hidden bg-white w-72 h-96 base-rounded flex flex-col items-center px-2 py-4 gap-y-3">
          <div className="flex items-center justify-center">
            <img
              src={require("../../../assets/img/harry.png")}
              alt=""
              className="rounded-full border-[4px] border-[#FBB0175E]"
            />
          </div>
          <h4 className="text-2xl text-utama">Harry Styles</h4>
          <p className="text-[#9EA0A5]">Web Developer</p>
          <p className="text-[#46505C] px-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
        </div> */}
      </div>
    </section>
  );
};
