"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopLine from "./components/topLine";
import Main from "./components/Main";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <SkeletonTheme baseColor="#cbd5e1" highlightColor="#e2e8f0">
        <TopLine />
        <Header />
        <Main />
        <ToastContainer />
        <Footer />
      </SkeletonTheme>
    </>
  );
}
