import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="homeSlider py-5 px-5 ml-[70px] w-[90vw]">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={1000}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="SliderHome rounded-3xl"
        >
          <SwiperSlide className="item rounded-3xl overflow-hidden ">
            <img
              src="https://img.lazcdn.com/us/domino/04cf4c50-cc87-4b15-a090-179896f2ff9c_PK-1976-688.jpg_2200x2200q80.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="item rounded-3xl overflow-hidden">
            <img
              src="https://img.lazcdn.com/us/domino/64d1219c-d68f-44f6-ad95-600845f6f157_PK-1976-688.jpg_2200x2200q80.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="item rounded-3xl overflow-hidden">
            <img
              src="https://img.lazcdn.com/us/domino/cd4a97e0-0f50-4dc5-9b0a-b16ecf316edc_PK-1976-688.jpg_2200x2200q80.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="item rounded-3xl overflow-hidden">
            <img
              src="https://img.lazcdn.com/us/domino/88bacf7e-7d71-4fcd-9e82-c8f2945088d5_PK-1976-688.jpg_2200x2200q80.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
