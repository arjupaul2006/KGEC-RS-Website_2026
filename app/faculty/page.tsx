"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "../components/AnimatedHeading";
import Image from "next/image";
import sandip from "../../public/faculty/sandip.jpeg";
import satyandra from "../../public/faculty/satyandra.png";
import souvik from "../../public/faculty/souvik.png";
import aritra from "../../public/faculty/aritra.jpeg";
import Link from "next/link";
import { off } from "process";
import { li } from "framer-motion/client";

const faculty = [
  {
    name: "Dr. Sourav Kumar Das",
    role: "Principal",
    imageurl: souvik,
    dept: "HOD, Humanities",
    email: "sourabhkumardas@gmail.com",
    office: "Kalyani Government Engineering College, West Bengal",
    office_hours: "Mon - Tue: 10:00 AM - 12:00 PM",
    biography:
      "Assistant Professor of ECE. Specialization: Communication Engineering. Experience - 18 Years. Presently he is working as an Assistant Professor in Higher Education Department, Government of West Bengal since 2009 and now is associated with the Electronics and Communication Engineering department of Kalyani Government Engineering College. He is a Senior Member of IEEE and IEEE GRSS Society. His present research interest includes Wireless Communication, Upper Atmospheric Communication, MIMO, Wave Propagation, Space Science and Remote Sensing.",
    degrees: [
      {
        title: "Doctor of Philosophy",
        major: "Computer Science & Engineering",
      },
      {
        title: "Master of Science",
        major: "Artificial Intelligence & Data Science",
      },
      { title: "Bachelor of Technology", major: "Information Technology" },
      { title: "Post Graduate Diploma", major: "Cyber Security" },
    ],
    publication: [
      {
        title:
          "Optimizing Deep Neural Networks for Edge Computing in Healthcare",
        journal:
          "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        year: "October 2025",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "Optimizing Deep Neural Networks for Edge Computing in Healthcare",
        journal:
          "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        year: "October 2025",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "Optimizing Deep Neural Networks for Edge Computing in Healthcare",
        journal:
          "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        year: "October 2025",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
    ],
    linkedin:
      "https://www.linkedin.com/in/dr-aritra-acharyya-4154841b2/?originalSubdomain=in",
    researchgate: "https://www.researchgate.net/profile/Dr-Das-4",
  },
  {
    name: "Dr. Satyendra Nath Mandal",
    role: "Chairman",
    imageurl: satyandra,
    dept: "Faculty, Information Technology",
    email: "satyenkgec@gmail.com",
    office: "Kalyani Government Engineering College, West Bengal",
    office_hours: "Mon - Tue: 10:00 AM - 12:00 PM",
    biography: "Dr. Satyendra Nath Mandal received his B.Tech(2000) and M.Tech(2003) in computer Science and Engineering from University of Calcutta. He received Ph.D(Tech) in computer Science and Engineering from Maulana Abul Kalam Azad University of Technology, West Bengal in 2016. He has published more than 100 research papers in different International/ National Journals and conferences. He has applied for three patents and received two copyrights for his two developed software’s from Government of India. He received “Career Award For Young Teachers(CAYT)” from All Indian Council For Technical Teachers(AICTE), Govt. of India,2010. He received best paper Award in COMSYS, 2020. He successfully completed 10 funded research projects and leaded one Multi-institutional research project. His field of research includes Image Processing, Image based Animal Identification, Bio-cryptography, Soft computing and Image based Plant Disease Identification, IoT and Wireless Sensor Networks. He has acted as ses",
    degrees: [
      {
        title: "Doctor of Philosophy",
        major: "Computer Science & Engineering",
      },
      {
        title: "Master of Technology",
        major: "Electronics and Communication Engineering",
      },
      { title: "Bachelor of Science", major: "Electronics and Communication Engineering" },
      { title: "Bachelor of Technology", major: "Electronics and Communication Engineering" },
    ],
    publication: [
      {
        title:
          "	Optimization of significant insolation distribution parameters–A new approach towards BIPV system design",
        journal:
          "Renewable Energy",
          
        year: "2010",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "i Sleep: thermal entropy aware intelligent sleep scheduling algorithm for wireless sensor network.",
        journal:
          "Microsystem Technologies",
        year: "2019",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "Pig Breed Detection Using Faster R-CNN",
        journal:
          "Proceedings of International Conference on Frontiers in Computing and Systems	",
        year: "2020",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Conference",
        isHighlighted: true,
      },
      {
        title:
          "Biometrics-Based Pig Identification: From Invention to Commercialisation",
        journal:
          "In: Mallick P.K., Meher P., Majumder A., Das S.K. (eds) Electronic Systems and Intelligent Computing. Lecture Notes in Electrical Engineering",
        year: "2020",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Conference",
        isHighlighted: true,
      },
      {
        title:
          "	RL-sleep: Temperature adaptive sleep scheduling using reinforcement learning for sustainable connectivity in wireless sensor networks",
        journal:
          "Sustainable Computing: Informatics and Systems",
        year: "2020",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Conference",
        isHighlighted: true,
      },
    ],
    linkedin: "https://www.linkedin.com/in/dr-sandip-nandi-a428782a1/",
    researchgate: "https://www.researchgate.net/profile/Sandip-Nandi-2",
  },
  {
    name: "Dr. Sandip Nandi",
    role: "Secretary",
    imageurl: sandip,
    dept: "Faculty, Electronics and Communication Engineering",
    email: "sandip622@gmail.com",
    office: "Kalyani Government Engineering College, West Bengal",
    office_hours: "Mon - Tue: 10:00 AM - 12:00 PM",
    biography:
      "Assistant Professor of ECE. Specialization: Communication Engineering. Experience - 18 Years. Presently he is working as an Assistant Professor in Higher Education Department, Government of West Bengal since 2009 and now is associated with the Electronics and Communication Engineering department of Kalyani Government Engineering College. He is a Senior Member of IEEE and IEEE GRSS Society. His present research interest includes Wireless Communication, Upper Atmospheric Communication, MIMO, Wave Propagation, Space Science and Remote Sensing.",
    degrees: [
      {
        title: "Doctor of Philosophy",
        major: "Computer Science & Engineering",
      },
      {
        title: "Master of Technology",
        major: "Electronics and Communication Engineering",
      },
      { title: "Bachelor of Science", major: "Electronics and Communication Engineering" },
      { title: "Bachelor of Technology", major: "Electronics and Communication Engineering" },
    ],
    publication: [
      {
        title:
          "	Transmission of Radio Wave Pulse through an Isotropic Ionosphere",
        journal:
          "Journal of Engineering, Annals of Faculty of Engineering Hunedoara",
        year: "2009",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "Estimation of Pulse Repetition Frequency for Ionospheric Communication",
        journal:
          "International Journal of Electronics & Communication Engineering",
        year: "2011",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "Investigation of Signal Polarization and Faraday Rotation for Tomographically Reconstructed Ionosphere",
        journal:
          "2nd URSI - Regional Conference on Radio Science	",
        year: "2015",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "Study of low-latitude ionosphere over Indian region using simultaneous algebraic reconstruction techniqu",
        journal:
          "Advances in Space Research",
        year: "2015",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "	Application of ionospheric tomography for high frequency oblique incidence ray tracingu",
        journal:
          "Annals of Geophysics",
        year: "2015",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
    ],
    linkedin: "https://www.linkedin.com/in/dr-sandip-nandi-a428782a1/",
    researchgate: "https://www.researchgate.net/profile/Sandip-Nandi-2",
  },
  {
    name: "Dr. Aritra Acharya",
    role: "Treasurer",
    imageurl: aritra,
    dept: "Computer Science",
    email: "sourabhkumardas@gmail.com",
    office: "Kalyani Government Engineering College, West Bengal",
    office_hours: "Mon - Tue: 10:00 AM - 12:00 PM",
    biography:
      "Assistant Professor of ECE. Specialization: Communication Engineering. Experience - 18 Years. Presently he is working as an Assistant Professor in Higher Education Department, Government of West Bengal since 2009 and now is associated with the Electronics and Communication Engineering department of Kalyani Government Engineering College. He is a Senior Member of IEEE and IEEE GRSS Society. His present research interest includes Wireless Communication, Upper Atmospheric Communication, MIMO, Wave Propagation, Space Science and Remote Sensing.",
    degrees: [
      {
        title: "Doctor of Philosophy",
        major: "Computer Science & Engineering",
      },
      {
        title: "Master of Science",
        major: "Artificial Intelligence & Data Science",
      },
      { title: "Bachelor of Technology", major: "Information Technology" },
      { title: "Post Graduate Diploma", major: "Cyber Security" },
    ],
    publication: [
      {
        title:
          "Optimizing Deep Neural Networks for Edge Computing in Healthcare",
        journal:
          "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        year: "October 2025",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "Optimizing Deep Neural Networks for Edge Computing in Healthcare",
        journal:
          "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        year: "October 2025",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
      {
        title:
          "Optimizing Deep Neural Networks for Edge Computing in Healthcare",
        journal:
          "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        year: "October 2025",
        authors: "S. Mitchell, A. Paul, J. Doe",
        type: "Journal",
        isHighlighted: true,
      },
    ],
    linkedin:
      "https://www.linkedin.com/in/dr-aritra-acharyya-4154841b2/?originalSubdomain=in",
    researchgate: "https://www.researchgate.net/profile/Sourav-Das-174",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Faculty() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#071021] via-[#081226] to-[#04121a]">
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <AnimatedHeading
          text="OUR FACULTY BODY"
          level="h1"
          className="text-white text-center text-2xl sm:text-3xl md:text-2xl mb-2"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-slate-300 mb-8 sm:mb-12 text-sm sm:text-base"
        >
          Leaders, mentors, and advisors
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 sm:space-y-6"
        >
          {faculty.map((f) => (
            <motion.div
              key={f.name}
              variants={itemVariants}
              whileHover={{ x: 8, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/2 border border-white/6 rounded-2xl p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6"
            >
              {f.imageurl && (
                <Image
                  src={f.imageurl}
                  alt={f.name}
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-white/10 flex-shrink-0"
                />
              )}
              <div className="flex-1 text-center sm:text-left">
                <div className="font-semibold text-white text-base sm:text-lg">
                  {f.name}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mb-2">
                  {f.role}
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Leaders and mentors guiding the future of robotics innovation.
                </p>
              </div>
              <Link
                href={{
                  pathname: "/profile",
                  query: {
                    name: f.name,
                    role: f.role,
                    image: f.imageurl.src,
                    dept: f.dept,
                    email: f.email,
                    office: f.office,
                    office_hours: f.office_hours,
                    biography: f.biography,
                    degrees: JSON.stringify(f.degrees),
                    publications: JSON.stringify(f.publication),
                    linkedin: f.linkedin,
                    researchgate: f.researchgate,
                  },
                }}
              >
                <button className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transition-all duration-300 flex-shrink-0">
                  VIEW PROFILE
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
