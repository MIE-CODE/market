import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { FaArrowDown, FaChevronDown, FaUser } from "react-icons/fa";
import { FaCartShopping, FaCircleQuestion } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="flex gap-2 lg:gap-5 xl:gap-10  ">
      <div className="text-[8px] cursor-pointer text-slate-800 hover:text-slate-700 md:text-lg flex gap-[2px] md:gap-3 items-center hover:opacity-70 transition duration-200">
        <FaUser />
        Account
        <FaChevronDown />
      </div>
      <div className="text-[8px] hover:text-slate-700 text-slate-800 cursor-pointer md:text-lg flex gap-[2px] md:gap-3 items-center hover:opacity-70 transition duration-200">
        <FaCircleQuestion />
        Help
        <FaChevronDown />
      </div>
      <Link
        className="text-[8px] hover:text-slate-700 text-slate-800 md:text-lg flex gap-[2px] md:gap-3 items-center hover:opacity-70 transition duration-200"
        href={"/cart"}
      >
        <FaCartShopping />
        Cart
      </Link>
    </div>
  );
}

export default NavBar;
