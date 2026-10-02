"use client";

import React from "react";
import { motion } from "framer-motion";
import SuperText from "./SuperText";

export default function AboutRBK({ DarkMode }) {
  const corePillars = [
    {
      title: "UI/UX & Product Design",
      desc: "Intuitive systems, clean design languages, and user-first digital journeys.",
      tag: "DESIGN",
    },
    {
      title: "Full-Stack Product Engineering",
      desc: "Writing clean, production-ready code that turns Figma visions into reality.",
      tag: "CODE",
    },
    {
      title: "Applied AI & Systems Thinking",
      desc: "Integrating intelligent models and scalable architectures that grow seamlessly.",
      tag: "AI LOGIC",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className={`relative w-full py-20 px-4 md:px-12 lg:px-20 transition-colors duration-500 select-none overflow-hidden ${
        DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="w-full flex flex-col gap-12"
      >
        {/* ── Subtitle / Eyebrow ── */}
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <span className="relative flex size-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E43636] opacity-75" />
            <span className="relative inline-flex rounded-full size-2.5 bg-[#E43636]" />
          </span>
          <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E43636] font-bold">
            01 / Who is RBK?
          </p>
        </motion.div>

        {/* ── Two-Column Layout: Left (Content) | Right (Architectural Pattern) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-stretch w-full">
          {/* ── Left Column (Content & Pitch - Spans 7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none flex items-baseline gap-3 md:gap-5 [&>h1]:inline-block [&>h1]:m-0 [&>h1]:leading-none">
                <span className="transition-transform duration-300 hover:-translate-y-1">
                  Meet
                </span>
                <SuperText Text="RBK" />
              </div>
              <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#E43636] font-semibold mt-2">
                Product Designer & Product Engineer
              </p>
            </motion.div>

            {/* Friendly Pitch */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`relative p-6 sm:p-8 xl:p-10 border-l-4 border-[#E43636] transition-colors duration-500 shadow-sm ${
                DarkMode ? "bg-[#161616]" : "bg-[#F5F5F5]"
              }`}
            >
              <div className="absolute top-0 right-0 size-48 bg-[#E43636]/5 blur-3xl pointer-events-none rounded-full" />
              <p className="relative z-10 text-base sm:text-xl md:text-2xl font-light leading-relaxed md:leading-normal">
                Hey there! I’m{" "}
                <span className="font-bold text-[#E43636]">RBK</span> — a
                product designer and engineer who loves turning raw ideas into
                functional, beautiful software. I live right where creative
                UI/UX meets robust production code. Rather than just designing
                how an app looks, I use systems thinking and practical AI to
                make sure everything connects smoothly under the hood, loads
                blazingly fast, and solves everyday problems with a human touch.
              </p>
            </motion.div>
          </div>

          {/* ── Right Column (Full-Height Pattern - Spans 5 Cols) ── */}
          <motion.div
            variants={itemVariants}
            className={`lg:col-span-5 relative min-h-85 lg:min-h-full overflow-hidden flex flex-col justify-between p-6 transition-colors duration-500 group`}
          >
            {/* SVG Background Geometric Pattern */}
            <div
              className={`absolute inset-0 w-full h-full bg-[url('/Pattern.svg')] bg-repeat bg-contain bg-center transition-all duration-700 pointer-events-none ${
                DarkMode ? "opacity-100" : "opacity-100"
              }`}
            />
          </motion.div>
        </div>

        {/* ── Three Strategic Pillars (Full Width Grid) ── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 w-full"
        >
          {corePillars.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 22 },
              }}
              className={`group relative p-7 border flex flex-col justify-between gap-8 transition-colors duration-300 cursor-default ${
                DarkMode
                  ? "border-neutral-800 bg-[#161616] hover:border-[#E43636]/80 hover:bg-[#1a1a1a]"
                  : "border-neutral-200 bg-white hover:border-[#E43636]/80 hover:shadow-lg hover:shadow-red-500/5"
              }`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E43636] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="absolute top-2 right-2 font-mono text-[10px] text-neutral-500 group-hover:text-[#E43636] transition-colors">
                +
              </span>

              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-widest uppercase bg-[#E43636] text-white px-2.5 py-1 rounded-sm shadow-sm group-hover:shadow-md group-hover:shadow-red-500/20 transition-shadow">
                  {item.tag}
                </span>
                <span className="font-mono text-xs font-semibold opacity-40 group-hover:opacity-90 group-hover:text-[#E43636] transition-all">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <p className="font-display text-xl font-bold uppercase tracking-tight mb-2.5 group-hover:text-[#E43636] transition-colors duration-300">
                  {item.title}
                </p>
                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    DarkMode
                      ? "text-neutral-400 group-hover:text-neutral-300"
                      : "text-neutral-600 group-hover:text-neutral-800"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Quick Architectural Highlights Strip ── */}
        <motion.div
          variants={itemVariants}
          className={`flex flex-wrap items-center justify-between gap-6 pt-8 border-t transition-colors duration-500 w-full ${
            DarkMode ? "border-neutral-800" : "border-neutral-200"
          }`}
        >
          <div className="flex flex-col group cursor-default">
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-50 group-hover:opacity-80 transition-opacity">
              Philosophy
            </span>
            <span className="font-mono text-sm sm:text-base font-bold uppercase mt-1 group-hover:text-[#E43636] transition-colors">
              Design + Code + AI Logic
            </span>
          </div>

          <div className="flex flex-col group cursor-default">
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-50 group-hover:opacity-80 transition-opacity">
              Location
            </span>
            <span className="font-mono text-sm sm:text-base font-bold uppercase mt-1 group-hover:text-[#E43636] transition-colors">
              Chandrapur, Maharashtra
            </span>
          </div>

          <div className="flex flex-col group cursor-default">
            <span className="font-mono text-[11px] uppercase tracking-widest opacity-50 group-hover:opacity-80 transition-opacity">
              Current Focus
            </span>
            <span className="font-mono text-sm sm:text-base font-bold uppercase text-[#E43636] mt-1 group-hover:tracking-wider transition-all">
              Product Designer & Product Engineer
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
