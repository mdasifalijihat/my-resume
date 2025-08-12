import React from "react";
import { useParams, Link } from "react-router";
import { projectsData } from "./projectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center mt-10">Project not found!</p>;
  }

  return (
    <div className="min-h-screen bg-base-100 py-10 my-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={project.image.gardenTips || project.image.productImg || project.image.hotelImg}
          alt={project.title}
          className="w-full h-72 object-cover rounded-lg mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="mb-2"><strong>Tech Stack:</strong> {project.tech}</p>
        <p className="mb-4">{project.description}</p>
        <p className="mb-4"><strong>Challenges:</strong> {project.challenges}</p>
        <p className="mb-6"><strong>Future Plans:</strong> {project.futurePlan}</p>

        <div className="flex gap-4">
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-success btn-sm">
            🔗 Live Project
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
            💻 GitHub (Client)
          </a>
          <Link to="/projects" className="btn btn-outline btn-sm">⬅ Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
