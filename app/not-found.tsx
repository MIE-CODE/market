import React from "react";
import image from "../public/4O4.jpeg";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
const notFound = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center items-center w-[100%] h-[100vh]  bg-gradient-to-b  from-gray-300 to-gray-900 ">
        <Image
          className=" bg-gradient-to-b  from-gray-300 to-gray-900  rounded-tr-none  rounded-bl-none rounded-3xl"
          src={image}
          alt="404"
        />
        <Link href={`/`}>
          <button className="mt-10 bg-teal-950  rounded-xl text-base text-blue-50 w-[200px] h-8 ">
            Go back
          </button>
        </Link>
      </main>
    </>
  );
};

export default notFound;
