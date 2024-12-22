import React from "react";
import HomeSlider from "../../Components/Home/HomeSlider";
import HomeCarSlider from "../../Components/Home/HomeCarSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../Components/Home/AdsBannerSlider";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeCarSlider />
      <section className="py-5 mt-6 bg-white">
        <div className="container">
          <div className="freeShipping w-full p-4 border-2 border-[#f45252] flex items-center justify-between rounded-md ">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Felivery Now On Your First Order and over $200
              </p>
            </div>
            <p className="font-bold text-[25px]"> - Only $200</p>
          </div>
          <AdsBannerSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;
