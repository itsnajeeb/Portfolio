import { FaGithub, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 px-6">
            <div

                className="max-w-7xl mx-auto flex  justify-between px-10 flex-wrap">
                {/* Left side - Name & Social Media */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >


                    <h2 className="text-xl font-bold text-white">Your Name</h2>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-white"><FaGithub size={20} /></a>
                        <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
                        <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
                    </div>
                </motion.div>

                {/* Middle - Nav Links */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#" className="hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-white">Services</a></li>
                        <li><a href="#" className="hover:text-white">Contact</a></li>
                    </ul>
                </motion.div>

                {/* Right side - Contact Info */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-lg font-semibold text-white mb-3">Contact Me</h2>
                    <p className="flex items-center space-x-2">
                        <FaPhoneAlt /> <span>+91 9102303124</span>
                    </p>
                    <p className="flex items-center space-x-2 mt-2">
                        <FaEnvelope /> <span>iamnajeebjung@email.com</span>
                    </p>
                    <p className="flex items-center space-x-2 mt-2">
                        <FaMapMarkerAlt /> <span>New Dehli, India</span>
                    </p>
                </motion.div>
            </div>

            {/* Bottom line */}
            <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
        </footer >
    );
}
