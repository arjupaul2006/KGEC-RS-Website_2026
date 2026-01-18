"use client";

import MemberCard from '../components/MemberCard'
import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading'
import agni from '../../public/team-members/AGNI.jpg'
import somaroho from '../../public/team-members/somaroho.jpeg'
import debamrita from '../../public/team-members/debamrita.jpeg'
import sayandeep from '../../public/team-members/sayandeep.jpeg'
import anisha from '../../public/team-members/anisha.jpeg'
import deep from '../../public/team-members/diprudra.jpeg'
import anirbanMukharjee from '../../public/team-members/anirban.jpeg'
import tanmoy from '../../public/team-members/Tanmoy.jpeg'
import debarghya from '../../public/team-members/deverko.jpeg'
import anirbanRoy from '../../public/team-members/anirbanroy.jpeg'
import sushant from '../../public/team-members/susanth.jpeg'
import soham from '../../public/team-members/soham.jpeg'
import arup from '../../public/team-members/arup.jpeg'

const domainLeads = [
	{ name: 'Soham Dutta', domain: 'Graphics, Content & PR Team', imageurl: soham, socials: { email: "abc@gmail.com", linkedin: "https://www.linkedin.com/in/soham-dutta-b6ab62290/", facebook: "" } },
	{ name: 'Anirban Mukherjee', domain: 'Core Electronics and IOT', imageurl: anirbanMukharjee, socials: { email: "abc@gmail.com", linkedin: "https://www.linkedin.com/in/anirban-mukharjee-0a5917279/", facebook: "" } },
	{ name: 'Arup Barai', domain: 'Core Electronics and IOT', imageurl: arup, socials: { email: "abc@gmail.com", linkedin: "https://www.linkedin.com/in/arup-barai-214b73290/", facebook: "" } },
	{ name: 'Anirban Roy', domain: 'AI, ML', imageurl: anirbanRoy, socials: { email: "abc@gmail.com", linkedin: "https://www.linkedin.com/in/anirban-roy-a91666278/", facebook: "" } },
	{ name: 'Deep Rudra', domain: 'AI, ML', imageurl: deep, socials: { email: "abc@gmail.com", linkedin: "https://www.linkedin.com/in/deeprudra04/", facebook: "" } },
	{ name: 'Debarghya Panda', domain: 'Mechatronics', imageurl: debarghya, socials: { email: "abc@gmail.com", linkedin: "https://www.linkedin.com/in/debarghya-panda/", facebook: "" } },
	{ name: 'Susanta Sing', domain: 'Mechatronics', imageurl: sushant, socials: { email: "abc@gmail.com", linkedin: "https://www.linkedin.com/in/susant-singh-44672b373/", facebook: "" } },
	{ name: 'Tanmoy_Debnath', domain: 'Mechatronics', imageurl: tanmoy, socials: { email: "abc@gmail.com", linkedin: "https://www.linkedin.com/in/tanmay-debnath-ab3ab6290/", facebook: "" } },
]

const studentBody = [
	{ name: 'Agnidipta Basu', role: 'Joint Secretary', imageurl: agni },
	{ name: 'Saikat Panda', role: 'Joint Secretary', imageurl: agni },
	{ name: 'Somaraho Chaudhury', role: 'Additional Joint Secretary', imageurl: somaroho },
	{ name: 'Anisha Patra', role: 'Additional Joint Secretary', imageurl: anisha },
	{ name: 'Debamrita Paul', role: 'Additional Joint Secretary', imageurl: debamrita },
	{ name: 'Sayandip Paul', role: 'Additional Joint Secretary', imageurl: sayandeep },
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
						{studentBody.map((m) => (
							<motion.div key={m.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
								<MemberCard name={m.name} role={m.role} imageUrl={m.imageurl} />
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
						{domainLeads.map((m) => (
							<motion.div key={m.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
								<MemberCard name={m.name} domain={m.domain} imageUrl={m.imageurl} />
							</motion.div>
						))}
					</motion.div>
				</section>
			</div>
		</div>
	)
}
