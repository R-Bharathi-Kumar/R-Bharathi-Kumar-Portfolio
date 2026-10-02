"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuperText from "./SuperText";

export default function ToolsRBK({ DarkMode }) {
  const [activeBay, setActiveBay] = useState("ALL");

  const toolsets = [
    // ── Bay 1: Design & Creative Suite ──
    {
      name: "Figma",
      category: "CREATIVE",
      tag: "UI / TOKENS",
      utility:
        "Design systems, auto-layout architecture, and vector prototyping[cite: 10].",
      status: "PRIMARY",
      accent: "#E43636",
    },
    {
      name: "Adobe Illustrator",
      category: "CREATIVE",
      tag: "VECTOR / SVG",
      utility:
        "Complex geometric icons, mathematical paths, and branding assets[cite: 7, 10].",
      status: "PRIMARY",
      accent: "#E43636",
    },
    {
      name: "Adobe Photoshop",
      category: "CREATIVE",
      tag: "RASTER / COMPOSITING",
      utility:
        "High-resolution texture styling, asset treatment, and graphic mockups[cite: 7, 10].",
      status: "STABLE",
      accent: "#E43636",
    },
    {
      name: "Affinity Designer",
      category: "CREATIVE",
      tag: "VECTOR ART",
      utility:
        "Performance-focused vector illustration and responsive asset pipelines[cite: 7].",
      status: "STABLE",
      accent: "#E43636",
    },
    {
      name: "Blender",
      category: "CREATIVE",
      tag: "3D GEOMETRY",
      utility:
        "Spatial mockups, 3D product renders, and mesh assets for Three.js[cite: 7].",
      status: "ACTIVE",
      accent: "#E43636",
    },
    {
      name: "Adobe After Effects",
      category: "CREATIVE",
      tag: "MOTION CHOREOGRAPHY",
      utility:
        "UI micro-interaction timing, motion curves, and visual storyboard reels[cite: 7].",
      status: "ACTIVE",
      accent: "#E43636",
    },
    {
      name: "Adobe Premiere Pro",
      category: "CREATIVE",
      tag: "VIDEO EDITING",
      utility:
        "Product video cutdowns, demo reels, and multimedia presentations[cite: 7].",
      status: "ACTIVE",
      accent: "#E43636",
    },

    // ── Bay 2: Code & Runtime Systems ──
    {
      name: "VS Code & Cursor",
      category: "RUNTIME",
      tag: "IDE / AI ENGINE",
      utility:
        "Primary TypeScript/Next.js development environment and AI agentic workflows[cite: 7, 10].",
      status: "PRIMARY",
      accent: "#E43636",
    },
    {
      name: "Git & GitHub",
      category: "RUNTIME",
      tag: "VERSION CONTROL",
      utility:
        "Branch governance, multi-contributor pull requests, and CI/CD triggers[cite: 10].",
      status: "PRIMARY",
      accent: "#E43636",
    },
    {
      name: "Postman",
      category: "RUNTIME",
      tag: "API TESTING",
      utility:
        "Validating RESTful endpoints, auth handshakes, and Web3 RPC queries.",
      status: "STABLE",
      accent: "#E43636",
    },
    {
      name: "Tailwind CLI",
      category: "RUNTIME",
      tag: "STYLING ENGINE",
      utility:
        "Atomic CSS compiles, JIT compilation, and design token integration[cite: 10].",
      status: "PRIMARY",
      accent: "#E43636",
    },
    {
      name: "React DevTools",
      category: "RUNTIME",
      tag: "PROFILER",
      utility:
        "Tracking re-renders, component tree depths, and framerate bottlenecks[cite: 10].",
      status: "STABLE",
      accent: "#E43636",
    },

    // ── Bay 3: AI & Media Processing Engines ──
    {
      name: "FFmpeg",
      category: "AI & MEDIA",
      tag: "STREAM PROCESSING",
      utility:
        "CLI-driven video slicing, programmatic transcoding, and audio extraction[cite: 10].",
      status: "PRIMARY",
      accent: "#E43636",
    },
    {
      name: "AssemblyAI",
      category: "AI & MEDIA",
      tag: "SPEECH-TO-TEXT",
      utility:
        "Acoustic modeling, transcription APIs, and natural speech tokenization[cite: 10].",
      status: "ACTIVE",
      accent: "#E43636",
    },
    {
      name: "Jupyter / Colab",
      category: "AI & MEDIA",
      tag: "NOTEBOOK WORKSPACE",
      utility:
        "Prototyping NLP models, data scrubbing, and computer vision pipelines.",
      status: "STABLE",
      accent: "#E43636",
    },
    {
      name: "Hugging Face",
      category: "AI & MEDIA",
      tag: "MODEL REPO",
      utility:
        "Testing pre-trained transformer embeddings, tokenizer maps, and datasets.",
      status: "ACTIVE",
      accent: "#E43636",
    },
    {
      name: "Ollama",
      category: "AI & MEDIA",
      tag: "LOCAL LLM INFERENCE",
      utility:
        "Offline prompt experimentation, agent prototyping, and latency benchmarking.",
      status: "STABLE",
      accent: "#E43636",
    },

    // ── Bay 4: Enterprise & Cloud Infrastructure ──
    {
      name: "Vercel",
      category: "CLOUD",
      tag: "EDGE DEPLOYMENT",
      utility:
        "Production hosting, serverless functions, and preview branch deployments[cite: 10].",
      status: "PRIMARY",
      accent: "#E43636",
    },
    {
      name: "Supabase",
      category: "CLOUD",
      tag: "POSTGRES / AUTH",
      utility:
        "Real-time backend data layers, RLS policies, and storage bucket pipelines[cite: 10].",
      status: "PRIMARY",
      accent: "#E43636",
    },
    {
      name: "Zoho Suite",
      category: "CLOUD",
      tag: "CRM & DELUGE",
      utility:
        "Orchestrating CRM, Desk, People, and automated enterprise scripts[cite: 10].",
      status: "ENTERPRISE",
      accent: "#E43636",
    },
    {
      name: "Notion",
      category: "CLOUD",
      tag: "SPEC / DOCS",
      utility:
        "Product requirement documentation, sprint logs, and architecture wikis[cite: 10].",
      status: "STABLE",
      accent: "#E43636",
    },
  ];

  const bays = ["ALL", "CREATIVE", "RUNTIME", "AI & MEDIA", "CLOUD"];

  const filteredTools =
    activeBay === "ALL"
      ? toolsets
      : toolsets.filter((t) => t.category === activeBay);

  return (
    <section
      id="tools"
      className={`relative w-full py-24 px-4 md:px-12 lg:px-20 transition-colors duration-500 select-none overflow-hidden ${
        DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
      }`}
    >
      <div className="w-full flex flex-col gap-12">
        {/* ── Subtitle / Hardware Bay Telemetry ── */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E43636] opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-[#E43636]" />
            </span>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E43636] font-bold">
              05 / Production Workbench
            </p>
          </div>
        </div>

        {/* ── Section Title & Bay Selectors ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none flex items-baseline gap-3 md:gap-5 [&>h1]:inline-block [&>h1]:m-0 [&>h1]:leading-none">
              <span>Tools</span>
              <span className="text-[#E43636]">/</span>
              <SuperText Text="RBK" />
            </div>
            <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#E43636] font-semibold mt-1">
              Software Workbenches, Frameworks & Specialized Utility Engines
            </p>
          </div>

          {/* Bay Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {bays.map((bay) => {
              const isActive = activeBay === bay;
              return (
                <button
                  key={bay}
                  type="button"
                  onClick={() => setActiveBay(bay)}
                  className={`px-3.5 sm:px-4 py-2 font-mono text-[11px] sm:text-xs uppercase tracking-wider rounded-xs border transition-colors cursor-pointer ${
                    isActive
                      ? "border-[#E43636] bg-[#E43636] text-white font-bold"
                      : DarkMode
                        ? "border-neutral-800 bg-[#141414] text-neutral-400 hover:border-neutral-600 hover:text-white"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:text-neutral-900"
                  }`}
                >
                  {bay}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Architectural Hardware Tool Rack ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 w-full"
        >
          <AnimatePresence>
            {filteredTools.map((tool, idx) => (
              <motion.div
                layout
                key={tool.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group relative border rounded-sm p-6 flex flex-col justify-between gap-6 transition-all duration-300 ${
                  DarkMode
                    ? "border-neutral-800 bg-[#161616] hover:border-[#E43636]/70 hover:bg-[#191919]"
                    : "border-neutral-200 bg-white hover:border-[#E43636]/70 hover:shadow-lg hover:shadow-red-500/5"
                }`}
              >
                {/* Red Indicator Tab on Hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E43636] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

                {/* Corner Crosshair Decoration */}
                <span className="absolute top-2 right-2 font-mono text-[10px] text-neutral-500 group-hover:text-[#E43636] transition-colors">
                  +
                </span>

                {/* Top Strip: Role Tag & Utility Status */}
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="tracking-widest uppercase bg-[#E43636]/10 text-[#E43636] border border-[#E43636]/30 px-2 py-0.5 rounded-xs font-bold">
                    {tool.tag}
                  </span>
                  <span className="opacity-40 uppercase tracking-wider font-semibold">
                    {tool.status}
                  </span>
                </div>

                {/* Tool Name & Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight group-hover:text-[#E43636] transition-colors">
                    {tool.name}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-light leading-relaxed ${
                      DarkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}
                  >
                    {tool.utility}
                  </p>
                </div>

                {/* Bottom Architectural Bay Label */}
                <div className="flex items-center justify-between border-t pt-3 border-neutral-500/15 font-mono text-[10px]">
                  <span className="opacity-40 uppercase tracking-widest">
                    BAY: {tool.category}
                  </span>
                  <span className="text-[#E43636] font-bold group-hover:translate-x-1 transition-transform">
                    → READY
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
