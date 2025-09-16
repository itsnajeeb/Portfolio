// Skills.jsx
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-300" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
  { name: "Express", icon: <SiExpress className="text-gray-200" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
];

export default function Skills() {
  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I specialize in building modern, scalable, and user-friendly web
          applications using a variety of technologies. Below are some of the
          key skills and tools I work with.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="text-6xl">{skill.icon}</div>
              <p className="text-sm font-medium mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
