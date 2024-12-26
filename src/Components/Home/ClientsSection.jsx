import React from "react";
import styles from "./HomeSlide.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const ClientsSection = () => {
  return (
    <div className="container !mt-8  ">
      <h1 className="text-[25px] ml-20 font-[500]">What Our Clients Say</h1>
      <div className="ml-20 mt-6 w-[90%] ProductsSlider ">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className=""
        >
          <SwiperSlide>
            <div className="flex mt-4 -ml-5 h-![300px]">
              <div className=" container border-2 rounded-md !w-[350px] flex flex-col p-4 text-gray-500">
                <div className="flex mb-5 ">
                  <img
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/user1.jpg"
                    alt="img"
                    className="!rounded-full !h-[80px] !w-[80px]"
                  />
                  <div className="mt-3 ml-3">
                    <h1 className="text-[20px] text-black font-[600]">
                      Majeed Abbasi
                    </h1>
                    <h1 className="text-left">Manager</h1>
                  </div>
                </div>
                <div>
                  <p className="ml-3 text-[15px] text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    pariatur esse debitis, beatae recusandae et eveniet dolor
                    temporibus Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ad pariatur esse debitis, beatae
                    recusandae et eveniet dolor temporibus
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex mt-4 -ml-5 h-![300px]">
              <div className=" container border-2 rounded-md !w-[350px]  flex flex-col p-4 text-gray-500">
                <div className="flex mb-5 ">
                  <img
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/user1.jpg"
                    alt="img"
                    className="!rounded-full !h-[80px] !w-[80px]"
                  />
                  <div className="mt-3 ml-3">
                    <h1 className="text-[20px] text-black font-[600]">
                      Majeed Abbasi
                    </h1>
                    <h1 className="text-left">Manager</h1>
                  </div>
                </div>
                <div>
                  <p className="ml-3 text-[15px] text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    pariatur esse debitis, beatae recusandae et eveniet dolor
                    temporibus Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ad pariatur esse debitis, beatae
                    recusandae et eveniet dolor temporibus
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex mt-4 -ml-5 h-![300px]">
              <div className=" container border-2 rounded-md !w-[350px]  flex flex-col p-4 text-gray-500">
                <div className="flex mb-5 ">
                  <img
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/user1.jpg"
                    alt="img"
                    className="!rounded-full !h-[80px] !w-[80px]"
                  />
                  <div className="mt-3 ml-3">
                    <h1 className="text-[20px] text-black font-[600]">
                      Majeed Abbasi
                    </h1>
                    <h1 className="text-left">Manager</h1>
                  </div>
                </div>
                <div>
                  <p className="ml-3 text-[15px] text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    pariatur esse debitis, beatae recusandae et eveniet dolor
                    temporibus Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ad pariatur esse debitis, beatae
                    recusandae et eveniet dolor temporibus
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsSection;
