import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactMe = () => {
  return (
    <motion.div
      className="bg-gradient-to-br bg-base-200 px-4 py-12 my-12 sm:my-16 lg:my-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          className="backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl shadow-2xl p-8 sm:p-12 transition-all duration-300"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-center text-primary mb-8 drop-shadow">
            Contact Me
          </h2>

          <form className="space-y-6">
            <motion.div className="form-control" variants={itemVariants}>
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
            </motion.div>

            <motion.div className="form-control" variants={itemVariants}>
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
            </motion.div>

            <motion.div className="form-control" variants={itemVariants}>
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
            </motion.div>

            <motion.button
              type="submit"
              className="btn btn-primary w-full text-lg font-semibold tracking-wide hover:scale-[1.02] transition-transform duration-200"
              variants={itemVariants}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl shadow-2xl p-8 sm:p-12 flex flex-col justify-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold text-primary mb-6 drop-shadow">
            Contact Information
          </h2>
          <motion.ul className="space-y-4 text-lg text-gray-700" variants={itemVariants}>
            <motion.li className="flex items-center gap-3" variants={itemVariants}>
              <FaEnvelope className="text-primary text-xl" />
              <span>mdasifalijihat@gmail.com</span>
            </motion.li>
            <motion.li className="flex items-center gap-3" variants={itemVariants}>
              <FaPhone className="text-primary text-xl" />
              <span>+8801915915094</span>
            </motion.li>
            <motion.li className="flex items-center gap-3" variants={itemVariants}>
              <FaWhatsapp className="text-primary text-xl" />
              <a
                href="https://wa.me/8801915915094"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-600"
              >
                +8801915915094
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
