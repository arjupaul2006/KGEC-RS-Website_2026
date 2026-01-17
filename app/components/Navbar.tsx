"use client";

import Link from "next/link"
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react'
import Image from "next/image";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

    const NavbarItems = [
        { name: 'Home', path: '/' },
        { name: 'Team', path: '/team' },
        { name: 'Projects', path: '/projects' },
        { name: 'Events', path: '/events' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Alumni', path: '/alumni' },
        { name: 'Admin', path: '/admin' },
    ]

    const router = useRouter();
    const pathname = usePathname() ?? '/';

	return (
		<header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/6 bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-transparent">
			<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
				<button onClick={()=>{ setIsMenuOpen(false); router.push('/') }} aria-label="KGEC Robotics home" className="flex items-center gap-2">
					<Image src="/logo.png" alt="KGEC Robotics Logo" width={32} height={32} className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 shadow-md" />
					<span className="font-semibold text-white">KGEC Robotics Society</span>
				</button>
				
				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6">
					<ul className='flex gap-6 p-3'>
                        {NavbarItems.map((item) => (
                            <li key={item.name} className={`cursor-pointer ${pathname === item.path ? 'text-cyan-300 font-medium' : 'text-neutral-300 hover:text-cyan-300'}`}>
                                <Link href={item.path} onClick={() => setIsMenuOpen(false)} >
                                  {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
				</nav>

				{/* Mobile Menu Button */}
				<button 
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden p-2 rounded-lg hover:bg-white/6 transition-colors duration-200"
					aria-expanded={isMenuOpen}
					aria-label="Toggle menu"
				>
					<svg className="w-6 h-6 text-neutral-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{isMenuOpen ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden bg-[#06101b] border-t border-white/6">
					<nav className="px-4 py-4">
						<ul className='flex flex-col gap-3'>
                        {NavbarItems.map((item) => (
                            <li key={item.name} onClick={() => { setIsMenuOpen(false); router.push(item.path) }} className={pathname === item.path ? 'text-cyan-300 font-medium' : 'text-neutral-300 hover:text-cyan-300 transition-colors duration-200'}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
					</nav>
				</div>
			)}
		</header>
	)
}

