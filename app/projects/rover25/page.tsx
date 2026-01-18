import React from 'react';
import { Rocket, ExternalLink, ShieldCheck, Cpu, GraduationCap, User, Info, Toolbox } from 'lucide-react';

export default function DuneRoverUI() {
  const personnel = [
    { name: "Aritra Biswas", role: "Team Lead", icon: <User size={16} /> },
    { name: "Satyaki Datta", role: "Mechanical", icon: <Toolbox size={16} /> },
    { name: "Ayush Kumar Sharma", role: "Electronics", icon: <Cpu size={16} /> },
    { name: "Dr. Sandip Nandi", role: "Mentor", icon: <GraduationCap size={16} /> }
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 p-6 md:p-12 font-sans selection:bg-cyan-500/30">
      

      <main className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          
          {/* Left Side: Content Area */}
          <div className="lg:w-3/5 flex flex-col justify-center">
            <div className="flex items-center gap-8 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl">
                 <Rocket className="text-[#0891b2]" size={40} />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                  Team DuneRover
                </h1>
                <div className="flex items-center gap-3">
                  <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest border border-cyan-500/20">
                    TEAM ID: 10360
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-slate-400 text-lg leading-relaxed max-w-3xl">
              <p>
                Participating in the <span className="text-white font-semibold">ISRO Robotics Challenge - URSC</span>. Our team from 
                <span className="text-white font-medium"> Kalyani Government Engineering College</span> is developing an autonomous 
                modular rover for space exploration.
              </p>
              
              <p className="text-base italic text-slate-500">
                Utilizing a 6-wheel differential drive and advanced depth sensing, our rover is 
                engineered for the demanding Quals-1 hardware functionality demonstration.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mt-10">
              <button className="bg-[#0891b2] hover:bg-[#0e7490] hover:scale-105 text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-cyan-900/40 uppercase tracking-widest text-sm">
                Support Our Project
              </button>
              <button className="bg-slate-800/50 border border-slate-700 hover:bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold transition flex items-center gap-3 uppercase tracking-widest text-sm p-4">
                <ExternalLink size={20} /> Official Link
              </button>
            </div>
          </div>

          {/* Right Side: Rover Image */}
          <div className="lg:w-2/5">
            <div className="relative group h-full min-h-[400px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative h-full bg-slate-900 rounded-[2.5rem] border border-slate-700 overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200" 
                  alt="DuneRover Design" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6">
                  <span className="bg-black/70 backdrop-blur-md text-[10px] px-4 py-2 rounded-full border border-white/20 uppercase font-black tracking-widest text-white">
                    Design Concept
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total Budget Card */}
          <div className="bg-[#1e293b]/40 border border-slate-800 p-8 rounded-[2rem] backdrop-blur-sm">
            <div className="flex items-center gap-3 text-cyan-500 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
              <Info size={16} /> Total Budget
            </div>
            <p className="text-5xl font-black text-white italic">₹1,03,596</p>
            <div className="mt-8 space-y-4">
               {personnel.slice(0, 2).map((p, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="p-2 bg-slate-800 rounded-lg text-cyan-500">{p.icon}</span>
                    <span>{p.role}: <b className="text-slate-200">{p.name}</b></span>
                 </div>
               ))}
            </div>
          </div>

          {/* Team Invested Card */}
          <div className="bg-[#1e293b]/40 border border-slate-800 p-8 rounded-[2rem] backdrop-blur-sm">
            <div className="flex items-center gap-3 text-cyan-500 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
              <ShieldCheck size={16} /> Team Invested
            </div>
            <p className="text-5xl font-black text-white italic">₹37,596</p>
            <div className="mt-8 space-y-4">
               {personnel.slice(2, 4).map((p, i) => (
                 <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                    <span className="p-2 bg-slate-800 rounded-lg text-cyan-500">{p.icon}</span>
                    <span>{p.role}: <b className="text-slate-200">{p.name}</b></span>
                 </div>
               ))}
            </div>
          </div>

          {/* Sponsorship Needed Card */}
          <div className="bg-[#1e293b]/40 border border-slate-800 p-8 rounded-[2rem] backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-cyan-500 mb-6 font-bold uppercase tracking-[0.2em] text-xs">
                <Rocket size={16} /> Sponsorship Needed
              </div>
              <p className="text-5xl font-black text-white italic">₹66,000</p>
              <p className="text-slate-500 text-sm mt-4 font-medium">Net amount required to complete Quals Round fabrication.</p>
            </div>
            <button className="w-full py-4 mt-8 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
              Join Us as a Sponsor
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}