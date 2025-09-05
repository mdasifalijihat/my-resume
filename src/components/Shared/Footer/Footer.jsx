import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-base-content mt-12 shadow-lg shadow-indigo-200/40 rounded-t-xl ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">MD ASIF ALI JIHAT</h2>
          <p className="text-sm text-white/60 hover:text-white">
            Passionate MERN Stack Developer based in Rangpur, Bangladesh.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-3">Social</h3>
          <div className="flex gap-6 text-3xl text-gray-700">
            <a
              href="https://github.com/mdasifalijihat"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-asif-ali-jihat-976281217/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-300 text-white/60 hover:text-white text-sm">
        © {new Date().getFullYear()} MD ASIF ALI JIHAT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
