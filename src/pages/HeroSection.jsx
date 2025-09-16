// Hero.jsx
import { motion } from "framer-motion";
import heroImg from "../assets/user-icon.png"; // update path
import arrowImg from "../assets/down-arrow.png"; // update path

export default function Hero() {
  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      className="bg-slate-900 text-white relative"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <motion.h3
            className="text-lg font-semibold text-cyan-400"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hi!
          </motion.h3>

          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            I'm <span className="text-cyan-400"> Najeeb</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 max-w-xl mx-auto lg:mx-0"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            I am a passionate web developer specializing in building modern, 
            responsive, and user-friendly websites. My focus is on crafting 
            clean interfaces and smooth user experiences.
          </motion.p>

          <motion.button
            className="mt-4 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition duration-300"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Contact Me
          </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="w-64 md:w-80 lg:w-[400px] xl:w-[500px] object-contain"
          />
        </motion.div>
      </div>

      {/* Blinking Arrow Button */}
      <motion.div
        className="absolute  bottom-11 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <img src={arrowImg} alt="Scroll Down" className="w-16 md:w-20 lg:w-24 relative top-10" />
      </motion.div>
    </motion.section>
  );
}
