import React from "react";
import { useParams, Link } from "react-router"; 
import { motion } from "framer-motion";
import { projectsData } from "./projectsData";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center mt-10">Project not found!</p>;
  }

  return (
    <motion.div
      className="min-h-screen bg-base-100 py-10 my-8 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <motion.img
          src={
            project.image.gardenTips ||
            project.image.productImg ||
            project.image.hotelImg
          }
          alt={project.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="mb-2">
            <strong>Tech Stack:</strong> {project.tech}
          </p>
          <p className="mb-4">{project.description}</p>
          <p className="mb-4">
            <strong>Challenges:</strong> {project.challenges}
          </p>
          <p className="mb-6">
            <strong>Future Plans:</strong> {project.futurePlan}
          </p>

          <div className="flex gap-4">
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
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
