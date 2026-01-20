import React from 'react';
import { Hand, Users, Code, Activity, Layers, Cpu } from 'lucide-react';
import Image from 'next/image';
import hand2 from "../../../public/projects/hand2.png"

const HandGestureUI = () => {
  const teamMembers = ["Prantik Roy", "Soumodip Biswas"];
  
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 p-6 md:p-12 font-sans selection:bg-indigo-500/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 bg-[#111827] rounded-[3rem] border border-slate-800 shadow-2xl overflow-hidden">
        
        {/* Left Section: Content and Team */}
        <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 shadow-xl shadow-indigo-500/5">
              <Hand className="text-indigo-400" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight uppercase italic">
                Gesture AI
              </h1>
              <p className="text-indigo-500 font-mono text-sm tracking-widest">
                21-POINT SKELETON RECOGNITION
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            A sophisticated AI application leveraging computer vision to bridge the gap 
            between human gestures and digital commands. By tracking landmark coordinates 
            with MediaPipe, it enables seamless control across robotics, gaming, and healthcare.
          </p>

          {/* Project Team */}
          <div className="mb-12">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <Users size={14} /> Project Developers
            </h3>
            <div className="flex flex-wrap gap-3">
              {teamMembers.map((member) => (
                <div key={member} className="px-5 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm font-semibold hover:border-indigo-500/50 transition-colors p-3">
                  {member}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-2xl flex items-start gap-4">
              <Layers className="text-indigo-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm">MediaPipe Engine</h4>
                <p className="text-xs text-slate-500 mt-1 leading-tight">Extracting 21 unique coordinates for precise landmark mapping.</p>
              </div>
            </div>
            <div className="p-5 bg-slate-800/30 border border-slate-700 rounded-2xl flex items-start gap-4">
              <Cpu className="text-indigo-400 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-white text-sm">Kaggle Dataset</h4>
                <p className="text-xs text-slate-500 mt-1 leading-tight">Comparative analysis against standard gesture benchmarks.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Visual Visuals */}
        <div className="lg:w-2/5 relative bg-slate-900 overflow-hidden flex flex-col justify-center p-8">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-600 rounded-full blur-[80px]"></div>
          </div>
          
          <div className="relative z-10 w-full group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square bg-slate-800 rounded-[2rem] border border-slate-700 overflow-hidden shadow-2xl flex flex-col">
              
              {/* MediaPipe Visual Placeholder */}
              <div className="h-2/3 w-full bg-slate-900 relative">
                 <Image
                   src={hand2}
                   alt="MediaPipe skeleton detection visualization"
                   className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                 />
                 
              </div>

              {/* Real-time Telemetry Panel */}
              <div className="flex-1 p-6 bg-slate-800/80 flex flex-col justify-center">
                 <div className="bg-[#0b1120] border border-indigo-500/30 rounded-xl p-4 font-mono shadow-inner">
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-indigo-500 text-[10px] uppercase font-bold tracking-widest">AI Result Console</span>
                       <Activity size={14} className="text-indigo-500 animate-pulse" />
                    </div>
                    <div className="space-y-1">
                       <div className="text-indigo-400/90 text-sm flex items-center gap-2">
                         <Code size={12} /> Points Detected: 21
                       </div>
                       <div className="mt-2 pt-2 border-t border-indigo-500/10 flex justify-between">
                          <span className="text-white font-black text-sm uppercase italic tracking-tighter">Recognized:</span>
                          <span className="text-indigo-400 font-bold text-sm uppercase">"HELLO"</span>
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

export default HandGestureUI;