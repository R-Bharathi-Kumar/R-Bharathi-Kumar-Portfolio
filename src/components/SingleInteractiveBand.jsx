"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function DefaultStarIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`size-10 sm:size-14 md:size-20 lg:size-24 shrink-0 transition-colors duration-500 ${className}`}
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

export default function SingleInteractiveBand({
  TextInside = "PROJECTS",
  icon: CustomIcon,
  reverse = false,
  duration = 20,
  hoverDuration = 55,
  DarkMode = false,
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Repeat the single word enough times to fill any ultra-wide screen seamlessly
  const wordUnits = Array.from({ length: 6 }, (_, index) => index);

  // Dynamic Theme Colors:
  // Normal state: Solid Red background with white text
  // Hovered state: Clean high-contrast inversion with glowing red typography
  const getContainerStyles = () => {
    if (isHovered) {
      return DarkMode
        ? "bg-[#FCFCFC] text-[#E43636] border-[#FCFCFC]"
        : "bg-[#121212] text-[#E43636] border-[#121212]";
    }
    return "bg-[#E43636] text-[#FCFCFC] border-[#E43636]";
  };

  const activeColor = isHovered ? "text-[#E43636]" : "text-[#FCFCFC]";

  // One fully populated track block
  const trackContent = (
    <div className="flex shrink-0 items-center">
      {wordUnits.map((_, idx) => (
        <div
          key={idx}
          className="flex shrink-0 items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 mx-6 sm:mx-10 md:mx-14 lg:mx-18"
        >
          {/* Display Single Word Heading */}
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight whitespace-nowrap transition-colors duration-500 leading-none">
            {TextInside}
          </h2>

          {/* Separator Icon: accepts custom SVG prop or falls back to sharp 4-point star */}
          <div className="shrink-0 transition-transform duration-500 group-hover:rotate-45">
            {CustomIcon ? (
              React.isValidElement(CustomIcon) ? (
                React.cloneElement(CustomIcon, {
                  className: `size-10 sm:size-14 md:size-20 lg:size-24 shrink-0 transition-colors duration-500 ${activeColor} ${
                    CustomIcon.props.className || ""
                  }`,
                })
              ) : (
                <CustomIcon
                  className={`size-10 sm:size-14 md:size-20 lg:size-24 shrink-0 transition-colors duration-500 ${activeColor}`}
                />
              )
            ) : (
              <DefaultStarIcon className={activeColor} />
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative w-full max-w-full overflow-hidden py-4 md:py-8 select-none">
      <div
        className={`group flex w-full overflow-hidden py-3 sm:py-5 md:py-6 cursor-pointer border-y-2 transition-colors duration-500 ${getContainerStyles()}`}
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
          {/* Duplicating the track gives a continuous 0% -> -50% loop */}
          {trackContent}
          {trackContent}
        </motion.div>
      </div>
    </div>
  );
}
