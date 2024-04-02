import React, { useState, useEffect } from "react";
import Show_case from "./show_case";
import Show_tray from "./show_tray";
import Display from "./Display";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const Tray = () => {
  const [moreproduct, setMoreProducts] = useState<items[] | null>(null);
  interface items {
    id: number;
    name: string;
    image: string;
    title: string;
  }
  useEffect(() => {
    async function getItems() {
      const url = "https://course-api.com/react-store-products";
      const response = await axios.get<items[]>(url);
      setMoreProducts(response.data);
    }

    getItems();
  }, []);
  const [products, setProducts] = useState<ItemProducts[] | null>(null);
  interface ItemProducts {
    id: number;
    name: string;
    download_url: string;
    title: string;
  }
  useEffect(() => {
    async function getItems() {
      const url = "https://picsum.photos/v2/list?page=2&limit=6";
      const response = await axios.get<ItemProducts[]>(url);
      setProducts(response.data);
    }

    getItems();
  }, []);

  return (
    <>
      <Show_case />
      {products ? (
        <Display items={products} name="food" />
      ) : (
        <div>no products</div>
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
      {moreproduct ? <Show_tray items={moreproduct} /> : <div>no items</div>}
    </>
  );
};

export default Tray;
