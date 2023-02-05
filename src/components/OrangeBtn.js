import React from "react";

export const OrangeBtn = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full bg-orange text-white py-5 base-rounded font-bold"
    >
      {text}
    </button>
  );
};
