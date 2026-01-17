"use client";

import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading';

const timelineMonths = [
	{ month: 'January', color: 'blue' },
	{ month: 'March', color: 'green' },
	{ month: 'May', color: 'blue' },
	{ month: 'August', color: 'green' },
	{ month: 'October', color: 'blue' },
	{ month: 'December', color: 'green' },
]

const sampleEvents = [
	{ title: 'Robotics Hackathon 2024', type: 'Hackathon', date: '2024-03-15', status: 'upcoming' },
	{ title: 'AI Workshop Series', type: 'Workshop', date: '2024-01-20', status: 'completed' },
	{ title: 'Robotics Competition', type: 'Competition', date: '2024-05-10', status: 'upcoming' },
	{ title: 'Tech Expo', type: 'Competition', date: '2024-08-25', status: 'upcoming' },
	{ title: 'Innovation Summit', type: 'Other', date: '2024-10-05', status: 'upcoming' },
	{ title: 'Annual Meet', type: 'Other', date: '2024-12-15', status: 'upcoming' },
]

export default function Events() {
	return (
		<div className="relative min-h-screen">
			<div className="absolute inset-0 bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]" />
			<div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
				<AnimatedHeading text="Events" level="h2" className="text-white mb-2 text-center md:text-left text-2xl sm:text-3xl md:text-4xl" />
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="mt-4 text-slate-300 text-center md:text-left text-sm sm:text-base"
				>
					Discover hackathons, workshops, competitions, and more.
				</motion.p>

				{/* Horizontal Timeline */}
				<section className="mt-8 sm:mt-12">
					<h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-6">Event Timeline</h3>
					<div className="overflow-x-auto pb-2">
						<div className="flex gap-4 sm:gap-6">
							{timelineMonths.map((item, index) => (
								<motion.div
									key={item.month}
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.08 }}
									className="flex-shrink-0 w-20 sm:w-24"
								>
									<div
										className="w-3 h-3 rounded-full"
										style={{ background: item.color === 'blue' ? 'linear-gradient(180deg,#60a5fa,#3b82f6)' : 'linear-gradient(180deg,#34d399,#10b981)' }}
										aria-hidden
									/>
									<div className="mt-2 text-center text-slate-300 text-xs sm:text-sm">{item.month}</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Gallery Carousel */}
				<section className="mt-12 sm:mt-16">
					<h3 className="text-lg sm:text-xl font-semibold text-slate-200 mb-6">Event Gallery</h3>
					<div className="overflow-hidden rounded-xl">
						<motion.div
							className="flex gap-4 sm:gap-6"
							animate={{ x: [0, -100, 0] }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						>
							{Array.from({ length: 12 }).map((_, i) => (
								<motion.div
									key={i}
									className="shrink-0 w-64 sm:w-72 md:w-80 bg-white/2 border border-white/6 rounded-xl shadow-md overflow-hidden hover:border-cyan-400 transition-all duration-300"
								>
									<div className={`h-40 sm:h-48 bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-100 to-blue-200' : 'from-green-100 to-green-200'}`} />
									<div className="p-3 sm:p-4">
										<div className="font-semibold text-white text-sm sm:text-base">Sample Event {i + 1}</div>
										<div className="text-xs sm:text-sm text-slate-300 mt-1">Date • Type</div>
										<button className="mt-3 w-full text-xs sm:text-sm py-2 px-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-lg hover:shadow-lg active:scale-95 transition-all duration-300">
											View Details
										</button>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>

				{/* Static Event Grid */}
				<section className="mt-12 sm:mt-16">
					<h3 className="text-lg sm:text-xl font-semibold text-white mb-6 sm:mb-8">Featured Events</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{sampleEvents.map((event, i) => (
							<motion.div
								key={event.title}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: i * 0.1 }}
								whileHover={{ y: -5, scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="bg-white/2 border border-white/6 rounded-xl shadow-md overflow-hidden hover:border-cyan-400 transition-all duration-300"
							>
								<div className={`h-40 sm:h-48 bg-gradient-to-br ${i % 2 === 0 ? 'from-blue-100 to-blue-200' : 'from-green-100 to-green-200'}`} />
								<div className="p-3 sm:p-4">
									<div className="font-semibold text-white text-sm sm:text-base">{event.title}</div>
									<div className="text-xs sm:text-sm text-slate-300 mt-1">{new Date(event.date).toLocaleDateString()} • {event.type}</div>
									<div className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${event.status === 'upcoming' ? 'bg-cyan-500/20 text-cyan-300' : 'bg-green-500/20 text-green-300'}`}>
										{event.status}
									</div>
									<button className="mt-4 w-full text-xs sm:text-sm py-2 px-4 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-lg hover:shadow-lg active:scale-95 transition-all duration-300">
										View Details
									</button>
								</div>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	)
}
