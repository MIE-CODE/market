import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";

const Show_case = () => {
  const [items, setItems] = useState<items[] | null>(null);
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
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }

    getItems();
  }, []);
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    if (!items) return;
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? items.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = index === items!.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };
  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  return (
    <>
      <main className="flex justify-center  py-10 gap-5 h-[300px] md:h-[500px] lg:h-[600px]">
        <div
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1034427464/photo/usb-charging-cables-for-smartphone-and-tablet.jpg?b=1&s=612x612&w=0&k=20&c=zfRDTmIv51sx5pZAV-JcQGzHqWWDgmJKYM45m-fUWlg=')`,
          }}
          className="w-[25%]  bg-slate-400 rounded bg-center bg-cover bg-no-repeat"
        />
        <div className="flex justify-center items-center w-[50%] bg-slate-500  rounded-md">
          {items ? (
            <div className="w-full h-full rounded-md relative ">
              <div key={index} className="w-full h-full ">
                <div
                  style={{ backgroundImage: `url(${items[index].image})` }}
                  className="flex justify-center w-full h-full relative  bg-center bg-cover  transition-all ease-in-out duration-500 rounded"
                ></div>
                {/*left arrow */}
                <div className="flex justify-center  items-center absolute group top-[50%] -translate-x-0  translate-y-[-50%] left-0 w-[20%] h-[90%] ">
                  <div
                    onClick={prevSlide}
                    className="hidden group-hover:block active:bg-slate-500/60 bg-black/60  text-white  cursor-pointer rounded-full p-2 transition ease-in-out duration-300"
                  >
                    <BsChevronLeft size={20} />
                  </div>
                </div>

                {/*right arrow */}
                <div className="flex justify-center items-center  absolute group top-[50%] -translate-x-0  translate-y-[-50%] right-0  w-[20%] h-[90%] ">
                  <div
                    onClick={nextSlide}
                    className="hidden group-hover:block active:bg-slate-500/60 bg-black/60 text-white  cursor-pointer rounded-full p-2 transition ease-in-out duration-300"
                  >
                    <BsChevronRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Skeleton />
          )}
        </div>
        <div className="flex flex-col justify-between w-[25%]">
          <div
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/7986994/pexels-photo-7986994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
            className="w-full first-letter: h-[47.50%] bg-slate-300 rounded   bg-center bg-cover bg-no-repeat"
          />
          <div className="w-full h-[47.50%] bg-slate-300  rounded ">
            <Link href={"#"}>
              <Image
                width={200}
                height={200}
                src={"/images/technology.jpeg"}
                alt="technology"
                className="w-full h-full  rounded "
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Show_case;
