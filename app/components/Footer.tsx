import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk,
  FaMap,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa6";

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
        <div className="hidden lg:block">
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
        <div className="grid gap-10 md:flex md:gap-[100px]  lg:gap-[150px] ">
          <div className="flex flex-col  gap-5 md:gap-7">
            <p className="w-fit border-b-4 border-slate-900 text-lg">Company</p>
            <div className="grid gap-2 md:gap-5">
              <Link
                className="hover:text-slate-500 whitespace-nowrap transition duration-200"
                href="#"
              >
                How we operate
              </Link>
              <Link
                className="hover:text-slate-500 whitespace-nowrap transition duration-200"
                href="#"
              >
                Our courses
              </Link>
              <Link
                className="hover:text-slate-500 whitespace-nowrap transition duration-200"
                href="#"
              >
                Upcoming programs
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-7">
            <p className="w-fit border-b-4 border-slate-900 text-lg">
              Contact Us
            </p>
            <div className="grid md:gap-2 gap-5">
              <Link
                className="flex items-center gap-2 hover:text-slate-500 transition duration-200"
                href="#"
              >
                <FaPhoneAlt /> 09137437424
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-slate-500 transition duration-200"
                href="#"
              >
                <FaMapMarkerAlt /> lugbe,Abuja,Nigeria
              </Link>
              <Link
                className="flex items-center gap-2 hover:text-slate-500 transition duration-200"
                href="mailto:israelvictor126@gmail.com"
              >
                <FaMailBulk /> israelvictor126@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="w-fit border-b-4 border-slate-900 text-lg">
              Follow Up
            </p>
            <div className="flex text-2xl gap-5 text-slate-800">
              <Link
                className="hover:text-slate-600 transition duration-150 ease-in-out"
                href="#"
              >
                <FaFacebook />
              </Link>
              <Link
                className="hover:text-slate-600 transition duration-150 ease-in-out"
                href="#"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="hover:text-slate-600 transition duration-150 ease-in-out"
                href="#"
              >
                <FaInstagramSquare />
              </Link>
              <Link
                className="hover:text-slate-600 transition duration-150 ease-in-out"
                href="#"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40px] flex justify-center items-center text-white bg-gray-700  ">
        <p>© {date ? date : ""} MI-TECH. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
