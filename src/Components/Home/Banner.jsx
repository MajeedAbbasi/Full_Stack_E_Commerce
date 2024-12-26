import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ IMG, name, title }) => {
  return (
    <div className="!w-full !h-full !overflow-hidden text-left rounded-lg group">
      <img
        src={IMG}
        alt=""
        className="!w-full !h-full transition-transform hover:ease-in duration-[1000ms] !object-fill group-hover:scale-110 relative !z-0"
      />
      <div className="absolute !z-10 text-left w-full  ml-8 top-4 flex flex-col gap-4">
        <h1 className="font-[400]  text-[18px]  text-left ">{title}</h1>
        <p className="font-[700] relative mb-2  text-left text-[30px] w-[300px] ">
          {name}
        </p>
        <Link to={"/"} className="font-[600] relative text-left  ">
          <button className="bg-red-500 text-white w-[150px] h-12 rounded-lg -mt-4 text-[17px]">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
