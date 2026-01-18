// components/Contact.tsx
"use client";
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Send } from 'lucide-react';

export default function Contacts({ email, office, linkedin, researchgate }: { email?: string; office?: string; linkedin?: any; researchgate?: any }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 p-5">
      
      {/* Left Column: Information Card */}
      <div className="bg-[#1e293b] rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          For research collaborations, speaking engagements, or academic inquiries, please feel free to reach out through any of the following channels.
        </p>

        <div className="space-y-6">
          <ContactDetail 
            icon={<Mail className="text-cyan-400" size={20} />} 
            label="Email Address" 
            value={email} 
            href={`mailto:${email}`}
          />
          <ContactDetail 
            icon={<MapPin className="text-cyan-400" size={20} />} 
            label="Office Location" 
            value={office} 
          />
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">Follow Professional Activity</p>
          <div className="flex gap-4">
            <SocialIcon icon={<Linkedin size={20} />} href={linkedin} target="_blank"/>
            <SocialIcon icon={<Twitter size={20} />} href="#" />
            <SocialIcon icon={<Globe size={20} />} href={researchgate} />
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      
    </section>
  );
}

function ContactDetail({ icon, label, value, href }: any) {
  const Content = (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-cyan-500 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{label}</p>
        <p className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href}>{Content}</a> : Content;
}

function SocialIcon({ icon, href }: any) {
  return (
    <a href={href} className="p-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all">
      {icon}
    </a>
  );
}