// components/Publications.tsx
import { FileText, ExternalLink, Award, Bookmark } from "lucide-react";

interface Publication {
  title: string;
  journal: string;
  year: string;
  authors: string;
  type: "Journal" | "Conference" | "Book Chapter";
}

export default function Publications({
  publications = [], // ✅ DEFAULT VALUE (CRITICAL)
}: {
  publications?: Publication[];
}) {

    console.log("Publications Component Props:", publications);

  if (publications.length === 0) {
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
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/10 rounded-lg">
            <FileText className="text-cyan-400" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white">
            Selected Publications
          </h2>
        </div>
        <div className="text-xs text-slate-500 font-mono">
          Total: {publications.length}
        </div>
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl border transition-all duration-300 group
              `}
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded font-bold
                    ${pub.type === "Journal" ? "bg-purple-500/20 text-purple-400" : "bg-amber-500/20 text-amber-400"}`}
                  >
                    {pub.type}
                  </span>
                  {/* {pub.isHighlighted && (
                    <span className="flex items-center gap-1 text-[10px] uppercase tracking-widest px-2 py-0.5 rounded font-bold bg-cyan-500/20 text-cyan-400">
                      <Award size={10} /> Featured
                    </span>
                  )} */}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {pub.title}
                </h3>

                <p className="text-slate-400 text-sm mt-2 italic">
                  {pub.authors}
                </p>

                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 mt-4 text-xs font-medium">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Bookmark size={14} className="text-cyan-500" />
                    {pub.journal}
                  </div>
                  <div className="text-slate-500">{pub.year}</div>
                </div>
              </div>

              <div className="flex md:flex-col justify-end gap-3 border-t md:border-t-0 md:border-l border-slate-700/50 pt-4 md:pt-0 md:pl-6">
                {/* <a 
                  href={`https://doi.org/${pub.doi}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold transition-colors"
                >
                  <ExternalLink size={14} /> DOI
                </a> */}
                <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 text-xs font-bold transition-all">
                  Full Paper
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
