import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { MdZoomOutMap } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import styles from "./HomeSlide.module.css";
const ProductItem = () => {
  return (
    <div className="ProductItem rounded-md overflow-hidden bg-[rgb(241,241,241)]  ">
      <div className="imgWrapper w-[100%] h-[230px] overflow-hidden  ">
        <div
          className={`absolute   right-5 top-10 !z-10  flex-col items-center justify-center !gap-3  indicate hidden ${styles.animation1}`}
        >
          <div className="bg-white w-11 h-11  rounded-[50px]  flex items-center justify-center hover:bg-[#ff5252] hover:text-white cursor-pointer ">
            <MdZoomOutMap className="h-6 w-6 " />
          </div>
          <div className="bg-white w-11 h-11  rounded-[50px]  flex items-center justify-center hover:bg-[#ff5252] hover:text-white cursor-pointer ">
            <IoIosGitCompare className="h-6 w-6 " />
          </div>
          <div className="bg-white w-10 h-10 rounded-[50px]  flex items-center justify-center hover:bg-[#ff5252] hover:text-white cursor-pointer">
            <CiHeart className="h-7 w-7 " />
          </div>
        </div>
        <div className="w-full h-full relative !z-0 group">
          <Link
            to={
              "https://api.spicezgold.com/download/file_1734526678422_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-0-202404101341.webp"
            }
            target="blank"
          >
            <img
              src="https://api.spicezgold.com/download/file_1734526678422_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-0-202404101341.webp"
              alt="image not found"
              className="absolute transition-all duration-[1s] opacity-1 hover:opacity-0"
            />
            <img
              src="https://api.spicezgold.com/download/file_1734526678424_tazo-mens-round-neck-colourblocked-full-sleeve-dryfit-gymwear-tshirt-product-images-rvzwdw4nio-1-202404101341.jpg"
              alt="image not found"
              className="transition-transform  duration-[200ms] group-hover:scale-110"
            />
          </Link>
        </div>
      </div>
      <div className="info pt-3 ml-2">
        <h6 className="text-[14px] text-left">
          <Link to={"/"} className="link transition-all">
            Sylent
          </Link>
        </h6>
        <h3 className="text-[16px] mt-2 font-[500] text-left text-[black]">
          <Link to={"/"} className="link transition-all ">
            Serial Georgette Pink colo
          </Link>
        </h3>
        <p className="text-left">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
        </p>
        <div className="flex gap-3 ">
          <p className="line-through oldprice text-[rgba(0,0,0,0.5)]">$200</p>
          <p className=" newprice text-primary font-[700]">$180</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
