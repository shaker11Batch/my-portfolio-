import React from "react";
import { motion } from "framer-motion";

const About = () => {
    const skills= ["React", "JavaScript", "Tailwind CSS",  "Node.js", "MongoDB"]
  return (
    <section
      id="about"
      className="min-h-screen bg-[#1f242d] text-white flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I’m <span className="text-[#7cf03d] font-semibold">Md Shaker Ullah</span>,
          a passionate <span className="text-[#7cf03d]">Frontend Web Developer</span> with a strong foundation in
          HTML, CSS, JavaScript, and modern frameworks like 
           <span className="text-[#7cf03d]">React.js</span>.  
          I enjoy building responsive, user-friendly, and visually engaging web applications.
          I focus on writing clean, maintainable code while keeping performance in mind.
          Always eager to learn and explore new technologies to bring creative ideas to life.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {skills.map(
            (skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-[#2a2f3a] rounded-full border border-[#7cf03d] text-sm"
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
