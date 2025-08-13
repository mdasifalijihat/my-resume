export default function SocialLinks() {
  return (
    <div className="flex space-x-4 mt-2">
      {/* GitHub */}
      <a
        className="btn mb-6 text-white transform transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
        style={{ backgroundColor: "#333", borderColor: "#333" }}
        href="https://github.com/mdasifalijihat"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      {/* LinkedIn */}
      <a
        className="btn mb-6 text-white transform transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
        style={{ backgroundColor: "#0077B5", borderColor: "#0077B5" }}
        href="https://www.linkedin.com/in/md-asif-ali-jihat-976281217/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      {/* Twitter */}
      <a
        className="btn mb-6 text-white transform transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
        style={{ backgroundColor: "#1DA1F2", borderColor: "#1DA1F2" }}
        href="https://x.com/mdasifalijihat0"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
    </div>
  );
}
