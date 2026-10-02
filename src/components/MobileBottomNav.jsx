"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileBottomNav({
  DarkMode,
  setDarkMode,
  activeSection,
  sections,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleNavigate = (id) => {
    setIsOpen(false);
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeLabel =
    sections.find((s) => s.id === activeSection)?.label || "START";

  return (
    <div className="sm:hidden fixed inset-x-0 bottom-0 z-50 pointer-events-none">
      {/* ── Pop-Up Drawer (Upward Expansion) ── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs pointer-events-auto z-40"
            />

            {/* Expanded Menu Panel */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className={`fixed bottom-20 inset-x-3 z-50 max-h-[75vh] rounded-sm border p-5 flex flex-col justify-between overflow-hidden shadow-2xl pointer-events-auto transition-colors duration-300 ${
                DarkMode
                  ? "bg-[#141414] border-neutral-800 text-[#FCFCFC]"
                  : "bg-white border-neutral-300 text-[#121212]"
              }`}
            >
              {/* Corner Telemetry Reticles */}
              <span className="absolute top-2 left-2 font-mono text-[9px] text-[#E43636]">
                +
              </span>
              <span className="absolute top-2 right-2 font-mono text-[9px] text-[#E43636]">
                +
              </span>

              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b pb-3 border-neutral-500/20 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#E43636] animate-pulse" />
                  <span className="font-bold text-[#E43636]">
                    NAVIGATION MATRIX
                  </span>
                </div>
                <span className="opacity-40 uppercase">CHANDRAPUR [IST]</span>
              </div>

              {/* Waypoint Links Grid */}
              <div className="grid grid-cols-2 gap-2 my-4 overflow-y-auto py-1">
                {sections.map((sec, idx) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => handleNavigate(sec.id)}
                      className={`relative p-3 rounded-xs border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "border-[#E43636] bg-[#E43636]/10 text-[#E43636]"
                          : DarkMode
                            ? "border-neutral-800 bg-[#1A1A1A] text-neutral-300 hover:border-neutral-700"
                            : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300"
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span
                          className={
                            isActive ? "font-bold text-[#E43636]" : "opacity-40"
                          }
                        >
                          0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="size-1.5 rounded-full bg-[#E43636]" />
                        )}
                      </div>
                      <span className="font-display font-black text-sm uppercase tracking-tight mt-2">
                        {sec.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Resume Link & Status */}
              <div className="pt-3 border-t border-neutral-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-[10px]">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-500 font-bold uppercase">
                    OPEN TO WORK
                  </span>
                </div>

                <a
                  href="/resume.pdf"
                  download
                  className="px-3 py-1.5 bg-[#E43636] text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xs hover:bg-[#c92828] transition-colors"
                >
                  CV ↓
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Fixed Floating Bottom Hardware Dock ── */}
      <div className="p-3 pb-4 pointer-events-auto">
        <nav
          className={`w-full h-14 px-3 sm:px-4 rounded-sm border flex items-center justify-between gap-2 shadow-2xl backdrop-blur-md transition-colors duration-300 ${
            DarkMode
              ? "bg-[#141414]/95 border-neutral-800 text-[#FCFCFC]"
              : "bg-white/95 border-neutral-300 text-[#121212]"
          }`}
        >
          {/* Left Brand Unit & Active Telemetry Tag */}
          <button
            type="button"
            onClick={() => handleNavigate("hero")}
            className="flex items-center gap-2 font-mono text-left cursor-pointer group"
          >
            <div className="size-8 rounded-xs bg-[#E43636] flex items-center justify-center text-white font-display font-black text-xs">
              RBK
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xs tracking-tight uppercase leading-none">
                R Bharathi Kumar
              </span>
              <span className="font-mono text-[9px] text-[#E43636] font-bold tracking-widest uppercase mt-0.5">
                ● {activeLabel}
              </span>
            </div>
          </button>

          {/* Right Action Cluster: Theme Switcher & Index Trigger */}
          <div className="flex items-center gap-2">
            {/* Animated Dark / Light Theme Button */}
            <button
              type="button"
              onClick={(e) => setDarkMode(e)}
              aria-label="Toggle Theme"
              className={`size-9 rounded-xs border flex items-center justify-center transition-colors cursor-pointer ${
                DarkMode
                  ? "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
                  : "border-neutral-300 bg-neutral-900 hover:bg-neutral-800"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {DarkMode ? (
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
                ) : (
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
                )}
              </AnimatePresence>
            </button>

            {/* Menu Index Button */}
            <button
              type="button"
              onClick={toggleMenu}
              className={`h-9 px-3.5 rounded-xs border font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all ${
                isOpen
                  ? "border-[#E43636] bg-[#E43636] text-white"
                  : DarkMode
                    ? "border-neutral-700 bg-neutral-800 text-neutral-200"
                    : "border-neutral-300 bg-neutral-100 text-neutral-800"
              }`}
            >
              <span>{isOpen ? "CLOSE" : "INDEX"}</span>
              <span className="font-mono text-xs">{isOpen ? "✕" : "▲"}</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
