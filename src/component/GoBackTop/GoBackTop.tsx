import React, { useState, useEffect } from "react";

const GoBackTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-0 right-0 p-1 md:p-4 cursor-pointer z-40">
      {" "}
      {showTopBtn && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="transparent"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-pink hover:text-blue"
          onClick={goToTop}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}{" "}
    </div>
  );
};
export default GoBackTop;
