import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div id='contact'>
                {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center my-4 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {/* Left side */}
                <div className="w-full">
                    <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
                    <p className="text-gray-300 leading-relaxed">
                        I'm always open to connecting with fellow developers, collaborators, and
                        potential employers. Whether you have an exciting project or just want to
                        chat, feel free to reach out.
                    </p>
                </div>

                {/* Right side */}
                <div className="w-full">
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="border p-3 rounded w-full"
                        />
                        <input
                            type="email"
                            placeholder="Enter your Email"
                            className="border p-3 rounded w-full"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="border p-3 rounded w-full"
                        />
                        <textarea
                            rows={4}
                            placeholder="Your Message"
                            className="border p-3 rounded w-full"
                        />
                        <input
                            type="submit"
                            value="Send"
                            className="btn btn-outline btn-primary w-full"
                        />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;