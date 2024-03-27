import React from "react";

import ScrollToTopButton from "./ScrollUp";
import About from "./About";

import Tray from "./show_tray/tray";

const Main = () => {
  return (
    <main className=" min-h-screen ">
      <div className="max-w-[1184px] mx-auto mt-5 md:mt-10  px-2 ">
        <Tray />
        <About />
      </div>
      <ScrollToTopButton />
    </main>
  );
};

export default Main;
