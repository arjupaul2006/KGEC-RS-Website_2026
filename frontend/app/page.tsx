"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Animation from "./Spline";
import AnimatedHeading from "./components/AnimatedHeading";
import Link from "next/link";
import Image from "next/image";
import watermark from "../public/watermark1.png";

// Simplified mouse effects - only binary code and inner dot
const MouseEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [binaryParticles, setBinaryParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      content: string;
    }>
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create binary code particles (0s and 1s)
      if (Math.random() < 0.6) {
        const binaryContent = Math.random() < 0.5 ? "0" : "1";
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
          content: binaryContent,
        };
        setBinaryParticles((prev) => [...prev.slice(-20), newParticle]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setBinaryParticles((prev) => prev.slice(1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Main cursor - only inner dot */}
      <div
        className="tech-cursor"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      >
        <div className="cursor-core"></div>
      </div>

      {/* Binary code particles */}
      {binaryParticles.map((particle) => (
        <div
          key={particle.id}
          className="binary-particle"
          style={{ left: particle.x, top: particle.y }}
        >
          {particle.content}
        </div>
      ))}
    </>
  );
};

const sampleEvents = [
  {
    title: "IOT Workshop",
    type: "Workshop",
    date: "2026-01-20",
    status: "upcoming",
  },
  {
    title: "Wrestle Mania",
    type: "Tech Fest Competition",
    date: "March 2026",
    status: "upcoming",
  },
  {
    title: "Robo Soccar",
    type: "Tech Fest Competition",
    date: "March 2026",
    status: "upcoming",
  },
  {
    title: "Turbulence",
    type: "Tech Fest Competition",
    date: "March 2026",
    status: "upcoming",
  },
  {
    title: "Zyro",
    type: "Hackthon",
    date: "April 2026",
    status: "upcoming",
  },
];

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  // const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // small auto-scroll while hovering off the slider for subtle motion
  useEffect(() => {
    const step = () => {
      if (sliderRef.current) sliderRef.current.scrollBy({ left: 1 });
    };
  }, []);



  return (
    <>
      <MouseEffects />
      {/* IMAGE WATERMARK */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <Image
          src={watermark}
          alt="Watermark"
          width={500}
          height={500}
          className="opacity-50 rotate-[0deg] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          priority
        />
      </div>

      <main className="relative z-10 min-h-screen">
        {/* Hero */}
        <header className="flex items-center justify-center py-12">
          <div className="flex gap-8 items-center w-full max-w-6xl px-6 flex-col lg:flex-row">
            <div className="flex-1 min-w-[260px] w-full">
              <AnimatedHeading
                text="KGEC Robotics Society"
                level="h1"
                className="text-[#eaffff] mb-2 text-3xl sm:text-4xl md:text-5xl"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-[#9fbcc3] mb-4 text-base sm:text-lg"
              >
                Building the future, one robot at a time
              </motion.p>

              <div className="flex gap-3 items-center mt-4 flex-col sm:flex-row">
                <Link href="/sign-in" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 12px 40px rgba(6, 182, 212, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 border-none text-[#02121a] font-bold px-4 py-2.5 rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all"
                  >
                    <span className="text-lg">🤖</span> Join Us
                  </motion.button>
                </Link>
                <Link href="/events" className="w-full sm:w-auto">
                  <button className="w-full border border-white/12 text-[#bfeff6] px-3.5 py-2 rounded-lg cursor-pointer hover:border-cyan-300 transition-colors">
                    Explore Events
                  </button>
                </Link>
              </div>

              <ul className="mt-4 flex gap-3 list-none p-0 flex-wrap text-[#9fbcc3] text-xs sm:text-sm">
                <li className="flex items-center gap-2 bg-white/2 px-2.5 py-1.5 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 block" />
                  Hands-on workshops
                </li>
                <li className="flex items-center gap-2 bg-white/2 px-2.5 py-1.5 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 block" />
                  Competitions & hackathons
                </li>
                <li className="flex items-center gap-2 bg-white/2 px-2.5 py-1.5 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 block" />
                  Community-led projects
                </li>
              </ul>
            </div>

            <div className="flex-1 flex justify-center items-center w-full">
              <figure className="relative block m-0 w-full">
                <div className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] flex items-center justify-center">
                  <Animation />
                </div>
              </figure>
            </div>
          </div>
        </header>

        {/* Events */}
        <section className="py-10 px-4 max-w-6xl mx-auto w-full">
          <h2 className="text-center text-[#dff7ff] text-2xl sm:text-3xl mb-6">
            Upcoming Events
          </h2>
          <div className="flex items-center gap-2 sm:gap-4 relative overflow-x-hidden">
            <button
              aria-label="scroll left"
              onClick={scrollLeft}
              className="hidden sm:grid bg-gradient-to-b from-white/90 to-white/85 rounded-full w-12 h-12 place-items-center border-none cursor-pointer shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#022"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              ref={sliderRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto py-4 px-1 sm:px-2 flex-1 scrollbar-hide"
              role="list"
              tabIndex={0}
            >
              {sampleEvents.map((event, index) => (
                <article
                  key={index}
                  className="min-w-[280px] sm:min-w-72 md:min-w-80 max-w-80 bg-gradient-to-b from-white/5 to-white/2 rounded-2xl p-4 border border-white/4 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all flex flex-col gap-2.5 flex-shrink-0"
                  role="listitem"
                >
                  <div className="flex justify-between items-center gap-2">
                    <h3 className="m-0 text-base text-[#eaffff]">
                      {event.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full font-bold text-xs ${event.status === "upcoming" ? "bg-cyan-400 text-[#022]" : "bg-white/6 text-[#cfeaf0]"}`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <div className="flex gap-4 text-[#9fbcc3] text-sm">
                    <p className="m-0">{event.type}</p>
                    <p className="m-0">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-[#9fbcc3] text-sm mt-1 flex-1 m-0">
                    Join a hands-on session focused on innovation, teamwork, and
                    prototyping.
                  </p>
                  <div className="flex justify-end">
                    <Link href="/events">
                      <button className="bg-gradient-to-r from-blue-500 to-cyan-400 border-none text-[#022] px-3 py-1.5 rounded-lg cursor-pointer font-bold text-sm hover:shadow-lg transition-shadow">
                        Details
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <button
              aria-label="scroll right"
              onClick={scrollRight}
              className="hidden sm:grid bg-gradient-to-b from-white/90 to-white/85 rounded-full w-12 h-12 place-items-center border-none cursor-pointer shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#022"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
      </main>

      <style jsx>{`
        .stagger span {
          display: inline-block;
          transform: translateY(18px);
          opacity: 0;
          animation: letterIn 640ms cubic-bezier(0.2, 0.9, 0.2, 1) forwards;
          animation-delay: calc(var(--i) * 0.03s);
        }
        @keyframes letterIn {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        :global(.tech-cursor) {
          position: fixed;
          left: 0;
          top: 0;
          width: 40px;
          height: 40px;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          mix-blend-mode: screen;
        }
        :global(.cursor-core) {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #fff, #9ff6ff 40%);
          box-shadow: 0 6px 20px rgba(0, 160, 255, 0.18);
        }
        :global(.binary-particle) {
          position: fixed;
          transform: translate(-50%, -50%);
          color: #9ff6ff;
          font-weight: 800;
          font-size: 12px;
          opacity: 0.95;
          pointer-events: none;
          animation: floatUp 1600ms linear forwards;
          text-shadow: 0 2px 8px rgba(0, 160, 255, 0.12);
        }
        @keyframes floatUp {
          0% {
            transform: translate(-50%, -50%) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -120%) translateY(-18px);
            opacity: 0;
          }
        }
        @media (max-width: 880px) {
          .hero-inner {
            flex-direction: column-reverse;
            text-align: center;
            gap: 1.25rem;
          }
        }
      `}</style>
    </>
  );
}
