import React from "react";
import images from "../../../../public/20210702_180749.jpg";

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
            I’m <strong className="text-primary">MD ASIF ALI JIHAT</strong>, a
            dedicated MERN Stack Developer from{" "}
            <span className="text-accent font-semibold">
              Rangpur, Bangladesh
            </span>
            . I build complete web applications using{" "}
            <span className="text-secondary font-medium">
              MongoDB, Express.js, React,
            </span>{" "}
            and <span className="text-secondary font-medium">Node.js</span>,
            focusing on clean, efficient code and creating fast, responsive,
            user-friendly experiences.
          </p>

          {/* Education */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-accent">
              🎓 Education:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content">
              <li>
                Diploma in Mechatronic Technology –{" "}
                <span className="text-primary">Thakurgaon Polytechnic</span>
              </li>
              <li>
                HSC in Business Studies –{" "}
                <span className="text-primary">Nilphamari Govt. College</span>
              </li>
              <li>
                SSC in Computer & Information Technology –{" "}
                <span className="text-primary">Ikorchali High School</span>
              </li>
            </ul>
          </div>

          {/* Extra Skills */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-secondary">
              💡 Additional Skills:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content">
              <li>Typing Speed: 60+ WPM (360 hrs training)</li>
              <li>Video Editing</li>
              <li>Basic Electrical & Navigation</li>
            </ul>
          </div>

          {/* Button */}
          <a
            href="mailto:mdasifalijihat@gmail.com"
            className="btn btn-primary shadow-md hover:shadow-lg transition"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
