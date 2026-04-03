import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-gray-500 transition">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{p.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline"
            >
              <FiGithub /> View on GitHub <FiExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
