import React from "react";
import { motion } from "framer-motion";
import images from "../../../../public/20210702_180749.jpg";

const About = () => {
  return (
    <div className="bg-base-200 py-10 px-4 my-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side Image Animation */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-start"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={images}
            alt="Asif Ali Jihat"
            className="rounded-xl shadow-lg w-full lg:max-w-lg"
          />
        </motion.div>

        {/* Right Side Content Animation */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="mb-4 text-base-content leading-relaxed">
            I’m <strong className="text-primary">MD ASIF ALI JIHAT</strong>, a
            dedicated MERN Stack Developer from{" "}
            <span className="text-accent font-semibold">Rangpur, Bangladesh</span>.
            I build complete web applications using{" "}
            <span className="text-secondary font-medium">
              MongoDB, Express.js, React,
            </span>{" "}
            and <span className="text-secondary font-medium">Node.js</span>,
            focusing on clean, efficient code and creating fast, responsive,
            user-friendly experiences.
          </p>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-accent">
              🎓 Education
            </h3>
            <ul className="space-y-4 text-sm text-base-content">
              <li>
                <h4 className="font-bold text-primary">
                  Diploma in Engineering (Mechatronics Technology)
                </h4>
                <p className="text-gray-600">
                  📍 Thakurgaon Polytechnic Institute | 2017 – 2021
                </p>
                <p className="text-gray-500">CGPA: 3.37 / 4.00</p>
              </li>
              <li>
                <h4 className="font-bold text-primary">HSC – Business Studies</h4>
                <p className="text-gray-600">
                  📍 Nilphamari Government College | 2016 – 2020
                </p>
                <p className="text-gray-500">CGPA: 3.25 / 5.00</p>
              </li>
              <li>
                <h4 className="font-bold text-primary">
                  SSC – Computer & Information Technology
                </h4>
                <p className="text-gray-600">
                  📍 Ikorchali High School, Rangpur | 2012 – 2015
                </p>
                <p className="text-gray-500">CGPA: 4.57 / 5.00</p>
              </li>
            </ul>
          </div>

          {/* Extra Skills & Certifications */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-secondary">
              💡 Additional Skills & Certifications
            </h3>
            <ul className="list-disc list-inside space-y-3 text-sm text-base-content">
              <li>
                <span className="font-semibold">Web Development</span>
                <br />
                🏫 Programming Hero
              </li>
              <li>
                <span className="font-semibold">Computer Office Application</span> (360 hours)
                <br />
                🏫 Bangladesh Technical Education Board (BTEB)
              </li>
              <li>
                <span className="font-semibold">
                  Electrical & Navigation Equipment Training
                </span> (360 hours)
                <br />
                🏫 Association of Expert Oriented Shipbuilding Industries of Bangladesh
              </li>
              <li>
                <span className="font-semibold">Video Editing</span>
                <br />
                🏫 Way to Technology
              </li>
            </ul>
          </div>

          {/* Button Animation */}
          <motion.a
            href="mailto:mdasifalijihat@gmail.com"
            className="btn btn-primary shadow-md hover:shadow-lg transition"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
