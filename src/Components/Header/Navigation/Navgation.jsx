import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import TemporaryDrawer from "./TemporaryDrawer";
import { IoClose } from "react-icons/io5";

const Navgation = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const opneCategaryPanel = () => {
    setIsOpenPanel(!isOpenPanel);
    console.log(isOpenPanel);
  };

  return (
    <>
      <nav className="py-2 ">
        <div className="container flex items-center justify-end gap-3">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={opneCategaryPanel}
            >
              <RiMenu2Line className="text-[18px]" /> Shop By Categories
              <MdKeyboardArrowDown className="text-[13px] ml-auto font-bold" />
            </Button>
          </div>
          <div className="col_2 w-[60%] ">
            <ul className="flex items-center gap-2 nav">
              <li className="list-none">
                <Link to="/" className=" transition text-[14px]  font-[500]">
                  <Button className="link   !text-[rgba(0,0,0,0.8)] !font-[5 00] hover:!text-[#ff5252] ">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative ">
                <Link
                  to="/fashion"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link  transition !text-[rgba(0,0,0,0.7)]  hover:!text-[#ff5252] ">
                    Fashion
                  </Button>
                </Link>
                <div className="submenu  opacity-1 transition-all absolute top-[120%] left-[0%] min-w-[120px] bg-white shadow-md ">
                  <ul>
                    <li className="list-none w-full ">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full ">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                          Women
                        </Button>{" "}
                      </Link>
                    </li>
                    <li className="list-none w-full ">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none hover:!text-[#ff5252]">
                          Kids
                        </Button>{" "}
                      </Link>
                    </li>
                    <li className="list-none w-full ">
                      <Link to="/" className="w-full">
                        <Button className=" hover:!text-[#ff5252] !text-[rgba(0,0,0,0.7)] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/electronics"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] ">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/bags"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] ">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/footwear"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] ">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/groceries"
                  className="link  transition text-[14px] font-[500]"
                >
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] ">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/beauty"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] ">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/wellness"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button className="link  transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] ">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/jewellery"
                  className="link  transition text-[14px] font-[500]"
                >
                  <Button className="link transition !text-[rgba(0,0,0,0.7)] hover:!text-[#ff5252] ">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 text-[14px] font-[500] w-[20%] flex items-center gap-3 mt-0 mb-0">
            <GoRocket className="text-[18px]" />
            Free International Delievery
          </div>
        </div>
      </nav>
      <TemporaryDrawer
        opneCategaryPanel={opneCategaryPanel}
        isOpenPanel={isOpenPanel}
      />
    </>
  );
};

export default Navgation;
