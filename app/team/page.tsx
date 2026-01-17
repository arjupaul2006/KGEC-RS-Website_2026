"use client";

import MemberCard from '../components/MemberCard'
import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'

const domainLeads = [
	{ name: 'Soham Dutta', domain: 'Graphics, Content & PR Team' },
	{ name: 'Anirban Mukherjee', domain: 'Core Electronics and IOT' },
	{ name: 'Arup Barai', domain: 'Core Electronics and IOT' },
	{ name: 'Anirban Roy', domain: 'AI, ML' },
	{ name: 'Deep Rudra', domain: 'AI, ML' },
	{ name: 'Debarghya Panda', domain: 'Mechatronics' },
	{ name: 'Susanta Sing', domain: 'Mechatronics' },
	{ name: 'Tanmoy_Debnath', domain: 'Mechatronics' },
]

const studentBody = [
	{ name: 'Agnidipta Basu', role: 'Joint Secretary' },
	{ name: 'Saikat Panda', role: 'Joint Secretary' },
	{ name: 'Somaraho Chaudhury', role: 'Additional Joint Secretary' },
	{ name: 'Anisha Patra', role: 'Additional Joint Secretary' },
	{ name: 'Debamrita Paul', role: 'Additional Joint Secretary' },
	{ name: 'Sayandip Paul', role: 'Additional Joint Secretary' },
]

const containerVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
}

export default function Team() {
	return (
		<div className="relative min-h-screen bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]">
			<div className="relative max-w-7xl mx-auto px-4 py-16">
				<AnimatedHeading text="TEAM" level="h2" className="text-white text-center mb-2" />
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="mt-2 text-slate-300 text-center"
				>
					Meet our Student Body and Domain Leads.
				</motion.p>

				<section className="mt-10">
					<motion.h3
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="text-2xl font-bold text-white text-center mb-6"
					>
						Our Student Body
					</motion.h3>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
					>
						{studentBody.map((m)=> (
							<motion.div key={m.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
								<MemberCard name={m.name} role={m.role} />
							</motion.div>
						))}
					</motion.div>
				</section>

				<section className="mt-14">
					<motion.h3
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="text-2xl font-bold text-white text-center mb-6"
					>
						Domain Leads
					</motion.h3>
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
					>
						{domainLeads.map((m)=> (
							<motion.div key={m.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
								<MemberCard name={m.name} domain={m.domain} />
							</motion.div>
						))}
					</motion.div>
				</section>
			</div>
		</div>
	)
}
