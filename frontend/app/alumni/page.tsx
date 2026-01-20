"use client";

import { motion } from 'framer-motion'
import AnimatedHeading from '../components/AnimatedHeading';
import SocialButtons from '../components/SocialButtons';
import partha from '../../public/alumni/partha.png'
import sorbhajit from '../../public/alumni/Sorbajit.png'
import kanchan from '../../public/alumni/kanchan.png'
import ayandip from '../../public/alumni/ayandip.png'
import ahana from '../../public/alumni/ahana.png'
import sunirban from '../../public/alumni/sunirban.png'
import arnab from '../../public/alumni/arnab.png'
import aritra from '../../public/alumni/aritra.png'
import sayak from '../../public/alumni/sayak.png'
import ayush from '../../public/alumni/ayush.png'
import ajarul from '../../public/alumni/ajarul.png'
import souradeep from '../../public/alumni/souradeep.png'
import anindya from '../../public/alumni/anindya.png'
import archisman from '../../public/alumni/archisman.png'
import aryan from '../../public/alumni/aryan.png'
import manish from '../../public/alumni/manish.png'
import sayan from '../../public/alumni/sayan.png'
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import pritam from '../../public/alumni/pritam.png'
type Social={
	platform:string;
	link:string;
}
type AlumniItem = { name: string; image?: string | StaticImageData ,socials:Social[] }

const years: { year: number; people: AlumniItem[] }[] = [
	{ 
		year: 2025,
		people:[
			{
               name:"Aritra Biswas",
			   image:aritra,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/aritra-biswas-80566b239/"
				}
			   ]
			},
			{
               name:"Sayak Jana",
			   image:sayak,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/sayak-jana-06ab55224/"
				}
			   ]
			},
			{
               name:"Ayush Kumar Sharma",
			   image:ayush,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/ayush-kumar-sharma-0499b1232/"
				}
			   ]
			},
			{
               name:"Ajarul Miah",
			   image:ajarul,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/ajarul-miah-bb2bbb254/"
				}
			   ]
			},
			{
               name:"Sk Iftikar Uddin",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"Souradeep Bera",
			   image:souradeep,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/souradeep-bera-622836224/"
				},
				
			   ]
			},
			
		]
	 },
	{ 
		year: 2024,
		people:[
			{
               name:"Partha Singha Roy",
			   image:partha,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/parthasingharoy/"
				}
			   ]
			},
			{
               name:"Ayandip Garai",
			   image:ayandip,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/ayan2601/"
				}
			   ]
			},
			{
               name:"Swarbajit Goswami",
			   image:sorbhajit,
               socials:[
				{
					platform:"facebook",
					link:"https://www.facebook.com/share/19MNK3B2ih/"
				}
			   ]
			},
			{
               name:"Ahana biswas",
			   image:ahana,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/ahana-biswas-7aa1a2202/"
				}
			   ]
			},
			{
               name:"Kanchan kumar kaiti",
			   image:kanchan,
               socials:[
				{
					platform:"facebook",
					link:"https://www.facebook.com/share/1CCJPBZAiF/"
				}
			   ]
			},
			{
               name:"Sunirban ranjit",
			   image:sunirban,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/s-ranjit/"
				}
			   ]
			},
			{
               name:"Arnab Kr. Das",
			   image:arnab,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/thearnabkumardas/"
				}
			   ]
			},
			
		]
	 },
	{ 
		year: 2023,
		people:[
			{
               name:"Anindya Kanti Mitra",
			   image:anindya,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/anindyamitra15/"
				}
			   ]
			},
			{
               name:"Archisman Das",
			   image:archisman,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/das-archisman-10027001/"
				}
			   ]
			},
			{
               name:"Anubhav Dutta ",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/luke-anubis/"
				}
			   ]
			},
			{
               name:"Aryan Mukherjee",
			   image:aryan,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/aryan-mukherjee-a89777217/"
				}
			   ]
			},
			{
               name:"Manish Pandey",
			   image:manish,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/manish-pandey-216302201/"
				}
			   ]
			},
			{
               name:"Pritam Mukherjee",
			   image:pritam,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/pmukherjee-556/"
				}
			   ]
			},
			
			{
               name:"Sayan Kundu",
			   image:sayan,
               socials:[
				{
					platform:"linkedin",
					link:"https://www.linkedin.com/in/sayan2001/"
				}
			   ]
			},
			
		]
	 },
	{ 
		year: 2022,
		people:[
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			
		]
	 },
	{ 
		year: 2021,
		people:[
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			
		]
	 },
	{ 
		year: 2020,
		people:[
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			{
               name:"",
			   image:'',
               socials:[
				{
					platform:"linkedin",
					link:""
				}
			   ]
			},
			
		]
	 },
	
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
			<div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
				<AnimatedHeading text="ALUMNI" level="h1" className="text-white text-center text-2xl sm:text-3xl md:text-4xl mb-2" />
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.6 }}
					className="text-center text-slate-300 mb-8 sm:mb-12 text-sm sm:text-base"
				>
					Graduating classes from 2020 to 2025
				</motion.p>

				<div className="space-y-12 sm:space-y-16">
					{years.map((group, groupIdx) => (
						<motion.section
							key={group.year}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: groupIdx * 0.1 }}
						>
							<div className="flex items-center gap-4 mb-6 sm:mb-8">
								<motion.h2
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.2 }}
									className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap"
								>
									Batch {group.year}
								</motion.h2>
								<div className="h-1 flex-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-full" />
							</div>
							<motion.div
								variants={containerVariants}
								initial="hidden"
								animate="visible"
								className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
							>
								{group.people.map((p) => (
									<motion.div
										key={p.name}
										variants={itemVariants}
										whileHover={{ y: -8, scale: 1.03 }}
										whileTap={{ scale: 0.96 }}
										className="bg-white/2 border border-white/6 rounded-2xl p-4 sm:p-5 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
									>
									<div className="h-42 sm:h-56 w-full rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-white/10 mb-4 overflow-hidden">
										{p.image ? (
											<Image 
												src={p.image} 
												alt={p.name}
												className="h-full w-full object-cover object-top rounded-xl"
												priority={false}
											/>
										) : (
											<div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20" />
										)}
									</div>
										<div className="font-semibold text-white text-center mb-1 text-sm sm:text-base">{p.name}</div>
										
										<SocialButtons socials={p.socials} />
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
