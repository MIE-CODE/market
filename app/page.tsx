"use client";
import Image from "next/image";
import Loginpage from "./login/login";
import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./modal";
import Card from "./card";

export default function Home() {
  return (
    <main className=" bg-gradient-to-b relative  from-gray-300 to-gray-900 w-full   ">
      <Header />
      <Card />
      <Footer />
    </main>
  );
}
