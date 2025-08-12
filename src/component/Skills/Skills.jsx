import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiFirebase } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} className="text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-400" /> },
  { name: "Firebase", icon: <SiFirebase size={40} className="text-yellow-500" /> },
  { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
  { name: "Git", icon: <FaGitAlt size={40} className="text-orange-400" /> },
  { name: "Database", icon: <FaDatabase size={40} className="text-indigo-400" /> },
];

const Skills = () => {
  return (
    <section className="bg-[#1f242d] text-white py-16 px-6" id="skills">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the technologies and tools I work with to build fast,
          responsive, and modern web applications.
        </motion.p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#2a2f3a] p-6 rounded-xl flex flex-col items-center shadow-lg border border-transparent hover:border-[#7cf03d] transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
