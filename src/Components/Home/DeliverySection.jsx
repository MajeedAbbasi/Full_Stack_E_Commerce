import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoGiftOutline } from "react-icons/io5";
const DeliverySection = () => {
  return (
    <div className="ml-28 mt-20 flex gap-24 w-[86%]    ">
      <div className="flex flex-col text-center gap-2 DeliverySection">
        <div className="ml-16 mb-2 icon">
          <LiaShippingFastSolid className="w-10 h-10" />
        </div>
        <p className="font-[600] text-[1em]">Free Shipping</p>
        <p className="text-[15px]">For all Orders Over $100</p>
      </div>
      <div className="flex flex-col text-center gap-2  DeliverySection">
        <div className="ml-16 mb-2 icon">
          <FaClockRotateLeft className="w-10 h-10" />
        </div>
        <p className="font-[600] text-[1em]">30 Days Returns</p>
        <p>For an Exchange Product</p>
      </div>
      <div className="flex flex-col text-center gap-2  DeliverySection">
        <div className="ml-16 icon mb-2">
          <MdPayments className="w-10 h-10" />
        </div>
        <p className="font-[600] text-[1em]">Secured Payment</p>
        <p>Payment Cards Accepted</p>
      </div>
      <div className="flex flex-col text-center gap-2  DeliverySection">
        <div className="ml-16 icon mb-2">
          <IoGiftOutline className="w-10 h-10" />
        </div>
        <p className="font-[600] text-[1em]">Special Gifts</p>
        <p>Our First Product Order</p>
      </div>
      <div className="flex flex-col text-center gap-2  DeliverySection">
        <div className="ml-16 icon mb-2">
          <BiSupport className="w-10 h-10" />
        </div>
        <p className="font-[600] text-[1em]">Support 24/7</p>
        <p>Contact us Anytime</p>
      </div>
    </div>
  );
};

export default DeliverySection;
