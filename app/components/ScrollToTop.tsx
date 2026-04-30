"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group flex items-center justify-center w-12 h-12 bg-primary text-on-primary border-2 border-on-background window-shadow transition-all hover:-translate-y-1 hover:shadow-none cursor-pointer active:translate-y-0"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined transition-transform group-hover:-translate-y-0.5">
            arrow_upward
          </span>
        </button>
      )}
    </div>
  );
}
