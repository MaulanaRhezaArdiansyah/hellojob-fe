import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDataUsers } from "../../../redux/actions/users";

export const PaginationBar = () => {
  const [page, setPage] = useState(1);
  const [refetchPage, setRefetchPage] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataUsers(`?page=${page}`));
  });
  return (
    <section className="pagination w-full px-3 md:px-32 h-[30vh]">
      <div className="pagination-container h-full w-full flex justify-center items-center gap-x-5">
        <button className="border-[1px] border-[#DDDDDE] w-16 h-16 flex items-center justify-center base-rounded bg-white">
          {" "}
          🔙{" "}
        </button>
        <button
          onClick={() => {
            setRefetchPage(true);
            setPage(1);
          }}
          className="border-[1px] border-[#DDDDDE] w-16 h-16 flex items-center justify-center base-rounded bg-white"
        >
          {" "}
          1{" "}
        </button>
        <button
          onClick={() => {
            setRefetchPage(true);
            setPage(2);
          }}
          className="border-[1px] border-[#DDDDDE] w-16 h-16 flex items-center justify-center base-rounded bg-white"
        >
          {" "}
          2{" "}
        </button>
        <button
          onClick={() => {
            setRefetchPage(true);
            setPage(3);
          }}
          className="border-[1px] border-[#DDDDDE] w-16 h-16 flex items-center justify-center base-rounded bg-white"
        >
          {" "}
          3{" "}
        </button>
        <button
          onClick={() => {
            setRefetchPage(true);
            setPage(4);
          }}
          className="border-[1px] border-[#DDDDDE] w-16 h-16 flex items-center justify-center base-rounded bg-white"
        >
          {" "}
          4{" "}
        </button>
        <button className="border-[1px] border-[#DDDDDE] w-16 h-16 flex items-center justify-center base-rounded bg-white">
          {" "}
          🔜{" "}
        </button>
      </div>
    </section>
  );
};
