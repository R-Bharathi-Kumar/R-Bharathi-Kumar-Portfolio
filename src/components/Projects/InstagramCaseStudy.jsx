"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const instagramData = {
  id: "03",
  title: "Instagram Desktop Redesign",
  category: "UI/UX AUDIT // RESPONSIVE ERGONOMICS",
  year: "2023",
  discipline: "Desktop Viewport Efficiency & Adaptive Grids",
  imgSrc: "/projects/INSTAGRAMCASESTUDY.png",
  fallbackPattern: "/Pattern3.svg",
  description:
    "UX Heuristic Teardown and Responsive Redesign addressing excessive unused canvas margins, isolated bottom-docked messaging popovers, and unbalanced visual weight on wide displays.",
  stack: [
    "UX Architecture",
    "Heuristic Analysis",
    "Design Tokens",
    "Design Systems",
  ],
  caseStudy: {
    headline:
      "Re-Architecting Instagram Desktop: Overcoming Spatial Atrophy & Ergonomic Friction",
    role: "Lead Product Designer & UX Researcher",
    timeline: "2 Weeks Audit & Iteration",
    overview:
      "A rigorous product teardown examining Instagram's desktop web platform on 1440px to 2560px ultra-wide displays. The objective was to eliminate dead viewport margins, resolve cognitive overload caused by isolated peripheral widgets, and engineer an adaptive three-tier spatial workspace tailored for modern desktop monitors.",
    problem:
      "On modern 16:9 and 21:9 desktop viewports, Instagram Web rigidly anchors a narrow, mobile-native 630px feed directly in the center of the display. This leaves more than 62% of the viewport completely unrendered. Critical navigation items, stories, and the isolated bottom-right direct message drawer exist far beyond the foveal field of view, forcing frequent horizontal neck strain and high cognitive friction during task switching.",
    heuristics: [
      {
        code: "HEURISTIC_01",
        law: "Fitts's Law & Motor Path Fragmentation",
        summary:
          "Severe target acquisition distance between feed interactions and the message dock.",
        detail:
          "The bottom-right chat drawer sits over 1100px away from the central feed container on standard 1080p monitors. The target acquisition time index ($T = a + b \\log_2(2D/W)$) is inflated by 320%, making quick conversations while browsing excessively taxing.",
      },
      {
        code: "HEURISTIC_02",
        law: "Gestalt Proximity & Visual Anchoring",
        summary: "Peripheral detachment of stories and contextual accounts.",
        detail:
          "Secondary functional layers—such as stories, profile recommendations, and legal links—float in extreme peripheral bands. Because they lack bounding structural relationships, users suffer from selective banner blindness, missing key social cues.",
      },
      {
        code: "HEURISTIC_03",
        law: "Miller's Law & Cognitive Tunneling",
        summary:
          "Scroll exhaustion caused by vertical card aspect-ratio mismatch.",
        detail:
          "Constraining portrait aspect ratios (4:5 and 9:16) inside a singular column on horizontal screens allows only one-third of a post to be visible per scroll gesture. This induces micro-interruptions and breaks narrative flow.",
      },
    ],
    tokens: [
      { label: "GRID DYNAMICS", val: "12-Col Responsive Workspace (1440px+)" },
      { label: "BASE UNIT", val: "8px Hard Spatial Grid Matrix" },
      { label: "FEED RATIO", val: "Adaptive Dual-Pane (Master / Detail)" },
      { label: "NAV STATE", val: "Collapsible Rail (80px Icon / 240px Full)" },
    ],
    solution:
      "Engineered an adaptive modular spatial system: (1) Collapsible three-state global navigation rail, (2) Dual-track feed allowing concurrent media consumption and comment inspection without obscuring the canvas, and (3) Integrated right-dock telemetry housing active direct messages and active friend activities directly inside the primary line of sight.",
    metrics: [
      {
        label: "CANVAS UTILIZATION",
        value: "+58%",
        desc: "Dead screen space reduced from 62% to under 8%",
      },
      {
        label: "CLICK-TO-MESSAGE TRAVEL",
        value: "-68%",
        desc: "Average cursor travel distance reduced by 750px",
      },
      {
        label: "CONTENT SCAN DENSITY",
        value: "2.4X",
        desc: "Dual-track viewport reveals feed & conversation simultaneously",
      },
    ],
  },
};

export default function InstagramCaseStudy({
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
            [{instagramData.id}]
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
              {instagramData.title}
            </h3>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
              // {instagramData.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <span className="font-mono text-[10px] text-white bg-[#E43636] px-2.5 py-1 rounded-xs font-bold uppercase tracking-wider hidden sm:inline-block">
            CASE STUDY
          </span>
          <span className="font-mono text-xs opacity-40 hidden md:inline-block">
            {instagramData.year}
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
                  onClick={() => onOpenCaseStudy(instagramData)}
                  className={`relative w-full aspect-16/10 rounded-sm border overflow-hidden transition-colors group/img cursor-pointer ${
                    DarkMode
                      ? "border-neutral-800 bg-[#121212]"
                      : "border-neutral-200 bg-white"
                  }`}
                >
                  <img
                    src={instagramData.imgSrc}
                    alt={instagramData.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = instagramData.fallbackPattern;
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
                  <span>PREVIEW // {instagramData.id}</span>
                  <span>CLICK SCREENSHOT TO INSPECT DOSSIER</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between gap-6 py-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                      {instagramData.discipline}
                    </span>
                    <span className="font-mono text-xs opacity-50">
                      YEAR: {instagramData.year}
                    </span>
                  </div>
                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed ${DarkMode ? "text-neutral-300" : "text-neutral-700"}`}
                  >
                    {instagramData.description}
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                      SYSTEM STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {instagramData.stack.map((tech, sIdx) => (
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
                    onClick={() => onOpenCaseStudy(instagramData)}
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
