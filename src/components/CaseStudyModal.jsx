"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudyModal({ isOpen, onClose, data, DarkMode }) {
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);

  if (!isOpen || !data || !data.caseStudy) return null;

  const { caseStudy } = data;
  const imageGallery = caseStudy.gallery || [
    { src: data.imgSrc, title: "PRIMARY VIEWPORT CAPTURE" },
  ];
  const activeImage = imageGallery[selectedImgIdx] || imageGallery[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-9999 flex items-center justify-center p-2 sm:p-4 md:p-8 select-none">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`relative z-10 w-full max-w-6xl max-h-[94vh] rounded-xs border overflow-hidden flex flex-col shadow-2xl ${
            DarkMode
              ? "bg-[#111111] border-neutral-800 text-[#FCFCFC]"
              : "bg-[#FFFFFF] border-neutral-300 text-[#121212]"
          }`}
        >
          {/* Top Telemetry Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-neutral-500/20 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#E43636] animate-pulse" />
              <span className="font-bold text-[#E43636] tracking-wider uppercase">
                SYSTEM_AUDIT // CASE_STUDY_DOSSIER: {data.id}
              </span>
              <span className="hidden md:inline-block opacity-40">
                // 2026.PROD
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="size-8 rounded-xs border border-neutral-500/30 flex items-center justify-center hover:bg-[#E43636] hover:text-white transition-colors cursor-pointer group"
              aria-label="Close Case Study"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 transition-transform group-hover:rotate-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* ── Scrollable Body Content with Custom Styled Scrollbar ── */}
          <div
            className={`overflow-y-auto p-5 sm:p-8 md:p-12 flex flex-col gap-10 md:gap-12 md:[&::-webkit-scrollbar]:w-2 ${
              DarkMode
                ? "md:[&::-webkit-scrollbar-track]:bg-[#121212] md:[&::-webkit-scrollbar-thumb]:bg-[#E43636]"
                : "md:[&::-webkit-scrollbar-track]:bg-[#FCFCFC] md:[&::-webkit-scrollbar-thumb]:bg-[#E43636]"
            }`}
          >
            {/* Header / Dossier Overview */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-xs bg-[#E43636]/10 text-[#E43636] border border-[#E43636]/30 font-bold uppercase tracking-wider">
                  {data.discipline}
                </span>
                <span className="opacity-30">•</span>
                <span className="opacity-60 uppercase tracking-widest">
                  {caseStudy.timeline}
                </span>
                <span className="opacity-30">•</span>
                <span className="text-emerald-500 font-bold flex items-center gap-1.5 uppercase">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  VERIFIED DESIGN SYSTEM AUDIT
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight">
                {caseStudy.headline}
              </h2>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-neutral-500/15 font-mono text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="text-[#E43636] font-bold">
                    PRIMARY ROLE:
                  </span>
                  <span>{caseStudy.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#E43636] font-bold">METHODOLOGY:</span>
                  <span>
                    Tokens, Luminance Contrast & Heuristic System Design
                  </span>
                </div>
              </div>

              {caseStudy.overview && (
                <p
                  className={`text-sm sm:text-base font-light leading-relaxed pt-2 ${
                    DarkMode ? "text-neutral-300" : "text-neutral-700"
                  }`}
                >
                  {caseStudy.overview}
                </p>
              )}
            </div>

            {/* ── EXPANDED MULTI-IMAGE GALLERY CANVAS ── */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-xs opacity-60 uppercase tracking-widest px-1">
                <span className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#E43636]" />
                  FIGURE {selectedImgIdx + 1}.0 // {activeImage.title}
                </span>
                <span>
                  IMAGE {selectedImgIdx + 1} OF {imageGallery.length}
                </span>
              </div>

              {/* Main Expanded Image Viewport */}
              <div className="relative w-full rounded-xs border border-neutral-500/25 overflow-hidden bg-black/95 shadow-2xl flex items-center justify-center p-2 sm:p-4 min-h-85">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="w-full max-h-165 object-contain rounded-xs shadow-lg transition-all duration-300"
                />

                {/* Corner Crosshair Reticles */}
                <span className="absolute top-2 left-2 font-mono text-[10px] text-[#E43636] select-none pointer-events-none">
                  +
                </span>
                <span className="absolute top-2 right-2 font-mono text-[10px] text-[#E43636] select-none pointer-events-none">
                  +
                </span>
                <span className="absolute bottom-2 left-2 font-mono text-[10px] text-[#E43636] select-none pointer-events-none">
                  +
                </span>
                <span className="absolute bottom-2 right-2 font-mono text-[10px] text-[#E43636] select-none pointer-events-none">
                  +
                </span>
              </div>

              {/* Gallery Thumbnail Selector Strip (When 2+ Images Exist) */}
              {imageGallery.length > 1 && (
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                  {imageGallery.map((img, iIdx) => {
                    const isSelected = selectedImgIdx === iIdx;
                    return (
                      <button
                        key={iIdx}
                        type="button"
                        onClick={() => setSelectedImgIdx(iIdx)}
                        className={`group p-2 rounded-xs border text-left flex flex-col gap-1 transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#E43636] bg-[#E43636]/10"
                            : DarkMode
                              ? "border-neutral-800 bg-[#161616] hover:border-neutral-700"
                              : "border-neutral-200 bg-neutral-50 hover:border-neutral-300"
                        }`}
                      >
                        <div className="flex items-center justify-between font-mono text-[9px] uppercase">
                          <span
                            className={
                              isSelected
                                ? "text-[#E43636] font-bold"
                                : "opacity-40"
                            }
                          >
                            PLATE // 0{iIdx + 1}
                          </span>
                          {isSelected && (
                            <span className="size-1 rounded-full bg-[#E43636]" />
                          )}
                        </div>
                        <span className="font-display font-black text-xs uppercase tracking-tight truncate">
                          {img.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 01 // PROBLEM STATEMENT */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 border-b pb-2 border-neutral-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-[#E43636]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                  01 // THE CORE UX PROBLEM
                </span>
              </div>
              <p
                className={`text-sm sm:text-base font-light leading-relaxed ${
                  DarkMode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                {caseStudy.problem}
              </p>
            </div>

            {/* 02 // HEURISTICS MATRIX */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 border-b pb-2 border-neutral-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-[#E43636]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                  02 // HEURISTIC DEFECT ANALYSIS (LAWS OF UX & ERGONOMICS)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {caseStudy.heuristics.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-xs border flex flex-col justify-between gap-3 ${
                      DarkMode
                        ? "bg-[#161616] border-neutral-800"
                        : "bg-neutral-50 border-neutral-200"
                    }`}
                  >
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="text-[#E43636] font-bold">
                          [{item.code}]
                        </span>
                        <span className="opacity-40 uppercase">
                          DEFECT RECORD
                        </span>
                      </div>
                      <h4 className="font-display font-black text-sm uppercase tracking-tight">
                        {item.law}
                      </h4>
                      <p className="text-xs font-medium text-[#E43636] leading-snug">
                        {item.summary}
                      </p>
                    </div>

                    <p className="text-xs font-light leading-relaxed text-neutral-400 border-t border-neutral-500/15 pt-3">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 03 // DESIGN SYSTEM SPECS & TOKENS */}
            {caseStudy.tokens && (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b pb-2 border-neutral-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-[#E43636]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                    03 // DESIGN SYSTEM SPECIFICATIONS & COLOR TOKENS
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {caseStudy.tokens.map((token, tIdx) => (
                    <div
                      key={tIdx}
                      className={`p-3.5 rounded-xs border font-mono text-xs flex flex-col gap-1 ${
                        DarkMode
                          ? "bg-[#181818] border-neutral-800"
                          : "bg-neutral-50 border-neutral-200"
                      }`}
                    >
                      <span className="text-[10px] text-[#E43636] font-bold uppercase tracking-wider">
                        {token.label}
                      </span>
                      <span className="font-bold uppercase tracking-tight text-xs sm:text-[13px]">
                        {token.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 04 // ARCHITECTURAL SOLUTION */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 border-b pb-2 border-neutral-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-[#E43636]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                  04 // ARCHITECTURAL RESOLUTION
                </span>
              </div>
              <p
                className={`text-sm sm:text-base font-light leading-relaxed ${
                  DarkMode ? "text-neutral-300" : "text-neutral-700"
                }`}
              >
                {caseStudy.solution}
              </p>
            </div>

            {/* 05 // QUANTIFIABLE OUTCOMES */}
            <div className="flex flex-col gap-3 border-t border-neutral-500/20 pt-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                  05 // QUANTIFIABLE OUTCOMES & IMPACT
                </span>
                <span className="font-mono text-[10px] opacity-40 uppercase">
                  EMPIRICAL BENCHMARKS
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {caseStudy.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-5 rounded-xs border flex flex-col justify-between gap-2 ${
                      DarkMode
                        ? "bg-[#161616] border-neutral-800"
                        : "bg-neutral-50 border-neutral-200"
                    }`}
                  >
                    <span className="font-display text-3xl sm:text-5xl font-black text-[#E43636]">
                      {metric.value}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                        {metric.label}
                      </span>
                      {metric.desc && (
                        <span className="text-[11px] opacity-50 font-light mt-0.5">
                          {metric.desc}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="p-4 sm:p-5 border-t border-neutral-500/20 flex items-center justify-between font-mono text-xs">
            <span className="opacity-50 hidden sm:inline-block">
              RBK PORTFOLIO // VERIFIED CASE STUDY DOSSIER
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-[#E43636] text-white uppercase tracking-wider font-bold rounded-xs hover:bg-[#c92828] transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Dismiss Dossier</span>
              <span>✕</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
