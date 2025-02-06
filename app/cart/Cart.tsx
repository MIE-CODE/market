import React, { useEffect, useState } from "react";
import Display from "../components/show_tray/Display";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import { useGetProducts } from "../hooks/useGetProducts";
import { useStore } from "../context/productsContext";

const Cart = () => {
  const [items, setItems] = useState<Items[] | null>(null);
  const { state } = useStore();
  const [isLoading, setLoading] = useState(true);
  const [summary, setSummary] = useState<number>();

  interface Items {
    id: string;
    title: string;
    price: number;
    img: string;
    amount: number;
  }
  interface Prod {
    download_url: string;
    name: string;
  }
  useEffect(() => {
    async function getItems() {
      try {
        setLoading(true);
        const url = "https://course-api.com/react-useReducer-cart-project";
        const response = await axios.get<Items[]>(url);
        setItems(response.data);
      } catch (error) {
        // do nothing
      } finally {
        setLoading(false);
      }
    }
    getItems();
  }, []);
  console.log(summary);

  useEffect(() => {
    const total = items?.reduce((acc, curr) => acc + curr.price, 0);
    setSummary(total);
  }, [items]);
  const itms = [...Array(4)];

  const { getProducts } = useGetProducts();
  useEffect(() => {
    const loadProducts = async () => {
      await getProducts();
    };
    loadProducts();
  }, [getProducts]);

  return isLoading ? (
    <main className="mx-auto w-screen  xl:w-[1300px] px-2  md:px-5 text-xs md:text-base ">
      <div className="flex flex-col px-3 md:px-10  rounded my-10     bg-slate-300 shadow-xl shadow-slate-200">
        <div className=" py-4 ">
          <p className="font-extrabold text-slate-700 text-base md:text-xl">
            Cart ({items?.length})
          </p>
        </div>
        {itms?.map((item, index) => {
          return (
            <div
              className="flex flex-col gap-3  border-t border-gray-200/50 py-2"
              key={index}
            >
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <Skeleton />
                  <div>
                    <p> </p>
                    <p>seller</p>
                    <p className="w-10 h-10">
                      <Skeleton width={200} height={250} />
                    </p>
                  </div>
                </div>
                <div>
                  <p>₦ {item?.price?.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button className="flex  justify-center text-center  items-center  gap-1  text-[crimson] font-bold hover:bg-[crimson]/30 active:bg-[crimson]/50 rounded px-2 py-1 transition duration-300 ease-in-out ">
                  <FaTrashCan /> REMOVE
                </button>
                <div className="flex gap-2 items-center justify-between ">
                  <button className="bg-slate-600 px-2  rounded shadow-md shadow-slate-400 text-slate-200 font-semibold py-2">
                    <FaMinus />
                  </button>
                  <p>1</p>
                  <button className="bg-slate-600 px-2  rounded shadow-md shadow-slate-400 text-slate-200 font-semibold  py-2">
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  ) : (
    <>
      <main className="mx-auto w-screen  xl:w-[1300px] px-2  md:px-5 text-xs md:text-base ">
        {items ? (
          <div className="flex flex-col px-3 md:px-10  rounded my-10     bg-slate-300 shadow-xl shadow-slate-200">
            <div className=" py-4 ">
              <p className="font-extrabold text-slate-900 text-base md:text-xl">
                Cart ({items?.length})
              </p>
            </div>
            {items?.map((item, index) => {
              return (
                <div
                  className="flex flex-col gap-3  border-t border-gray-200/50 py-2"
                  key={index}
                >
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <Image
                        className="w-14 h-14  md:w-24 md:h-24"
                        src={item.img}
                        alt="item-image"
                        width={1000}
                        height={500}
                      />
                      <div>
                        <p> {item.title} </p>
                        <p>seller</p>
                        <p
                          className={`text-[10px] md:text-sm ${
                            item.amount ? "text-slate-500" : "text-[crimson]"
                          }`}
                        >
                          {item.amount ? "in stock" : "out of stock"}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>₦ {item?.price?.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="flex  justify-center text-center  items-center  gap-1  text-[crimson] font-bold hover:bg-[crimson]/30 active:bg-[crimson]/50 rounded px-2 py-1 transition duration-300 ease-in-out ">
                      <FaTrashCan /> REMOVE
                    </button>
                    <div className="flex gap-2 items-center justify-between ">
                      <button className="bg-slate-600 px-2  rounded shadow-md shadow-slate-400 text-slate-200 font-semibold py-2">
                        <FaMinus />
                      </button>
                      <p>1</p>
                      <button className="bg-slate-600 px-2  rounded shadow-md shadow-slate-400 text-slate-200 font-semibold  py-2">
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <p className="py-5  font-extrabold border-t border-gray-200/50  text-slate-900">
                CART SUMMARY
              </p>
              <div className="flex  justify-between items-center  py-3">
                <p className="font-bold">Subtotal : ₦ {summary} </p>

                <button className="text-center bg-slate-600 active:bg-slate-800 hover:bg-slate-700 px-2  rounded shadow-md shadow-slate-400 text-slate-200 font-semibold  py-2 transition duration-200 ease-in-out">
                  CHECKOUT (₦ {summary})
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col  items-center rounded text-center my-10 py-5 lg:py-10  gap-10 bg-slate-300 shadow-lg shadow-slate-400">
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
              className="  active:scale-95  px-10 py-2 text-center text-white rounded-md hover:opacity-90 active:opacity-80 transition duration-200 bg-slate-700 md:text-xl font-semibold"
              href="/"
            >
              {" "}
              START SHOPPING
            </Link>
          </div>
        )}

        {state.products ? <Display /> : <div>no products</div>}
      </main>
    </>
  );
};

export default Cart;
