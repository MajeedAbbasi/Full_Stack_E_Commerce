import React from "react";
import { Link } from "react-router-dom";
import IMG from "../../assets/Images/logo.png";
import Search from "../Search/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FaRegHeart } from "react-icons/fa6";
import { BiGitCompare } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";
import Navgation from "./Navigation/Navgation";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  return (
    <header className="bg-white  border-gray-200 border-b-[1px] ">
      <div className="top-strip py-2 border-t-[1px] border-gray-200 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex justify-center gap-3">
                <li className="list-none">
                  <Link
                    to="help-center"
                    className=" link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tarcking"
                    className="link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header border-gray-200 border-b-[1px]">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src={IMG} />
            </Link>
          </div>
          <div className="col1 w-[45%]">
            <Search />
          </div>
          <div className="col1 w-[30%] flex items-center pl-7">
            <ul className="flex items-center gap-3 justify-end w-full">
              <li className="list-none">
                <Link
                  to={"/login"}
                  className="link transition text-[15px] font-[500]"
                >
                  Login&nbsp;
                </Link>
                /&nbsp;
                <Link
                  to={"/register"}
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare" className="">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <BiGitCompare />
                    </StyledBadge>
                  </IconButton>{" "}
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wish List">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>{" "}
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={1} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>{" "}
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navgation />
    </header>
  );
};

export default Header;
