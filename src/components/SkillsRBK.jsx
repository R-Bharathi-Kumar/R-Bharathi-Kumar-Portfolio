"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SuperText from "./SuperText";
import MarqueeBands from "./MarqueeBands";

export default function SkillsRBK({ DarkMode }) {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [hoveredElement, setHoveredElement] = useState(null);

  const elements = [
    // ── GROUP 1: DESIGN & INTERFACE (DESIGN / DES) ──
    {
      num: "01",
      sym: "Fg",
      name: "Figma",
      category: "DESIGN",
      group: "DES",
      weight: "12.01",
      level: "98%",
      desc: "Autolayout engines, component variants, interactive prototypes, and design token synchronization[cite: 10].",
    },
    {
      num: "02",
      sym: "Ux",
      name: "UI/UX Design",
      category: "DESIGN",
      group: "DES",
      weight: "14.00",
      level: "95%",
      desc: "Human-centered digital journeys, heuristic evaluation, and information hierarchy modeling[cite: 10].",
    },
    {
      num: "03",
      sym: "Sb",
      name: "Storyboarding",
      category: "DESIGN",
      group: "DES",
      weight: "15.99",
      level: "92%",
      desc: "User journey mapping, cinematic product narrative arcs, and contextual interaction wireframes[cite: 10].",
    },
    {
      num: "04",
      sym: "Mu",
      name: "Mockups & Previews",
      category: "DESIGN",
      group: "DES",
      weight: "17.02",
      level: "96%",
      desc: "High-fidelity photorealistic product staging, spatial device frames, and presentation layouts.",
    },
    {
      num: "05",
      sym: "Ai",
      name: "Illustrator",
      category: "DESIGN",
      group: "DES",
      weight: "18.99",
      level: "90%",
      desc: "Pixel-perfect vector geometry, scalable SVGs, brand iconography, and custom digital illustrations[cite: 10].",
    },
    {
      num: "06",
      sym: "Ps",
      name: "Photoshop",
      category: "DESIGN",
      group: "DES",
      weight: "20.18",
      level: "88%",
      desc: "Bitmap image treatment, raster asset manipulation, texture rendering, and visual composition[cite: 10].",
    },

    // ── GROUP 2: AI & VISION (AI & VISION / AIME) ──
    {
      num: "07",
      sym: "Ag",
      name: "Agentic AI",
      category: "AI & VISION",
      group: "AIME",
      weight: "26.98",
      level: "92%",
      desc: "Multi-agent orchestration, autonomous decision loops, tool-calling pipelines, and designer-in-the-loop interfaces.",
    },
    {
      num: "08",
      sym: "Dl",
      name: "Deep Learning",
      category: "AI & VISION",
      group: "AIME",
      weight: "28.09",
      level: "88%",
      desc: "Neural network architectures, tensor representations, and generative model fine-tuning.",
    },
    {
      num: "09",
      sym: "Ml",
      name: "Machine Learning",
      category: "AI & VISION",
      group: "AIME",
      weight: "30.97",
      level: "90%",
      desc: "Supervised and unsupervised learning models, heuristic feature extraction, and predictive data pipelines.",
    },
    {
      num: "10",
      sym: "Cv",
      name: "Computer Vision",
      category: "AI & VISION",
      group: "AIME",
      weight: "32.06",
      level: "88%",
      desc: "Keyframe extraction, spatial pixel segmentation, object detection, and visual media analysis[cite: 10].",
    },
    {
      num: "11",
      sym: "Nl",
      name: "NLP",
      category: "AI & VISION",
      group: "AIME",
      weight: "35.45",
      level: "93%",
      desc: "Semantic embeddings, context-similarity search, prompt design, and natural language synthesis[cite: 10].",
    },
    {
      num: "12",
      sym: "Aa",
      name: "AssemblyAI",
      category: "AI & VISION",
      group: "AIME",
      weight: "39.10",
      level: "91%",
      desc: "Acoustic modeling, speech-to-text processing, and dynamic voice transcription integration[cite: 10].",
    },
    {
      num: "13",
      sym: "Ff",
      name: "FFmpeg",
      category: "AI & VISION",
      group: "AIME",
      weight: "40.08",
      level: "85%",
      desc: "Programmatic video rendering, frame slicing, audio multiplexing, and media compression pipelines[cite: 10].",
    },
    {
      num: "14",
      sym: "Et",
      name: "AI Ethics & Safety",
      category: "AI & VISION",
      group: "AIME",
      weight: "44.96",
      level: "94%",
      desc: "Mitigating algorithmic bias, explainable AI (XAI) UI patterns, and trust-centered human safeguards[cite: 7].",
    },

    // ── GROUP 3: FRONTEND & MOTION (FRONTEND / FEND) ──
    {
      num: "15",
      sym: "Nx",
      name: "Next.js",
      category: "FRONTEND",
      group: "FEND",
      weight: "47.87",
      level: "97%",
      desc: "App Router, SSR/SSG hydration, server actions, and edge runtime optimizations[cite: 10].",
    },
    {
      num: "16",
      sym: "Re",
      name: "React.js",
      category: "FRONTEND",
      group: "FEND",
      weight: "50.94",
      level: "96%",
      desc: "Modern reactive paradigms, custom hook pipelines, context trees, and concurrent UI rendering[cite: 10].",
    },
    {
      num: "17",
      sym: "Tw",
      name: "Tailwind CSS",
      category: "FRONTEND",
      group: "FEND",
      weight: "51.99",
      level: "99%",
      desc: "Modern atomic styling, fluid responsive layouts, CSS variables, and brutalist UI patterns[cite: 10].",
    },
    {
      num: "18",
      sym: "Fm",
      name: "Framer Motion",
      category: "FRONTEND",
      group: "FEND",
      weight: "54.94",
      level: "95%",
      desc: "Fluid physics, layoutId shared-element transitions, and viewport-driven scroll choreography[cite: 10].",
    },
    {
      num: "19",
      sym: "Rn",
      name: "React Native",
      category: "FRONTEND",
      group: "FEND",
      weight: "58.69",
      level: "86%",
      desc: "Cross-platform mobile interaction models, gesture responders, and native animation drivers[cite: 10].",
    },
    {
      num: "20",
      sym: "Th",
      name: "Three.js",
      category: "FRONTEND",
      group: "FEND",
      weight: "63.55",
      level: "80%",
      desc: "WebGL canvas pipelines, programmatic shaders, 3D meshes, and interactive spatial scenes[cite: 10].",
    },

    // ── GROUP 4: BACKEND & LANGUAGES (BACKEND / BEND) ──
    {
      num: "21",
      sym: "Py",
      name: "Python",
      category: "BACKEND",
      group: "BEND",
      weight: "65.38",
      level: "92%",
      desc: "AI/ML scripting, data manipulation with NumPy/Pandas, and algorithmic backend pipelines.",
    },
    {
      num: "22",
      sym: "Js",
      name: "JavaScript",
      category: "BACKEND",
      group: "BEND",
      weight: "69.72",
      level: "96%",
      desc: "Modern ESNext, asynchronous event loops, DOM manipulations, and isomorphic modules[cite: 10].",
    },
    {
      num: "23",
      sym: "Ts",
      name: "TypeScript",
      category: "BACKEND",
      group: "BEND",
      weight: "72.63",
      level: "94%",
      desc: "Strict type models, generic component schemas, and type-safe API communication contracts[cite: 10].",
    },
    {
      num: "24",
      sym: "Cp",
      name: "C++",
      category: "BACKEND",
      group: "BEND",
      weight: "74.92",
      level: "82%",
      desc: "Object-oriented structures, manual memory control, STL algorithms, and computational efficiency.",
    },
    {
      num: "25",
      sym: "C",
      name: "C",
      category: "BACKEND",
      group: "BEND",
      weight: "78.96",
      level: "80%",
      desc: "Low-level system architecture, memory pointers, struct definitions, and hardware-near computing.",
    },
    {
      num: "26",
      sym: "Rs",
      name: "Rust",
      category: "BACKEND",
      group: "BEND",
      weight: "79.90",
      level: "84%",
      desc: "Memory-safe concurrency, borrow checker patterns, and low-latency microservices[cite: 10].",
    },
    {
      num: "27",
      sym: "No",
      name: "Node.js",
      category: "BACKEND",
      group: "BEND",
      weight: "83.80",
      level: "89%",
      desc: "REST APIs, asynchronous streaming, event architectures, and server-side execution[cite: 10].",
    },
    {
      num: "28",
      sym: "Sb",
      name: "Supabase",
      category: "BACKEND",
      group: "BEND",
      weight: "85.47",
      level: "88%",
      desc: "PostgreSQL databases, row-level security (RLS), and real-time subscription channels[cite: 10].",
    },

    // ── GROUP 5: SYSTEMS & ARCHITECTURE (SYSTEMS / SYS) ──
    {
      num: "29",
      sym: "Dt",
      name: "Design Tokens",
      category: "SYSTEMS",
      group: "SYS",
      weight: "87.12",
      level: "95%",
      desc: "Systemized spacing, typography ladders, color scales, and design token synchronization[cite: 10].",
    },
    {
      num: "30",
      sym: "Vc",
      name: "Vector Systems",
      category: "SYSTEMS",
      group: "SYS",
      weight: "89.24",
      level: "96%",
      desc: "Strict coordinate bounding boxes, uniform stroke metrics, and design token integration[cite: 10].",
    },
    {
      num: "31",
      sym: "De",
      name: "Deluge",
      category: "SYSTEMS",
      group: "SYS",
      weight: "90.55",
      level: "92%",
      desc: "Zoho proprietary scripting language, automated corporate triggers, and API pipelines[cite: 10].",
    },
    {
      num: "32",
      sym: "Zh",
      name: "Zoho Suite",
      category: "SYSTEMS",
      group: "SYS",
      weight: "92.38",
      level: "94%",
      desc: "Ecosystem orchestration across CRM, Desk, People, and automated workflow synchronization[cite: 10].",
    },
    {
      num: "33",
      sym: "Gh",
      name: "GitHub Actions",
      category: "SYSTEMS",
      group: "SYS",
      weight: "93.72",
      level: "92%",
      desc: "Version tracking, branch protection, CI/CD automated deployment, and semantic releases[cite: 10].",
    },

    // ── GROUP 6: TECHNICAL SOFT SKILLS (SOFT SKILLS / STR) ──
    {
      num: "34",
      sym: "St",
      name: "Systems Thinking",
      category: "SOFT SKILLS",
      group: "STR",
      weight: "95.62",
      level: "97%",
      desc: "Holistic problem framing, bridging UX constraints with engineering throughput and business ROI[cite: 7].",
    },
    {
      num: "35",
      sym: "Dc",
      name: "Design-Code Sync",
      category: "SOFT SKILLS",
      group: "STR",
      weight: "96.22",
      level: "99%",
      desc: "Translating ambiguous Figma ideas into zero-defect, production-ready frontend code[cite: 10].",
    },
    {
      num: "36",
      sym: "Em",
      name: "Empathic Research",
      category: "SOFT SKILLS",
      group: "STR",
      weight: "97.91",
      level: "93%",
      desc: "Active user listening, cognitive friction discovery, and translating user pain points into ergonomic flows.",
    },
    {
      num: "37",
      sym: "Ra",
      name: "Rapid Prototyping",
      category: "SOFT SKILLS",
      group: "STR",
      weight: "98.94",
      level: "96%",
      desc: "High-velocity interactive mockups and working code testbeds for rapid usability validation.",
    },
    {
      num: "38",
      sym: "Ps",
      name: "Product Strategy",
      category: "SOFT SKILLS",
      group: "STR",
      weight: "99.11",
      level: "94%",
      desc: "Roadmap prioritization, feature scoping, technical feasibility analysis, and MVP delivery[cite: 7].",
    },
    {
      num: "39",
      sym: "As",
      name: "Async Comms",
      category: "SOFT SKILLS",
      group: "STR",
      weight: "99.90",
      level: "95%",
      desc: "Clear visual documentation, Loom walkthroughs, GitHub PR reviews, and transparent technical writing.",
    },
  ];

  const categories = [
    { label: "ALL", tag: "ALL" },
    { label: "DESIGN", tag: "DES" },
    { label: "AI & VISION", tag: "AIME" },
    { label: "FRONTEND", tag: "FEND" },
    { label: "BACKEND", tag: "BEND" },
    { label: "SYSTEMS", tag: "SYS" },
    { label: "SOFT SKILLS", tag: "STR" },
  ];

  const filteredElements =
    activeCategory === "ALL"
      ? elements
      : elements.filter(
          (el) => el.category === activeCategory || el.group === activeCategory,
        );

  const activeInspect = hoveredElement || elements[0];

  return (
    <section
      id="skills"
      className={`relative w-full py-20 px-4 md:px-12 lg:px-20 transition-colors duration-500 select-none ${
        DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
      }`}
    >
      <div className="w-full flex flex-col gap-10">
        {/* ── Responsive Top Bar / Telemetry Header ── */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E43636] opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-[#E43636]" />
            </span>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E43636] font-bold">
              04 / Technical Matrix
            </p>
          </div>
        </div>

        {/* ── Title & Filter Matrix ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none flex items-baseline gap-3 md:gap-5 [&>h1]:inline-block [&>h1]:m-0 [&>h1]:leading-none">
              <span>Skills</span>
              <span className="text-[#E43636]">/</span>
              <SuperText Text="RBK" />
            </div>
            <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#E43636] font-semibold mt-1">
              Engineering Disciplines & System Fluency
            </p>
          </div>

          {/* Clean, fully responsive category filters with Soft Skills & Systems */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((c) => {
              const isActive =
                activeCategory === c.label || activeCategory === c.tag;
              return (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => setActiveCategory(c.label)}
                  className={`px-3 sm:px-4 py-2 font-mono text-[11px] sm:text-xs uppercase tracking-wider rounded-xs border transition-colors cursor-pointer ${
                    isActive
                      ? "border-[#E43636] bg-[#E43636] text-white font-bold"
                      : DarkMode
                        ? "border-neutral-800 bg-[#161616] text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Clean Element Inspector HUD ── */}
        <div
          className={`p-6 sm:p-8 border rounded-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center transition-colors duration-300 ${
            DarkMode
              ? "border-neutral-800 bg-[#161616]"
              : "border-neutral-200 bg-white shadow-sm"
          }`}
        >
          {/* Active Atom Large Badge */}
          <div className="md:col-span-4 lg:col-span-3 flex items-center gap-5 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-6 border-neutral-500/20">
            <div className="size-20 sm:size-24 rounded-sm border-2 border-[#E43636] flex flex-col justify-between p-2.5 bg-[#E43636]/5 shrink-0">
              <div className="flex justify-between font-mono text-[10px] text-[#E43636] font-bold">
                <span>{activeInspect.num}</span>
                <span>{activeInspect.group}</span>
              </div>
              <span className="font-display text-3xl sm:text-4xl font-black text-center text-[#E43636] leading-none">
                {activeInspect.sym}
              </span>
              <span className="font-mono text-[9px] text-center opacity-60">
                {activeInspect.weight}
              </span>
            </div>

            <div className="flex flex-col gap-1 min-w-0">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#E43636] font-bold">
                [{activeInspect.category}]
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight truncate">
                {activeInspect.name}
              </h3>
              <span className="font-mono text-xs opacity-50 font-semibold">
                FLUENCY: {activeInspect.level}
              </span>
            </div>
          </div>

          {/* Description & Fluency Gauge */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between gap-4">
            <p
              className={`text-sm sm:text-base font-light leading-relaxed ${
                DarkMode ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
              {activeInspect.desc}
            </p>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest opacity-50">
                <span>PRODUCTION MASTERY</span>
                <span className="font-bold text-[#E43636]">
                  {activeInspect.level}
                </span>
              </div>
              <div
                className={`w-full h-2 rounded-full overflow-hidden ${
                  DarkMode ? "bg-neutral-800" : "bg-neutral-200"
                }`}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: activeInspect.level }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full bg-[#E43636]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── Marquee Bands: Edge-to-Edge Without Padding/Gaps ── */}
        <div className="-mx-4 md:-mx-12 lg:-mx-20 w-[calc(100%+2rem)] md:w-[calc(100%+6rem)] lg:w-[calc(100%+10rem)] my-2">
          <MarqueeBands DarkMode={DarkMode} />
        </div>

        {/* ── Periodic Table Elements Grid (High-Legibility & Clean) ── */}
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-3.5">
            {filteredElements.map((el) => {
              const isSelected = activeInspect.num === el.num;

              return (
                <div
                  key={el.num}
                  onMouseEnter={() => setHoveredElement(el)}
                  onClick={() => setHoveredElement(el)}
                  className={`group relative p-3.5 sm:p-4 border rounded-sm flex flex-col justify-between aspect-square cursor-pointer transition-colors duration-200 ${
                    isSelected
                      ? DarkMode
                        ? "border-[#E43636] bg-[#1E1E1E]"
                        : "border-[#E43636] bg-white shadow-md shadow-red-500/10"
                      : DarkMode
                        ? "border-neutral-800 bg-[#141414] hover:border-neutral-600"
                        : "border-neutral-200 bg-[#FAFAFA] hover:border-neutral-400"
                  }`}
                >
                  {/* Top Atomic Number and Group */}
                  <div className="flex items-center justify-between font-mono text-[10px] leading-none">
                    <span
                      className={`font-bold transition-colors ${
                        isSelected ? "text-[#E43636]" : "opacity-40"
                      }`}
                    >
                      {el.num}
                    </span>
                    <span className="opacity-40 font-semibold uppercase">
                      {el.group}
                    </span>
                  </div>

                  {/* Center Symbol (Enlarged) */}
                  <div className="flex items-center justify-center my-auto">
                    <span
                      className={`font-display text-3xl sm:text-4xl font-black uppercase tracking-tight transition-colors ${
                        isSelected
                          ? "text-[#E43636]"
                          : DarkMode
                            ? "text-white group-hover:text-neutral-200"
                            : "text-[#121212] group-hover:text-neutral-800"
                      }`}
                    >
                      {el.sym}
                    </span>
                  </div>

                  {/* Bottom Name & Atomic Weight */}
                  <div className="flex flex-col border-t pt-1.5 border-neutral-500/15 gap-0.5">
                    <span className="font-mono text-[11px] sm:text-xs font-bold uppercase leading-tight truncate">
                      {el.name}
                    </span>
                    <span className="font-mono text-[9px] opacity-40">
                      {el.weight}
                    </span>
                  </div>

                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E43636]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
