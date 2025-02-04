import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaChevronDown, FaPlus, FaUser } from "react-icons/fa";
import { FaCartShopping, FaCircleQuestion } from "react-icons/fa6";
import classnames from "classnames";
import { useAuthContext } from "../../context/AuthContext";

function NavBar() {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const { dispatch } = useAuthContext();
  return (
    <div className="flex gap-2 lg:gap-5 xl:gap-10  ">
      <div
        onClick={() => setDropDown(!dropDown)}
        className="relative text-[8px] cursor-pointer text-slate-800 hover:text-slate-700 md:text-lg flex gap-[2px] md:gap-3 items-center  transition duration-200"
      >
        <FaUser />
        Account
        <FaChevronDown
          className={classnames("transition-all duration-300", {
            "rotate-180": dropDown,
          })}
        />
        <div
          onClick={(e) => {
            e.stopPropagation();
            dispatch({ type: "LOGOUT" });
          }}
          className={classnames(
            "absolute top-[100%] bg-slate-200 shadow-slate-300 shadow-sm rounded-sm w-full p-2 x transition-all duration-300",
            { "opacity-0 invisible": !dropDown, "mt-5": dropDown }
          )}
        >
          <button className="px-5 py-2 w-full rounded text-base  hover:bg-slate-100 active:bg-transparent transition-colors duration-300">
            Log Out
          </button>
        </div>
      </div>
      <div className="text-[8px] hover:text-slate-700 text-slate-800 cursor-pointer md:text-lg flex gap-[2px] md:gap-3 items-center hover:opacity-70 transition duration-200">
        <FaCircleQuestion />
        Help
        <FaChevronDown />
      </div>
      <Link
        className="text-[8px] hover:text-slate-700 text-slate-800 md:text-lg flex gap-[2px] md:gap-3 items-center hover:opacity-70 transition duration-200"
        href={"/create"}
      >
        <FaPlus />
        Create
      </Link>
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
