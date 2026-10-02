"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RightNavbar({
  setDarkMode,
  DarkMode,
  activeSection = "hero",
}) {
  const [toast, setToast] = useState(null);

  const contactData = {
    email: "rbharathikumar27@gmail.com",
    phone: "+91 94223 70535",
  };

  const sectionNameMap = {
    hero: "START",
    about: "ABOUT",
    experience: "HISTORY",
    projects: "WORK",
    skills: "SKILLS",
    tools: "TOOLS",
    achievements: "WINS",
    education: "STUDIES",
    contact: "CONTACT",
  };

  const activeLabel = sectionNameMap[activeSection] || "START";

  const handleCopy = (type, value) => {
    navigator.clipboard.writeText(value);
    setToast({
      label: type === "email" ? "Email Copied" : "Phone Copied",
      value,
    });

    setTimeout(() => {
      setToast((curr) => (curr?.value === value ? null : curr));
    }, 3200);
  };

  return (
    <>
      {/* ── Water Flowing Liquid Popup (Top Center) ── */}
      <AnimatePresence>
        {toast && (
          <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex justify-center w-full px-4">
            <motion.div
              layout
              initial={{ opacity: 0, y: -25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.95,
                transition: { duration: 0.2 },
              }}
              transition={{
                type: "spring",
                stiffness: 420,
                damping: 26,
              }}
              className="relative overflow-hidden rounded-full px-6 py-2.5 shadow-[0_12px_40px_rgba(228,54,54,0.35)] border border-red-400/40 select-none bg-[#E43636]"
            >
              {/* Water Waves SVG Layer */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-[-50%] w-[200%] h-14 fill-[#f35252]/40"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                >
                  <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
                </motion.svg>
                <motion.svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="absolute -bottom-3 right-[-50%] w-[200%] h-16 fill-[#ba2424]/40"
                  animate={{ x: ["0%", "50%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 5.5,
                    ease: "linear",
                  }}
                >
                  <path d="M0,40 C300,110 500,-20 700,60 C900,120 1050,-10 1200,30 L1200,120 L0,120 Z" />
                </motion.svg>
                <motion.svg
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-[-30%] w-[200%] h-10 fill-white/15"
                  animate={{ x: ["-20%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.2,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  }}
                >
                  <path d="M0,20 C200,70 450,10 650,55 C850,90 1050,30 1200,60 L1200,120 L0,120 Z" />
                </motion.svg>
              </div>

              {/* Toast Content */}
              <div className="relative z-10 flex items-center gap-3 text-[#FCFCFC]">
                <div className="size-5 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-3 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="font-bold uppercase tracking-wider text-white">
                    {toast.label}
                  </span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/95 font-medium tracking-tight">
                    {toast.value}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Right Fixed Navbar Rail ── */}
      <div className="fixed top-0 h-screen w-18 z-40 select-none">
        <div
          className={`flex h-full w-full flex-col items-center justify-between py-10 transition-colors duration-500 ease-in-out ${
            DarkMode ? "bg-[#FCFCFC]" : "bg-[#121212]"
          }`}
        >
          {/* Top Section: Active Page Indicator */}
          <div className="flex flex-col items-center gap-3">
            <div className="size-2.5 rounded-full bg-[#E43636] animate-pulse" />
            <div className="h-28 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeLabel}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`font-mono text-[14px] font-bold tracking-[0.40em] uppercase [writing-mode:vertical-lr] rotate-180 transition-colors duration-500 ease-in-out ${
                    DarkMode ? "text-[#121212]" : "text-[#FCFCFC]"
                  }`}
                >
                  {activeLabel}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Section: Actions & Theme Switcher */}
          <div className="flex flex-col items-center gap-6 mt-auto">
            <div className="flex flex-col items-center gap-3">
              {/* Email Button */}
              <button
                type="button"
                onClick={() => handleCopy("email", contactData.email)}
                aria-label="Copy Email"
                className={`flex size-9 items-center justify-center rounded-full border transition-all duration-300 hover:border-[#E43636] hover:scale-105 active:scale-95 cursor-pointer ${
                  DarkMode
                    ? "border-neutral-300 text-[#121212] hover:bg-[#121212] hover:text-[#FCFCFC]"
                    : "border-neutral-800 text-[#FCFCFC] hover:bg-[#FCFCFC] hover:text-[#121212]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </button>

              {/* Phone Button */}
              <button
                type="button"
                onClick={() => handleCopy("phone", contactData.phone)}
                aria-label="Copy Phone"
                className={`flex size-9 items-center justify-center rounded-full border transition-all duration-300 hover:border-[#E43636] hover:scale-105 active:scale-95 cursor-pointer ${
                  DarkMode
                    ? "border-neutral-300 text-[#121212] hover:bg-[#121212] hover:text-[#FCFCFC]"
                    : "border-neutral-800 text-[#FCFCFC] hover:bg-[#FCFCFC] hover:text-[#121212]"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </button>
            </div>

            {/* Smooth Vertical Capsule Toggle */}
            <div className="flex flex-col items-center select-none">
              <button
                type="button"
                onClick={() => setDarkMode(!DarkMode)}
                aria-label={
                  DarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
                aria-pressed={DarkMode}
                className="relative flex h-18 w-9 items-center justify-center cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 rounded-full border"
                  animate={{
                    backgroundColor: DarkMode ? "#181818" : "#EDEDED",
                    borderColor: DarkMode ? "#2A2A2A" : "#D8D8D8",
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                <motion.div
                  className="relative z-10 flex size-7 items-center justify-center rounded-full bg-[#E43636]"
                  animate={{
                    y: DarkMode ? 18 : -18,
                    boxShadow: DarkMode
                      ? "0 4px 10px rgba(0,0,0,0.35)"
                      : "0 4px 10px rgba(228,54,54,0.25)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 32,
                    mass: 0.65,
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {DarkMode ? (
                      <motion.svg
                        key="moon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-3.5 text-white"
                        initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
                        transition={{ duration: 0.18 }}
                      >
                        <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        key="sun"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-3.5 text-white"
                        initial={{ opacity: 0, scale: 0.6, rotate: 45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.6, rotate: -45 }}
                        transition={{ duration: 0.18 }}
                      >
                        <circle cx="12" cy="12" r="4" fill="currentColor" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                      </motion.svg>
                    )}
                  </AnimatePresence>
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
