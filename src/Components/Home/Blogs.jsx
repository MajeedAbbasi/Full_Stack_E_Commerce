import React from "react";
import { CiClock2 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";

const Blogs = () => {
  return (
    <div>
      <div className=" ">
        <h1 className="text-[25px] ml-32 mt-10 font-[500]">From The Blogs</h1>
        <div className="flex gap-10 ml-32">
          <div className="w-[350px] h-[430px]  mt-4 group Blogs ">
            <div className="w-[350px] h-[220px] group overflow-hidden pic relative z-0 rounded-lg">
              <div className="absolute z-10 top-[35%] right-[30%]">
                <div className="icons hidden text-white">
                  <div className="border-2 border-white h-[50px] w-[60px] flex items-center justify-center hover:bg-[#ff5252] hover:border-[#ff5252] icon">
                    <FaSearch />
                  </div>
                  <div className="border-2 border-white h-[50px] w-[60px] flex items-center justify-center hover:bg-[#ff5252] hover:border-[#ff5252] icon">
                    <MdOutlineCompareArrows />
                  </div>
                </div>
              </div>
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg"
                alt=""
                className="transition-transform  duration-[2s] group-hover:scale-150 bg-red-500 !overflow-hidden relative rounded-md"
              />
            </div>
            <div className="flex text-[#ff5252] mt-5 font-[500] ml-3">
              <CiClock2 className="mt-1" />
              <h1 className="ml-1">3 APRIL, 2023</h1>
            </div>
            <p className="text-[17px] mt-2 font-[600] ml-3">
              Get paid for your hard work
            </p>

            <p className="mt-3 ml-3">
              Lorem ipsum dolor sit amet Get paid for your hard elit...
            </p>
            <button className="font-[700] mt-2 text-[15px] underline text-[#ff5252] ml-3 ">
              READ MORE
            </button>
          </div>
          <div className="w-[350px] h-[430px]  mt-4 group Blogs ">
            <div className="w-[350px] h-[220px] group overflow-hidden pic relative z-0 rounded-md">
              <div className="absolute z-10 top-[35%] right-[30%]">
                <div className="icons hidden text-white">
                  <div className="border-2 border-white h-[50px] w-[60px] flex items-center justify-center hover:bg-[#ff5252] hover:border-[#ff5252] icon">
                    <FaSearch />
                  </div>
                  <div className="border-2 border-white h-[50px] w-[60px] flex items-center justify-center hover:bg-[#ff5252] hover:border-[#ff5252] icon">
                    <MdOutlineCompareArrows />
                  </div>
                </div>
              </div>
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/6/1105_813/b-blog-4.jpg"
                alt=""
                className="transition-transform  duration-[2s] group-hover:scale-150 bg-red-500 !overflow-hidden relative "
              />
            </div>
            <div className="flex text-[#ff5252] mt-5 font-[500] ml-3">
              <CiClock2 className="mt-1" />
              <h1 className="ml-1">3 APRIL, 2023</h1>
            </div>
            <p className="text-[17px] mt-2 font-[600] ml-3">
              Get paid for your hard work
            </p>

            <p className="mt-3 ml-3">
              Lorem ipsum dolor sit amet Get paid for your hard elit...
            </p>
            <button className="font-[700] mt-2 text-[15px] underline text-[#ff5252] ml-3 ">
              READ MORE
            </button>
          </div>
          <div className="w-[350px] h-[430px]  mt-4 group Blogs ">
            <div className="w-[350px] h-[220px] group overflow-hidden pic relative z-0 rounded-md">
              <div className="absolute z-10 top-[35%] right-[30%]">
                <div className="icons hidden text-white">
                  <div className="border-2 border-white h-[50px] w-[60px] flex items-center justify-center hover:bg-[#ff5252] hover:border-[#ff5252] icon">
                    <FaSearch />
                  </div>
                  <div className="border-2 border-white h-[50px] w-[60px] flex items-center justify-center hover:bg-[#ff5252] hover:border-[#ff5252] icon">
                    <MdOutlineCompareArrows />
                  </div>
                </div>
              </div>
              <img
                src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/6/1105_813/b-blog-4.jpg"
                alt=""
                className="transition-transform  duration-[2s] group-hover:scale-150 bg-red-500 !overflow-hidden relative "
              />
            </div>
            <div className="flex text-[#ff5252] mt-5 font-[500] ml-3">
              <CiClock2 className="mt-1" />
              <h1 className="ml-1">3 APRIL, 2023</h1>
            </div>
            <p className="text-[17px] mt-2 font-[600] ml-3">
              Get paid for your hard work
            </p>

            <p className="mt-3 ml-3">
              Lorem ipsum dolor sit amet Get paid for your hard elit...
            </p>
            <button className="font-[700] mt-2 text-[15px] underline text-[#ff5252] ml-3 ">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
