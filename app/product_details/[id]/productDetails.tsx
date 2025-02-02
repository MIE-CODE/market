"use client";
import Show_tray from "@/app/components/show_tray/show_tray";
import { useStore } from "@/app/context/productsContext";
import { Product } from "@/app/helpers/types";
import React, { useEffect, useState } from "react";
import { FaPhone, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
interface id {
  id: number | string;
}

const ProductDetails: React.FC<id> = ({ id }) => {
  const { state } = useStore();
  const [product, setProduct] = useState<Product | null>(null);

  interface ItemProduct {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }

  useEffect(() => {
    async function getItems() {
      const url = `https://fakestoreapi.com/products/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      setProduct(data);
    }
    getItems();
  }, [id]);

  return (
    <>
      <div className="grid md:flex justify-center  mx-auto  min-w-[200px]  max-w-[1600px] px-2 py-10 gap-2 ">
        <div
          style={{ backgroundImage: `url(${product?.image})` }}
          className="md:w-[60%] shadow-lg shadow-slate-300  hover:opacity-90 transition duration-300  h-[400px] md:h-[600px]   bg-center bg-no-repeat r rounded"
        >
          <div className=""></div>
        </div>
        <div className="md:w-[40%]  bg-slate-200 px-2 py-5 md:border-l-8 border-l-slate-700 shadow-lg shadow-slate-300 md:rounded-e-md">
          <div className=" border-b-2 pb-3">
            <p> {product?.title} </p>
            <p>
              Brand: <span className=" text-[#7741c7]">MIE-funtiture</span> |{" "}
              <span className=" text-[#7741c7]">
                {" "}
                similar products from MIE
              </span>
            </p>
          </div>
          <div className="border-b-2 py-3 flex flex-col gap-2">
            <p className="font-bold text-lg">
              $ {product?.price?.toLocaleString()}{" "}
            </p>
            <p
              className={`${
                product?.title ? "font-semibold" : "bg-[#a29e9e] pl-2"
              } `}
            >
              {" "}
              {product?.title ? "In stock" : "Out of stock"}{" "}
            </p>
            <div className=" flex  items-center gap-5">
              <div className="flex ">
                {[...Array(5)].map((star, index) => {
                  const currenRating = index + 1;

                  return (
                    <div key={index}>
                      <FaStar
                        color={
                          currenRating <= (product?.id || 0)
                            ? "#e07e1b"
                            : "#a29e9e"
                        }
                      />
                    </div>
                  );
                })}
              </div>

              <p className="hover:underline">
                (<span className=" text-[#7741c7]">Verified ratings</span>)
              </p>
            </div>
            <button className="relative   px-10 py-2 text-center text-white rounded-md hover:bg-slate-700 active:bg-slate-600 transition-colors duration-300 ease-in-out bg-slate-600 text-xl font-semibold">
              <span className="absolute left-7 top-[25%]">
                <FaCartShopping size={25} />
              </span>{" "}
              ADD TO CART
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-bold">Promotions</p>
            <div>
              <p className="hover:underline cursor-default flex items-center gap-2">
                <FaPhone /> Call 09137437424 To Order
              </p>
              <p className="hover:underline cursor-default flex items-center gap-2">
                <FaStar /> Enjoy cheaper shipping fees...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
