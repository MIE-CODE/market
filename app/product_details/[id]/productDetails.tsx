import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPhone, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
interface id {
  id: number | string;
}

const ProductDetails: React.FC<id> = ({ id }) => {
  const [product, setProduct] = useState<ItemProducts | null>();

  interface ItemProducts {
    id: number;
    name: string;
    images: image[];
    price: string;
    description: string;
    stock: string;
    reviews: number;
    stars: number;
  }
  interface image {
    url: string;
  }
  useEffect(() => {
    async function getItems() {
      const url = `https://course-api.com/react-store-single-product?id=${id}`;
      const response = await axios.get<ItemProducts>(url);
      setProduct(response.data);
    }
    getItems();
  }, [id]);

  return (
    <div className="grid md:flex justify-center  mx-auto  min-w-[200px]  max-w-[1600px] px-2 py-10 gap-2 ">
      <div
        style={{ backgroundImage: `url(${product?.images[0].url})` }}
        className="md:w-[60%]  hover:opacity-90 transition duration-300  h-[400px] md:h-[600px]   bg-center bg-no-repeat bg-cover rounded"
      >
        <div className=""></div>
      </div>
      <div className="md:w-[40%]  bg-slate-200 px-2 py-5 md:border-l-8 border-l-slate-700">
        <div className=" border-b-2 pb-3">
          <p> {product?.name} </p>
          <p>
            Brand: <span className=" text-[#7741c7]">MIE-funtiture</span> |{" "}
            <span className=" text-[#7741c7]"> similar products from MIE</span>
          </p>
        </div>
        <div className="border-b-2 py-3 flex flex-col gap-2">
          <p className="font-bold text-lg">
            $ {product?.price?.toLocaleString()}{" "}
          </p>
          <p
            className={`${
              product?.stock ? "font-semibold" : "bg-[#a29e9e] pl-2"
            } `}
          >
            {" "}
            {product?.stock ? "In stock" : "Out of stock"}{" "}
          </p>
          <div className=" flex  items-center gap-5">
            <div className="flex ">
              {[...Array(5)].map((star, index) => {
                const currenRating = index + 1;

                return (
                  <div key={index}>
                    <FaStar
                      color={
                        currenRating <= (product?.stars || 0)
                          ? "#e07e1b"
                          : "#a29e9e"
                      }
                    />
                  </div>
                );
              })}
            </div>

            <p className="hover:underline">
              (
              <span className=" text-[#7741c7]">
                {product?.reviews} Verified ratings
              </span>
              )
            </p>
          </div>
          <button className="relative px-10 py-2 text-center text-white rounded-md hover:opacity-90 active:opacity-95 transition duration-200 bg-slate-700 text-xl font-semibold">
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
  );
};

export default ProductDetails;
