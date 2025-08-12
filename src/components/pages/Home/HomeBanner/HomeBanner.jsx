import React from "react";
import { Link } from "react-router";
import ResumeCv from "../../Resume/CV/ResumeCv";

const HomeBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Right Side Image */}
          <img
            src="https://i.ibb.co/wFxhVsLT/MERN-Stack-Development.png"
            alt="Developer"
            className="lg:max-w-xl rounded-lg shadow-2xl"
          />

          {/* Left Side Content */}
          <div>
            <h1 className="text-5xl font-bold text-primary mb-4">
              Hi, I'm <span className="text-accent">Asif Ali Jihat</span>
            </h1>
            <p className="py-6 text-base-content leading-relaxed max-w-2xl">
              A passionate{" "}
              <span className="text-secondary font-medium">
                MERN Stack Developer
              </span>
              with hands-on experience in{" "}
              <span className="text-secondary">React, Node.js, MongoDB,</span>{" "}
              and <span className="text-secondary">Express</span>. Skilled in
              building
              <span className="text-primary font-medium">
                {" "}
                responsive
              </span>,{" "}
              <span className="text-primary font-medium">scalable</span>, and{" "}
              <span className="text-primary font-medium">user-friendly</span>{" "}
              web applications with clean, maintainable code and optimized
              performance. Eager to contribute to innovative projects and
              deliver impactful solutions as part of a{" "}
              <span className="text-accent font-medium">
                dynamic development team
              </span>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <ResumeCv />
              <Link to="/contact" className="btn btn-outline btn-secondary">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
