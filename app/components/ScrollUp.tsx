// ScrollToTopButton.js
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;

      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${"sticky bottom-5   bg-slate-400  px-4 py-4  rounded-[50%]  transition ease-in-out duration-500"} ${
        isVisible ? " " : "hidden transition-all ease-in-out duration-500"
      }`}
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "999",
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
