import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { IoClose } from "react-icons/io5";
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function TemporaryDrawer({ isOpenPanel, opneCategaryPanel }) {
  const [submenueIndex, setSubmenueIndex] = useState(null);
  const [innerSubmenue, setInnerSubmenue] = useState(null);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="CategaryPanel">
      <h3 className="p-3 flex items-center justify-between text-[16px] font-[500]">
        Shop By Categories
        <IoClose onClick={opneCategaryPanel} className="cursor-pointer" />
      </h3>
      <div>
        <ul className=" w-full">
          <li className="list-none  items-center relative !justify-between ">
            <Link to={"/fashion"}>
              <Button className="!w-full !text-left !justify-between !pl-[10px]  !text-[rgba(0,0,0,0.8)]">
                Fashoin
                {submenueIndex === null ? (
                  <IoIosArrowForward
                    className="items-center !mr-1"
                    onClick={() => {
                      setSubmenueIndex(1);
                    }}
                  />
                ) : (
                  <IoIosArrowDown
                    className="items-center !mr-1"
                    onClick={() => {
                      setSubmenueIndex(null);
                    }}
                  />
                )}
              </Button>
            </Link>

            {submenueIndex === 1 && (
              <ul className="w-full ">
                <li className="list-none  items-center relative !justify-between ">
                  <Link to={"/apparel"}>
                    <Button className="!w-full !text-left !justify-between !pl-[20px]  !text-[rgba(0,0,0,0.8)]">
                      Apparel
                      {innerSubmenue === null ? (
                        <IoIosArrowForward
                          className="items-center !mr-1"
                          onClick={() => {
                            setInnerSubmenue(1);
                          }}
                        />
                      ) : (
                        <IoIosArrowDown
                          className="items-center !mr-1"
                          onClick={() => {
                            setInnerSubmenue(null);
                          }}
                        />
                      )}
                    </Button>
                  </Link>
                  {innerSubmenue === 1 && (
                    <ul className="w-full absolute left-0 pl-3 ">
                      <li className="list-none  items-center relative !justify-between ">
                        <Link to={"/apparel"}>
                          <Button className=" !w-full !text-left !justify-between !pl-[20px]  !text-[rgba(0,0,0,0.8)]">
                            Smart Table
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none  items-center relative !justify-between ">
                        <Link to={"/apparel"}>
                          <Button className="  !w-full !text-left !justify-between !pl-[20px]  !text-[rgba(0,0,0,0.8)]">
                            Crepe T-Shirt
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none  items-center relative !justify-between ">
                        <Link to={"/apparel"}>
                          <Button className="  !w-full !text-left !justify-between !pl-[20px]  !text-[rgba(0,0,0,0.8)]">
                            Leather Watch
                          </Button>
                        </Link>
                      </li>
                      <li className="list-none  items-center relative !justify-between ">
                        <Link to={"/apparel"}>
                          <Button className=" !w-full !text-left !justify-between !pl-[20px]  !text-[rgba(0,0,0,0.8)]">
                            Rolling Diamond
                          </Button>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpenPanel} onClose={opneCategaryPanel}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
