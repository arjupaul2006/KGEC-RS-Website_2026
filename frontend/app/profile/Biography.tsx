'use client';

// components/Biography.tsx
export default function Biography({ biography }: { biography?: string }) {
  return (
    <section className="bg-[#1e293b] rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Biography</h2>
      
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <p>
          {biography}
        </p>
      </div>
    </section>
  );
}