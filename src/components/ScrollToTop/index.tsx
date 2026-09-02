'use client'
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-999">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-primary text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110 active:scale-95"
        >
          <Icon icon="solar:arrow-up-bold" width="22" height="22" />
        </button>
      )}
    </div>
  );
}
