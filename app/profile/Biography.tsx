'use client';

// components/Biography.tsx
export default function Biography() {
  return (
    <section className="bg-[#1e293b] rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">Biography</h2>
      
      <div className="space-y-6 text-slate-300 leading-relaxed">
        <p>
          Dr. Sarah Mitchell is a distinguished Professor of Computer Science with over 15 years of experience 
          in artificial intelligence and machine learning research. Her groundbreaking work in neural network 
          optimization has been recognized internationally and has contributed significantly to advancing 
          the field of deep learning.
        </p>
        
        <p>
          Before joining the university in 2015, Dr. Mitchell worked as a Senior Research Scientist at 
          Tech Innovations Lab, where she led a team developing cutting-edge AI solutions for healthcare 
          applications. Her research has been published in over 80 peer-reviewed journals and conferences, 
          and she has been invited as a keynote speaker at numerous international symposiums.
        </p>
        
        <p>
          Dr. Mitchell is passionate about mentoring the next generation of computer scientists and has 
          supervised 25 doctoral students and 40 master's students throughout her career. She is committed 
          to fostering diversity in STEM fields and actively participates in outreach programs to encourage 
          underrepresented groups to pursue careers in technology.
        </p>
      </div>
    </section>
  );
}