import React from 'react';
import { Flame, Users, Cpu, Activity, ShieldAlert, Zap, Radio } from 'lucide-react';
import firebot2 from "../../../public/projects/firebot2.jpg";
import Image from 'next/image';

const FireBotDashboard = () => {
  const teamMembers = ["Arju Paul", "Team Project Members"];
  
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 bg-[#111827] rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Left Section: Project Details */}
        <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 shadow-xl shadow-orange-500/5">
              <Flame className="text-orange-500" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight uppercase italic">
                Fire Detector Bot
              </h1>
              <p className="text-orange-500 font-mono text-sm tracking-widest">
                REMOTE HAZARD SCOUTING
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            A high-stakes scouting system designed to penetrate burning buildings. 
            Equipped with IR flame signatures and gas detection, it provides critical 
            intelligence through remote navigation in hazardous environments.
          </p>

          {/* Development Team */}
          <div className="mb-12">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Users size={14} /> Development Team
            </h3>
            <div className="flex flex-wrap gap-3">
              {teamMembers.map((member) => (
                <div key={member} className="px-5 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm font-semibold hover:border-orange-500/50 transition-colors p-3">
                  {member}
                </div>
              ))}
            </div>
          </div>

          {/* Sensor Capability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-2xl flex items-start gap-4">
              <ShieldAlert className="text-orange-500 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm">Gas & Heat Detection</h4>
                <p className="text-xs text-slate-500 leading-tight mt-1">MQ135 and DHT11 fusion for atmospheric hazard monitoring.</p>
              </div>
            </div>
            <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-2xl flex items-start gap-4">
              <Zap className="text-orange-500 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm">Obstacle Avoidance</h4>
                <p className="text-xs text-slate-500 leading-tight mt-1">Ultrasonic eyes for autonomous navigation in debris.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Hardware Visuals */}
        <div className="lg:w-2/5 relative bg-slate-900 overflow-hidden flex flex-col justify-center p-8">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-orange-600 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-red-800 rounded-full blur-[80px]"></div>
          </div>
          
          <div className="relative z-10 w-full group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-700 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square bg-slate-800 rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl flex flex-col">
              
              {/* Image Section */}
              <div className="h-2/3 w-full bg-slate-900 relative">
                 <Image 
                   src={firebot2}
                   alt="Robotic Firefighter Prototype" 
                   className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                 />
                 
              </div>

              {/* Status Display Area */}
              <div className="flex-1 p-6 bg-slate-800/80 flex flex-col justify-center">
                 <div className="bg-[#0b1120] border border-orange-500/30 rounded-xl p-4 font-mono shadow-inner">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-orange-500 text-[10px] uppercase font-bold tracking-widest">Bot Telemetry</span>
                       <Activity size={14} className="text-orange-500 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                       <div className="text-orange-400 text-sm">FLAME SIG: DETECTED</div>
                       <div className="text-orange-400 text-sm">GAS LEVEL: HAZARDOUS</div>
                       <div className="mt-2 pt-2 border-t border-orange-500/10">
                          <span className="text-white font-black text-lg flex items-center gap-2">
                            <Radio size={16} className="text-red-500" /> REMOTE MODE
                          </span>
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

export default FireBotDashboard;