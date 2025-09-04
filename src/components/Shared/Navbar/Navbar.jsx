import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80; // navbar height অনুযায়ী মান দিন
        const y =
          section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    closeMenu();
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow px-4 py-4 z-50 bg-white">
      <div className="flex items-center justify-between container mx-auto">
        <div
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <span> ASIF </span>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-600 capitalize"
              onClick={() => scrollToSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/mdasifalijihat"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/md-asif-ali-jihat-976281217/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <button onClick={toggleMenu} className="text-2xl text-blue-600">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-2 bg-white shadow-lg rounded-lg p-4 space-y-3">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <div
              key={item}
              onClick={() => scrollToSection(item)}
              className="block text-gray-700 hover:text-blue-600 cursor-pointer capitalize"
            >
              {item}
            </div>
          ))}

          <div className="pt-2 border-t border-gray-200">
            <a
              href="https://github.com/mdasifalijihat"
              target="_blank"
              rel="noreferrer"
              className="block text-gray-600 hover:text-black"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/md-asif-ali-jihat-976281217/"
              target="_blank"
              rel="noreferrer"
              className="block text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
