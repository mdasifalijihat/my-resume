import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router'; 

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">MD ASIF ALI JIHAT</h2>
          <p className="text-sm text-gray-600">
            Passionate MERN Stack Developer based in Rangpur, Bangladesh.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-primary transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:underline hover:text-primary transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
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

      <div className="text-center py-4 border-t border-gray-300 text-gray-600 text-sm">
        © {new Date().getFullYear()} MD ASIF ALI JIHAT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
