"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const threadsData = {
  id: "02",
  title: "Threads Web UX Redesign",
  category: "PRODUCT DESIGN // INFORMATION DENSITY",
  year: "2024",
  discipline: "Multi-Deck Workspace & Information Architecture",
  imgSrc: "/projects/THREADSCASESTUDY.png",
  fallbackPattern: "/Pattern4.svg",
  description:
    "Comprehensive UX audit and architectural redesign transforming Threads Web from an inefficient mobile-port scroll column into an extensible, high-density multi-deck workspace optimized for desktop viewports.",
  stack: [
    "Information Architecture",
    "Design Tokens",
    "Heuristic Analysis",
    "Design Systems",
  ],
  caseStudy: {
    headline:
      "Transforming Threads Desktop: From Constrained Feed to Pro Real-Time Workspace",
    role: "Lead Product Designer & Information Architect",
    timeline: "3 Weeks Audit & Architecture",
    overview:
      "A deep architectural teardown of Threads Web on 1080p, 1440p, and ultra-wide displays. The objective was to evolve the interface from a centered, mobile-ratio feed container into a powerful, multi-column deck system that maximizes scanability, eliminates modal context loss, and supports continuous real-time monitoring.",
    problem:
      "On desktop monitors, Threads Web confines all interaction to a rigid 600px column centered in an expanse of over 64% dead black canvas. The disconnected bottom-right compose widget causes modal blindness, and the single-stream layout forces severe scroll friction when users attempt to cross-reference feeds, mentions, or search streams concurrently.",
    heuristics: [
      {
        code: "HEURISTIC_01",
        law: "Information Scent & Scanability Loss",
        summary:
          "Severe scan bottlenecks induced by linear single-column constraint.",
        detail:
          "Desktop users are restricted to a single stream at a time. Switching between 'For You', 'Following', and real-time trends resets scroll coordinates and breaks reading flow, reducing scanning efficiency by more than 60%.",
      },
      {
        code: "HEURISTIC_02",
        law: "Spatial Disconnect & Modal Blindness",
        summary:
          "Bottom-right floating compose trigger is decoupled from the reading stream.",
        detail:
          "The floating compose capsule sits adrift in the right peripheral gutter. When activated, it spawns an abrupt modal overlay that blocks the current feed, increasing cognitive load and creating friction when referencing existing threads.",
      },
      {
        code: "HEURISTIC_03",
        law: "Hick's Law & Viewport Atrophy",
        summary: "Wasted horizontal canvas on high-resolution displays.",
        detail:
          "On displays wider than 1440px, over 1000px of width is left unrendered. The lack of modular panes forces power users to repeatedly click through tabs rather than taking advantage of horizontal scanning.",
      },
    ],
    tokens: [
      { label: "WORKSPACE DECK", val: "Modular 3-4 Column Configurable Panes" },
      { label: "COLUMN WIDTH", val: "Min 380px / Max 460px Fluid Snap" },
      { label: "COMPOSER STATE", val: "Persistent Slide-Over / Split-Screen" },
      {
        label: "SPATIAL MATRIX",
        val: "8px Hard Grid with Dynamic Gutter Rails",
      },
    ],
    solution:
      "Architected a scalable deck layout: (1) Customizable multi-pane pinned columns ('For You', 'Mentions', 'Topic Streams'), (2) Persistent non-blocking slide-out composer that keeps active threads in view, and (3) Integrated media grid expansion allowing inline image/video analysis without navigation exit.",
    metrics: [
      {
        label: "CANVAS UTILIZATION",
        value: "+64%",
        desc: "Dead margin area reduced from 64% to under 10%",
      },
      {
        label: "SCAN VELOCITY",
        value: "3.2X",
        desc: "Concurrent multi-column timeline monitoring",
      },
      {
        label: "THREAD COMPOSITION SPEED",
        value: "1.9X",
        desc: "Non-modal draft workspace preserves reading position",
      },
    ],
  },
};

export default function ThreadsCaseStudy({
  isOpen,
  onToggle,
  onOpenCaseStudy,
  DarkMode,
}) {
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
            [{threadsData.id}]
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
              {threadsData.title}
            </h3>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
              // {threadsData.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <span className="font-mono text-[10px] text-white bg-[#E43636] px-2.5 py-1 rounded-xs font-bold uppercase tracking-wider hidden sm:inline-block">
            CASE STUDY
          </span>
          <span className="font-mono text-xs opacity-40 hidden md:inline-block">
            {threadsData.year}
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
              ></path>
              <path
                d="M18 13.002C18 13.002 13.5811 19.0019 12 19.002C10.4188 19.002 6 13.002 6 13.002"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
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
                  onClick={() => onOpenCaseStudy(threadsData)}
                  className={`relative w-full aspect-16/10 rounded-sm border overflow-hidden transition-colors group/img cursor-pointer ${
                    DarkMode
                      ? "border-neutral-800 bg-[#121212]"
                      : "border-neutral-200 bg-white"
                  }`}
                >
                  <img
                    src={threadsData.imgSrc}
                    alt={threadsData.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = threadsData.fallbackPattern;
                      e.currentTarget.className =
                        "w-full h-full object-contain p-8";
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="font-mono text-xs uppercase px-4 py-2 bg-[#E43636] text-white font-bold tracking-widest rounded-xs shadow-lg flex items-center gap-2">
                      <span>Open UI/UX Dossier</span>
                      <span>↗</span>
                    </span>
                  </div>
                  <span className="absolute top-2 left-2 font-mono text-[9px] text-[#E43636] pointer-events-none">
                    +
                  </span>
                  <span className="absolute top-2 right-2 font-mono text-[9px] text-[#E43636] pointer-events-none">
                    +
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] opacity-40 px-1 uppercase tracking-widest">
                  <span>PREVIEW // {threadsData.id}</span>
                  <span>CLICK SCREENSHOT TO INSPECT DOSSIER</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between gap-6 py-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                      {threadsData.discipline}
                    </span>
                    <span className="font-mono text-xs opacity-50">
                      YEAR: {threadsData.year}
                    </span>
                  </div>
                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed ${DarkMode ? "text-neutral-300" : "text-neutral-700"}`}
                  >
                    {threadsData.description}
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                      SYSTEM STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {threadsData.stack.map((tech, sIdx) => (
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
                  <button
                    type="button"
                    onClick={() => onOpenCaseStudy(threadsData)}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest bg-[#E43636] text-white rounded-xs hover:bg-[#c92828] transition-colors cursor-pointer shadow-md"
                  >
                    <span>Inspect Case Study</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
