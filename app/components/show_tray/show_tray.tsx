import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IconContext } from "react-icons";
import { ArrowProps } from "react-multi-carousel/lib/types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

//interface
interface CustomLeftArrowProps extends ArrowProps {}
interface CustomRightArrowProps extends ArrowProps {}
//End interface
interface Item {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
interface Product {
  items: Item[];
}

const Show_tray: React.FC<Product> = ({ items }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 786 },
      items: 6,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 786, min: 464 },
      items: 6,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
    return (
      <button
        className=" bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.8)] transition-colors ease-in-out duration-500 w-[43px] h-[43px] rounded-[50%] absolute flex justify-center items-center end-0"
        onClick={onClick}
      >
        <IconContext.Provider value={{ className: "fill-white" }}>
          <FaChevronRight />
        </IconContext.Provider>
      </button>
    );
  };
  const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
      <button
        className=" bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.8)] transition-colors ease-in-out duration-500 w-[43px] h-[43px] rounded-[50%] absolute flex justify-center items-center "
        onClick={onClick}
      >
        <IconContext.Provider value={{ className: "fill-white " }}>
          <FaChevronLeft />
        </IconContext.Provider>
      </button>
    );
  };

  return (
    <div className="flex items-center my-5 justify-center  bg-slate-100 rounded-md font-Josefin-Sans ">
      <div className=" w-[1140px] overflow-hidden   ">
        {items ? (
          <Carousel
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            itemClass="py-5 px-2"
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="min-w-[60px] bg-slate-500/10  rounded-md  lg:hover:scale-[1.04] transition ease-in-out duration-300"
              >
                <Link href={`/product_details/${item.id}`}>
                  <Image
                    className="w-[100%] h-[100px] scale-100  md:h-[200px] rounded-t-md"
                    src={item.image}
                    loading="lazy"
                    width={200}
                    height={300}
                    alt={item.title}
                  />

                  <p className=" text-center py-3 text-xs md:text-sm  font-extrabold  ">
                    {(item.title.length >= 10 &&
                      item.title.slice(0, 10).concat("...")) || <Skeleton />}
                  </p>
                </Link>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="flex  my-3 gap-8 justify-center w-full">
            <Skeleton width={200} height={250} />
            <Skeleton width={200} height={250} />
            <Skeleton width={200} height={250} />
            <Skeleton width={200} height={250} />
            <Skeleton width={200} height={250} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Show_tray;
