import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Dhanush Kumar</h3>
            <p className="text-gray-400">Data Analyst | AI Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/dhanushkumar-karuppasamy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="mailto:your@email.com"
              className="p-3 border border-white/20 rounded-lg hover:bg-white hover:text-black transition"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© 2024 Dhanush Kumar. Built with React, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
