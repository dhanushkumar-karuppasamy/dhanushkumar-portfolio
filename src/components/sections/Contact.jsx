import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition"
              />
              <textarea
                placeholder="Your message"
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition resize-none"
              ></textarea>
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition font-semibold"
                >
                  Get In Touch
                </button>
                
                <a
                  href="https://github.com/dhanushkumar-karuppasamy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  <FiGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  <FiTwitter size={20} />
                </a>
                <a
                  href="mailto:your@email.com"
                  className="w-12 h-12 flex items-center justify-center border-2 border-black dark:border-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                >
                  <FiMail size={20} />
                </a>
              </div>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Let's <span className="font-bold">talk</span> for
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Something special
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Let's create something amazing together!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <a
                  href="mailto:your@email.com"
                  className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-400 transition"
                >
                  Youremail@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xl font-semibold">1234567890</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
