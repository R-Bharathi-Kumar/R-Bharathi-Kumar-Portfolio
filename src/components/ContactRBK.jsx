"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SuperText from "./SuperText";

export default function ContactRBK({ DarkMode }) {
  const [copiedKey, setCopiedKey] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  // Live running IST clock with seconds (Chandrapur, Maharashtra)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const socials = [
    {
      label: "LINKEDIN",
      url: "https://www.linkedin.com/in/r-bharathi-kumar-186237195/",
      tag: "NETWORKING",
    },
    {
      label: "INSTAGRAM",
      url: "https://www.instagram.com/fasty_kumar",
      tag: "VISUAL DIARY",
    },
    {
      label: "GITHUB",
      url: "https://github.com/R-Bharathi-Kumar",
      tag: "SOURCE CODE",
    },
    {
      label: "FIGMA",
      url: "https://www.figma.com/@uiuxbharathi",
      tag: "COMMUNITY CANVAS",
    },
  ];

  // Requested Inversion:
  // Light Mode  -> #121212 Background & Light Text
  // Dark Mode   -> #FCFCFC Background & Dark Text
  const sectionBg = DarkMode
    ? "bg-[#FCFCFC] text-[#121212]"
    : "bg-[#121212] text-[#FCFCFC]";
  const borderTone = DarkMode ? "border-neutral-300" : "border-neutral-800";
  const mutedText = DarkMode ? "text-neutral-500" : "text-neutral-400";
  const cardBg = DarkMode ? "bg-white" : "bg-[#161616]";

  return (
    <section
      id="contact"
      className={`relative w-full py-20 md:py-28 px-4 sm:px-8 md:px-12 lg:px-20 transition-colors duration-500 select-none overflow-hidden ${sectionBg} border-r border-[#E43636]`}
    >
      {/* Pattern asset watermark */}
      <div
        className={`absolute right-0 bottom-0 size-64 sm:size-90 bg-[url('/Pattern3.svg')] bg-contain bg-no-repeat pointer-events-none opacity-[0.08] ${
          DarkMode ? "" : ""
        }`}
      />

      <div className="relative z-10 w-full flex flex-col gap-10 md:gap-14">
        {/* ── Subtitle / Telemetry Header ── */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 border-b pb-4 ${borderTone}`}
        >
          <div className="flex items-center gap-3">
            <span className="relative flex size-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E43636] opacity-75" />
              <span className="relative inline-flex rounded-full size-2.5 bg-[#E43636]" />
            </span>
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E43636] font-bold">
              08 / Terminal & Signal
            </p>
          </div>

          {/* Live Clock Strip */}
          <div className="flex items-center gap-2 sm:gap-3 font-mono text-xs tracking-wider">
            <span className={mutedText}>CHANDRAPUR [IST] //</span>
            <span className="font-bold text-[#E43636] tabular-nums">
              {currentTime || "00:00:00 AM"}
            </span>
          </div>
        </div>

        {/* ── Section Title & Open to Work Radar ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-2">
            <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none flex items-baseline gap-3 md:gap-5 [&>h1]:inline-block [&>h1]:m-0 [&>h1]:leading-none">
              <span className="transition-transform duration-300 hover:-translate-y-1">
                Contact
              </span>
              <span className="text-[#E43636]">/</span>
              <SuperText Text="RBK" />
            </div>
            <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#E43636] font-semibold mt-1">
              Initialize Transmission • Open for Global Engagements
            </p>
          </div>

          {/* Status Badge: Open to Work */}
          <div
            className={`p-4 sm:p-5 rounded-sm border ${borderTone} ${cardBg} flex items-center gap-4 w-full sm:w-auto max-w-md shadow-sm shrink-0`}
          >
            <div className="relative flex size-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-3 bg-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-emerald-500">
                ACTIVE RADAR // OPEN TO WORK
              </span>
              <span className="font-display text-sm sm:text-base font-black uppercase tracking-tight">
                UI/UX Designer & Product Designer
              </span>
            </div>
          </div>
        </div>

        {/* ── Main Communication Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* ── Left Pillar: Primary Coordinates & Direct Links (Spans 7 Cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Email Card (With Click to Copy) */}
            <div
              onClick={() => handleCopy("rbharathikumar27@gmail.com", "email")}
              className={`group border rounded-sm p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${borderTone} ${cardBg} hover:border-[#E43636]`}
            >
              <div className="flex flex-col gap-1 min-w-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E43636] font-bold">
                  PRIMARY INBOX
                </span>
                <span className="font-display text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-tight break-all sm:break-normal group-hover:text-[#E43636] transition-colors leading-tight truncate">
                  rbharathikumar27@gmail.com
                </span>
                <span className={`font-mono text-xs ${mutedText}`}>
                  Click to copy direct address
                </span>
              </div>

              <div className="self-start sm:self-center font-mono text-xs uppercase px-3 py-1.5 rounded-xs border border-[#E43636]/40 text-[#E43636] font-bold shrink-0">
                {copiedKey === "email" ? "COPIED ✓" : "COPY"}
              </div>
            </div>

            {/* Phone & Location Split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone Card */}
              <div
                onClick={() => handleCopy("+919422370535", "phone")}
                className={`group border rounded-sm p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between gap-4 ${borderTone} ${cardBg} hover:border-[#E43636]`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#E43636] font-bold">
                    CALL // WHATSAPP
                  </span>
                  <span className="font-mono text-[10px] uppercase text-[#E43636]">
                    {copiedKey === "phone" ? "COPIED ✓" : "COPY"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
                    +91 94223 70535
                  </span>
                  <span className={`font-mono text-[11px] ${mutedText}`}>
                    Mon — Fri • 09:00 — 19:00 IST
                  </span>
                </div>
              </div>

              {/* Location Card */}
              <div
                className={`border rounded-sm p-6 flex flex-col justify-between gap-4 ${borderTone} ${cardBg}`}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E43636] font-bold">
                  BASE HEADQUARTERS
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
                    Chandrapur, Maharashtra
                  </span>
                  <span className={`font-mono text-[11px] ${mutedText}`}>
                    India • 19.9615° N, 79.2961° E
                  </span>
                </div>
                <span className="font-mono text-[10px] text-emerald-500 font-bold uppercase">
                  AVAILABLE REMOTELY WORLDWIDE • Open to Relocation
                </span>
              </div>
            </div>

            {/* Resume Download Feature Capsule */}
            <div
              className={`border rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${borderTone} ${cardBg}`}
            >
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#E43636]">
                    DOC // 2026
                  </span>
                  <span className="opacity-30">•</span>
                  <span className="font-mono text-xs uppercase tracking-wider">
                    OFFICIAL CURRICULUM VITAE
                  </span>
                </div>
                <h4 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight">
                  R Bharathi Kumar — Dossier
                </h4>
                <p className={`text-xs ${mutedText}`}>PDF Format • Resume</p>
              </div>

              <a
                href="/Resume.pdf"
                download="R_Bharathi_Kumar_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest bg-[#E43636] text-white rounded-xs hover:bg-[#c92828] transition-colors shrink-0"
              >
                <span>Download CV</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* ── Right Pillar: Social Registry & Signal Grid (Spans 5 Cols) ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E43636] font-bold">
                NETWORK & SOCIAL DIRECTORY
              </span>

              <div
                className={`flex flex-col divide-y ${borderTone} border-y ${borderTone}`}
              >
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group py-4 sm:py-5 flex items-center justify-between transition-colors hover:text-[#E43636]"
                  >
                    <div className="flex flex-col">
                      <span className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight">
                        {item.label}
                      </span>
                      <span
                        className={`font-mono text-[10px] tracking-widest uppercase ${mutedText}`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <span className="font-mono text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#E43636]">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Closing Colophon */}
            <div
              className={`p-5 sm:p-6 rounded-sm border ${borderTone} font-mono text-[11px] leading-relaxed flex flex-col gap-2 ${
                DarkMode
                  ? "bg-neutral-100/90 text-neutral-600"
                  : "bg-neutral-900/60 text-neutral-400"
              }`}
            >
              <div className="flex items-center justify-between text-[#E43636] font-bold">
                <span>SYSTEM DISPATCH</span>
                <span>STATUS: 200 OK</span>
              </div>
              <p>
                Engineered with Next.js, Framer Motion, and Tailwind CSS. Built
                on architectural principles of precision, typography scale, and
                zero compromise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
