"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import NavBar from "./navBar";

const Header = () => {
  const search = () => {
    console.log("tried to search ");
  };

  return (
    <header className=" bg-[#514644]  sticky top-0 z-50 font-Dm-mono">
      <div className="bg-slate-100 py-5     ">
        <div className=" flex justify-between items-center px-1 max-w-[1184px] mx-auto gap-3   ">
          {" "}
          <div>
            <Link href={"/"}>
              <Image
                className=" min-h-[10px] "
                src="/images/logo.png"
                alt="Preview Image"
                width={100}
                height={20}
              />
            </Link>
          </div>
          <div className="flex items-center gap-0   md:w-[400px]">
            <input
              className="rounded-l-md text-sm h-5 w-[90%] md:w-[80%] pl-2 lg:pl-5 md:h-10 lg:placeholder:text-xl border border-[#efc8b1] border-r-transparent outline-none shadow-md shadow-slate-300 "
              type="text"
              placeholder="search..."
              required
            />
            <button className="bg-slate-700 rounded-r-md h-5 md:h-10 w-[20%] flex items-center justify-center shadow-md shadow-slate-300 hover:opacity-95 active:opacity-80 transition ease-in-out duration-200 ">
              <IconContext.Provider
                value={{
                  className: "react-icons fill-blue-200  h-[5px] md:h-[10px] ",
                }}
              >
                <FaSearch />
              </IconContext.Provider>
            </button>
          </div>
          <div>
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
