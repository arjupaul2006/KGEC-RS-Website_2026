import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const FooterNav = () => {
  const [viewAll, setViewAll] = useState(false);

  const sections = [
    { name: "Team", icon: "👥", href: "/team" },
    { name: "Projects", icon: "🚀", href: "/projects" },
    { name: "Events", icon: "📅", href: "/events" },
    { name: "Faculty", icon: "🎓", href: "/faculty" },
    { name: "Alumni", icon: "🎖️", href: "/alumni" },
    { name: "Admin", icon: "🛡️", href: "/admin" },
    { name: "Contact - Us", icon: "📡", href: "/contact-us" },
  ];

  const visibleSections = viewAll ? sections : sections.slice(0, 4);

  return (
    <section className="py-20 px-4 border-t border-white/5 bg-black/20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#dff7ff] text-2xl mb-12">Navigate Society</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {visibleSections.map((sec) => (
            <Link key={sec.name} href={sec.href}>
              <motion.div
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
                className="p-6 rounded-2xl border border-white/10 bg-white/2 cursor-pointer transition-all"
              >
                <span className="text-3xl block mb-2">{sec.icon}</span>
                <span className="text-[#9fbcc3] font-medium">{sec.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Sections Button */}
        {!viewAll && <div className="mt-12">
            <button
              onClick={() => setViewAll(!viewAll)}
              className="px-8 py-3 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all font-bold"
            >
              View All Sections <span>→</span>
            </button>
        </div>}
      </div>
    </section>
  );
};

export default FooterNav;
