import React, { useEffect, useState } from "react";
import Display from "../components/show_tray/Display";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const [products, setProducts] = useState<Items[] | null>(null);
  interface Items {
    download_url: string;
    name: string;
  }

  useEffect(() => {
    async function getItems() {
      const url = "https://picsum.photos/v2/list?page=2&limit=6";
      const response = await axios.get<Items[]>(url);
      setProducts(response.data);
    }
    getItems();
  }, []);
  return (
    <>
      <main className="mx-auto w-screen  xl:w-[1300px] px-2  md:px-5">
        <div className="flex flex-col  items-center rounded text-center my-10 py-5 lg:py-10  gap-10 bg-slate-300">
          <div className="px-2 py-2 rounded-[50%] bg-slate-100/60 ">
            <Image
              className="bg-transparent-"
              src="/images/myCart.png"
              alt="cart"
              width={100}
              height={200}
            />
          </div>

          <div className=" flex flex-col md:gap-5">
            <p className=" font-medium md:text-xl">Your cart is empty!</p>
            <p>Browse all furniture and discover our best deals!</p>
          </div>
          <Link
            className=" px-10 py-2 text-center text-white rounded-md hover:opacity-90 active:opacity-80 transition duration-200 bg-slate-700 md:text-xl font-semibold"
            href="/"
          >
            {" "}
            START SHOPPING
          </Link>
        </div>
        {products ? (
          <Display items={products} name="More items" />
        ) : (
          <div>no products</div>
        )}
      </main>
    </>
  );
};

export default Cart;
