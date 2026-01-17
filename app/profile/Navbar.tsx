// components/Navbar.tsx
import { GraduationCap, FlaskConical, FileText, Mail } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Faculty Profiles', icon: <GraduationCap size={18} /> },
    { name: 'Research', icon: <FlaskConical size={18} /> },
    { name: 'Publications', icon: <FileText size={18} /> },
    { name: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0f172a] text-gray-300">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#00bcd4] rounded-lg flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
          <GraduationCap size={24} />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-tight text-white">Faculty Portal</h1>
          <p className="text-xs text-gray-400">Academic Excellence</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a key={item.name} href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-sm font-medium">
            {item.icon} {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}