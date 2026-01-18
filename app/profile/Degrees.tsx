// components/Degrees.tsx
import { GraduationCap, CheckCircle2 } from "lucide-react";

type Degree = {
  title: string;
  major: string;
};

export default function Degrees({
  degrees = [], // ✅ DEFAULT VALUE (CRITICAL)
}: {
  degrees?: Degree[];
}) {

  if (degrees.length === 0) {
    return (
      <section className="bg-[#1e293b] rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
        <h2 className="text-xl font-semibold text-slate-400">
          No academic qualifications available
        </h2>
      </section>
    );
  }

  return (
    <section className="bg-[#1e293b] rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-cyan-500/10 rounded-lg">
          <GraduationCap className="text-cyan-400" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-white">
          Academic Qualifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {degrees.map((degree, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
          >
            <div className="flex-shrink-0">
              <CheckCircle2
                className="text-cyan-500 group-hover:scale-110 transition-transform"
                size={20}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">
                {degree.title}
              </h3>
              <p className="text-slate-400 text-sm mt-1 uppercase tracking-wider font-medium">
                {degree.major}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
