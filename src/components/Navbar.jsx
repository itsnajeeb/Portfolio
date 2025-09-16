// Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center ">
          {/* Left: Brand/Name */}
          <div className="text-xl font-bold tracking-wide">MyPortfolio</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-md font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-cyan-400">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button with animation */}
          <div className="md:hidden  mt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2  rounded-md focus:outline-none hover:bg-slate-800"
            >
              <motion.div
                className="w-6 h-6 relative"
                initial={false}
                animate={isOpen ? "open" : "closed"}
              >
                {/* Top line */}
                <motion.span
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  variants={{
                    closed: { rotate: 0, y: -6 },
                    open: { rotate: 45, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Middle line */}
                <motion.span
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                {/* Bottom line */}
                <motion.span
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 6 },
                    open: { rotate: -45, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block hover:text-cyan-400"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    delay: index * 0.1, // stagger links
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
