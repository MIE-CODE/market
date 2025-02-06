"use client";
import Display from "@/app/components/show_tray/Display";
import { useStore } from "@/app/context/productsContext";
import { Product } from "@/app/helpers/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPhone, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { toast } from "react-toastify";
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
      try {
        const url = `https://dummyjson.com/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
          toast.error("failed to fetch");
          console.log(data.error);
        }
        if (response.ok) {
          setProduct(data);
          console.log(data);
        }
      } catch (error) {
        toast.error("fialed to fetch");
      }
    }
    getItems();
  }, [id]);

  return (
    <div className=" px-2">
      <div className="grid md:flex   mx-auto  min-w-[200px]  max-w-[1600px] py-10 gap-2 ">
        <div className=" flex justify-center items-center w-full md:w-[50%] shadow-lg shadow-slate-300  hover:opacity-90 transition duration-300  h-[400px] overflow-hidden   bg-center bg-no-repeat r rounded">
          <div className="relative w-[400px] h-[400px]">
            <Image
              src={product?.images[0] ?? ""}
              alt={product?.title ?? ""}
              fill
            />
          </div>
        </div>
        <div className="md:w-[50%]  bg-slate-200 px-2 py-5 md:border-l-8 border-l-slate-700 shadow-lg shadow-slate-300 md:rounded-e-md">
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
              &#8358; {(Math.floor(product?.price ?? 0) * 100).toLocaleString()}
            </p>
            <p
              className={`${
                product?.title ? "font-semibold" : "bg-[#a29e9e] pl-2"
              } `}
            >
              {product?.availabilityStatus}
            </p>
            <div className=" flex  items-center gap-5">
              <div className="flex ">
                {[...Array(5)].map((star, index) => {
                  const currenRating = index + 1;

                  return (
                    <div key={index}>
                      <FaStar
                        color={
                          currenRating <= (product?.rating || 0)
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
      <Display name="More Products" slice={0} />
    </div>
  );
};

export default ProductDetails;
