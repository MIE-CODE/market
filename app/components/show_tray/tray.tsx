import React, { useState, useEffect } from "react";
import Show_case from "./show_case";
import Show_tray from "./show_tray";
import Display from "./Display";
import Skeleton from "react-loading-skeleton";
import { Product } from "@/app/helpers/types";
import { toast } from "react-toastify";

const Tray = (props: { products?: Product[] }) => {
  const [moreproduct, setMoreProducts] = useState<items[] | null>(null);
  interface items {
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
        const url = "https://fakestoreapi.com/products";
        const response = await fetch(url);
        const data = await response.json();
        setMoreProducts(data);
      } catch (error) {
        toast.error(error as string);
      }
    }

    getItems();
  }, []);
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    async function getItems() {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        return;
      }
      const data = await response.json();
      setProducts(data);
    }

    getItems();
  }, []);

  return (
    <>
      <Show_case />

      {moreproduct ? (
        <Show_tray items={moreproduct} />
      ) : (
        <div className="flex  my-3 gap-8 justify-center w-full">
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
        </div>
      )}
      {products ? (
        <Display />
      ) : (
        <div className="flex  my-3 gap-8 justify-center w-full">
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
        </div>
      )}

      {moreproduct ? (
        <Show_tray items={moreproduct} />
      ) : (
        <div className="flex  my-3 gap-8 justify-center w-full">
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
          <Skeleton width={200} height={250} />
        </div>
      )}
    </>
  );
};

export default Tray;
