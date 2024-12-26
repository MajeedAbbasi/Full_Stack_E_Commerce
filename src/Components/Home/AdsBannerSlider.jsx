import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannnerBox from "./BannnerBox";
import IMG1 from "../../assets/Images/BannerImg/banner1.jpg";
import IMG2 from "../../assets/Images/BannerImg/banner2.jpeg";
import IMG3 from "../../assets/Images/BannerImg/banner3.jpeg";
const AdsBannerSlider = () => {
  return (
    <div className="py-5 w-[91%] h-[250px] ml-16">
      <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
        <SwiperSlide className="  ">
          <BannnerBox
            IMG="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg"
            Title={"S22 Samsung Smartphone"}
            Price={"$250.00"}
          />
        </SwiperSlide>
        <SwiperSlide className=" ">
          <BannnerBox
            IMG="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg"
            Title={" Armchair Mad  By Shopstic"}
            Price={"$190.00"}
          />
        </SwiperSlide>

        <SwiperSlide className=" ">
          <BannnerBox
            IMG="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg"
            Title={"Noice Wireless Headphone"}
            Price={"$129.00"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
