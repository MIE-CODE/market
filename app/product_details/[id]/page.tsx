"use client";
import React from "react";
import ProductDetails from "./productDetails";
import Header from "@/app/components/Header";
import TopLine from "@/app/components/topLine";
import Footer from "@/app/components/Footer";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <>
      <TopLine />
      <Header />
      <ProductDetails id={id} />
      <Footer />
    </>
  );
};

export default page;
