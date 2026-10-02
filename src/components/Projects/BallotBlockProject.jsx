"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ballotBlockData = {
  id: "09",
  title: "BallotBlock // Blockchain Voting Platform",
  category: "WEB3 // PROTOCOL UI",
  year: "2023",
  discipline: "Decentralized Polling & Consensus Interface",
  imgSrc: "/projects/BALLOTBLOCK.png",
  fallbackPattern: "/Pattern.svg",
  description:
    "Designed a trust-centric product interface for a decentralized polling and voting system[cite: 18]. Solved transparency and security complexities for everyday users by creating intuitive, real-time visualizations of live blockchain telemetry[cite: 18].",
  stack: [
    "Next.js",
    "Web3.js",
    "Smart Contracts",
    "Ethers.js",
    "Blockchain UI",
  ],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/R-Bharathi-Kumar/BallotBlock",
      primary: true,
    },
  ],
};

export default function BallotBlockProject({ isOpen, onToggle, DarkMode }) {
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
            [{ballotBlockData.id}]
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
              {ballotBlockData.title}
            </h3>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
              // {ballotBlockData.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <span className="font-mono text-xs opacity-40 hidden md:inline-block">
            {ballotBlockData.year}
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
                    src={ballotBlockData.imgSrc}
                    alt={ballotBlockData.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = ballotBlockData.fallbackPattern;
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
                  <span>PREVIEW // {ballotBlockData.id}</span>
                  <span>DECENTRALIZED PROTOCOL TELEMETRY</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between gap-6 py-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                      {ballotBlockData.discipline}
                    </span>
                    <span className="font-mono text-xs opacity-50">
                      YEAR: {ballotBlockData.year}
                    </span>
                  </div>

                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed ${
                      DarkMode ? "text-neutral-300" : "text-neutral-700"
                    }`}
                  >
                    {ballotBlockData.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                      SYSTEM STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {ballotBlockData.stack.map((tech, sIdx) => (
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
                    href={ballotBlockData.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest bg-[#E43636] text-white rounded-xs hover:bg-[#c92828] transition-colors cursor-pointer shadow-md"
                  >
                    <span>View GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-3.5 fill-current"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
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
