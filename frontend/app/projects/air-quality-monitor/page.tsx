import React from 'react';
import { Wind, Users, Cpu, Activity, AlertTriangle, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import air2 from "../../../public/projects/air2.jpeg"

const AirQualityUI = () => {
  const teamMembers = ["Srishti Singh", "Swastik Sorkar", "Arju Paul"];
  
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 p-6 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-15">
        
        {/* Left Section: Content and Team */}
        <div className="lg:w-3/5 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 shadow-xl shadow-cyan-500/5">
              <Wind className="text-cyan-400" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                Air Quality Monitor
              </h1>
              <p className="text-cyan-500 font-mono text-sm uppercase tracking-widest">
                Real-Time Pollutant Tracking
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            A specialized indoor monitoring system designed to detect CO2, smoke, and harmful chemicals. 
            By fusing data from MQ135 and DHT11 sensors, it provides a safe, breathable environment 
            through constant surveillance and active audio-visual alerting.
          </p>

          {/* Development Team */}
          <div className="mb-12">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Users size={14} /> Development Team
            </h3>
            <div className="flex flex-wrap gap-3">
              {teamMembers.map((member) => (
                <div key={member} className="px-5 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm font-semibold hover:border-cyan-500/50 transition-colors p-4">
                  {member}
                </div>
              ))}
            </div>
          </div>

          {/* Core Hardware Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-2xl flex items-start gap-4">
              <Cpu className="text-cyan-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm">Arduino Processing</h4>
                <p className="text-xs text-slate-500 leading-tight mt-1">Central logic hub for sensor data fusion and LCD management.</p>
              </div>
            </div>
            <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-2xl flex items-start gap-4">
              <AlertTriangle className="text-amber-500 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm">Active Thresholds</h4>
                <p className="text-xs text-slate-500 leading-tight mt-1">Real-time buzzer alarms triggered by toxic gas detection.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Project Image and Visuals */}
        <div className="lg:w-2/5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative h-full bg-slate-900 rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl flex flex-col">
            
            {/* Project Image Placeholder */}
            <div className="h-2/3 w-full bg-slate-800 relative overflow-hidden">
               <Image 
                 src={air2}
                 alt="Sensors and Hardware" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
               />
               
            </div>

            {/* Mock Display Output */}
            <div className="p-8 flex-1 flex flex-col justify-center">
              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-5 font-mono shadow-inner">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-500 text-[10px] uppercase font-bold tracking-tighter">System Console</span>
                  <Activity size={14} className="text-green-500 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <div className="text-green-400/90 text-sm">TEMP: 24.5C</div>
                  <div className="text-green-400/90 text-sm">HUMID: 48%</div>
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <span className="text-cyan-400 font-black text-lg">STATUS: SAFE</span>
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

export default AirQualityUI;