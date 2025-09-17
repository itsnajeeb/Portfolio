// pages/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        // Show immediate feedback
        Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while we submit your form.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        try {
            const response = await fetch('https://portfolio-server-jya9.onrender.com/send-email', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Form submitted successfully!",
                    text: "We will connect with you soon.",
                    confirmButtonColor: "#12436c",
                });
                // Reset form
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                throw new Error("Something went wrong");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Submission failed",
                text: "Please try again later.",
            });
            console.log("Error ", error);
        }
    }
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-16"
        >
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
                {/* Left Side - Animated Icons */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center space-y-8"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="p-6 rounded-full bg-cyan-500/20"
                    >
                        <Mail className="w-12 h-12 text-cyan-400" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                        className="p-6 rounded-full bg-cyan-500/20"
                    >
                        <Phone className="w-12 h-12 text-cyan-400" />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                        className="p-6 rounded-full bg-cyan-500/20"
                    >
                        <Globe className="w-12 h-12 text-cyan-400" />
                    </motion.div>
                </motion.div>

                {/* Right Side - Glassmorphic Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-lg"
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Let’s Work Together</h2>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-900/70 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                                value={formData.email}
                                className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-900/70 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300">Contact No</label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Your Contact No"
                                onChange={handleChange}
                                value={formData.phone}
                                className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-900/70 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-300">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                className="w-full mt-2 px-4 py-3 rounded-xl bg-slate-900/70 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-md transition"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
