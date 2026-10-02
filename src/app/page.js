"use client";

import { useState } from "react";
import PreloaderRBK from "@/components/PreloaderRBK";
import AboutRBK from "@/components/AboutRBK";
import Banner from "@/components/Banner";
import LeftNavbar from "@/components/LeftNavbar";
import RightNavbar from "@/components/RightNavbar";
import SingleInteractiveBand from "@/components/SingleInteractiveBand";
import HistoryRBK from "@/components/HistoryRBK";
import ProjectsRBK from "@/components/ProjectsRBK";
import SkillsRBK from "@/components/SkillsRBK";
import ToolsRBK from "@/components/ToolsRBK";
import AchievementsRBK from "@/components/AchievementsRBK";
import StudiesRBK from "@/components/StudiesRBK";
import ContactRBK from "@/components/ContactRBK";
import CopyrightRBK from "@/components/CopyrightRBK";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Home() {
  const [DarkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(true);

  // ── Smooth Cinematic Radial Wipe Theme Transition ──
  const toggleTheme = (e) => {
    // If the browser does not support View Transitions API, switch state directly
    if (!document.startViewTransition) {
      setDarkMode((prev) => !prev);
      return;
    }

    // Get click coordinates to expand the circular ripple from the switch button
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = document.startViewTransition(() => {
      setDarkMode((prev) => !prev);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        {
          clipPath: DarkMode ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: DarkMode
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        },
      );
    });
  };

  const sections = [
    { id: "hero", label: "START" },
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "HISTORY" },
    { id: "projects", label: "WORK" },
    { id: "skills", label: "SKILLS" },
    { id: "tools", label: "TOOLS" },
    { id: "achievements", label: "WINS" },
    { id: "education", label: "STUDIES" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleScroll = (e) => {
    const scrollPosition = e.currentTarget.scrollTop + 300;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el && el.offsetTop <= scrollPosition) {
        setActiveSection(sections[i].id);
        return;
      }
    }
    setActiveSection("hero");
  };

  return (
    <>
      {/* ── Fullscreen Bottom-to-Top Preloader ── */}
      {loading && (
        <PreloaderRBK
          DarkMode={DarkMode}
          onComplete={() => setLoading(false)}
        />
      )}

      {/* ── Mobile Floating Hardware Navigation Dock ── */}
      <MobileBottomNav
        DarkMode={DarkMode}
        setDarkMode={toggleTheme}
        activeSection={activeSection}
        sections={sections}
      />

      <div
        onScroll={handleScroll}
        className={`flex h-screen overflow-y-auto overflow-x-hidden md:[&::-webkit-scrollbar]:w-2 md:[&::-webkit-scrollbar-track]:bg-[#E43636] md:[&::-webkit-scrollbar-thumb]:bg-[#121212] transition-colors duration-500 ease-in-out ${
          DarkMode ? "bg-[#121212]" : "bg-[#FCFCFC]"
        }`}
      >
        {/* ── Left Navbar (Desktop Rail) ── */}
        <div className="hidden sm:block min-w-24">
          <LeftNavbar
            DarkMode={DarkMode}
            setDarkMode={toggleTheme}
            activeSection={activeSection}
          />
        </div>

        {/* ── Main Content Column (Mobile Buffer Included) ── */}
        <div className="w-full min-w-0 pb-24 sm:pb-0">
          <div id="hero">
            <Banner DarkMode={DarkMode} />
          </div>

          <div id="about">
            <SingleInteractiveBand TextInside="ABOUT RBK" DarkMode={DarkMode} />
            <AboutRBK DarkMode={DarkMode} />
          </div>

          <div id="experience">
            <SingleInteractiveBand
              TextInside="EXPERIENCE"
              DarkMode={DarkMode}
              reverse={true}
            />
            <HistoryRBK DarkMode={DarkMode} />
          </div>

          <div id="projects">
            <SingleInteractiveBand
              TextInside="PROJECTS & CASE STUDYS"
              DarkMode={DarkMode}
            />
            <ProjectsRBK DarkMode={DarkMode} />
          </div>

          <div id="skills">
            <SingleInteractiveBand
              TextInside="SKILLS"
              DarkMode={DarkMode}
              reverse={true}
            />
            <SkillsRBK DarkMode={DarkMode} />
          </div>

          <div id="tools">
            <SingleInteractiveBand TextInside="TOOLS" DarkMode={DarkMode} />
            <ToolsRBK DarkMode={DarkMode} />
          </div>

          <div id="achievements">
            <SingleInteractiveBand
              TextInside="ACHIEVEMENTS"
              DarkMode={DarkMode}
              reverse={true}
            />
            <AchievementsRBK DarkMode={DarkMode} />
          </div>

          <div id="education">
            <SingleInteractiveBand TextInside="STUDIES" DarkMode={DarkMode} />
            <StudiesRBK DarkMode={DarkMode} />
          </div>

          <div id="contact">
            <SingleInteractiveBand
              TextInside="CONTACT"
              DarkMode={DarkMode}
              reverse={true}
            />
            <ContactRBK DarkMode={DarkMode} />
          </div>

          <CopyrightRBK DarkMode={DarkMode} />
        </div>

        {/* ── Right Navbar (Desktop Rail) ── */}
        <div className="hidden sm:block min-w-18">
          <RightNavbar
            DarkMode={DarkMode}
            setDarkMode={toggleTheme}
            activeSection={activeSection}
          />
        </div>
      </div>
    </>
  );
}
