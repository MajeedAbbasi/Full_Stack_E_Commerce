import React from "react";
import HomeSlider from "../../Components/Home/HomeSlider";
import HomeCarSlider from "../../Components/Home/HomeCarSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../Components/Home/AdsBannerSlider";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../Components/Home/ProductsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Banner from "../../Components/Home/Banner";
import Industry from "../../Components/Home/Industry";
import ClientsSection from "../../Components/Home/ClientsSection";
import Blogs from "../../Components/Home/Blogs";
import DeliverySection from "../../Components/Home/DeliverySection";
const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <HomeSlider />
      <HomeCarSlider />

      <section className="bg-white py-5 mt-10">
        <div className="container">
          <AdsBannerSlider items={3} />
        </div>
        <div className="container">
          <div className="flex items-center mt-6 justify-between">
            <div className="leftSec w-[60%] ml-16">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                So don't miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-full ">
              <Box
                sx={{
                  flexGrow: 1,
                  maxWidth: { xs: 480, sm: 720 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  aria-label="visible arrows tabs example"
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      "&.Mui-disabled": { opacity: 0.3 },
                    },
                  }}
                >
                  <Tab label="Fastion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="FootWear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Jwellery" />
                </Tabs>
              </Box>
            </div>
          </div>
        </div>
        <ProductsSlider item={5} />
        <div className="w-[86%] ml-24 mt-10">
          <Swiper slidesPerView={2} spaceBetween={30} className="mySwiper">
            <SwiperSlide className=" !h-56 ">
              <Banner
                IMG={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-4.jpg"
                }
                title={"Save Up To 20% Off"}
                name={"Santa Lucia Three Seater Sofa"}
              />
            </SwiperSlide>
            <SwiperSlide className=" !h-56 ">
              <Banner
                IMG={
                  "https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-5.jpg"
                }
                title={"Best Online Discount"}
                name={"Woman In Red Crew Neck T-shirt"}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="group  w-[86%]  flex items-center justify-between m-10 ml-24 overflow-hidden rounded-md">
          <div className=" relative">
            <div className="absolute flex  text-white justify-center items-center gap-8 left-[32%] mt-4 !z-10">
              <p className="text-[40px] font-[700]">Watch</p>
              <div className="flex flex-col">
                <p>M6 Smart Band 2.3 – Fitness Band</p>
                <p>Men’s and Women’s Health Tracking, Red Strap</p>
              </div>
            </div>
            <img
              src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/offer-banner.jpg"
              alt=""
              className=" transition-transform  duration-[1s] group-hover:scale-110 !z-0"
            />
          </div>
        </div>
        <div className="container">
          <div className="freeShipping w-[91%] ml-14 p-5 border-2 border-[#f45252] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>
            <p className="font-bold text-[25px]"> - Only $200</p>
          </div>
        </div>
        <div className="container !mt-10 !pb-3 ">
          <div className="flex items-center ml-14 justify-between ">
            <div className="leftSec w-full ">
              <h2 className="text-[20px] font-[600]">Featured Products</h2>
              <p className="text-[14px] font-[400]">
                So don't miss the current offers until the end of March.
              </p>
            </div>
          </div>
        </div>
        <ProductsSlider item={5} />
        <Industry />
        <ClientsSection />
        <Blogs />
        <DeliverySection />
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
