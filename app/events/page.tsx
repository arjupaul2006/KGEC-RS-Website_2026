"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import Image from "next/image";
import ai_ml from "../../public/events/ai-ml.jpeg";
import recruite from "../../public/events/recruite.jpeg";
import orientation from "../../public/events/orientation.jpeg";

const timelineMonths = [
  { month: "January", color: "blue" },
  { month: "March", color: "green" },
  { month: "May", color: "blue" },
  { month: "August", color: "green" },
  { month: "October", color: "blue" },
  { month: "December", color: "green" },
];

const eventGallery = [
  {
    title: "AI-ML Workshop",
    date: "2025-12-22",
    type: "Workshop",
    img: ai_ml,
  },
  {
    title: "RS Recruitment Drive",
    date: "2024-12-09",
    type: "Interview",
    img: recruite,
  },
  {
    title: "RS Orientation Program",
    date: "2024-11-20",
    type: "Workshop",
    img: orientation,
  },
];

const sampleEvents = [
  {
    title: "IOT Workshop",
    type: "Workshop",
    date: "2026-01-20",
    status: "upcoming",
    img: ai_ml,
  },
  {
    title: "Wrestle Mania",
    type: "Tech Fest Competition",
    date: "March 2026",
    status: "upcoming",
    img: ai_ml,
  },
  {
    title: "Robo Soccar",
    type: "Tech Fest Competition",
    date: "March 2026",
    status: "upcoming",
    img: ai_ml,
  },
  {
    title: "Turbulence",
    type: "Tech Fest Competition",
    date: "March 2026",
    status: "upcoming",
    img: ai_ml,
  },
  {
    title: "Zyro",
    type: "Hackthon",
    date: "April 2026",
    status: "upcoming",
    img: ai_ml,
  },
];

export default function Events() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]" />
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <AnimatedHeading
          text="Events"
          level="h2"
          className="text-white mb-2 text-center md:text-left text-2xl sm:text-3xl md:text-4xl"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-slate-300 text-center md:text-left text-sm sm:text-base"
        >
          Discover hackathons, workshops, competitions, and more.
        </motion.p>

        {/* Horizontal Timeline */}
        <section className="mt-8 sm:mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-6">
            Event Timeline
          </h3>
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-4 sm:gap-6">
              {timelineMonths.map((item, index) => (
                <motion.div
                  key={item.month}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="flex-shrink-0 w-20 sm:w-24"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background:
                        item.color === "blue"
                          ? "linear-gradient(180deg,#60a5fa,#3b82f6)"
                          : "linear-gradient(180deg,#34d399,#10b981)",
                    }}
                    aria-hidden
                  />
                  <div className="mt-2 text-center text-slate-300 text-xs sm:text-sm">
                    {item.month}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Carousel */}
        <section className="mt-12 sm:mt-16">
          <h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-6">
            Event Gallery
          </h3>
          <div className="overflow-x-auto rounded-xl">
            <motion.div className="flex gap-4 sm:gap-6 px-15 scroll-smooth">
              {eventGallery.map((e, i) => (
                <motion.div
                  key={i}
                  className="shrink-0 w-64 sm:w-72 md:w-80 bg-white/2 border border-white/6 rounded-xl shadow-md overflow-hidden hover:border-cyan-400 transition-all duration-300"
                >
                  <div
                    className={`relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br ${
                      i % 2 === 0
                        ? "from-blue-100 to-blue-200"
                        : "from-green-100 to-green-200"
                    }`}
                  >
                    <Image
                      src={e.img}
                      alt="ai_ml"
                      fill
                      className="object-fill"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="font-semibold text-white text-sm sm:text-base">
                      {e.title}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-1">
                      {e.date} • {e.type}
                    </div>
                    <button className="mt-3 w-full text-xs sm:text-sm py-2 px-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-lg hover:shadow-lg active:scale-95 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Static Event Grid */}
        <section className="mt-12 sm:mt-16">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8">
            Featured Events
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {sampleEvents.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/2 border border-white/6 rounded-xl shadow-md overflow-hidden hover:border-cyan-400 transition-all duration-300"
              >
                <div
                  className={`relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br ${
                    i % 2 === 0
                      ? "from-blue-100 to-blue-200"
                      : "from-green-100 to-green-200"
                  }`}
                >
                  <Image src={e.img} alt="ai_ml" fill className="object-fill" />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="font-semibold text-white text-sm sm:text-base">
                    {e.title}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 mt-1">
                    {new Date(e.date).toLocaleDateString()} • {e.type}
                  </div>
                  <div
                    className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${e.status === "upcoming" ? "bg-cyan-500/20 text-cyan-300" : "bg-green-500/20 text-green-300"}`}
                  >
                    {e.status}
                  </div>
                  <button className="mt-4 w-full text-xs sm:text-sm py-2 px-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-lg hover:shadow-lg active:scale-95 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
