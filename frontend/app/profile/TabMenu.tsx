// components/TabMenu.tsx
"use client";
import { User, FlaskConical, FileText, BookOpen, Trophy, MessageSquare } from 'lucide-react';

// Define the names of the tabs for TypeScript safety
export type TabName = 'Biography' | 'Degrees' | 'Publications' | 'Contacts';

type Props = {
  activeTab: TabName;
  setActiveTab: (tab: TabName) => void;
};

export default function TabMenu({ activeTab, setActiveTab }: Props) {
  const tabs = [
    { name: 'Biography' as TabName, icon: <User size={18} /> },
    { name: 'Degrees' as TabName, icon: <FlaskConical size={18} /> },
    { name: 'Publications' as TabName, icon: <FileText size={18} /> },
    { name: 'Contacts' as TabName, icon: <BookOpen size={18} /> }
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto px-8 mt-6 no-scrollbar border-b border-slate-800">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all relative whitespace-nowrap
              ${isActive ? 'text-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {tab.icon} {tab.name}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            )}
          </button>
        );
      })}
    </div>
  );
}