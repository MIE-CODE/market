import React, { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(0);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setDate(year);
  }, []);
  return (
    <div className="w-full sm:w-full place-self-end from-gray-600 to-gray-950 bg-gradient-to-b ">
      {/* <div className="p-[30px] pt-32 flex justify-between ">
        <div className="">
          {" "}
          <p className=" text-3xl  text-gray-500">
            {" "}
            <span>Market</span> ||{" "}
            <span className=" text-xl font-extrabold  text-yellow-700">
              Homepage
            </span>
          </p>{" "}
        </div>
        <div className="flex gap-[200px] text-white">
          <ul className="flex flex-col gap-2 ">
            <label htmlFor="" className=" font-extrabold text-3xl ">
              Social Media
            </label>
            <li className="mt-10 flex gap-3">
              <p>- </p>
              <a href="#" className=" hover:underline">
                {" "}
                Instgram
              </a>
            </li>
            <li className=" flex gap-3">
              <p>- </p>
              <a href="#" className=" hover:underline">
                {" "}
                Twitter
              </a>
            </li>
            <li className=" flex gap-3">
              <p>- </p>{" "}
              <a href="#" className=" hover:underline">
                {" "}
                Facebook
              </a>
            </li>
          </ul>
          <ul>
            <label htmlFor="#" className=" font-extrabold text-3xl ">
              Services
            </label>
            <li className="mt-10 flex gap-3">
              <p>- </p>{" "}
              <a href="#" className=" hover:underline">
                {" "}
                dfgc
              </a>
            </li>
            <li className=" flex gap-3">
              <p>- </p>{" "}
              <a href="#" className=" hover:underline">
                {" "}
                dfgc
              </a>
            </li>
          </ul>
          <ul>
            <label htmlFor="#" className=" font-extrabold text-3xl ">
              Links
            </label>
            <li className="mt-10 flex gap-3">
              <p>- </p>{" "}
              <a href="#" className=" hover:underline">
                {" "}
                dfgc
              </a>
            </li>
            <li className=" flex gap-3 ">
              <p>- </p>{" "}
              <a href="#" className=" hover:underline">
                {" "}
                dfgc
              </a>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="w-full mt-[130px] h-[40px] flex justify-center items-center text-white bg-gray-950  ">
        <p>© {date ? date : ""} MI-TECH. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
