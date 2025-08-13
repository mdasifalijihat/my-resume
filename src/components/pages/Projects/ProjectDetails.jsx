import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { projectsData } from "./projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center mt-10">Project not found!</p>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-base-100 py-10 my-8 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={itemVariants}
      >
        <motion.img
          src={
            project.image.gardenTips ||
            project.image.productImg ||
            project.image.hotelImg
          }
          alt={project.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {project.title}
        </motion.h2>

        <motion.p
          className="mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <strong>Tech Stack:</strong> {project.tech}
        </motion.p>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {project.description}
        </motion.p>

        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <strong>Challenges:</strong> {project.challenges}
        </motion.p>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <strong>Future Plans:</strong> {project.futurePlan}
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success btn-sm"
          >
            🔗 Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm"
          >
            💻 GitHub (Client)
          </a>
          <Link to="/projects" className="btn btn-outline btn-sm">
            ⬅ Back
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
