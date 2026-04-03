import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-2 hover:text-gray-500 transition"
            >
              <FiMail size={24} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/dhanushkumar-karuppasamy"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-500 transition"
            >
              <FiGithub size={24} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-gray-500 transition"
            >
              <FiLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>

          <form className="max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:border-black dark:focus:border-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:border-black dark:focus:border-white"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:border-black dark:focus:border-white"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <footer className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500">© 2024 Dhanush Kumar. Built with React + Tailwind</p>
        </footer>
      </div>
    </section>
  );
}
