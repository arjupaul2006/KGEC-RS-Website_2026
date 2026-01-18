"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import Link from "next/link";

export default function Projects() {
  const [query, setQuery] = useState("");
  const currentRef = useRef<HTMLDivElement>(null);
  const pastRef = useRef<HTMLDivElement>(null);
  const currentAnimRef = useRef<number | null>(null);
  const pastAnimRef = useRef<number | null>(null);
  const currentIsScrollingRef = useRef(false);
  const pastIsScrollingRef = useRef(false);
  const currentResumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const pastResumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const currentProjects = [
    {
      title: "Rover Project 2025",
      status: "In Progress",
      year: "2025",
      team: "DuneRover Team",
      details: "/projects/rover25",
    },
    {
      title: "Drone Project 2025",
      status: "In Progress",
      year: "2025",
      team: "DroneX Team",
      details: "/projects/rover25",
    },
  ];
  const pastProjects = [
    {
      title: "Rover Project 2024",
      status: "Completed",
      year: "2024",
      team: "DuneRover Team",
      details: "/projects/rover24",
    },
    {
      title: "Air Quality Monitoring System",
      status: "Completed",
      year: "2025",
      team: ["Arju", "Swastik", "Sristy"],
      details: "/projects/air-quality-monitor",
    },
    {
      title: "Automated Medicine Dispenser",
      status: "Completed",
      year: "2025",
      team: ["Eve", "Frank"],
      details: "/projects/automated-medicine",
    },
    {
      title: "Fire Fighting Bot",
      status: "Completed",
      year: "2025",
      team: ["Eve", "Frank"],
      details: "/projects/fire-fighting-bot",
    },
    {
      title: "Hand Gesture Detection",
      status: "Completed",
      year: "2025",
      team: ["Eve", "Frank"],
      details: "/projects/hand-gesture-detection",
    },
  ];

  useEffect(() => {
    const setupScroll = (
      scrollRef: React.RefObject<HTMLDivElement | null>,
      animRef: React.MutableRefObject<number | null>,
      isScrollingRef: React.MutableRefObject<boolean>,
      pauseTimerRef: React.MutableRefObject<NodeJS.Timeout | null>,
      speed: number = 0.5,
    ) => {
      const scroll = () => {
        if (!scrollRef.current || !isScrollingRef.current) {
          animRef.current = requestAnimationFrame(scroll);
          return;
        }

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        // Smooth continuous scroll
        scrollRef.current.scrollLeft += speed;

        // Seamless infinite loop: reset to start when reaching end
        if (scrollRef.current.scrollLeft >= maxScroll) {
          scrollRef.current.scrollLeft = 0;
        }

        // Continue animation loop
        animRef.current = requestAnimationFrame(scroll);
      };

      const startScroll = () => {
        isScrollingRef.current = true;

        // Start the continuous animation
        if (!animRef.current) {
          animRef.current = requestAnimationFrame(scroll);
        }
      };

      const stopScroll = () => {
        isScrollingRef.current = false;
      };

      const pauseAndResume = () => {
        stopScroll();
        // Clear any existing timer
        if (pauseTimerRef.current) {
          clearTimeout(pauseTimerRef.current);
        }
        // Resume after 1 second of user inactivity
        pauseTimerRef.current = setTimeout(startScroll, 1000);
      };

      startScroll();

      const el = scrollRef.current;
      if (el) {
        el.addEventListener("mouseenter", stopScroll);
        el.addEventListener("mouseleave", startScroll);
      }

      return { stopScroll, startScroll, pauseAndResume, el };
    };

    const currentSetup = setupScroll(
      currentRef,
      currentAnimRef,
      currentIsScrollingRef,
      currentResumeTimerRef,
      0.8,
    );
    const pastSetup = setupScroll(
      pastRef,
      pastAnimRef,
      pastIsScrollingRef,
      pastResumeTimerRef,
      0.6,
    );

    // Attach click handlers to arrow buttons
    const currentButtons =
      currentRef.current?.parentElement?.querySelectorAll("button");
    const pastButtons =
      pastRef.current?.parentElement?.querySelectorAll("button");

    if (currentButtons) {
      currentButtons.forEach((btn) => {
        btn.addEventListener("click", currentSetup.pauseAndResume);
      });
    }

    if (pastButtons) {
      pastButtons.forEach((btn) => {
        btn.addEventListener("click", pastSetup.pauseAndResume);
      });
    }

    return () => {
      // Cleanup current
      if (currentSetup.el) {
        currentSetup.el.removeEventListener(
          "mouseenter",
          currentSetup.stopScroll,
        );
        currentSetup.el.removeEventListener(
          "mouseleave",
          currentSetup.startScroll,
        );
      }
      if (currentAnimRef.current) cancelAnimationFrame(currentAnimRef.current);
      if (currentResumeTimerRef.current)
        clearTimeout(currentResumeTimerRef.current);

      // Cleanup past
      if (pastSetup.el) {
        pastSetup.el.removeEventListener("mouseenter", pastSetup.stopScroll);
        pastSetup.el.removeEventListener("mouseleave", pastSetup.startScroll);
      }
      if (pastAnimRef.current) cancelAnimationFrame(pastAnimRef.current);
      if (pastResumeTimerRef.current) clearTimeout(pastResumeTimerRef.current);

      // Remove button click listeners
      if (currentButtons) {
        currentButtons.forEach((btn) => {
          btn.removeEventListener("click", currentSetup.pauseAndResume);
        });
      }
      if (pastButtons) {
        pastButtons.forEach((btn) => {
          btn.removeEventListener("click", pastSetup.pauseAndResume);
        });
      }
    };
  }, []);
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]">
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-16">
        <div className="flex items-end justify-between gap-4 mb-8 flex-col sm:flex-row">
          <AnimatedHeading
            text="Projects"
            level="h2"
            className="text-white text-2xl sm:text-3xl md:text-4xl w-full sm:w-auto text-center sm:text-left"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects"
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white/2 border border-white/6 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none transition-all duration-300"
          />
        </div>

        {/* Current Projects */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold text-white mb-6"
          >
            Current Projects
          </motion.h3>
          <div className="relative group">
            <button
              onClick={() =>
                currentRef.current?.scrollBy({ left: -360, behavior: "smooth" })
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/2 border border-white/6 rounded-full hover:bg-white/4 transition-all duration-300 text-sm sm:text-base"
            >
              ‹
            </button>
            <button
              onClick={() =>
                currentRef.current?.scrollBy({ left: 360, behavior: "smooth" })
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/2 border border-white/6 rounded-full hover:bg-white/4 transition-all duration-300 text-sm sm:text-base"
            >
              ›
            </button>
            <div
              ref={currentRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scroll-smooth scrollbar-hide"
            >
              {currentProjects.map((p, i) => {
                const projectIndex = i % 8;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: projectIndex * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="shrink-0 w-72 sm:w-80 bg-white/2 border border-white/6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 p-4 sm:p-6"
                  >
                    <div
                      className={`h-36 sm:h-40 bg-gradient-to-br ${projectIndex % 3 === 0 ? "from-cyan-500/20 to-blue-500/20" : projectIndex % 3 === 1 ? "from-blue-500/20 to-purple-500/20" : "from-green-500/20 to-cyan-500/20"} rounded-lg border border-white/10`}
                    />
                    <div className="mt-4 font-semibold text-white text-sm sm:text-base">
                      {p.title}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1">
                      {p.status} • {p.year}
                    </div>
                    <div className="text-xs text-slate-400 mt-2">
                      Team: {p.team}
                    </div>
                    <Link href={p.details} passHref>
                      <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300 text-xs sm:text-sm font-semibold">
                        View Details
                      </button>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <section className="mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl sm:text-2xl font-bold text-white mb-6"
          >
            Past Projects
          </motion.h3>
          <div className="relative group">
            <button
              onClick={() =>
                pastRef.current?.scrollBy({ left: -360, behavior: "smooth" })
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/2 border border-white/6 rounded-full hover:bg-white/4 transition-all duration-300 text-sm sm:text-base"
            >
              ‹
            </button>
            <button
              onClick={() =>
                pastRef.current?.scrollBy({ left: 360, behavior: "smooth" })
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/2 border border-white/6 rounded-full hover:bg-white/4 transition-all duration-300 text-sm sm:text-base"
            >
              ›
            </button>
            <div
              ref={pastRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scroll-smooth scrollbar-hide"
            >
              {pastProjects.map((p, i) => {
                const projectIndex = i % 12;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: projectIndex * 0.03 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="shrink-0 w-72 sm:w-80 bg-white/2 border border-white/6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 p-4 sm:p-6"
                  >
                    <div
                      className={`h-32 sm:h-36 bg-gradient-to-br ${projectIndex % 3 === 0 ? "from-cyan-500/20 to-blue-500/20" : projectIndex % 3 === 1 ? "from-blue-500/20 to-purple-500/20" : "from-green-500/20 to-cyan-500/20"} rounded-lg border border-white/10`}
                    />
                    <div className="mt-4 font-semibold text-white text-sm sm:text-base">
                      {p.title}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1">
                      {p.status} • {p.year}
                    </div>
                    <Link href={p.details} passHref>
                      <button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300 text-xs sm:text-sm font-semibold">
                        View Details
                      </button>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
