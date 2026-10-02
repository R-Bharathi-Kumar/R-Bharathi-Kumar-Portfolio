"use client";

import React from "react";
import SuperText from "./SuperText";

export default function LeftNavbar({ DarkMode, activeSection = "hero" }) {
  const navItems = [
    { href: "#hero", id: "hero", label: "Start" },
    { href: "#about", id: "about", label: "About" },
    { href: "#experience", id: "experience", label: "History" },
    { href: "#projects", id: "projects", label: "Work" },
    { href: "#skills", id: "skills", label: "Skills" },
    { href: "#tools", id: "tools", label: "Tools" },
    { href: "#achievements", id: "achievements", label: "Wins" },
    { href: "#education", id: "education", label: "Studies" },
    { href: "#contact", id: "contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-screen w-24 border-r border-[#E43636] flex flex-col items-center py-12 z-40 transition-colors duration-500 ease-in-out select-none ${
        DarkMode ? "bg-[#121212]" : "bg-[#FCFCFC]"
      }`}
    >
      {/* Brand Logo */}
      <a
        href="/"
        className={`font-display text-6xl mb-auto tracking no-underline hover:text-[#E43636] transition-colors duration-300 ${
          DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
        }`}
      >
        <SuperText Text={"RBK"} />
      </a>

      {/* Nav Dots & Tooltips */}
      <div className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a key={item.id} href={item.href} className="group relative block">
              {/* Dot Indicator */}
              <div
                className={`size-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#E43636] scale-150"
                    : DarkMode
                      ? "bg-[#FCFCFC]/20 group-hover:scale-150 group-hover:bg-[#FCFCFC]"
                      : "bg-[#121212]/20 group-hover:scale-150 group-hover:bg-[#121212]"
                }`}
              />

              {/* Hover Tooltip Label */}
              <span
                className={`pointer-events-none absolute left-10 top-1/2 -translate-y-1/2 text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase tracking-widest whitespace-nowrap px-2 py-1 shadow-sm border ${
                  DarkMode
                    ? "bg-[#1a1a1a] text-[#FCFCFC] border-neutral-800"
                    : "bg-[#FCFCFC] text-[#121212] border-neutral-200"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Bottom Profile Pic Unit */}
      <div className="mt-auto flex flex-col items-center">
        <div
          className={`group relative size-14 rounded-xs border p-0.5 transition-all duration-300 ${
            DarkMode
              ? "border-neutral-800 bg-[#161616] hover:border-[#E43636]"
              : "border-neutral-300 bg-white hover:border-[#E43636]"
          }`}
        >
          {/* Square Profile Image */}
          <div className="relative w-full h-full overflow-hidden rounded-xs bg-neutral-500/10">
            <img
              src="/PortfoiloPic.png"
              alt="R Bharathi Kumar"
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/Pattern4.svg";
                e.currentTarget.className = "w-full h-full object-contain p-1";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
