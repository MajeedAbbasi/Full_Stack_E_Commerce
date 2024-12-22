import { Button } from "@mui/material";
import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] py-2 relative rounded-[5px]">
      <input
        type="text"
        placeholder="Search for Products..."
        className="w-full h-[35px] focus:outline-none bg-inherit pl-5 placeholder-[#443c3c]"
      />
      <Button className="!absolute top-[8px] right-[5px] z-50  !w-[37px] !min-w-[37px] h-[37px] !rounded-full !text-black">
        <IoSearch className="w-8 h-8 text-black" />
      </Button>
    </div>
  );
};

export default Search;
