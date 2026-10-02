"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function RocketIcon({ className = "text-[#FCFCFC]" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`w-7 h-7 md:w-8 md:h-8 shrink-0 ${className} transition-colors duration-500`}
      fill="none"
    >
      <path
        d="M7 11.2947C12.284 1.44656 18.8635 1.333 21.4928 2.50724C22.667 5.1365 22.5534 11.716 12.7053 17C12.6031 16.4129 12.0352 14.8749 10.5801 13.4199C9.12512 11.9648 7.58712 11.3969 7 11.2947Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 16.8C16.0428 17.7334 16.2609 19.4069 16.5439 21C16.5439 21 20.8223 18.0481 18.0856 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.19998 9.99987C6.26664 7.95709 4.59305 7.73899 3 7.45601C3 7.45601 5.95194 3.17753 10 5.91431"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.20866 13.9998C5.57677 14.6317 4.50255 16.4642 5.26082 18.739C7.53564 19.4973 9.36813 18.4231 10 17.7912"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0952 7.753C18.0952 6.7328 17.2682 5.90578 16.248 5.90578C15.2278 5.90578 14.4008 6.7328 14.4008 7.753C14.4008 8.77319 15.2278 9.60022 16.248 9.60022C17.2682 9.60022 18.0952 8.77319 18.0952 7.753Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function ContinuousMarquee({
  items,
  reverse = false,
  duration = 18,
  hoverDuration = 45,
  className = "",
  iconColor = "text-[#FCFCFC]",
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Single track template
  const track = (
    <div className="flex shrink-0 items-center">
      {items.map((text, idx) => (
        <div
          key={idx}
          className="flex shrink-0 items-center gap-6 md:gap-10 mx-6 md:mx-10"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide whitespace-nowrap">
            {text}
          </span>
          <RocketIcon className={iconColor} />
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`flex w-full overflow-hidden select-none py-3.5 md:py-4.5 transition-colors duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex shrink-0 will-change-transform"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: isHovered ? hoverDuration : duration,
            ease: "linear",
          },
        }}
      >
        {/* Render duplicate tracks so the cycle is completely gapless */}
        {track}
        {track}
      </motion.div>
    </div>
  );
}

export default function MarqueeBands({ DarkMode = false }) {
  const band1Items = [
    "UI/UX Designer",
    "Product Designer",
    "AI Product Designer",
    "Product Engineer",
    "AI Product Engineer",
    "Systems Thinking",
    "Product Strategy",
    "Design Systems Architect",
    "AI Ethics, Bias & Safety Product Designer",
    "AI WorkFlows",
  ];

  const band2Items = [
    "Figma",
    "Adobe Illustrator",
    "Affinity",
    "Framer",
    "Next.js",
    "React.js",
    "TailwindCSS",
    "Framer Motion",
    "Three.js",
    "Blender",
    "Photoshop",
    "After Effects",
    "Premiere Pro",
  ];

  return (
    <div className="relative w-full max-w-full overflow-hidden py-6 flex flex-col gap-4 select-none">
      {/* ── Band 1: Right to Left (Classic Red) ── */}
      <ContinuousMarquee
        items={band1Items}
        reverse={false}
        duration={28}
        hoverDuration={60}
        className="bg-[#E43636] text-[#FCFCFC]"
        iconColor="text-[#FCFCFC]"
      />

      {/* ── Band 2: Left to Right (Dynamic Light/Dark) ── */}
      <ContinuousMarquee
        items={band2Items}
        reverse={true}
        duration={24}
        hoverDuration={60}
        className={
          DarkMode
            ? "bg-[#FCFCFC] text-[#121212]"
            : "bg-[#121212] text-[#FCFCFC]"
        }
        iconColor={DarkMode ? "text-[#121212]" : "text-[#FCFCFC]"}
      />
    </div>
  );
}
