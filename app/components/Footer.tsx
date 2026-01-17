"use client";

import { motion } from 'framer-motion'

export default function Footer() {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="border-t border-white/6 bg-white/2 backdrop-blur-md"
		>
			<div className="max-w-7xl mx-auto px-4 py-8 text-sm text-slate-400 text-center">
				<div>© {new Date().getFullYear()} KGEC Robotics Society. All rights reserved.</div>
				<div className="text-xs mt-2">Contact us: robotics@kgec.edu.in</div>
			</div>
		</motion.footer>
	)
}
