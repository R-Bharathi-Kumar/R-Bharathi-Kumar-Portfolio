"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuperText from "./SuperText";

export default function StudiesRBK({ DarkMode }) {
  const [selectedStation, setSelectedStation] = useState("PEAK");

  const stations = {
    BASE: {
      id: "BASE",
      elevation: "1,200M",
      altitudeRatio: 0.25,
      stage: "BASE CAMP BEDROCK",
      coord: "19.9615° N, 79.2961° E",
      degree: "Diploma in Computer Engineering",
      institution: "Maharashtra State Board of Technical Education",
      period: "JUN 2018 — NOV 2020",
      status: "TERRAIN SECURED",
      beaconX: 250,
      beaconY: 340,
      summary:
        "Rigorous foundational engineering curriculum establishing low-level computational mechanics, data structures, pointer arithmetic, memory allocation, and operating system kernels.",
      thesis: {
        title: "Systems Programming & Computing Foundations",
        details:
          "Foundational training in algorithmic complexity, relational database schemas, memory pointer logic, and procedural architecture in C and C++.",
      },
      skills: [
        "Data Structures",
        "C & C++",
        "Operating Systems",
        "Database Architecture",
        "Hardware Architecture",
      ],
    },
    PEAK: {
      id: "PEAK",
      elevation: "4,800M",
      altitudeRatio: 1.0,
      stage: "CROWN SUMMIT APEX",
      coord: "21.1458° N, 79.0882° E",
      degree: "B.Tech in Artificial Intelligence",
      institution: "Rashtrasant Tukadoji Maharaj Nagpur University",
      period: "JAN 2020 — JUN 2023",
      status: "SUMMIT CONQUERED",
      beaconX: 520,
      beaconY: 70,
      summary:
        "Specialized undergraduate engineering research focused on artificial neural networks, deep learning models, heuristic algorithms, applied computer vision, and natural language synthesis.",
      thesis: {
        title: "AI-Based Video Summarization via NLP",
        details:
          "Engineered an automated multimedia truncation pipeline combining AssemblyAI speech-to-text semantic parsing with programmatic FFmpeg keyframe extraction and compression.",
      },
      skills: [
        "Artificial Intelligence",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Research Thesis",
        "Python Pipelines",
      ],
    },
  };

  const activeData = stations[selectedStation];

  return (
    <section
      id="education"
      className={`relative w-full py-24 px-4 md:px-12 lg:px-20 transition-colors duration-500 select-none overflow-hidden ${
        DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
      }`}
    >
      <div className="w-full flex flex-col gap-12">
        {/* ── Subtitle / GPS Altimeter Header ── */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E43636] opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-[#E43636]" />
            </span>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E43636] font-bold">
              07 / Mountain Climb
            </p>
          </div>
        </div>

        {/* ── Section Title ── */}
        <div className="flex flex-col gap-2">
          <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none flex items-baseline gap-3 md:gap-5 [&>h1]:inline-block [&>h1]:m-0 [&>h1]:leading-none">
            <span className="transition-transform duration-300 hover:-translate-y-1">
              Studies
            </span>
            <span className="text-[#E43636]">/</span>
            <SuperText Text="RBK" />
          </div>
          <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#E43636] font-semibold mt-1">
            Expedition Ascent: From Base Camp Engineering to the AI Summit Peak
          </p>
        </div>

        {/* ── THE MOUNTAIN CLIMB INTERACTIVE STAGE ── */}
        <div
          className={`relative w-full rounded-sm border p-6 sm:p-10 transition-colors duration-500 overflow-hidden ${
            DarkMode
              ? "border-neutral-800 bg-[#141414]"
              : "border-neutral-200 bg-white shadow-xl shadow-black/5"
          }`}
        >
          {/* Subtle Repeat Pattern Watermark in Background */}
          <div
            className={`absolute inset-0 w-full h-full bg-[url('/Pattern2.svg')] bg-repeat bg-contain bg-center opacity-[0.04] pointer-events-none ${
              DarkMode ? "" : ""
            }`}
          />

          {/* ── Interactive Vector Mountain Silhouette ── */}
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <svg
              viewBox="0 0 800 400"
              className="w-full h-full preserve-3d overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mountain Shaded Fill */}
              <polygon
                points="50,400 250,340 520,70 750,400"
                className={`transition-colors duration-500 ${
                  DarkMode ? "fill-neutral-900/60" : "fill-neutral-100"
                }`}
              />

              {/* Topographic Contour Ridge Lines */}
              <path
                d="M 120 400 L 250 340 L 400 370"
                stroke={DarkMode ? "#262626" : "#E5E5E5"}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <path
                d="M 250 340 L 520 70"
                stroke="#E43636"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M 520 70 L 640 240 L 750 400"
                stroke={DarkMode ? "#333333" : "#D4D4D4"}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Peak Summit Flag Indicator */}
              <g transform="translate(520, 40)">
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="30"
                  stroke="#E43636"
                  strokeWidth="2"
                />
                <polygon points="0,0 24,6 0,12" fill="#E43636" />
                <text
                  x="30"
                  y="12"
                  className="font-mono text-[10px] font-bold fill-[#E43636] uppercase tracking-wider"
                >
                  SUMMIT PEAK (4,800M)
                </text>
              </g>

              {/* Base Camp Indicator */}
              <g transform="translate(250, 355)">
                <text
                  x="-70"
                  y="20"
                  className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                    DarkMode ? "fill-neutral-400" : "fill-neutral-600"
                  }`}
                >
                  BASE CAMP (1,200M)
                </text>
              </g>

              {/* ── Climber Beacon (Animated Drone) ── */}
              <motion.g
                animate={{
                  x: stations[selectedStation].beaconX,
                  y: stations[selectedStation].beaconY,
                }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
              >
                {/* Radial ping circles */}
                <circle
                  r="14"
                  fill="#E43636"
                  opacity="0.25"
                  className="animate-ping"
                />
                <circle r="8" fill="#E43636" />
                <circle r="4" fill="#FFFFFF" />

                {/* Climber Marker Tag */}
                <g transform="translate(14, -6)">
                  <rect
                    width="68"
                    height="18"
                    rx="2"
                    fill={DarkMode ? "#1A1A1A" : "#FFFFFF"}
                    stroke="#E43636"
                    strokeWidth="1"
                  />
                  <text
                    x="6"
                    y="12"
                    className="font-mono text-[8px] font-bold fill-[#E43636] uppercase tracking-wider"
                  >
                    CLIMBER: RBK
                  </text>
                </g>
              </motion.g>

              {/* Interactive Station Click Zones */}
              <circle
                cx="250"
                cy="340"
                r="22"
                fill="transparent"
                className="cursor-pointer"
                onClick={() => setSelectedStation("BASE")}
              />
              <circle
                cx="520"
                cy="70"
                r="26"
                fill="transparent"
                className="cursor-pointer"
                onClick={() => setSelectedStation("PEAK")}
              />
            </svg>
          </div>

          {/* ── Station Waypoint Selector Tabs ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-neutral-500/20">
            {["BASE", "PEAK"].map((stKey) => {
              const item = stations[stKey];
              const isSelected = selectedStation === stKey;

              return (
                <button
                  key={stKey}
                  type="button"
                  onClick={() => setSelectedStation(stKey)}
                  className={`group relative p-5 border rounded-sm text-left cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? DarkMode
                        ? "border-[#E43636] bg-[#1A1A1A]"
                        : "border-[#E43636] bg-white shadow-lg shadow-red-500/5"
                      : DarkMode
                        ? "border-neutral-800 bg-[#161616] hover:border-neutral-700"
                        : "border-neutral-200 bg-[#FAFAFA] hover:border-neutral-300"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`size-10 rounded-sm border flex items-center justify-center font-mono font-bold text-sm ${
                        isSelected
                          ? "border-[#E43636] text-[#E43636] bg-[#E43636]/10"
                          : "border-neutral-500/20 opacity-50"
                      }`}
                    >
                      {stKey === "PEAK" ? "▲" : "▼"}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#E43636]">
                          {item.elevation}
                        </span>
                        <span className="opacity-30">•</span>
                        <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                          {item.stage}
                        </span>
                      </div>
                      <h4 className="font-display text-lg sm:text-xl font-black uppercase tracking-tight group-hover:text-[#E43636] transition-colors">
                        {item.degree}
                      </h4>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-neutral-400">
                    {item.period.split("—")[1]}
                  </span>

                  {isSelected && (
                    <motion.div
                      layoutId="climberTabGlow"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E43636]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── ACTIVE WAYPOINT ACADEMIC DOSSIER ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`relative border rounded-sm p-6 sm:p-10 transition-colors duration-500 flex flex-col gap-8 ${
              DarkMode
                ? "border-neutral-800 bg-[#161616]"
                : "border-neutral-200 bg-white shadow-xl shadow-black/5"
            }`}
          >
            {/* Header Strip */}
            <div className="flex flex-wrap items-start justify-between gap-6 border-b pb-6 border-neutral-500/20">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase bg-[#E43636] text-white px-2.5 py-0.5 rounded-xs">
                    {activeData.elevation} WAYPOINT
                  </span>
                  <span className="font-mono text-xs text-[#E43636] font-bold">
                    {activeData.coord}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                  {activeData.degree}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-neutral-400 uppercase tracking-wider">
                  @ {activeData.institution}
                </p>
              </div>

              <div className="flex flex-col sm:items-end font-mono">
                <span className="text-xs opacity-40 uppercase tracking-widest">
                  ASCENT TIMELINE
                </span>
                <span className="text-sm sm:text-base font-bold text-[#E43636]">
                  {activeData.period}
                </span>
                <span className="text-[11px] text-emerald-500 font-bold mt-1 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {activeData.status}
                </span>
              </div>
            </div>

            {/* Overview Narrative */}
            <p
              className={`text-base sm:text-lg font-light leading-relaxed max-w-4xl ${
                DarkMode ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              {activeData.summary}
            </p>

            {/* Research & Thesis Dispatch */}
            <div
              className={`p-6 rounded-sm border flex flex-col gap-2 ${
                DarkMode
                  ? "border-neutral-800 bg-[#1C1C1C]"
                  : "border-neutral-200 bg-[#FAFAFA]"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E43636] font-bold">
                  [ACADEMIC RESEARCH & THESIS]
                </span>
                <span className="opacity-30">•</span>
                <h4 className="font-display text-base font-bold uppercase tracking-tight">
                  {activeData.thesis.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                {activeData.thesis.details}
              </p>
            </div>

            {/* Skill / Terrain Tokens */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-500/15">
              {activeData.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded-xs border ${
                    DarkMode
                      ? "border-neutral-800 bg-[#202020] text-neutral-300"
                      : "border-neutral-200 bg-neutral-100 text-neutral-700"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
