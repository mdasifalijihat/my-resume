import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Branding */}
                <div>
                    <h2 className="text-xl font-bold text-primary mb-2">MD ASIF ALI JIHAT</h2>
                    <p className="text-sm">
                        Passionate MERN Stack Developer based in Thakurgaon, Bangladesh.
                    </p>
                </div>

                {/* Useful Links */}
                <div>
                    <h3 className="font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h3 className="font-semibold mb-2">Social</h3>
                    <div className="flex gap-4 text-2xl">
                        <Link href="https://github.com/mdasifalijihat" target="_blank" rel="noreferrer">
                            <FaGithub className="hover:text-primary" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/md-asif-ali-jihat-976281217/" target="_blank" rel="noreferrer">
                            <FaLinkedin className="hover:text-primary" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center py-4 border-t text-sm">
                © {new Date().getFullYear()} MD ASIF ALI JIHAT. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
