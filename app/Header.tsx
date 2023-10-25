import React from "react";
import { useEffect, useState } from "react";
import Loginpage from "./login/login";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className=" w-screen h-28 border-b-gray-800 border ">
      {showModal && <Loginpage hideModal={() => setShowModal(false)} />}
      <div className="   lg:  flex lg:justify-between  ">
        <div className=" visible flex items-baseline justify-center   lg:p-10">
          {" "}
          <p className=" text-3xl  text-gray-500">
            {" "}
            <span>Market</span> ||{" "}
            <span className=" text-xl font-extrabold  text-yellow-700">
              Homepage
            </span>
          </p>{" "}
        </div>
        <div className="sm:hidden lg:block lg:p-10">
          <button
            // onClick={setShowModal(true)}
            onClick={() => {
              setShowModal(true);
            }}
            className="transition ease-in-out hover:transition-colors after:-translate-y-1 hover:ease-in-out hover:delay-150 delay-150 ml-[200px] mt-5 bg-yellow-900 hover:bg-gradient-to-br hover:from-yellow-800 hover:to-yellow-600 w-[200px] h-10 rounded-lg"
          >
            <p className="text-white text-2xl font-extrabold"> Login </p>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
