import React from "react";
import { useEffect, useState } from "react";
import Loginpage from "./login/login";
import Modal from "./modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className=" bg-gray-300 z-40 fixed top-0 left-0 right-0 ">
      {showModal && <Modal hideModal={() => setShowModal(false)} />}
      <div className="   flex justify-between  items-center border-b-gray-800  border ">
        <div className=" flex justify-center   lg:p-10">
          {" "}
          <p className=" text-3xl  text-gray-500">
            {" "}
            <span>Market</span> ||{" "}
            <span className=" text-xl font-extrabold  text-yellow-700">
              Homepage
            </span>
          </p>{" "}
        </div>
        <form action="" className="flex relative">
          <input
            className=" h-12 pl-6 bg-gray-400 placeholder-gray-900 outline-none rounded-lg w-[50rem]"
            placeholder="search for more products here..."
            type="text"
          />
          <svg
            className=" absolute end-5 self-center"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </form>

        <button
          // onClick={setShowModal(true)}
          onClick={() => {
            setShowModal(true);
          }}
          className="  transition ease-in-out hover:transition-colors after:-translate-y-1 hover:ease-in-out hover:delay-150 delay-150 mr-10 bg-yellow-900 hover:bg-gradient-to-br hover:from-yellow-800 hover:to-yellow-600 w-[200px] h-10 rounded-lg"
        >
          <p className="text-white text-2xl font-extrabold"> Login </p>
        </button>
      </div>
    </header>
  );
};

export default Header;
