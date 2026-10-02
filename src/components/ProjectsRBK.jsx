"use client";

import React, { useState, useEffect } from "react";
import SuperText from "./SuperText";
import CaseStudyModal from "./CaseStudyModal";

// Modular Project Component Imports
import InstagramCaseStudy from "./Projects/InstagramCaseStudy";
import ThreadsCaseStudy from "./Projects/ThreadsCaseStudy";
import ZomatoCaseStudy from "./Projects/ZomatoCaseStudy"; // <-- IMPORT HERE
import VoraFinanceProject from "./Projects/VoraFinanceProject";
import FluidScrollProject from "./Projects/FluidScrollProject";
import DeepReadProject from "./Projects/DeepReadProject";
import CustomIconProject from "./Projects/CustomIconProject";
import LiBuroguProject from "./Projects/LiBuroguProject";
import BallotBlockProject from "./Projects/BallotBlockProject";
import VideoSummarizerProject from "./Projects/VideoSummarizerProject";

export default function ProjectsRBK({ DarkMode }) {
  const [openId, setOpenId] = useState("01");
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Lock background scroll when Case Study Modal is open
  useEffect(() => {
    if (activeCaseStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCaseStudy]);

  const toggleRow = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <section
        id="projects"
        className={`relative w-full py-24 px-4 md:px-12 lg:px-20 transition-colors duration-500 select-none overflow-hidden ${
          DarkMode ? "text-[#FCFCFC]" : "text-[#121212]"
        }`}
      >
        <div className="w-full flex flex-col gap-12">
          {/* Subtitle / Telemetry Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E43636] opacity-75" />
                <span className="relative inline-flex rounded-full size-2.5 bg-[#E43636]" />
              </span>
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E43636] font-bold">
                03 / Selected Works & UI/UX Case Studies
              </p>
            </div>
          </div>

          {/* Section Title */}
          <div className="flex flex-col gap-2">
            <div className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-none flex items-baseline gap-3 md:gap-5 [&>h1]:inline-block [&>h1]:m-0 [&>h1]:leading-none">
              <span className="transition-transform duration-300 hover:-translate-y-1">
                Works
              </span>
              <span className="text-[#E43636]">/</span>
              <SuperText Text="RBK" />
            </div>
            <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-widest text-[#E43636] font-semibold mt-2">
              Click Any Project Row to Inspect Architecture & UI/UX Case Study
            </p>
          </div>

          {/* Click-Drop Accordion List */}
          <div className="flex flex-col divide-y divide-neutral-500/20 border-y border-neutral-500/20 w-full pt-4">
            <ZomatoCaseStudy
              isOpen={openId === "01"}
              onToggle={() => toggleRow("01")}
              onOpenCaseStudy={(data) => setActiveCaseStudy(data)}
              DarkMode={DarkMode}
            />

            <ThreadsCaseStudy
              isOpen={openId === "02"}
              onToggle={() => toggleRow("02")}
              onOpenCaseStudy={(data) => setActiveCaseStudy(data)}
              DarkMode={DarkMode}
            />

            <InstagramCaseStudy
              isOpen={openId === "03"}
              onToggle={() => toggleRow("03")}
              onOpenCaseStudy={(data) => setActiveCaseStudy(data)}
              DarkMode={DarkMode}
            />

            <LiBuroguProject
              isOpen={openId === "04"}
              onToggle={() => toggleRow("04")}
              onOpenCaseStudy={(data) => setActiveCaseStudy(data)}
              DarkMode={DarkMode}
            />

            <VoraFinanceProject
              isOpen={openId === "05"}
              onToggle={() => toggleRow("05")}
              DarkMode={DarkMode}
            />

            <DeepReadProject
              isOpen={openId === "06"}
              onToggle={() => toggleRow("06")}
              DarkMode={DarkMode}
            />

            <FluidScrollProject
              isOpen={openId === "07"}
              onToggle={() => toggleRow("07")}
              DarkMode={DarkMode}
            />

            <CustomIconProject
              isOpen={openId === "08"}
              onToggle={() => toggleRow("08")}
              DarkMode={DarkMode}
            />

            <BallotBlockProject
              isOpen={openId === "09"}
              onToggle={() => toggleRow("09")}
              DarkMode={DarkMode}
            />

            <VideoSummarizerProject
              isOpen={openId === "10"}
              onToggle={() => toggleRow("10")}
              DarkMode={DarkMode}
            />
          </div>
        </div>
      </section>

      <CaseStudyModal
        isOpen={Boolean(activeCaseStudy)}
        onClose={() => setActiveCaseStudy(null)}
        data={activeCaseStudy}
        DarkMode={DarkMode}
      />
    </>
  );
}
