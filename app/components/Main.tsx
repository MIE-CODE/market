import React, { useEffect } from "react";

import ScrollToTopButton from "./ScrollUp";
import About from "./About";

import Tray from "./show_tray/tray";
import { useStore } from "../context/productsContext";

const Main = () => {
  const { state, dispatch } = useStore();
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        dispatch({ type: "SET_PRODUCTS", payload: data });
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, [dispatch]);
  return (
    <main className=" min-h-screen ">
      <div className="max-w-[1184px] mx-auto mt-5 md:mt-10  px-2 ">
        <Tray products={state.products} />
        <About />
      </div>
      <ScrollToTopButton />
    </main>
  );
};

export default Main;
