"use client";

import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading';

const faculty = [
	{ name: 'Dr. Sourav Kumar Das', role: 'Principal' },
	{ name: 'Dr. Satyendra Nath Mandal', role: 'Chairman' },
	{ name: 'Dr. Sandip Nandi', role: 'Secretary' },
	{ name: 'Dr. Aritra Acharya', role: 'Treasurer' },
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

export default function Faculty() {
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]">
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<AnimatedHeading text="OUR FACULTY BODY" level="h1" className="text-white text-center mb-2" />
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="text-center text-slate-300 mb-12"
				>
					Leaders, mentors, and advisors
				</motion.p>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="space-y-6"
				>
					{faculty.map((f, i) => (
						<motion.div
							key={f.name}
							variants={itemVariants}
							whileHover={{ x: 8, scale: 1.01 }}
							className="bg-white/2 border border-white/6 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm flex items-center gap-6"
						>
							<div className="h-24 w-24 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-white/10 flex-shrink-0" />
							<div className="flex-1">
								<div className="font-semibold text-white text-lg">{f.name}</div>
								<div className="text-sm text-slate-400 mb-2">{f.role}</div>
								<p className="text-sm text-slate-300">Leaders and mentors guiding the future of robotics innovation.</p>
							</div>
							<button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex-shrink-0">
								VIEW PROFILE
							</button>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	)
}
