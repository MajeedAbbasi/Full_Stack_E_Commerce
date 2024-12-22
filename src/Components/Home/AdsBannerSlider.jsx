import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const AdsBannerSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
