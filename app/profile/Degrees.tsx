// components/Degrees.tsx
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Degree {
  title: string;
  major: string;
  institution: string;
  year: string;
  location: string;
}

export default function Degrees() {
  const academicHistory: Degree[] = [
    {
      title: "Ph.D. in Computer Science",
      major: "Neural Network Optimization & Deep Learning",
      institution: "Stanford University",
      year: "2010 - 2014",
      location: "Stanford, CA"
    },
    {
      title: "Master of Science",
      major: "Artificial Intelligence",
      institution: "Massachusetts Institute of Technology (MIT)",
      year: "2008 - 2010",
      location: "Cambridge, MA"
    },
    {
      title: "Bachelor of Technology",
      major: "Computer Science & Engineering",
      institution: "KGEC",
      year: "2004 - 2008",
      location: "West Bengal, India"
    }
  ];

  return (
    <section className="bg-[#1e293b] rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <GraduationCap className="text-cyan-400" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-white">Education & Degrees</h2>
      </div>

      <div className="space-y-8">
        {academicHistory.map((edu, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-slate-700 last:border-0 pb-2">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                <p className="text-cyan-400 font-medium mt-1">{edu.major}</p>
                <p className="text-slate-300 mt-2 font-semibold">{edu.institution}</p>
              </div>
              
              <div className="flex flex-col gap-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{edu.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}