// Projects.jsx
import { motion } from "framer-motion";
import project1 from "../assets/project1.jpg"; 
import project2 from "../assets/project2.png";
import project3 from "../assets/project1.jpg";

const projects = [
  {
    id: 1,
    image: project1,
    title: "E-LEARNING",
    description:
      "A modern and responsive portfolio built with React, TailwindCSS, and Framer Motion to showcase my skills and projects.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    image: project2,
    title: "E-Commerce Platform",
    description:
      "Full-stack MERN e-commerce app with authentication, cart, and payment gateway integration.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    image: project3,
    title: "Blog Application",
    description:
      "A Next.js blog with Markdown support, dynamic routing, and a clean responsive UI.",
    tech: ["Next.js", "TailwindCSS", "MongoDB"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center relative inline-block mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          PROJECTS
          <motion.span
            className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.h2>

        {/* Project Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-left">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-slate-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-300 flex flex-col"
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
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-slate-800 text-cyan-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-sm font-semibold transition duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-semibold transition duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
