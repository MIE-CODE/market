"use client";
import React from "react";
import Header from "../components/Header";
import Cart from "./Cart";
import Footer from "../components/Footer";
import TopLine from "../components/topLine";

const page = () => {
  return (
    <>
      <TopLine />
      <Header />
      <Cart />
      <Footer />
    </>
  );
};

export default page;
