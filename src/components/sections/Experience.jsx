import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Data Analyst",
      company: "Your Company",
      period: "2023 - Present",
      location: "India",
      desc: "Building AI-powered analytics solutions and scalable data pipelines. Leading projects in explainable AI and bias detection systems.",
      achievements: [
        "Developed BiasLens AI system using SHAP for model interpretability",
        "Built ETL pipelines processing 1M+ records daily",
        "Reduced data processing time by 40% through optimization"
      ]
    },
    {
      role: "ML Engineer Intern",
      company: "Previous Company",
      period: "2022 - 2023",
      location: "India",
      desc: "Developed machine learning models and data analysis solutions for real-world business problems.",
      achievements: [
        "Created multi-agent trading simulation with LLM integration",
        "Implemented NameFlux username system with Bloom filters",
        "Collaborated with cross-functional teams on AI projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-10 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative pl-8 border-l-4 border-black dark:border-white"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[13px] top-0 w-6 h-6 bg-black dark:bg-white rounded-full border-4 border-cream dark:border-black"></div>

              <div className="pb-8">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {exp.period}
                  </span>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                  {exp.company} • {exp.location}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
                  {exp.desc}
                </p>

                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-black dark:text-white mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
