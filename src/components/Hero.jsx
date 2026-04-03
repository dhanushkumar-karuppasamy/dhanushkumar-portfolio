import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Hello, I'm <span className="text-gray-500">Dhanush Kumar</span>
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400">
          Data Analyst | AI Enthusiast
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex gap-6 justify-center">
          <a href="https://github.com/dhanushkumar-karuppasamy" target="_blank" className="hover:text-gray-500 transition">
            <FiGithub size={28} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-gray-500 transition">
            <FiLinkedin size={28} />
          </a>
          <a href="mailto:your@email.com" className="hover:text-gray-500 transition">
            <FiMail size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
