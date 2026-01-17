// components/TabMenu.tsx
import { User, FlaskConical, FileText, BookOpen, Trophy, MessageSquare } from 'lucide-react';

export default function TabMenu() {
  const tabs = [
    { name: 'Biography', icon: <User size={18} /> },
    { name: 'Research', icon: <FlaskConical size={18} />, active: true },
    { name: 'Publications', icon: <FileText size={18} /> },
    { name: 'Courses', icon: <BookOpen size={18} /> },
    { name: 'Achievements', icon: <Trophy size={18} /> },
    { name: 'Testimonials', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto px-8 mt-6 no-scrollbar border-b border-slate-800">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all relative whitespace-nowrap
            ${tab.active ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
        >
          {tab.icon} {tab.name}
          {tab.active && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />}
        </button>
      ))}
    </div>
  );
}