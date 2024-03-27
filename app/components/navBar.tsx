import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { FaArrowDown, FaChevronDown, FaUser } from "react-icons/fa";
import { FaCartShopping, FaCircleQuestion } from "react-icons/fa6";

function NavBar() {
  return (
    <div className="flex gap-2 lg:gap-5 xl:gap-10  ">
      <Link
        className="text-[8px] md:text-lg flex gap-[2px] md:gap-3 items-center hover:opacity-70 transition duration-200"
        href={"#"}
      >
        <span>
          <IconContext.Provider
            value={{ className: "react-icons fill-stone-600   brands" }}
          >
            <FaUser />
          </IconContext.Provider>
        </span>
        Account
        <IconContext.Provider
          value={{ className: "react-icons fill-stone-600   brands" }}
        >
          <FaChevronDown />
        </IconContext.Provider>
      </Link>
      <Link
        className="text-[8px] md:text-lg flex gap-[2px] md:gap-3 items-center hover:opacity-70 transition duration-200"
        href={"#"}
      >
        <span>
          <IconContext.Provider
            value={{ className: "react-icons fill-stone-600   brands" }}
          >
            <FaCircleQuestion />
          </IconContext.Provider>
        </span>
        Help
        <IconContext.Provider
          value={{ className: "react-icons fill-stone-600   brands" }}
        >
          <FaChevronDown />
        </IconContext.Provider>
      </Link>
      <Link
        className="text-[8px] md:text-lg flex gap-[2px] md:gap-3 items-center hover:opacity-70 transition duration-200"
        href={"#"}
      >
        <span>
          <IconContext.Provider
            value={{ className: "react-icons fill-stone-600  brands" }}
          >
            <FaCartShopping />
          </IconContext.Provider>
        </span>
        Cart
      </Link>
    </div>
  );
}

export default NavBar;
