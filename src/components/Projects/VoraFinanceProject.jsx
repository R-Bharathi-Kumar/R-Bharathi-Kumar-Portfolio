"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const voraData = {
  id: "05",
  title: "Vora // Personal Finance Experience",
  category: "PRODUCT // DESIGN SYSTEM",
  year: "2024",
  discipline: "UI/UX Ecosystem & Design Tokens",
  imgSrc: "/projects/VORA.png",
  fallbackPattern: "/Pattern2.svg",
  description:
    "Conceptualized and engineered the complete UI/UX ecosystem from scratch, including original branding, logo design, custom color palettes, and complex vector/SVG graphic elements[cite: 18]. Designed data-dense card components and dashboard architectures in Figma[cite: 18].",
  stack: [
    "Figma",
    "Design Tokens",
    "Vector Geometry",
    "Design Systems",
    "UI/UX Design",
  ],
  links: [
    {
      label: "Figma File",
      url: "https://www.figma.com/community/file/1645694907835307040",
      primary: true,
    },
  ],
};

export default function VoraFinanceProject({ isOpen, onToggle, DarkMode }) {
  return (
    <div
      className={`transition-colors duration-300 ${
        isOpen
          ? DarkMode
            ? "bg-[#161616]"
            : "bg-[#F7F7F7]"
          : "hover:bg-neutral-500/5"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-6 sm:py-8 px-4 sm:px-6 flex items-center justify-between text-left cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-4 sm:gap-8">
          <span
            className={`font-mono text-xs sm:text-sm font-bold tracking-wider transition-colors ${
              isOpen ? "text-[#E43636]" : "opacity-40"
            }`}
          >
            [{voraData.id}]
          </span>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <h3
              className={`font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight transition-colors duration-300 ${
                isOpen
                  ? "text-[#E43636]"
                  : DarkMode
                    ? "text-[#FCFCFC]"
                    : "text-[#121212]"
              }`}
            >
              {voraData.title}
            </h3>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
              // {voraData.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <span className="font-mono text-xs opacity-40 hidden md:inline-block">
            {voraData.year}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`size-8 sm:size-10 border rounded-sm flex items-center justify-center font-mono text-sm transition-colors ${
              isOpen
                ? "border-[#E43636] bg-[#E43636] text-white"
                : DarkMode
                  ? "border-neutral-800 text-neutral-400"
                  : "border-neutral-200 text-neutral-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"currentColor"}
              fill={"none"}
            >
              <path
                d="M12 18.502V5.00195"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 13.002C18 13.002 13.5811 19.0019 12 19.002C10.4188 19.002 6 13.002 6 13.002"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="p-4 sm:p-8 pt-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-neutral-500/10">
              <div className="lg:col-span-6 flex flex-col gap-2">
                <div
                  className={`relative w-full aspect-16/10 rounded-sm border overflow-hidden transition-colors ${
                    DarkMode
                      ? "border-neutral-800 bg-[#121212]"
                      : "border-neutral-200 bg-white"
                  }`}
                >
                  <img
                    src={voraData.imgSrc}
                    alt={voraData.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = voraData.fallbackPattern;
                      e.currentTarget.className =
                        "w-full h-full object-contain p-8";
                    }}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 font-mono text-[9px] text-[#E43636] pointer-events-none">
                    +
                  </span>
                  <span className="absolute top-2 right-2 font-mono text-[9px] text-[#E43636] pointer-events-none">
                    +
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] opacity-40 px-1 uppercase tracking-widest">
                  <span>PREVIEW // {voraData.id}</span>
                  <span>FIGMA CANVAS COMPONENT MATRIX</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between gap-6 py-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                      {voraData.discipline}
                    </span>
                    <span className="font-mono text-xs opacity-50">
                      YEAR: {voraData.year}
                    </span>
                  </div>

                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed ${
                      DarkMode ? "text-neutral-300" : "text-neutral-700"
                    }`}
                  >
                    {voraData.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                      SYSTEM STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {voraData.stack.map((tech, sIdx) => (
                        <span
                          key={sIdx}
                          className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-xs border ${
                            DarkMode
                              ? "border-neutral-800 bg-[#202020] text-neutral-300"
                              : "border-neutral-200 bg-white text-neutral-700 shadow-xs"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-500/15">
                  <a
                    href={voraData.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest bg-[#E43636] text-white rounded-xs hover:bg-[#c92828] transition-colors cursor-pointer shadow-md"
                  >
                    <span>Inspect Figma</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
