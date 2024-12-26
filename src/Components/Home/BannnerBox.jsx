import React from "react";
import { Link } from "react-router-dom";

const BannnerBox = ({ IMG, Title, Price }) => {
  return (
    <div className="!w-full !h-full !overflow-hidden rounded-lg group">
      <img
        src={IMG}
        alt=""
        className="!w-full !h-full transition-transform hover:ease-in duration-[1000ms] !object-fill group-hover:scale-110 relative !z-0"
      />
      <div className="absolute !z-10 -right-6  top-10">
        <h1 className="font-[700] w-[190px] text-[22px] text-left">{Title}</h1>
        <p className="font-[700] relative mb-2 -ml-28 text-[20px] text-[#ff5252]">
          {Price}
        </p>
        <Link to={"/"} className="font-[600] relative  -ml-24 underline">
          Shop Now
        </Link>
      </div>
    </div>
  );
};
export default BannnerBox;
