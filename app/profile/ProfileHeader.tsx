// components/ProfileHeader.tsx
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export default function ProfileHeader({name, role, image}: {name: string, role: string, image?: any}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1e293b] mt-8 mx-8 border border-slate-700/50">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/20 to-transparent" />
      
      <div className="p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <div className="relative z-10">
          <div className="w-32 h-32 rounded-full border-4 border-slate-700 overflow-hidden shadow-2xl">
            <Image src={image} alt={name} width={128} height={128} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Name and Title */}
        <div className="flex-1 text-center md:text-left z-10">
          <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
          <p className="text-cyan-400 font-medium text-lg mb-1">{role}</p>
          <p className="text-slate-400">Department of Computer Science & Engineering</p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <ContactItem icon={<Mail size={20} />} label="Email" value="sarah.mitchell@university.edu" isLink />
            <ContactItem icon={<Phone size={20} />} label="Phone" value="+1 (555) 123-4567" />
            <ContactItem icon={<MapPin size={20} />} label="Office" value="Engineering Building, Room 305" />
            <ContactItem icon={<Clock size={20} />} label="Office Hours" value="Mon & Wed 2:00 PM - 4:00 PM" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value, isLink = false }: any) {
  return (
    <div className="flex items-center gap-4 text-left">
      <div className="text-cyan-500">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{label}</p>
        <p className={`text-sm ${isLink ? 'text-white hover:underline cursor-pointer' : 'text-slate-300'}`}>{value}</p>
      </div>
    </div>
  );
}