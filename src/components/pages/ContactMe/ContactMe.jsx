import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactMeSimple = () => {
  return (
    <motion.div
      className="bg-base-200 px-4 py-12 my-12 sm:my-16 lg:my-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-10">

        {/* Intro Text */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold text-center text-primary mb-4">
            I'm always open to connecting!
          </h2>
          <p className="text-center text-base-content text-lg leading-relaxed">
            Whether it’s about a new project, a creative idea, or a potential collaboration, feel free to reach out anytime!
          </p>
        </motion.div>

        {/* Direct Contact */}
        <motion.div 
          className="bg-base-100 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8 flex flex-col gap-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-secondary mb-3">Direct Contact</h3>
          <ul className="space-y-2 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-xl" /> 
              <span className="text-white/60 hover:text-white">mdasifalijihat@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary text-xl" /> 
              <span className=" text-white/60 hover:text-white">+8801915915094</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-primary text-xl" /> 
              <a href="https://wa.me/8801915915094" target="_blank" rel="noopener noreferrer" className="underline text-white/60 hover:text-white">
                +8801915915094
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Professional Profiles */}
        <motion.div 
          className="bg-base-100 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8 flex flex-col gap-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-secondary mb-3">Professional Profiles</h3>
          <ul className="space-y-2 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-blue-600 text-xl" />
              <a href="https://www.linkedin.com/in/md-asif-ali-jihat-976281217/" target="_blank" rel="noopener noreferrer" className="underline text-white/60 hover:text-white">
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-gray text-xl" />
              <a href="https://github.com/mdasifalijihat" target="_blank" rel="noopener noreferrer" className="underline text-white/60 hover:text-white">
                GitHub Profile
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Preferred Contact Methods */}
        <motion.div 
          className="bg-base-100 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl p-8 flex flex-col gap-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-secondary mb-3">Preferred Contact Methods</h3>
          <p className="text-lg text-white/60">Email, LinkedIn, WhatsApp</p>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default ContactMeSimple;
