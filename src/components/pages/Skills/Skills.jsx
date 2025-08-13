import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiReactrouter,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub, 
  SiNetlify,
  SiVercel,
  SiFigma
} from "react-icons/si";
import "./Skills.css";
import { VscVscodeInsiders } from "react-icons/vsc";

const skillCategories = {
  Frontend: [
    { icon: <SiHtml5 className="text-4xl text-orange-600" />, name: "HTML5" },
    { icon: <SiCss3 className="text-4xl text-blue-600" />, name: "CSS3" },
    { icon: <SiTailwindcss className="text-4xl text-teal-400" />, name: "Tailwind CSS" },
    { icon: <SiJavascript className="text-4xl text-yellow-500" />, name: "JavaScript" },
    { icon: <SiReact className="text-4xl text-cyan-500" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-4xl text-black" />, name: "Next.js" },
    { icon: <SiReactrouter className="text-4xl text-purple-600" />, name: "React Router" },
    { icon: <SiFirebase className="text-4xl text-yellow-600" />, name: "Firebase" },
  ],
  Backend: [
    { icon: <SiNodedotjs className="text-4xl text-green-600" />, name: "Node.js" },
    { icon: <SiExpress className="text-4xl text-gray-800" />, name: "Express.js" },
    { icon: <SiMongodb className="text-4xl text-green-800" />, name: "MongoDB" },
  ],
  Tools: [
    { icon: <SiGit className="text-4xl text-red-600" />, name: "Git" },
    { icon: <SiGithub className="text-4xl text-gray-900" />, name: "GitHub" },
    { icon: <VscVscodeInsiders className="text-4xl text-blue-500" />, name: "VS Code" },
    { icon: <SiNetlify className="text-4xl text-green-500" />, name: "Netlify" },
    { icon: <SiVercel className="text-4xl text-black" />, name: "Vercel" },
    { icon: <SiFigma className="text-4xl text-pink-500" />, name: "Figma" },
  ]
};

const SkillCard = ({ icon, name }) => (
  <motion.div
    className="skill-card text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 100, duration: 0.4 }}
    viewport={{ once: false }}
  >
    <div className="mb-2 flex justify-center">{icon}</div>
    <p className="text-base font-semibold">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="bg-base-200 py-12 px-4 my-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">💡 My Skills</h2>

        {Object.entries(skillCategories).map(([category, skills], idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-secondary">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <SkillCard key={i} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
