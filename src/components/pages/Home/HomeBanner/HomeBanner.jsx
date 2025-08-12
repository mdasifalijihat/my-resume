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
            <h1 className="text-5xl font-bold text-primary">
              Hi, I'm Asif Ali Jihat
            </h1>
            <p className="py-6 text-base-content">
              A passionate MERN Stack Developer with strong knowledge of React,
              Node.js, MongoDB, and Express. I also have skills in video
              editing, typing, and electrical & navigation.
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
