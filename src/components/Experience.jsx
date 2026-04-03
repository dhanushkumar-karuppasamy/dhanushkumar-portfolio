import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Data Analyst",
      company: "Your Company",
      period: "2023 - Present",
      desc: "Building AI-powered analytics solutions and data pipelines"
    },
    {
      role: "ML Engineer Intern",
      company: "Previous Company",
      period: "2022 - 2023",
      desc: "Developed bias detection systems using explainable AI"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border-l-4 border-black dark:border-white pl-6"
            >
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                {exp.company} • {exp.period}
              </p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
