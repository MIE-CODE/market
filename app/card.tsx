import Image from "next/image";
import React from "react";
import Test from "../public/4O4.jpeg";

const card = () => {
  const items = [
    {
      url: "",
      id: "",
      name: "",
      price: "",
      country: "",
      currency: "",
    },
    {
      url: "",
      id: "",
      name: "",
      price: "",
      country: "",
      currency: "",
    },
    {
      url: "",
      id: "",
      name: "",
      price: "",
      country: "",
      currency: "$",
    },
    {
      url: "",
      id: "",
      name: "",
      price: "",
      currency: "₦",
      country: "china",
    },
  ];

  return (
    <main className=" mt-[100px] p-20 grid grid-cols-3 gap-10 items-center justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="border  flex justify-center items-center  rounded-lg w-[400px] h-[500px]"
        >
          <div className=" relative w-[350px] h-[450px] rounded border grid justify-between">
            <div className="border border-gray-950 w-40 h-10 flex justify-center items-center rounded-lg rounded-tl absolute bg-gray-900">
              <p className="text-white">Top Picks</p>
            </div>
            <Image src={Test} alt="pics" className="w-full rounded-md" />
            <p>{item.name}</p>
            <p>
              {" "}
              {item.currency} {item.price}{" "}
            </p>
            <p>
              Made in : <span className=" font-extrabold">{item.country}</span>{" "}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default card;
