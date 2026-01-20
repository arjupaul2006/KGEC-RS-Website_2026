"use client";

import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 }
	}
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Admin() {
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]">
			<div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mb-8 sm:mb-12"
				>
					<AnimatedHeading text="Admin Panel" level="h2" className="text-white mb-2 text-center md:text-left text-2xl sm:text-3xl md:text-4xl" />
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="text-slate-300 text-center md:text-left text-sm sm:text-base"
					>
						Role-based access and CRUD management for the KGEC Robotics Society.
					</motion.p>
				</motion.div>

				{/* Management Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
				>
					{[
						{ title: 'Projects Management', desc: 'Manage ongoing and completed projects' },
						{ title: 'Events Management', desc: 'Organize hackathons, workshops, and competitions' },
						{ title: 'Team Management', desc: 'Update team members and their roles' },
					].map((item) => (
						<motion.div
							key={item.title}
							variants={itemVariants}
							whileHover={{ y: -8, scale: 1.02 }}
							whileTap={{ scale: 0.96 }}
							className="bg-white/2 border border-white/6 rounded-2xl shadow-lg p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
						>
							<div className="font-semibold text-white text-base sm:text-lg mb-2">{item.title}</div>
							<p className="text-slate-300 text-xs sm:text-sm mb-4">{item.desc}</p>
							<button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300 text-sm">
								Manage
							</button>
						</motion.div>
					))}
				</motion.div>

				{/* Quick Stats */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Quick Stats</h3>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
					>
						{[
							{ label: 'Active Projects', value: '12', color: 'from-blue-500' },
							{ label: 'Upcoming Events', value: '8', color: 'from-green-500' },
							{ label: 'Next Event (Hours)', value: '23:47', color: 'from-cyan-500' },
							{ label: 'Total Members', value: '45', color: 'from-purple-500' },
						].map((stat) => (
							<motion.div
								key={stat.label}
								variants={itemVariants}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white/2 border border-white/6 rounded-xl p-3 sm:p-4 text-center hover:border-white/12 transition-all duration-300 backdrop-blur-sm"
							>
								<div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} to-white/80 bg-clip-text text-transparent mb-2`}>{stat.value}</div>
								<div className="text-xs sm:text-sm text-slate-300">{stat.label}</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	)
}
