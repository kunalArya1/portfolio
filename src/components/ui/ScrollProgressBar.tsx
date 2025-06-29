"use client";

import { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(Math.min(scrollPercent, 100));
      setIsVisible(scrollTop > 100); // Show after scrolling 100px
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background blur for better contrast */}
      <div
        className={`fixed top-0 left-0 w-full h-[3px] bg-black/40 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Progress bar */}
      <div
        className={`fixed top-0 left-0 w-full h-[3px] z-[10000] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 shadow-lg shadow-purple-500/20 transition-all duration-200 ease-out relative overflow-hidden"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer" />
        </div>

        {/* Glow effect */}
        <div
          className="absolute top-0 h-[3px] bg-gradient-to-r from-purple-500/40 via-purple-400/40 to-pink-500/40 blur-sm transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default ScrollProgressBar;
