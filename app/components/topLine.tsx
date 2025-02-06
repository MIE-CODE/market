import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TopLine = () => {
  const [loved, setLoved] = useState("bg-slate-400");

  const like = () => {
    const bg = "bg-slate-900";
    setLoved(bg ? "bg-slate-900" : "bg-slate-900/50");
  };
  return (
    <div onClick={like} className={` bg-slate-3 00 py-1 static ${loved}`}>
      <div className="flex px-4 max-w-[1184px] mx-auto ">
        <Link href={"/Login"}>
          <div className="flex text-sm gap-3 font-bold text-slate-100/80 hover:text-slate-50 transition duration-300">
            <Image
              src="/images/logos.png"
              width={20}
              height={20}
              alt="logo"
              sizes="
		/_next/image?url=%2Fimages%2Flogos.png&w=32&q=75 1x,
		/_next/image?url=%2Fimages%2Flogos.png&w=48&q=75 2x
	"
            />
            <p className="hover:underline underline-slate ">Sell on Gleam</p>
          </div>
        </Link>
        <div className=" flex items-center gap-2 mx-auto text-sm text-[crimson]/70 font-bold  ">
          Call{" "}
          <span className="text-[11px] font-extrabold text-slate-50">
            {" "}
            +234 9137 4374 24{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopLine;
