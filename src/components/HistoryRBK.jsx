"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuperText from "./SuperText";

export default function HistoryRBK({ DarkMode }) {
  const [activeTab, setActiveTab] = useState(0);

  const dossiers = [
    {
      id: "01",
      period: "JUL 2023 — AUG 2026",
      role: "Product Engineer",
      company: "LiCiCo",
      formerName: "formerly LinkListCircle",
      status: "COMPLETED MISSION",
      tag: "FULL-STACK // WEB3",
      location: "Chandrapur, Maharashtra",
      stats: {
        tenure: "3 YRS",
        scope: "Full-Cycle Product Ownership",
        stackTier: "Frontend & Micro-Services",
      },
      overview:
        "Served as the sole bridge between design and code, owning the entire software product lifecycle from initial Figma wireframing to high-performance frontend deployment and Web3 dApp integration.",
      keyMilestones: [
        {
          tag: "UI/UX & MOTION",
          title: "Frontend & Animation Architecture",
          detail:
            "Architected and deployed responsive, visually rich web applications using Next.js, TypeScript, and Tailwind CSS, leveraging Framer Motion to craft fluid micro-interactions and low-latency viewport transitions.",
        },
        {
          tag: "WEB3 & CRYPTO",
          title: "Blockchain Interface Architecture",
          detail:
            "Engineered the decentralized interface for a Web3 dApp, translating complex asynchronous blockchain state, wallets, and on-chain telemetry into human-accessible consumer flows.",
        },
        {
          tag: "SYSTEM INFRA",
          title: "High-Performance Backend Sync",
          detail:
            "Seamlessly integrated client-side applications with performant backends powered by Node.js and Rust, minimizing rendering bottlenecks and enforcing zero-cumulative layout shifts.",
        },
        {
          tag: "SYSTEMS THINKING",
          title: "Design Tokens & Vector Systems",
          detail:
            "Engineered production-grade design systems in Figma and synced tokenized SVG iconography pipelines straight to frontend component trees.",
        },
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "Rust",
        "Node.js",
        "Blockchain UI",
        "Figma",
        "Design Systems",
      ],
    },
    {
      id: "02",
      period: "DEC 2022 — JUN 2023",
      role: "Junior Web Developer",
      company: "10xGrowth",
      formerName: null,
      status: "COMPLETED MISSION",
      tag: "WORKFLOW AUTOMATION",
      location: "Mumbai, India",
      stats: {
        tenure: "7 MOS",
        scope: "Enterprise Ecosystems",
        stackTier: "Custom Scripting & Web",
      },
      overview:
        "Unified multi-departmental corporate enterprise pipelines and constructed dynamic client-facing web infrastructures.",
      keyMilestones: [
        {
          tag: "INTEGRATION",
          title: "Corporate Workflow Consolidation",
          detail:
            "Connected diverse Zoho enterprise products (CRM, Desk, Mail, People) into unified, event-driven pipelines that automated multi-team handover procedures.",
        },
        {
          tag: "LOGIC ENGINES",
          title: "Custom Deluge Scripting",
          detail:
            "Authored algorithmic business triggers and automated enterprise data routing using Zoho's proprietary Deluge engine.",
        },
        {
          tag: "PRODUCTION WEB",
          title: "Client Web Infrastructure",
          detail:
            "Constructed, styled, and deployed responsive business portals via Zoho Sites to expand organic client discovery and conversion surfaces.",
        },
      ],
      stack: [
        "Deluge",
        "Zoho CRM",
        "Zoho Sites",
        "Workflow Automation",
        "API Integration",
        "Web Designing",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`relative w-full py-24 px-4 md:px-12 lg:px-20 transition-colors duration-500 select-none overflow-hidden ${
        DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
      }`}
    >
      <div className="w-full flex flex-col gap-12">
        {/* ── Technical HUD Header Strip ── */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E43636] opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-[#E43636]" />
            </span>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E43636] font-bold">
              02 / Work Experience
            </p>
          </div>
        </div>

        {/* ── Main Section Heading ── */}
        <div className="flex flex-col gap-2">
          <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none flex items-baseline gap-3 md:gap-5 [&>h1]:inline-block [&>h1]:m-0 [&>h1]:leading-none">
            <span className="transition-transform duration-300 hover:-translate-y-1">
              History
            </span>
            <span className="text-[#E43636]">/</span>
            <SuperText Text="RBK" />
          </div>
          <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#E43636] font-semibold mt-2">
            3+ Years Shipping Production Code & Human Interfaces[cite: 10]
          </p>
        </div>

        {/* ── Top Architectural Navigation Rail ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {dossiers.map((item, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`group relative flex items-center justify-between p-6 border text-left cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? DarkMode
                      ? "border-[#E43636] bg-[#171717]"
                      : "border-[#E43636] bg-white shadow-xl shadow-red-500/5"
                    : DarkMode
                      ? "border-neutral-800 bg-[#131313] hover:border-neutral-700"
                      : "border-neutral-200 bg-[#FBFBFB] hover:border-neutral-300"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="size-10 rounded-sm border border-neutral-500/20 flex items-center justify-center font-mono font-bold text-sm bg-neutral-500/5">
                    <span
                      className={isSelected ? "text-[#E43636]" : "opacity-50"}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-2xl font-black uppercase tracking-tight group-hover:text-[#E43636] transition-colors">
                      {item.company}
                    </span>
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
                      {item.role}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-[9px] tracking-widest uppercase bg-[#E43636] text-white px-2 py-0.5 rounded-xs">
                    {item.status}
                  </span>
                  <span className="font-mono text-[11px] opacity-40 font-semibold">
                    {item.period.split("—")[1] || item.period}
                  </span>
                </div>

                {isSelected && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E43636]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── Active Experience Dossier Display ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`relative border rounded-sm p-6 sm:p-10 transition-colors duration-500 ${
              DarkMode
                ? "border-neutral-800 bg-[#151515]"
                : "border-neutral-200 bg-white shadow-xl shadow-black/5"
            }`}
          >
            {/* Pattern Accent in Header Corner */}
            <div
              className={`absolute top-0 right-0 size-44 bg-[url('/Pattern4.svg')] bg-contain bg-repeat opacity-[0.06] pointer-events-none ${
                DarkMode ? "" : ""
              }`}
            />

            <div className="relative z-10 flex flex-col gap-10">
              {/* Dossier Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-6 border-b pb-8 border-neutral-500/20">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight">
                      {dossiers[activeTab].role}
                    </h3>
                    <div className="size-6 bg-[url('/Pattern4.svg')] bg-contain bg-no-repeat opacity-80" />
                  </div>

                  <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
                    <span className="text-[#E43636] font-bold uppercase tracking-wider">
                      @ {dossiers[activeTab].company}
                    </span>
                    {dossiers[activeTab].formerName && (
                      <span className="text-neutral-500 text-xs italic">
                        ({dossiers[activeTab].formerName})
                      </span>
                    )}
                    <span className="opacity-30">•</span>
                    <span className="text-neutral-400 text-xs">
                      {dossiers[activeTab].location}
                    </span>
                  </div>
                </div>
              </div>

              {/* High-Level Narrative Teardown */}
              <p className="text-base sm:text-xl font-light leading-relaxed max-w-4xl text-neutral-500 dark:text-neutral-500">
                {dossiers[activeTab].overview}
              </p>

              {/* ── Key Milestones & Engineering Deliverables ── */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                  KEY ARCHITECTURAL MILESTONES
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {dossiers[activeTab].keyMilestones.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className={`relative group p-6 border rounded-sm flex flex-col justify-between gap-3 transition-all duration-300 hover:border-[#E43636]/60 hover:-translate-y-0.5 ${
                        DarkMode
                          ? "border-neutral-800 bg-[#1A1A1A]"
                          : "border-neutral-200 bg-[#FAFAFA]"
                      }`}
                    >
                      <span className="absolute top-2 right-2 font-mono text-[10px] text-neutral-500 group-hover:text-[#E43636] transition-colors">
                        +
                      </span>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-[9px] tracking-widest uppercase bg-[#E43636]/10 text-[#E43636] border border-[#E43636]/30 px-2 py-0.5 rounded-xs font-bold">
                            {m.tag}
                          </span>
                        </div>
                        <h4 className="font-display text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-[#E43636] transition-colors">
                          {m.title}
                        </h4>
                        <p className="text-xs sm:text-sm leading-relaxed text-neutral-500">
                          {m.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Technical Stack Matrix ── */}
              <div className="flex flex-col gap-3 pt-6 border-t border-neutral-500/20">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#E43636] font-bold">
                  SYSTEM CORE TECHNOLOGIES & STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {dossiers[activeTab].stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`font-mono text-xs uppercase tracking-wider px-3 py-1.5 rounded-sm border transition-colors ${
                        DarkMode
                          ? "border-neutral-800 bg-[#1D1D1D] text-neutral-300 hover:border-neutral-600"
                          : "border-neutral-200 bg-neutral-100 text-neutral-700 hover:border-neutral-400"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
