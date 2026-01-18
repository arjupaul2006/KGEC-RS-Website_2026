import React from 'react';
import { Pill, Users, Cpu, Activity, Bell, Globe, Clock, ChevronRight } from 'lucide-react';

const MedicineDispenserUI = () => {
  // Team members as identified in the provided documents
  const teamMembers = ["Arju Paul", "Team Friends"];

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 p-6 md:p-12 font-sans selection:bg-emerald-500/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 bg-[#111827] rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Left Section: Project Details */}
        <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shadow-xl shadow-emerald-500/5">
              <Pill className="text-emerald-400" size={32} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white tracking-tight uppercase italic">
                Medi-Bot Alpha
              </h1>
              <p className="text-emerald-500 font-mono text-sm tracking-widest">
                AUTOMATED DISPENSING SYSTEM
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            A smart healthcare solution engineered to ensure patient compliance through 
            IoT-driven automation. Utilizing an ESP32 web server and precise servo-mechanisms, 
            it delivers the right dose at exactly the right time.
          </p>

          {/* Development Team */}
          <div className="mb-12">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Users size={14} /> Development Team
            </h3>
            <div className="flex flex-wrap gap-3">
              {teamMembers.map((member) => (
                <div key={member} className="px-5 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm font-semibold hover:border-emerald-400/50 transition-colors p-3">
                  {member}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-2xl flex items-start gap-4">
              <Cpu className="text-emerald-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm">ESP32 Control</h4>
                <p className="text-xs text-slate-500 mt-1 leading-tight">Master controller handling web server hosting and motor signals.</p>
              </div>
            </div>
            <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-2xl flex items-start gap-4">
              <Globe className="text-emerald-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm">Web UI Scheduler</h4>
                <p className="text-xs text-slate-500 mt-1 leading-tight">Remote time configuration via local wireless server.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Visual Experience */}
        <div className="lg:w-2/5 relative bg-slate-900 overflow-hidden flex flex-col justify-center p-8">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal-600 rounded-full blur-[80px]"></div>
          </div>
          
          <div className="relative z-10 w-full group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square bg-slate-800 rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl flex flex-col">
              
              {/* Device Image Placeholder */}
              <div className="h-2/3 w-full bg-slate-900 relative">
                 <img 
                   src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800" 
                   alt="ESP32 Medicine Dispenser Hardware" 
                   className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest">
                   System Ready
                 </div>
              </div>

              {/* Live Status Panel */}
              <div className="flex-1 p-6 bg-slate-800/80 flex flex-col justify-center">
                 <div className="bg-[#0b1120] border border-emerald-500/30 rounded-xl p-4 font-mono shadow-inner">
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest">ESP32 Console</span>
                       <Activity size={14} className="text-emerald-500 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                       <div className="flex items-center gap-2 text-emerald-400/90 text-sm">
                          <Clock size={12} /> Fetching: 08:00 AM
                       </div>
                       <div className="mt-2 pt-2 border-t border-emerald-500/10 flex justify-between">
                          <span className="text-white font-black text-sm uppercase">Dose Slot: 01</span>
                          <span className="text-teal-400 font-bold text-xs uppercase">Servo Active</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDispenserUI;