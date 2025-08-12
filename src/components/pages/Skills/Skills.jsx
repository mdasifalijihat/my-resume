import React from "react";
import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaLaptopCode,
  FaBolt,
  FaKeyboard,
  FaGitAlt,
  FaTools,
} from "react-icons/fa";

const skillCategories = {
  Frontend: [
    { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: "CSS3" },
    { icon: <FaReact className="text-4xl text-cyan-500" />, name: "React.js" },
  ],
  Backend: [
    { icon: <FaNodeJs className="text-4xl text-green-600" />, name: "Node.js" },
    { icon: <FaLaptopCode className="text-4xl text-purple-600" />, name: "Express.js" },
    { icon: <FaDatabase className="text-4xl text-gray-700" />, name: "MongoDB" },
  ],
  Tools: [
    { icon: <FaGitAlt className="text-4xl text-red-500" />, name: "Git & GitHub" },
    { icon: <FaKeyboard className="text-4xl text-gray-600" />, name: "Typing (360 hr)" },
    { icon: <FaBolt className="text-4xl text-yellow-500" />, name: "Electrical & Navigation" },
  ],
};

const SkillCard = ({ icon, name }) => (
  <div className="skill-card text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
    <div className="mb-2 flex justify-center">{icon}</div>
    <p className="text-base font-semibold">{name}</p>
  </div>
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
