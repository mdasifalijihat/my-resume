import React from 'react';

const Projects = () => {
    const projectList = [
      
        {
            id: 2,
            title: "School",
            liveLink: "https://mdasifalijihat.github.io/assessment-02/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "HTML, CSS, JS"
        },
        {
            id: 3,
            title: "Project ",
            liveLink: "https://mdasifalijihat.github.io/assessment-03/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "HTML, CSS"
        },
        {
            id: 4,
            title: "Project",
            liveLink: "https://mdasifalijihat.github.io/assessment-05/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "HTML, CSS"
        },
        {
            id: 5,
            title: "BBC English",
            liveLink: "https://bbcenglish.netlify.app/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "React, Tailwind"
        },
        {
            id: 6,
            title: "Auction Gallery",
            liveLink: "https://auctiongallery01.netlify.app/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "React, Tailwind"
        },
        {
            id: 7,
            title: "Phudu BD",
            liveLink: "https://phudu-bd.netlify.app/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "React, Tailwind"
        },
        {
            id: 8,
            title: "PNGTree Store",
            liveLink: "https://pngtree-store-bd.netlify.app/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "React, Firebase"
        },
        {
            id: 9,
            title: "Garden Tips BD",
            liveLink: "https://garden-tips-bd.netlify.app/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "React, Tailwind"
        },
        {
            id: 10,
            title: "Product Query Hub",
            liveLink: "https://productqueryhub.netlify.app/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "React, Express, MongoDB"
        },
        {
            id: 11,
            title: "Hotel Management",
            liveLink: "https://hotel-management-system-bd.netlify.app/",
            codeLink: "https://github.com/mdasifalijihat",
            tech: "MERN Stack"
        }
    ];
 
    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">My Projects</h2>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projectList.map(project => (
                        <div key={project.id} className="card bg-white hover:bg-blue-50 transition-all shadow-xl relative group overflow-hidden rounded-lg">
                            <div className="relative w-full h-84 overflow-hidden">
                                <iframe
                                    src={project.liveLink}
                                    title={project.title}
                                    className="w-full h-full border-none transition-transform duration-300 group-hover:scale-105"
                                ></iframe>
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-sm btn-warning"
                                    >
                                        🔗 Live Preview
                                    </a>
                                </div>
                            </div>
                            <div className="card-body">
                                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                                <p className="text-sm text-gray-600">{project.tech}</p>
                               
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
