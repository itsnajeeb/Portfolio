// Experience.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const experiences = [
    {
        id: 1,
        logo: <FaReact className="text-5xl text-cyan-400" />,
        company: "LeopardRuns Innovation & Technology",
        role: "Frontend Developer Intern",
        duration: "40 Days",
        description:
            "Worked on building responsive UI with React, Tailwind CSS, and integrated REST APIs. Improved website load time by 20%.",
    },
    {
        id: 2,
        logo: <FaNodeJs className="text-5xl text-green-400" />,
        company: "NextGen Solutions",
        role: "Backend Developer",
        duration: "Jul 2021 - Dec 2021",
        description:
            "Developed backend APIs using Node.js and Express. Implemented authentication and improved database performance.",
    },
    {
        id: 3,
        logo: <SiMongodb className="text-5xl text-emerald-400" />,
        company: "InnoTech Labs",
        role: "Full Stack Developer",
        duration: "Jan 2022 - Present",
        description:
            "Building scalable full-stack apps using React, Node.js, and MongoDB. Led a team of 3 developers to launch a SaaS product.",
    },
];

export default function Experience() {
    return (
        <section className="bg-slate-950 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold relative inline-block  mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    EXPERIENCE
                    {/* Animated underline */}
                    <motion.span
                        className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                </motion.h2>

                {/* Experience Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="bg-slate-900 p-6 rounded-2xl shadow-lg flex flex-col items-start gap-4 hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                        >
                            {/* Logo */}
                            <div>{exp.logo}</div>

                            {/* Company Info */}
                            <div>
                                <h3 className="text-xl font-semibold">{exp.company}</h3>
                                <p className="text-cyan-400">{exp.role}</p>
                                <p className="text-sm text-gray-400">{exp.duration}</p>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
