import React from "react";

const ContactMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-12">
      <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl shadow-2xl p-8 sm:p-12 transition-all duration-300">
        <h2 className="text-4xl font-bold text-center text-primary mb-8 drop-shadow">
          Contact Me
        </h2>

        <form className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700">Your Name</span>
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
              <span className="label-text text-base font-medium text-gray-700">Your Email</span>
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
              <span className="label-text text-base font-medium text-gray-700">Your Message</span>
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
    </div>
  );
};

export default ContactMe;
