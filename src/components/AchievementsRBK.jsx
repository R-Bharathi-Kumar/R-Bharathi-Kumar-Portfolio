"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuperText from "./SuperText";

export default function AchievementsRBK({ DarkMode }) {
  const [isStealthHovered, setIsStealthHovered] = useState(false);

  const certifications = [
    {
      index: "01",
      serial: "SEC_ID // 8829-GA",
      title: "Google Data Analytics",
      authority: "Google / Coursera",
      field: "Data Architecture & Heuristic Modeling",
      issued: "VERIFIED CREDENTIAL",
      summary:
        "Systemized training in analytical query formulation, data cleaning, statistical variance modeling, and executive-level visual dashboard architecture.",
      url: "https://www.coursera.org/account/accomplishments/professional-cert/GDJMQMT2CXG7",
      tags: ["SQL", "Data Modeling", "Dashboard Architecture", "Statistics"],
    },
    {
      index: "02",
      serial: "SEC_ID // 4091-RN",
      title: "React Native: The Practical Guide",
      authority: "Udemy / Academind",
      field: "Cross-Platform Mobile Systems",
      issued: "VERIFIED CREDENTIAL",
      summary:
        "Deep structural architecture across native mobile component lifecycles, gesture responder event systems, device hardware APIs, and high-framerate state pipelines.",
      url: "https://www.udemy.com/certificate/UC-ccbad035-df74-489f-83cf-0dc4837c53bf/",
      tags: ["React Native", "Native Bridges", "Mobile UX", "State Engines"],
    },
    {
      index: "03",
      serial: "SEC_ID // 1104-AI",
      title: "AI Video Summarizer Research",
      authority: "RTM Nagpur University / Academic Review",
      field: "Applied NLP & Computer Vision",
      issued: "PUBLISHED WORK",
      summary:
        "Authored academic research detailing programmatic multi-media keyframe slicing via speech-to-text semantic analysis and automated FFmpeg video compression.",
      url: "https://www.scribd.com/document/642391721/AI-based-Video-Summarization-Using-FFmpeg-and-NLP",
      tags: ["Research Paper", "NLP Algorithms", "Computer Vision", "FFmpeg"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="achievements"
      className={`relative w-full py-24 px-4 md:px-12 lg:px-20 transition-colors duration-500 select-none overflow-hidden ${
        DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full flex flex-col gap-12"
      >
        {/* ── Technical Header Telemetry ── */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E43636] opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-[#E43636]" />
            </span>
            <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E43636] font-bold">
              06 / Verified Honors & Stealth Drops
            </p>
          </div>
        </motion.div>

        {/* ── Section Title ── */}
        <motion.div variants={itemVariants} className="flex flex-col gap-2">
          <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none flex items-baseline gap-3 md:gap-5 [&>h1]:inline-block [&>h1]:m-0 [&>h1]:leading-none">
            <span className="transition-transform duration-300 hover:-translate-y-1">
              Wins
            </span>
            <span className="text-[#E43636]">/</span>
            <SuperText Text="RBK" />
          </div>
          <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#E43636] font-semibold mt-1">
            Academic Research, Verified Accreditations & Confidential Product
            Deliveries
          </p>
        </motion.div>

        {/* ── FEATURED: The Level-04 Redacted Stealth Product Card ── */}
        <motion.div
          variants={itemVariants}
          onMouseEnter={() => setIsStealthHovered(true)}
          onMouseLeave={() => setIsStealthHovered(false)}
          className={`group relative border rounded-sm p-6 sm:p-10 lg:p-12 transition-all duration-500 overflow-hidden cursor-crosshair ${
            DarkMode
              ? "border-neutral-800 bg-[#141414] hover:border-[#E43636]"
              : "border-neutral-200 bg-white hover:border-[#E43636] hover:shadow-2xl hover:shadow-red-500/10"
          }`}
        >
          {/* Subtle Repeat Pattern Background */}
          <div
            className={`absolute -right-12 -bottom-12 size-72 bg-[url('/Pattern.svg')] bg-contain bg-no-repeat pointer-events-none transition-all duration-700 ${
              DarkMode ? "opacity-[0.04] invert" : "opacity-[0.05]"
            } group-hover:scale-110 group-hover:opacity-[0.14]`}
          />

          {/* Animated Red Scanline Laser across card top */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#E43636] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

          {/* Background Scanner Glow */}
          <motion.div
            animate={{
              opacity: isStealthHovered ? 0.08 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-radial-gradient from-[#E43636] to-transparent pointer-events-none"
          />

          <div className="relative z-10 flex flex-col gap-8">
            {/* Top Vault Status Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-6 border-neutral-500/20">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="font-bold text-[#E43636]">
                  CLASSIFIED FILE // 00_ZERO_TO_ONE
                </span>
                <span className="opacity-30">•</span>
                <span className="opacity-50 uppercase tracking-widest hidden sm:inline-block">
                  STATUS: PRODUCTION SHIPPED
                </span>
              </div>

              {/* Shh! / NDA Dynamic Interactive Capsule */}
              <motion.div
                animate={{
                  scale: isStealthHovered ? 1.04 : 1,
                  backgroundColor: isStealthHovered
                    ? "#E43636"
                    : DarkMode
                      ? "#1E1E1E"
                      : "#F3F3F3",
                  color: isStealthHovered
                    ? "#FFFFFF"
                    : DarkMode
                      ? "#E5E5E5"
                      : "#171717",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-xs border border-transparent font-mono text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <span className="text-base leading-none">
                  {isStealthHovered ? "🤫" : "🔒"}
                </span>
                <span>
                  {isStealthHovered
                    ? "Shh... But Cant Tell About The Product!"
                    : "ACTIVE CONFIDENTIALITY // NDA"}
                </span>
              </motion.div>
            </div>

            {/* Core Achievement Headline */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[10px] tracking-widest uppercase bg-[#E43636] text-white px-2 py-0.5 rounded-xs font-bold">
                  AUTONOMOUS EXECUTION
                </span>
                <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">
                  END-TO-END TIMELINE
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight group-hover:text-[#E43636] transition-colors">
                Designed & Engineered a Complete Product: From Scratch to
                Finished Commercial Launch
              </h3>
            </div>

            {/* Narrative Teardown with Subtly Redacted Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <p
                className={`lg:col-span-8 text-sm sm:text-lg font-light leading-relaxed transition-colors ${
                  DarkMode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                Took sole product ownership of an ambiguous problem space,
                directing user research, architecting full Figma design systems
                with custom tokens, validating high-velocity prototypes, and
                authoring production frontend systems with zero design debt.
                Shipped directly into live user hands.
              </p>

              {/* Stealth Telemetry Metadata Panel */}
              <div
                className={`lg:col-span-4 p-4 border rounded-xs flex flex-col gap-2 font-mono text-xs transition-colors ${
                  DarkMode
                    ? "border-neutral-800 bg-[#1A1A1A]/80 text-neutral-300"
                    : "border-neutral-200 bg-neutral-50 text-neutral-700"
                }`}
              >
                <div className="flex justify-between items-center pb-2 border-b border-neutral-500/15">
                  <span className="opacity-50 text-[10px]">OWNERSHIP:</span>
                  <span className="font-bold text-[#E43636]">100% 0-TO-1</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-neutral-500/15">
                  <span className="opacity-50 text-[10px]">LIFECYCLE:</span>
                  <span className="font-bold">SCRATCH → RELEASE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-50 text-[10px]">DISCLOSURE:</span>
                  <span className="text-amber-500 font-bold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-amber-500 animate-ping" />
                    RESTRICTED
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Verification Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-neutral-500/20 font-mono text-[10px]">
              {[
                "ZERO_TO_ONE",
                "DESIGN_SYSTEM_TOKENS",
                "INTERACTION_FLOWS",
                "PRODUCTION_FRONTEND",
                "COMMERCIAL_DEPLOYED",
              ].map((pill, pIdx) => (
                <span
                  key={pIdx}
                  className={`px-3 py-1 rounded-xs border tracking-wider transition-colors ${
                    DarkMode
                      ? "border-neutral-800 bg-[#1B1B1B] text-neutral-400 group-hover:border-neutral-700 group-hover:text-neutral-200"
                      : "border-neutral-200 bg-neutral-100 text-neutral-600 group-hover:border-neutral-300 group-hover:text-neutral-900"
                  }`}
                >
                  #{pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── 3-Column Brutalist Verification Ledger ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {certifications.map((cert) => (
            <motion.div
              key={cert.index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`group relative border rounded-sm p-6 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300 ${
                DarkMode
                  ? "border-neutral-800 bg-[#161616] hover:border-[#E43636] hover:bg-[#181818]"
                  : "border-neutral-200 bg-white hover:border-[#E43636] hover:shadow-xl hover:shadow-red-500/5"
              }`}
            >
              {/* Corner Reticles */}
              <span className="absolute top-2 left-2 font-mono text-[9px] text-neutral-500 group-hover:text-[#E43636] transition-colors">
                +
              </span>
              <span className="absolute top-2 right-2 font-mono text-[9px] text-neutral-500 group-hover:text-[#E43636] transition-colors">
                +
              </span>

              {/* Certificate Header */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="font-bold text-[#E43636] tracking-wider">
                    {cert.serial}
                  </span>
                  <span className="opacity-40 uppercase tracking-widest">
                    {cert.issued}
                  </span>
                </div>

                <div className="flex flex-col gap-0.5 mt-1">
                  <h4 className="font-display text-2xl font-black uppercase tracking-tight group-hover:text-[#E43636] transition-colors">
                    {cert.title}
                  </h4>
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    @ {cert.authority}
                  </span>
                </div>
              </div>

              {/* Description & Domain */}
              <div className="flex flex-col gap-3">
                <p className="font-mono text-[11px] text-[#E43636] uppercase tracking-widest font-bold">
                  // {cert.field}
                </p>
                <p
                  className={`text-xs sm:text-sm font-light leading-relaxed ${
                    DarkMode ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {cert.summary}
                </p>
              </div>

              {/* Stack / Focus Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cert.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-xs border transition-colors ${
                      DarkMode
                        ? "border-neutral-800 bg-[#202020] text-neutral-400"
                        : "border-neutral-200 bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Action Ledger Link with New Tab Attributes */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-500/15 font-mono text-xs">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#E43636] hover:underline"
                >
                  <span>Verify Record</span>
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>

                <div className="flex items-center gap-1.5 font-mono text-[10px] opacity-40">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  <span>ON_CHAIN_SYNC</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
