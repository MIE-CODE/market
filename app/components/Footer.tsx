import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState(0);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setDate(year);
  }, []);
  return (
    <div className="w-full sm:w-full place-self-end bg-slate-300 ">
      <div className="p-10  flex justify-center gap-5 md:gap-28">
        <div className="">
          <Link href="/">
            <Image
              className="w-28"
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="grid md:flex gap-[200px] ">
          <div className="grid gap-7">
            <p className="w-fit border-b-4 border-slate-900 text-lg">Company</p>
            <div className="grid gap-5">
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                How we operate
              </Link>
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                Our courses
              </Link>
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                Upcoming programs
              </Link>
            </div>
          </div>
          <div className="grid gap-7">
            <p className="w-fit border-b-4 border-slate-900 text-lg">
              Contact Us
            </p>
            <div className="grid gap-5">
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                How we operate
              </Link>
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                Our courses
              </Link>
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                Upcoming programs
              </Link>
            </div>
          </div>
          <div className="grid gap-7">
            <p className="w-fit border-b-4 border-slate-900 text-lg">
              Follow Up
            </p>
            <div className="grid gap-5">
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                How we operate
              </Link>
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                Our courses
              </Link>
              <Link
                className="hover:text-slate-500 transition duration-200"
                href="#"
              >
                Upcoming programs
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] flex justify-center items-center text-white bg-gray-500  ">
        <p>© {date ? date : ""} MI-TECH. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
