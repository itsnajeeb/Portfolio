// Education.jsx
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

const education = [
    {
        id: 1,
        icon: <MdSchool className="text-4xl text-blue-400" />,
        school: "Bihar School Examination Board, Patna",
        year: "2018",
        subject: "Science, Mathematics, SST, Hindi English, Urdu ",
    },
    {
        id: 2,
        icon: <FaUniversity className="text-4xl text-green-400" />,
        school: "Maulana Azad National Urdu University, Hyderabad",
        year: "2018 - 2021",
        subject: "Diploma in Computer Science & Engineering",
    },
    {
        id: 3,
        icon: <GiGraduateCap className="text-4xl text-purple-400" />,
        school: "Rajiv Gandhi Technical University",
        year: "2021 - 2024",
        subject: "Bachelor of Technology (Computer Science & Engineering)",
    },
];

export default function Education() {
    return (
        <section className="bg-slate-950 text-white py-16">
            <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                {/* Heading */}
                <motion.h2
                    className="text-3xl md:text-4xl font-bold relative inline-block mb-12"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    EDUCATION
                    {/* Animated underline */}
                    <motion.span
                        className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                </motion.h2>

                {/* Education Items */}
                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="flex items-center gap-6 bg-slate-900 rounded-xl shadow-lg p-6 text-left"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 15,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                        >
                            {/* Icon */}
                            <div className="flex-shrink-0">{edu.icon}</div>

                            {/* Text Info */}
                            <div>
                                <h3 className="text-xl font-semibold">{edu.school}</h3>
                                <p className="text-sm text-gray-400">{edu.year}</p>
                                <p className="text-gray-300">{edu.subject}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
