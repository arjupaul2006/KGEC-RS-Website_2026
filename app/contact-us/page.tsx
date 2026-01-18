"use client";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Link from "next/link";

export default function ContactUs() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#050b1e] via-[#08142e] to-[#050b1e] text-white overflow-hidden">
      {/* Floating accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-24 w-2 h-2 bg-cyan-400 rounded-full opacity-80" />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60" />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-cyan-300 rounded-full opacity-70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Contact <span className="text-cyan-400">Us</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Reach out to KGEC Robotics Society for collaborations, events, or
          general queries.
        </p>

        {/* Contact cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            icon={<Mail />}
            title="Email"
            value="kgec.robotics.club@kgec.edu.in"
          />

          <Link
            href="https://www.linkedin.com/company/kgecrs/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactCard
              icon={<Linkedin />}
              title="LinkedIn"
              value="linkedin.com/company/kgecrs/posts/?feedView=all"
            />
          </Link>

          <Link
            href="https://www.instagram.com/kgec_rs/?igsh=MW8yYTNwdTIzdG9mMg%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactCard
              icon={<Instagram />}
              title="Instagram"
              value="kgec_rs"
            />
          </Link>

          <Link
            href="https://www.facebook.com/kgecrs?rdid=bDEFvWp2CGWuKgIa&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17YJe4FawT%2F#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactCard
              icon={<Facebook />}
              title="Facebook"
              value="KGEC - Robotics Society"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-cyan-400/40 transition-all duration-300">
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 opacity-0 group-hover:opacity-100 blur-xl transition" />

      <div className="relative z-10 flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-black">
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold flex items-start">{title}</h3>
          <div className="flex mt-1 text-sm text-gray-300 truncate items-start">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
