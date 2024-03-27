"use client";
import React from "react";
import ProductDetails from "./productDetails";
import Header from "@/app/components/Header";
import TopLine from "@/app/components/topLine";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  console.log(params);
  return (
    <>
      <TopLine />
      <Header />
      <ProductDetails id={id} /> - {params.id}
    </>
  );
};

export default page;
