"use client";

import { motion, easeOut } from 'framer-motion';

interface AnimatedHeadingProps {
	text: string;
	level?: 'h1' | 'h2' | 'h3';
	className?: string;
	delay?: number;
}

// const letterVariants = {
// 	hidden: { opacity: 0, y: 20 },
// 	visible: (i: number) => ({
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			duration: 0.6,
// 			delay: i * 0.04,
// 			ease: [0.2, 0.9, 0.2, 1],
// 		},
// 	}),
// };

const letterVariants = {
  hidden: { 
	opacity: 0, 
	y: 20 
  },
  visible: (i: number) => ({
	opacity: 1,
	y: 0,
	transition: {
	  duration: 0.6,
	  delay: i * 0.05,
	  ease: easeOut,
	},
  }),
};

const baseClasses = {
	h1: 'text-5xl md:text-6xl font-bold',
	h2: 'text-4xl font-bold',
	h3: 'text-2xl font-bold',
};

export default function AnimatedHeading({
	text,
	level = 'h2',
	className = '',
}: AnimatedHeadingProps) {
	const baseClass = baseClasses[level];
	const combinedClass = `${baseClass} ${className}`;

	const letterElements = text.split('').map((letter, i) => (
		<motion.span
			key={`${letter}-${i}`}
			custom={i}
			variants={letterVariants}
			initial="hidden"
			animate="visible"
			style={{ display: 'inline-block' }}
		>
			{letter === ' ' ? '\u00A0' : letter}
		</motion.span>
	));

	if (level === 'h1') {
		return (
			<motion.h1
				initial="hidden"
				animate="visible"
				className={combinedClass}
			>
				{letterElements}
			</motion.h1>
		);
	}

	if (level === 'h3') {
		return (
			<motion.h3
				initial="hidden"
				animate="visible"
				className={combinedClass}
			>
				{letterElements}
			</motion.h3>
		);
	}

	// Default to h2
	return (
		<motion.h2
			initial="hidden"
			animate="visible"
			className={combinedClass}
		>
			{letterElements}
		</motion.h2>
	);
}
