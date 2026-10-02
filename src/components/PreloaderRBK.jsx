"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PreloaderRBK({ onComplete, DarkMode }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(() => {
              document.body.style.overflow = "auto";
              if (onComplete) onComplete();
            }, 950);
          }, 450);
          return 100;
        }

        const increment = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 85);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  const getSubMessage = () => {
    if (progress < 42) return "WELCOME TO RBK PORTFOLIO";
    if (progress < 78) return "HAVE A GREAT DAY";
    return "THANK YOU FOR LOOKING";
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader-curtain"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
          className={`fixed inset-0 z-9999 flex flex-col justify-between p-6 sm:p-12 md:p-16 select-none overflow-hidden transition-colors duration-500 ease-in-out ${
            DarkMode
              ? "bg-[#121212] text-[#FCFCFC]"
              : "bg-[#FCFCFC] text-[#121212]"
          }`}
        >
          {/* Ambient Pattern Stamp */}
          <div
            className={`absolute right-20 bottom-30 size-96 bg-[url('/PatternSun.svg')] bg-contain bg-no-repeat pointer-events-none opacity-[0.1] ${
              DarkMode ? "" : ""
            }`}
          />

          {/* Top Telemetry Strip */}
          <div className="relative z-10 flex items-center justify-between border-b pb-4 border-neutral-500/20 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#E43636] animate-pulse" />
              <span className="font-bold text-[#E43636]">
                SYSTEM_BOOT // RBK
              </span>
            </div>
            <span className="opacity-50 hidden sm:inline-block">
              INITIALIZING INTERFACE ASSETS
            </span>
            <span className="text-[#E43636] font-bold">2026.FASTY</span>
          </div>

          {/* Center Stage Typography */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 my-auto">
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none"
              >
                Welcome to <span className="text-[#E43636]">RBK</span> Portfolio
              </motion.h2>
            </div>

            <div className="h-9 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={getSubMessage()}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-[#E43636] font-bold"
                >
                  {getSubMessage()}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Telemetry Rail */}
          <div className="relative z-10 flex flex-col gap-4 pt-6">
            <div className="flex items-end justify-between font-mono">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest opacity-40">
                  SYSTEM READINESS
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                  {progress < 100
                    ? "CALIBRATING VIEWPORT..."
                    : "COMPLETE • DISPATCHING"}
                </span>
              </div>

              <div className="font-display text-4xl sm:text-6xl md:text-7xl font-black tabular-nums tracking-tighter text-[#E43636]">
                {progress.toString().padStart(3, "0")}
                <span className="text-xl sm:text-2xl font-mono ml-1">%</span>
              </div>
            </div>

            <div
              className={`w-full h-1 sm:h-1.5 rounded-full overflow-hidden transition-colors duration-500 ${
                DarkMode ? "bg-neutral-800" : "bg-neutral-200"
              }`}
            >
              <motion.div
                className="h-full bg-[#E43636]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.08 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
