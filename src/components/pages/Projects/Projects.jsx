import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { projectsData } from "./projectsData";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const Projects = () => {
  return (
    <div className="bg-base-200 py-12 px-4 my-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
          My Projects
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="card bg-white shadow-xl hover:shadow-2xl rounded-lg overflow-hidden"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <img
                src={
                  project.image.gardenTips ||
                  project.image.productImg ||
                  project.image.hotelImg
                }
                alt={project.title}
                className="h-56 w-full object-cover"
              />
              <div className="card-body">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.tech}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="btn btn-primary btn-sm mt-4"
                >
                  View More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
