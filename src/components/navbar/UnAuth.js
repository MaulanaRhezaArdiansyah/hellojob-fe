import React from "react";
import { Link } from "react-router-dom";

export const UnAuth = () => {
  return (
    <div className="flex gap-x-3">
      <Link to="/optionlogin">
        <button className="bg-white text-purple border-[2px] border-[#5E50A1] px-5 py-3 base-rounded">
          Masuk
        </button>
      </Link>
      <Link to="/optionregister">
        <button className="bg-purple border-[2px] border-[#5E50A1] text-white px-5 py-3 base-rounded">
          Daftar
        </button>
      </Link>
    </div>
  );
};
