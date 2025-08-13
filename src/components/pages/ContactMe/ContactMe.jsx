import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-base-200 px-4 py-12">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl shadow-2xl p-8 sm:p-12 transition-all duration-300">
          <h2 className="text-4xl font-bold text-center text-primary mb-8 drop-shadow">
            Contact Me
          </h2>

          <form className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium text-gray-700">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered input-primary w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium text-gray-700">
                  Your Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-primary w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium text-gray-700">
                  Your Message
                </span>
              </label>
              <textarea
                placeholder="Type your message..."
                className="textarea textarea-bordered textarea-primary h-36 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full text-lg font-semibold tracking-wide hover:scale-[1.02] transition-transform duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl shadow-2xl p-8 sm:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-primary mb-6 drop-shadow">
            Contact Information
          </h2>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-primary text-xl" />
              <span>mdasifalijihat@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-primary text-xl" />
              <span>+8801915915094</span>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-primary text-xl" />
              <a
                href="https://wa.me/8801915915094"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-600"
              >
                +8801915915094 
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
