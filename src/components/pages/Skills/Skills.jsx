import React from "react";
import "./Skills.css"; // CSS ফাইল ইমপোর্ট নিশ্চিত করবেন
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaLaptopCode,
  FaBolt,
  FaKeyboard,
} from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 className="text-4xl text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-4xl text-blue-500" />, name: "CSS3" },
  { icon: <FaReact className="text-4xl text-cyan-500" />, name: "React.js" },
  { icon: <FaNodeJs className="text-4xl text-green-600" />, name: "Node.js" },
  { icon: <FaDatabase className="text-4xl text-gray-700" />, name: "MongoDB" },
  { icon: <FaLaptopCode className="text-4xl text-purple-600" />, name: "Express.js" },
];

const optionalSkills = [
  { icon: <FaKeyboard className="text-4xl text-gray-600" />, name: "Typing (360 hr)" },
  { icon: <FaLaptopCode className="text-4xl text-indigo-500" />, name: "Video Editing" },
  { icon: <FaBolt className="text-4xl text-yellow-500" />, name: "Electrical & Navigation" },
];

const SkillCard = ({ icon, name }) => (
  <div className="skill-card text-center">
    <div className="skill-card-content">
      <div className="mb-2">{icon}</div>
      <p className="text-base font-semibold">{name}</p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="min-h-screen bg-base-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">My Skills</h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">🚀 Core Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <SkillCard key={i} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">🧩 Optional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {optionalSkills.map((skill, i) => (
              <SkillCard key={i} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
