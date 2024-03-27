import Link from "next/link";

import React from "react";
import { createContext, useContext, useState } from "react";
import Loginpage from "../login/login";

const modal = (props: { hideModal(): void }) => {
  return (
    <main className="fixed  inset-0  backdrop-blur-sm flex justify-center items-center">
      <div className="flex  ">
        <div className=" flex  items-center bg-gradient-to-br from-slate-300 to-slate-500 flex-col  shadow-2xl border-[10px]   border-teal-950 w-[800px] h-[800px] rounded-xl ">
          <div className="flex justify-center">
            <div className="flex items-baseline justify-center  relative p-10">
              {" "}
              <p className=" text-3xl  text-gray-500">
                {" "}
                <span>Market</span> ||{" "}
                <span className=" text-xl font-extrabold  text-yellow-700">
                  login
                </span>
              </p>{" "}
              <button
                onClick={props.hideModal}
                className=" fixed ml-[700px] flex justify-center items-center hover:-translate-y-1 rounded-[100%] boder-1 bg-slate-700 w-10 h-10 hover:text-white   text-black visible font-extrabold text-3xl"
              >
                <p> x</p>
              </button>
            </div>
          </div>

          <Loginpage />
        </div>
      </div>
    </main>
  );
};

export default modal;
