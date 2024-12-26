import React, { useState } from "react";
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import IMG from "../../assets/Images/tablet.jpeg";
const HomeCarSlider = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="ml-24 !w-[86%]"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {" "}
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        modules={[Navigation]}
        className="mySwiper  "
      >
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img src={IMG} alt="" />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarSlider;
