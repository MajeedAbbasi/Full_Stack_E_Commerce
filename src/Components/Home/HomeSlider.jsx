import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HomeSlide.module.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import BannnerBox from "./BannnerBox";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <div className="container flex homeSwipper">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="homeSwipper !w-[65%] !h-[60%] !ml-14 mt-12 mb-8 rounded-lg"
      >
        <SwiperSlide>
          <div className="">
            <div
              className={`absolute right-2 flex flex-col gap-4 top-24 z-10 w-[400px] h-full `}
            >
              <h1 className={`font-[500] text-left ${styles.animation1}`}>
                Big Saving Days Sale
              </h1>
              <p
                className={`text-left text-[35px] font-[700] ${styles.animation2} delay-75 `}
              >
                Women Solid Round Yellow T-Shirt
              </p>
              <div className={`flex gap-1 ${styles.animation3}`}>
                <p className="font-[400]">Starting At Only</p>
                <p className="font-[800] text-[30px] text-red-500 -mt-2">
                  $59.00
                </p>
              </div>
              <button className="bg-red-500 text-white w-[150px] h-12 rounded-lg -mt-2 text-[17px] hover:bg-red-600 animate__animated animate__fadeInUp delay-75">
                Shop Now
              </button>
            </div>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg"
              className="relative !z-0"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className={`absolute right-2 flex flex-col gap-4 top-24 z-10 w-[400px] h-full `}
            >
              <h1 className={`font-[500] text-left ${styles.animation1}`}>
                Big Saving Days Sale
              </h1>
              <p
                className={`text-left text-[35px] font-[700] ${styles.animation2} delay-75 `}
              >
                Buy Modern Chair In Black Color
              </p>
              <div className={`flex gap-1 -mt-1 ${styles.animation3}`}>
                <p className="text-[20px] font-[400]">Starting At Only</p>
                <p className="font-[800] text-[30px] -mt-2 text-red-500">
                  $99.00
                </p>
              </div>
              <button className="bg-red-500 text-white w-[150px] h-12 rounded-lg -mt-1 text-[17px] hover:bg-red-600 animate__animated animate__fadeInUp delay-75">
                Shop Now
              </button>
            </div>
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-col gap-5 mt-12 mr-[50px] ">
        <div className="text-left   relative group">
          <div className="!w-[300px] !h-[190px] !overflow-hidden rounded-lg  ">
            <div className="absolute !z-10 right-20  top-8 ">
              <p className="font-[700] w-[190px] text-[22px]  -ml-24">
                Samsung Gear VR Camera
              </p>
              <p className="font-[700] relative mb-2 -ml-24 text-[25px] text-[#ff5252]">
                $129.00
              </p>
              <Link to={"/"} className="font-[600] relative  -ml-24 underline">
                Shop Now
              </Link>
            </div>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"
              alt=""
              className="!w-full !h-full transition-transform hover:ease-in duration-[1000ms] !object-fill group-hover:scale-110 relative !z-0"
            />
          </div>
        </div>
        <div className="text-left  relative group">
          <div className="!w-[300px] !h-[190px] !overflow-hidden rounded-lg ">
            <div className="absolute !z-10 -right-3  top-8 ">
              <p className="font-[700] w-[190px] text-[22px]  -ml-24">
                Samsung Gear VR Camera
              </p>
              <p className="font-[700] relative mb-2 -ml-24 text-[25px] text-[#ff5252]">
                $129.00
              </p>
              <Link to={"/"} className="font-[600] relative  -ml-24 underline">
                Shop Now
              </Link>
            </div>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg"
              alt=""
              className="!w-full !h-full transition-transform hover:ease-in duration-[1000ms] !object-fill group-hover:scale-110 relative !z-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
