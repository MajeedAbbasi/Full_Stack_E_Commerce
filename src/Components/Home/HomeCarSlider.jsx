import React, { useState } from "react";
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCarSlider = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="ml-10 w-[94%]"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {" "}
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        navigation={show}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <div
              className={` p-3 bg-white rounded-sm text-center flex  flex-col w-[100px] h-[100px] ${styles.item} cursor-pointer`}
            >
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2024/06/besttablets-2048px-9875.jpg"
                alt=""
              />
            </div>
            <h3 className="text-[15px] font-[500] ">Smart Tablet</h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarSlider;
