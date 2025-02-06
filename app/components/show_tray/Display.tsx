import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Product } from "@/app/helpers/types";
import Image from "next/image";
import { useStore } from "@/app/context/productsContext";
import { useGetProducts } from "@/app/hooks/useGetProducts";
import Link from "next/link";

const Display = (props: { name?: string; slice?: number }) => {
  const { state } = useStore();
  const { getProducts } = useGetProducts();
  useEffect(() => {
    const loadProducts = async () => {
      await getProducts();
    };
    loadProducts();
  }, [getProducts]);

  const grouped = (state.products ?? []).reduce(
    (acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    },
    {} as Record<string, Product[]>
  );
  return state.products ? (
    <>
      {Object.entries(grouped)
        .slice(props.slice ?? 0)
        .map(([category, products]) => (
          <div
            key={category}
            className="my-10 bg-slate-100 rounded font-Josefin-Sans "
          >
            <div className="py-3 bg-slate-400/50 rounded-t font-bold text-center text-[1.3rem]">
              {props.name ?? category}
            </div>
            {products ? (
              <div className="grid md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5   md:justify-between  gap-5 py-3 px-3">
                {products.map((item, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[200px] mx-auto bg-slate-500/10 shadow py-2 cursor-pointer rounded  transition ease-in-out duration-300"
                  >
                    <div className="px-2">
                      <p>
                        &#8358;{" "}
                        {(Math.floor(item.price) * 100).toLocaleString()}
                      </p>
                    </div>
                    <div className="relative h-[150px] w-full">
                      <Image
                        alt={item.title}
                        fill
                        sizes="100vw"
                        loading="lazy"
                        src={item.images?.[0] ?? "/icon/icons8-google.svg"}
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <p className="text-center py-2 text-xs md:text-sm  font-extrabold px-1">
                        {item.title.length >= 15
                          ? item.title.slice(0, 15).concat("...")
                          : item.title}
                      </p>
                      <Link
                        href={"/product_details/" + item.id}
                        className=" shadow-md shadow-black/10 rounded-md font-bold text-slate-700 bg-slate-400   active:shadow-none  py-1 px-11 transition-shadow duration-300"
                      >
                        Buy
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex px-3 py-3  gap-8 justify-between ">
                <Skeleton width={200} height={270} />
                <Skeleton width={200} height={270} />
                <Skeleton width={200} height={270} />
                <Skeleton width={200} height={270} />
                <Skeleton width={200} height={270} />
              </div>
            )}
          </div>
        ))}
    </>
  ) : (
    <p>loading..</p>
  );
};

export default Display;
