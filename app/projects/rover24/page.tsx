import React from 'react';
import { 
  Settings, ShieldCheck, Rocket, ExternalLink, 
  User, Cpu, GraduationCap, Box, Zap, Toolbox
} from 'lucide-react';

export default function DuneRoverDashboard() {
  const teamMembers = [
    { role: "Team Lead", name: "Aritra Biswas", icon: <User size={16} /> }, 
    { role: "Mechanical", name: "Satyaki Datta", icon: <Toolbox size={16} /> }, 
    { role: "Electronics", name: "Ayush Kumar Sharma", icon: <Cpu size={16} /> }, 
    { role: "Mentor", name: "Dr. Sandip Nandi", icon: <GraduationCap size={16} /> }, 
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 p-6 md:p-12 font-sans selection:bg-cyan-500/30">
      


      <main className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Content */}
          <div className="lg:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl">
                <Rocket className="text-[#38bdf8]" size={40} />
              </div>
              <div>
                <div className="text-9xl md:text-6xl sm:text-9xl font-black text-white mb-2 tracking-tight">
                  Team DuneRover
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="bg-[#38bdf8]/10 text-[#38bdf8] px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest">
                    TEAM ID: 10360
                  </span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-tighter">
                    ISRO Robotics Challenge - URSC
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed max-w-3xl">
              <p>
                Our team from <span className="text-white font-medium">Kalyani Government Engineering College</span> is developing a 
                high-performance modular rover designed to navigate the uneven and sandy lunar terrain. 
                The system architecture is anchored by a <span className="text-[#38bdf8] font-semibold">Raspberry Pi 4B</span> 
                main controller paired with a <span className="text-white font-medium">LuckFox Pico Plus</span> co-processor for optimized load distribution.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3 items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/40 transition-colors">
                  <Box className="text-[#38bdf8] shrink-0 mt-1" size={20} />
                  <p className="text-sm">
                    <strong className="text-slate-200 block">Roving Mechanism</strong>
                    Rocker-bogie suspension with a six-wheel differential drive for stability on complex surfaces.
                  </p>
                </div>
                <div className="flex gap-3 items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/40 transition-colors">
                  <Zap className="text-[#38bdf8] shrink-0 mt-1" size={20} />
                  <p className="text-sm">
                    <strong className="text-slate-200 block">Power Management</strong>
                    Powered by a high-density 12.8V 12000mAh LiFePO4 battery pack with autonomous switchover capabilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 mt-10 mb-4">
              <button className="bg-[#0891b2] hover:bg-[#0e7490] hover:scale-105 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-cyan-900/40 uppercase tracking-widest text-sm">
                Support Project
              </button>
              <button className="bg-slate-800/50 border border-slate-700 hover:bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold transition flex items-center gap-3 uppercase tracking-widest text-sm">
                <ExternalLink size={20} /> Documentation
              </button>
            </div>
          </div>

          {/* Right Content: Image */}
          <div className="lg:w-2/5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-[2.5rem] border border-slate-700 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200" 
                alt="DuneRover Design" 
                className="w-full h-full object-cover opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute top-6 right-6">
                <span className="bg-black/80 backdrop-blur-xl text-[10px] px-4 py-2 rounded-full border border-white/20 uppercase font-black tracking-widest text-white">
                  Design Concept v2.4
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Personnel */}
          <div className="bg-slate-800/20 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-md hover:border-[#38bdf8]/30 transition-colors">
            <h3 className="text-slate-500 text-xs font-black uppercase tracking-[0.3em] mb-6">Key Personnel</h3>
            <div className="space-y-5">
              {teamMembers.map((m, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <span className="text-[#38bdf8] p-2.5 bg-slate-800 rounded-xl group-hover:bg-[#38bdf8] group-hover:text-white transition-all">
                    {m.icon}
                  </span>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-black mb-0.5">{m.role}</p>
                    <p className="text-sm font-bold text-slate-100">{m.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="bg-slate-800/20 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between hover:border-[#38bdf8]/30 transition-colors">
            <div>
              <ShieldCheck className="text-[#38bdf8] mb-6" size={32} />
              <h3 className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">Estimated Budget</h3>
              <p className="text-4xl md:text-5xl font-black text-white mt-3 italic">₹1,30,268</p>
            </div>
            <div className="mt-8">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-3">
                <span className="text-slate-500">Procurement Level</span>
                <span className="text-[#38bdf8]">Verified</span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-[75%] rounded-full shadow-[0_0_15px_rgba(56,189,248,0.4)]"></div>
              </div>
            </div>
          </div>

          {/* Fabrication */}
          <div className="bg-slate-800/20 border border-slate-700/50 p-8 rounded-3xl backdrop-blur-md flex flex-col justify-between hover:border-[#38bdf8]/30 transition-colors">
            <div>
              <Settings className="text-[#38bdf8] mb-6" size={32} />
              <h3 className="text-slate-500 text-xs font-black uppercase tracking-[0.3em]">Fabrication</h3>
              <p className="text-4xl md:text-5xl font-black text-white mt-3 italic">₹43,000</p>
              <p className="text-slate-500 text-sm mt-3 font-medium">Allocated for Chassis Fabrication and 3D Printed Honeycomb Wheels.</p>
            </div>
            <button className="w-full py-4 mt-8 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
              View Hardware List
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
