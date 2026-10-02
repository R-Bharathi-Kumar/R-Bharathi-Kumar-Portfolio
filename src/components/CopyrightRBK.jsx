"use client";

import React from "react";

export default function CopyrightRBK({ DarkMode }) {
  const scrollToTop = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: search for any scrollable container and reset scrollTop
      const scrollableContainer = document.querySelector(".overflow-y-auto");
      if (scrollableContainer) {
        scrollableContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      className={`w-full pt-8 px-4 md:px-12 lg:px-20 md:pb-8 pb-20 border-t font-mono text-xs transition-colors duration-500 select-none border-r border-[#E43636] ${
        DarkMode ? "bg-[#FCFCFC] text-[#121212]" : "bg-[#121212] text-[#FCFCFC]"
      }`}
    >
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright & Legal Notice */}
        <div className="flex items-center gap-3">
          <span className="text-[#E43636] font-bold">© 2026</span>
          <span className="uppercase tracking-widest font-bold">
            R Bharathi Kumar // RBK
          </span>
        </div>

        {/* Center: Telemetry Metadata */}
        <div className="flex items-center gap-4 opacity-50 text-[10px] uppercase tracking-widest md:flex">
          <span>LOC: CHANDRAPUR, MH</span>
          <span>//</span>
          <span>BUILD: V.007_FASTY</span>
        </div>

        {/* Right: Back to Top Trigger */}
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[#E43636] font-bold uppercase tracking-widest hover:underline cursor-pointer group"
        >
          <span>Back to Top</span>
          <span className="transition-transform group-hover:-translate-y-0.5">
            ↑
          </span>
        </button>
      </div>
    </footer>
  );
}
