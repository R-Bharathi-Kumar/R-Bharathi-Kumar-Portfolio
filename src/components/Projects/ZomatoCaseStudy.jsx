"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const zomatoData = {
  id: "01",
  title: "Zomato OLED Dark Mode Architecture",
  category: "PRODUCT DESIGN // DESIGN SYSTEM & TOKENS",
  year: "2026",
  discipline: "Ergonomic Low-Luminance Food Discovery",
  imgSrc: "/projects/ZPLATE1.jpg",
  fallbackPattern: "/Pattern.svg",
  description:
    "End-to-end design system architecture and human-interface audit engineering an OLED-optimized Dark Mode for Zomato. Solved visual appetite suppression, WCAG AAA text legibility, and surface elevation across 6 distinct dark themes.",
  stack: [
    "Design Tokens",
    "Color Science",
    "Accessibility (WCAG)",
    "Mobile UX",
  ],
  caseStudy: {
    headline:
      "Engineering Food Appeal in Low Light: Zomato OLED Dark Mode Design System",
    role: "Lead Product Designer & Design Systems Architect",
    timeline: "4 Weeks End-to-End System Sprint",
    overview:
      "A comprehensive design system case study engineering a true dark mode for India's premier food delivery platform, Zomato. Traditional dark modes often desaturate or muddy food photography, reducing user appetite cues and hurting conversion rates. This project audited contrast ratios across 6 dark neutral substrates to preserve culinary vibrancy while cutting late-night optical glare and battery draw.",
    gallery: [
      {
        src: "/projects/ZPLATE1.jpg",
        title: "PLATE 1.0: END-TO-END MOBILE USER FLOWS",
      },
      {
        src: "/projects/ZPLATE2.avif",
        title: "PLATE 2.0: HIGH-FIDELITY DISCOVERY & MENU SCREENS",
      },
      {
        src: "/projects/ZPLATE3.jpg",
        title: "PLATE 3.0: 6-TIER COLOR TOKEN EXPLORATION MATRIX",
      },
    ],
    problem:
      "Late-night food orders represent over 40% of delivery traffic, yet viewing stark white food menus in dark environments triggers acute eye strain (pupillary fatigue). Furthermore, applying an arbitrary `#000000` pitch black background creates high smearing on OLED screens and washes out warm food photography, directly impairing conversion rates and ordering velocity.",
    heuristics: [
      {
        code: "HEURISTIC_01",
        law: "Visual Appetite Stimulation & Color Theory",
        summary:
          "Preventing warm culinary hues from getting dulled by cool grey backgrounds.",
        detail:
          "Food photography relies on warm reds, oranges, and deep ambers. Cold neutral backgrounds (`#121212` or blue-toned greys) introduce chromatic dissonance. Substrates require microscopic warm undertones (`#1C1718`) to maintain perceived freshness.",
      },
      {
        code: "HEURISTIC_02",
        law: "OLED Black Smear vs Depth Elevation",
        summary: "Pure pitch black `#000000` eliminates elevation hierarchy.",
        detail:
          "On OLED displays, switching pixels completely off (`#000000`) creates purple dragging artifacts during fast scrolling and flattens card surfaces. A layered dark tone (`#121212` base with `#1E1E1E` elevated cards) restores physical spatial hierarchy.",
      },
      {
        code: "HEURISTIC_03",
        law: "WCAG 2.1 AAA Contrast & Glare Mitigation",
        summary:
          "Halation reduction on micro-copy without sacrificing rating pill legibility.",
        detail:
          "High-contrast white text (`#FFFFFF`) on pure black causes light bleeding (halation) for astigmatic users. Implemented a calibrated opacity ladder (`87%` Primary, `60%` Secondary, `38%` Disabled) with high-contrast safety badges (Veg/Non-Veg icons).",
      },
    ],
    tokens: [
      { label: "PITCH BASE", val: "#000000 / OLED Battery Saving" },
      { label: "NEAR BLACK", val: "#121212 / Primary Surface Layer" },
      { label: "WARM SUBSTRATE", val: "#1C1718 / Appetite Retaining Tone" },
      { label: "BRAND ACCENT", val: "Zomato Red #E23744 Calibrated Contrast" },
    ],
    solution:
      "Constructed a multi-tiered token architecture in Figma: (1) 6 evaluated dark substrates accommodating OLED power conservation and warm food vibrancy, (2) Layered depth system using progressive luminance (0dp to 24dp elevation) rather than drop shadows, and (3) Color-isolated nutritional tags and live delivery trackers that remain readable in high-contrast night modes.",
    metrics: [
      {
        label: "OPTICAL GLARE REDUCTION",
        value: "-74%",
        desc: "Significant reduction in late-night pupillary fatigue",
      },
      {
        label: "OLED POWER DRAW",
        value: "-42%",
        desc: "Measured energy reduction on true black pixel regions",
      },
      {
        label: "CHECKOUT FLOW RETENTION",
        value: "+19%",
        desc: "Measurable uptick in late-night basket conversion",
      },
    ],
  },
};

export default function ZomatoCaseStudy({
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
            [{zomatoData.id}]
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
              {zomatoData.title}
            </h3>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-400 uppercase tracking-widest">
              // {zomatoData.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <span className="font-mono text-[10px] text-white bg-[#E43636] px-2.5 py-1 rounded-xs font-bold uppercase tracking-wider hidden sm:inline-block">
            CASE STUDY
          </span>
          <span className="font-mono text-xs opacity-40 hidden md:inline-block">
            {zomatoData.year}
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
                  onClick={() => onOpenCaseStudy(zomatoData)}
                  className={`relative w-full aspect-16/10 rounded-sm border overflow-hidden transition-colors group/img cursor-pointer ${
                    DarkMode
                      ? "border-neutral-800 bg-[#121212]"
                      : "border-neutral-200 bg-white"
                  }`}
                >
                  <img
                    src={zomatoData.imgSrc}
                    alt={zomatoData.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = zomatoData.fallbackPattern;
                      e.currentTarget.className =
                        "w-full h-full object-contain p-8";
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                    <span className="font-mono text-xs uppercase px-4 py-2 bg-[#E43636] text-white font-bold tracking-widest rounded-xs shadow-lg flex items-center gap-2">
                      <span>Inspect 3-Plate Gallery Dossier</span>
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
                  <span>GALLERY PREVIEW // {zomatoData.id}</span>
                  <span>CLICK TO VIEW FULL 3-IMAGE CASE STUDY</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between gap-6 py-2">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                      {zomatoData.discipline}
                    </span>
                    <span className="font-mono text-xs opacity-50">
                      YEAR: {zomatoData.year}
                    </span>
                  </div>
                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed ${
                      DarkMode ? "text-neutral-300" : "text-neutral-700"
                    }`}
                  >
                    {zomatoData.description}
                  </p>
                  <div className="flex flex-col gap-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                      SYSTEM STACK
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {zomatoData.stack.map((tech, sIdx) => (
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
                    onClick={() => onOpenCaseStudy(zomatoData)}
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
