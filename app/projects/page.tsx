"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import Link from "next/link";

export default function Projects() {
	const [query, setQuery] = useState('')
	const currentRef = useRef<HTMLDivElement>(null)
	const pastRef = useRef<HTMLDivElement>(null)
	const currentAutoRef = useRef<NodeJS.Timeout | null>(null)
	const pastAutoRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const startCurrent = () => {
			currentAutoRef.current = setInterval(() => {
				if (!currentRef.current) return
				const { scrollLeft, scrollWidth, clientWidth } = currentRef.current
				const max = scrollWidth - clientWidth
				if (scrollLeft >= max) currentRef.current.scrollTo({ left: 0, behavior: 'smooth' })
				else currentRef.current.scrollBy({ left: 360, behavior: 'smooth' })
			}, 1800)
		}
		const stopCurrent = () => { if (currentAutoRef.current) { clearInterval(currentAutoRef.current); currentAutoRef.current = null } }

		const startPast = () => {
			pastAutoRef.current = setInterval(() => {
				if (!pastRef.current) return
				const { scrollLeft, scrollWidth, clientWidth } = pastRef.current
				const max = scrollWidth - clientWidth
				if (scrollLeft >= max) pastRef.current.scrollTo({ left: 0, behavior: 'smooth' })
				else pastRef.current.scrollBy({ left: 360, behavior: 'smooth' })
			}, 2200)
		}
		const stopPast = () => { if (pastAutoRef.current) { clearInterval(pastAutoRef.current); pastAutoRef.current = null } }

		startCurrent()
		startPast()

		const elCurrent = currentRef.current
		if (elCurrent) {
			elCurrent.addEventListener('mouseenter', stopCurrent)
			elCurrent.addEventListener('mouseleave', startCurrent)
		}
		const elPast = pastRef.current
		if (elPast) {
			elPast.addEventListener('mouseenter', stopPast)
			elPast.addEventListener('mouseleave', startPast)
		}

		return () => {
			stopCurrent();
			stopPast();
			if (elCurrent) { elCurrent.removeEventListener('mouseenter', stopCurrent); elCurrent.removeEventListener('mouseleave', startCurrent) }
			if (elPast) { elPast.removeEventListener('mouseenter', stopPast); elPast.removeEventListener('mouseleave', startPast) }
		}
	}, [])
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]">
			<div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-16">
				<div className="flex items-end justify-between gap-4 mb-8 flex-col sm:flex-row">
					<AnimatedHeading text="Projects" level="h2" className="text-white text-2xl sm:text-3xl md:text-4xl w-full sm:w-auto text-center sm:text-left" />
					<input 
						value={query} 
						onChange={e=>setQuery(e.target.value)} 
						placeholder="Search projects" 
						className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white/2 border border-white/6 text-white placeholder-slate-500 focus:border-cyan-400/50 outline-none transition-all duration-300" 
					/>
				</div>

				{/* Current Projects */}
				<div className="mt-16">
					<motion.h3
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="text-xl sm:text-2xl font-bold text-white mb-6"
					>
						Current Projects
					</motion.h3>
					<div className="relative group">
						<button onClick={()=>currentRef.current?.scrollBy({left:-360, behavior:'smooth'})} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/2 border border-white/6 rounded-full hover:bg-white/4 transition-all duration-300 text-sm sm:text-base">‹</button>
						<button onClick={()=>currentRef.current?.scrollBy({left:360, behavior:'smooth'})} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/2 border border-white/6 rounded-full hover:bg-white/4 transition-all duration-300 text-sm sm:text-base">›</button>
						<div ref={currentRef} className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scroll-smooth">
							{Array.from({length:8}).map((_,i)=> (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.05 }}
									whileHover={{ y: -8, scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="shrink-0 w-72 sm:w-80 bg-white/2 border border-white/6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 p-4 sm:p-6"
								>
									<div className={`h-36 sm:h-40 bg-gradient-to-br ${i % 3 === 0 ? 'from-cyan-500/20 to-blue-500/20' : i % 3 === 1 ? 'from-blue-500/20 to-purple-500/20' : 'from-green-500/20 to-cyan-500/20'} rounded-lg border border-white/10`} />
									<div className="mt-4 font-semibold text-white text-sm sm:text-base">Current Project {i+1}</div>
									<div className="text-xs sm:text-sm text-slate-400 mt-1">Status • Year</div>
									<div className="text-xs text-slate-400 mt-2">Team: Alice, Bob, Carol</div>
									<button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300 text-xs sm:text-sm font-semibold">
										View Details
									</button>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Past Projects */}
				<section className="mt-16">
					<motion.h3
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1 }}
						className="text-xl sm:text-2xl font-bold text-white mb-6"
					>
						Past Projects
					</motion.h3>
					<div className="relative group">
						<button onClick={()=>pastRef.current?.scrollBy({left:-360, behavior:'smooth'})} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/2 border border-white/6 rounded-full hover:bg-white/4 transition-all duration-300 text-sm sm:text-base">‹</button>
						<button onClick={()=>pastRef.current?.scrollBy({left:360, behavior:'smooth'})} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-8 sm:w-10 h-8 sm:h-10 bg-white/2 border border-white/6 rounded-full hover:bg-white/4 transition-all duration-300 text-sm sm:text-base">›</button>
						<div ref={pastRef} className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scroll-smooth">
							{Array.from({length:12}).map((_,i)=> (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.03 }}
									whileHover={{ y: -8, scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className="shrink-0 w-72 sm:w-80 bg-white/2 border border-white/6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 p-4 sm:p-6"
								>
									<div className={`h-32 sm:h-36 bg-gradient-to-br ${i % 3 === 0 ? 'from-cyan-500/20 to-blue-500/20' : i % 3 === 1 ? 'from-blue-500/20 to-purple-500/20' : 'from-green-500/20 to-cyan-500/20'} rounded-lg border border-white/10`} />
									<div className="mt-4 font-semibold text-white text-sm sm:text-base">Past Project {i+1}</div>
									<div className="text-xs sm:text-sm text-slate-400 mt-1">Status • Year</div>
									<button className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300 text-xs sm:text-sm font-semibold">
										View Details
									</button>
								</motion.div>
							))}
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
