// app/page.tsx
import { Zap } from 'lucide-react';
import Navbar from './Navbar';
import ProfileHeader from './ProfileHeader';
import TabMenu from './TabMenu';
import { StaticImageData } from 'next/image';

interface ProfileProps {
  name: string
  role: string
  image?: string
}

export default async function FacultyPortal({searchParams}: {searchParams: Promise<ProfileProps>}) {

  const params = await searchParams;

  const name = params?.name ?? "";
  const role = params?.role ?? "";
  const image = params?.image
  ? decodeURIComponent(params.image)
  : "";

  console.log(name, role, image);
  return (
    <main className="min-h-screen bg-[#0f172a] pb-20">
      <Navbar />
      <ProfileHeader name={name} role={role} image={image} />
      <TabMenu />

      <div className="px-8 mt-10">
        <div className="flex items-center gap-3 text-white mb-8">
          <div className="p-1.5 bg-slate-800 rounded-lg border border-slate-700">
            <Zap size={16} className="text-yellow-400 fill-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Current Research Projects</h2>
        </div>
        
        {/* You can map your project cards here */}
      </div>
    </main>
  );
}