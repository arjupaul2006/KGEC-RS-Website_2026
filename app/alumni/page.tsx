"use client";

import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading';

type AlumniItem = { name: string; role?: string }

const years: { year: number; people: AlumniItem[] }[] = [
	{ year: 2025, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2025 - ${i+1}` })) },
	{ year: 2024, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2024 - ${i+1}` })) },
	{ year: 2023, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2023 - ${i+1}` })) },
	{ year: 2022, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2022 - ${i+1}` })) },
	{ year: 2021, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2021 - ${i+1}` })) },
	{ year: 2020, people: Array.from({ length: 6 }).map((_, i) => ({ name: `Alumni 2020 - ${i+1}` })) },
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Alumni() {
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]">
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<AnimatedHeading text="ALUMNI" level="h1" className="text-white text-center mb-2" />
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="text-center text-slate-300 mb-12"
				>
					Graduating classes from 2020 to 2025
				</motion.p>

				<div className="space-y-16">
					{years.map((group, groupIdx) => (
						<motion.section
							key={group.year}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: groupIdx * 0.1 }}
						>
							<div className="flex items-center gap-4 mb-8">
								<motion.h2
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.2 }}
									className="text-2xl font-bold text-white"
								>
									Batch {group.year}
								</motion.h2>
								<div className="h-1 flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full" />
							</div>
							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
							>
								{group.people.map((p) => (
									<motion.div
										key={p.name}
										variants={itemVariants}
										whileHover={{ y: -8, scale: 1.03 }}
										className="bg-white/2 border border-white/6 rounded-2xl p-5 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
									>
										<div className="h-36 w-full rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-white/10 mb-4" />
										<div className="font-semibold text-white text-center mb-1">{p.name}</div>
										<div className="text-sm text-slate-400 text-center mb-4">{p.role ?? 'Alumni'}</div>
										<div className="flex items-center justify-center gap-3">
											<button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300" aria-label="Email">
												<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" /></svg>
											</button>
											<button className="p-2 hover:bg-white/10 rounded-lg transition-all duration-300" aria-label="LinkedIn">
												<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-300 hover:text-cyan-400" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6C1.12 6 0 4.88 0 3.5C0 2.12 1.12 1 2.5 1C3.86 1 4.98 2.12 4.98 3.5ZM0 8H5V24H0V8ZM8 8H12.6V10.1H12.66C13.3 8.92 14.86 7.68 17.12 7.68C21.76 7.68 22.5 10.76 22.5 14.72V24H17.5V15.92C17.5 13.98 17.46 11.5 14.86 11.5C12.22 11.5 11.82 13.62 11.82 15.78V24H6.82V8H8Z" /></svg>
											</button>
										</div>
									</motion.div>
								))}
							</motion.div>
						</motion.section>
					))}
				</div>
			</div>
		</div>
	)
}
