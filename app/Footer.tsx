import React from "react";

const Footer = () => {
  return (
    <div className="w-screen place-self-end h-[500px] from-gray-600 to-gray-950 bg-gradient-to-b ">
      <div className="p-[30px] pt-32 flex justify-between ">
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
      </div>
      <div className="w-full place-self-end h-[40px] flex justify-center items-center bottom text-white bg-gray-950  ">
        <p>© 2023 M'I'E Projects </p>
      </div>
    </div>
  );
};

export default Footer;
