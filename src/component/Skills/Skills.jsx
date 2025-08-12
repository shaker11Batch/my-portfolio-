import { div } from "framer-motion/client";

const skills = [
  {
    name: "HTML/CSS", level: 95, category: "frontend"
  },
  {
    name: "JavaScript", level: 95, category: "frontend"
  },
  {
    name: "React", level: 95, category: "frontend"
  },
  {
    name: "Tailwind Css", level: 95, category: "frontend"
  },
  {
    name: "Nodejs", level: 95, category: "backend"
  },
  {
    name: "Express", level: 95, category: "backend"
  },
  {
    name: "MongoDB", level: 95, category: "backend"
  },
  {
    name: "Git", level: 95, category: "tools"
  },

]

const Skills = () => {
  return (
    <div className="bg-white">
      <section id="skills"
        className="py-24 px-4 relative ">

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              skills.map((skill, idx) => (
                <div key={idx} className="bg-card p-6 rounded-lg showdow-sm card-hover">

                </div>
              ))
            }
          </div>

        </div>

      </section>
    </div>
  );
};

export default Skills;