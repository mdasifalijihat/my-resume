import { motion } from "framer-motion";
import ResumeCv from "../../Resume/CV/ResumeCv";
import SocialLinks from "../SocialLinks/SocialLinks";
import profile from "../../../../assets/20210702_180742.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div className="hero py-12 my-12 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Right Side Image Animation */}
          <motion.img
            src={profile}
            alt="Developer"
            className="lg:max-w-xl rounded-lg shadow-2xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Left Side Text Animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold text-primary mb-4">
              Hi, I'm <span className="text-accent">Asif Ali Jihat</span>
            </h1>
            <p className="py-6 text-base-content leading-relaxed max-w-2xl">
              A passionate{" "}
              <span className="text-secondary font-medium">
                MERN Stack Developer
              </span>{" "}
              with hands-on experience in{" "}
              <span className="text-secondary">React, Node.js, MongoDB,</span>{" "}
              and <span className="text-secondary">Express</span>. Skilled in
              building
              <span className="text-primary font-medium"> responsive</span>,{" "}
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

            {/* Buttons Animation */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              <ResumeCv />
            </motion.div>

            <motion.div
              className="mt-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;


