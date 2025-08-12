import React from 'react';
import images from '../../../../public/20210702_180749.jpg'

const About = () => {
    return (
        <div className="min-h-screen bg-base-200 py-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side Image */}
                <div className="flex-1">
                    <img
                        src={images}
                        alt="Asif Ali Jihat"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Side Content */}
                <div className="flex-1">
                    <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
                    <p className="mb-4 text-base-content leading-relaxed">
                        I'm <strong>MD ASIF ALI JIHAT</strong>, a passionate MERN Stack Developer based in Thakurgaon, Bangladesh. I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js.
                    </p>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">🎓 Education:</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content">
                            <li>Diploma in Mechatronic Technology – Thakurgaon Polytechnic</li>
                            <li>HSC in Business Studies – Nilphamari Govt. College</li>
                            <li>SSC in Computer Technology – Taraganj High School</li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-2">💡 Extra Skills:</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm text-base-content">
                            <li>360 hrs Typing Training</li>
                            <li>Video Editing</li>
                            <li>Electrical and Navigation</li>
                        </ul>
                    </div>

                    <a href="mailto:mdasifalijihat@gmail.com" className="btn btn-primary">Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default About;
