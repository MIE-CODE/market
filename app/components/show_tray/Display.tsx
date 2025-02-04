import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Product } from "@/app/helpers/types";

const Display = (props: { products: Product[]; name?: string }) => {
  return (
    <>
      <div className="my-10 bg-slate-100 rounded font-Josefin-Sans ">
        <div className="py-3 bg-slate-400/50 rounded-t font-bold text-center text-[1.3rem]">
          {props.name ?? "Products"}
        </div>
        {props.products ? (
          <div className="grid grid-cols-6  h-fit justify-between overflow-hidden items-center gap-5 py-3 px-3">
            {props.products.map((item, index) => (
              <div
                key={index}
                onClick={() => {}}
                className=" h-full    bg-slate-500/10 shadow active:scale-100 cursor-pointer active:shadow-none hover:scale-[1.04] rounded  transition ease-in-out duration-300"
              >
                <div
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  className=" px-20 py-24  relative  bg-center bg-cover transition-all ease-in-out duration-500 rounded"
                ></div>

                <p className="text-center py-2 text-xs md:text-sm  font-extrabold px-1">
                  {item.title}
                </p>
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
    </>
  );
};

export default Display;
