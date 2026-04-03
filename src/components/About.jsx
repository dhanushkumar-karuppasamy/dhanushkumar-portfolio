import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <p>
            I'm a passionate Data Analyst and AI Enthusiast with expertise in building intelligent systems 
            that solve real-world problems. My work spans machine learning, data engineering, and explainable AI.
          </p>
          <p>
            Currently focused on developing bias detection systems, multi-agent AI frameworks, and scalable 
            data pipelines. I believe in creating technology that's not just powerful, but also transparent 
            and ethical.
          </p>
          <p>
            When I'm not coding, you'll find me exploring the latest AI research papers, contributing to 
            open-source projects, or writing about data science on my blog.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
