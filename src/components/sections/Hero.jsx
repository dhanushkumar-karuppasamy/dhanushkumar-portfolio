import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import heroImg from "../../assets/hero.svg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-10 py-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Hello I'am <span className="font-semibold text-black dark:text-white">Dhanush Kumar.</span>
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Data Analyst
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
            Based In India.
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed mb-8">
            I'm a passionate Data Analyst and AI Enthusiast specializing in building intelligent 
            systems, explainable AI, and scalable data pipelines. I transform complex data into 
            actionable insights that drive business decisions.
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mb-8">
            <a
              href="https://github.com/dhanushkumar-karuppasamy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="mailto:your@email.com"
              className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={heroImg}
            alt="Dhanush Kumar - Data Analyst"
            className="w-full max-w-md drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
