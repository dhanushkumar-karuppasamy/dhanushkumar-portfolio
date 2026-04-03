import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../../data/projects";
import projImg from "../../assets/projects.svg";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          My Projects
        </motion.h2>

        <div className="space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                <img
                  src={projImg}
                  alt={project.title}
                  className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                <div className="text-6xl font-bold mb-6 text-gray-700">0{i + 1}</div>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/10 rounded-lg text-sm border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:underline"
                >
                  <FiExternalLink size={20} />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
