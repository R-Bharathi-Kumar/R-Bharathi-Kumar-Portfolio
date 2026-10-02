"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SuperText from "./SuperText";

export default function Banner({ DarkMode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center min-h-screen px-4 md:px-20 transition-colors duration-500 overflow-hidden ${
        DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
      }`}
    >
      {/* ── Right-Side Background Pattern5.svg Watermark ── */}
      <div
        className={`absolute -right-8 top-1/2 -translate-y-1/2 w-72 md:w-md lg:w-152 h-[90%] bg-[url('/Pattern5.svg')] bg-contain bg-no-repeat bg-right pointer-events-none opacity-[0.1] transition-all duration-700 select-none ${
          DarkMode ? "invert" : ""
        }`}
      />

      <div className="relative z-10 w-full">
        <div className="md:pb-6 pb-1 pl-0.5">
          <h1 className="font-mono font-semibold text-[12px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#E43636] mb-4 [animation-delay:100ms] leading-3">
            Product Engineer with AI & Systems Thinking
          </h1>
        </div>

        {/* ── Interactive Name & Expandable Reveal ── */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group cursor-default select-none"
        >
          <div className="font-display text-[22vw] md:text-[16rem] md:leading-42 leading-[14.25vw] uppercase transition-colors duration-500 group-hover:text-[#E43636] flex md:gap-10 gap-4 w-full">
            <span className="font-extrabold">
              <SuperText Text={"R"} />
            </span>
            <div className="flex">
              <span className="font-extrabold">
                <SuperText Text={"B"} />
              </span>
              <SuperText Text={"harathi"} />
            </div>
          </div>

          <div className="font-display text-[22vw] md:text-[16rem] md:leading-42 leading-[14.25vw] uppercase transition-colors duration-500 group-hover:text-[#E43636] flex">
            <span className="font-extrabold">
              <SuperText Text={"K"} />
            </span>
            <SuperText Text={"UMAR"} />
          </div>

          {/* ── Smooth Animated Blockquote Reveal (Mobile: Always Visible, Desktop: Smooth Hover Slide) ── */}
          <div className="mt-4 overflow-hidden">
            {/* Mobile Viewport (Always Expanded) */}
            <div className="block md:hidden">
              <blockquote
                className={`max-w-3xl text-sm leading-snug border-l-2 border-[#E43636] pl-4 transition-colors duration-500 ${
                  DarkMode ? "text-[#FCFCFC]/80" : "text-[#121212]/80"
                }`}
              >
                <p>
                  Product Engineer with a background in Artificial Intelligence,
                  specializing in end-to-end product development, AI
                  integration, system architecture, and technical strategy.
                </p>
              </blockquote>
            </div>

            {/* Desktop Viewport (Framer Motion Height Slide) */}
            <div className="hidden md:block">
              <AnimatePresence initial={false}>
                {isHovered && (
                  <motion.div
                    key="banner-quote"
                    initial={{ height: 0, opacity: 0, y: -6 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -6 }}
                    transition={{
                      height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.3, ease: "linear" },
                      y: { duration: 0.35, ease: "easeOut" },
                    }}
                    className="overflow-hidden"
                  >
                    <blockquote
                      className={`max-w-3xl text-lg lg:text-xl leading-snug border-l-2 border-[#E43636] pl-4 py-1 transition-colors duration-500 ${
                        DarkMode ? "text-[#FCFCFC]/80" : "text-[#121212]/80"
                      }`}
                    >
                      <p>
                        Product Engineer with a background in Artificial
                        Intelligence, specializing in end-to-end product
                        development, AI integration, system architecture, and
                        technical strategy.
                      </p>
                    </blockquote>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ── Lower Bio & Actions ── */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 pt-8 animate-reveal [animation-delay:300ms]">
          <p
            className={`text-lg md:text-2xl font-light leading-snug md:leading-tight transition-colors duration-500 ${
              DarkMode ? "text-[#FCFCFC]/90" : "text-[#121212]/90"
            }`}
          >
            I bridge the gap between design and production code by combining
            scalable UI/UX design, full-stack engineering, and AI-driven
            solutions to create seamless digital products.
          </p>

          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-4 font-mono text-sm font-medium">
              <a
                href="https://www.linkedin.com/in/r-bharathi-kumar-186237195/"
                target="_blank"
                rel="noopener noreferrer"
                className={`uppercase cursor-pointer tracking-widest border-b hover:border-[#E43636] hover:text-[#E43636] transition-all duration-300 ${
                  DarkMode ? "border-[#FCFCFC]" : "border-[#121212]"
                }`}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/R-Bharathi-Kumar"
                target="_blank"
                rel="noopener noreferrer"
                className={`uppercase cursor-pointer tracking-widest border-b hover:border-[#E43636] hover:text-[#E43636] transition-all duration-300 ${
                  DarkMode ? "border-[#FCFCFC]" : "border-[#121212]"
                }`}
              >
                GitHub
              </a>
              <a
                href="https://www.figma.com/@uiuxbharathi"
                target="_blank"
                rel="noopener noreferrer"
                className={`uppercase cursor-pointer tracking-widest border-b hover:border-[#E43636] hover:text-[#E43636] transition-all duration-300 ${
                  DarkMode ? "border-[#FCFCFC]" : "border-[#121212]"
                }`}
              >
                Figma
              </a>
            </div>

            <p
              className={`text-base uppercase font-mono font-black max-w-xs leading-4.5 transition-colors duration-500 ${
                DarkMode ? "text-[#FCFCFC]/60" : "text-[#121212]/60"
              }`}
            >
              Currently: Product Engineer at LinkListCircle, Chandrapur,
              Maharashtra.
            </p>

            <div className="mt-2 flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:w-auto">
              <a
                href="/resume.pdf"
                download="R_Bharathi_Kumar_Resume.pdf"
                className={`inline-flex items-center justify-center gap-2 border px-5 py-3 sm:py-2.5 font-mono text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
                  DarkMode
                    ? "border-[#FCFCFC] hover:bg-[#FCFCFC] hover:text-[#121212]"
                    : "border-[#121212] hover:bg-[#121212] hover:text-[#FCFCFC]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Get Resume
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 border px-5 py-3 sm:py-2.5 font-mono text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
                  DarkMode
                    ? "border-[#FCFCFC] hover:bg-[#FCFCFC] hover:text-[#121212]"
                    : "border-[#121212] hover:bg-[#121212] hover:text-[#FCFCFC]"
                }`}
              >
                Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
