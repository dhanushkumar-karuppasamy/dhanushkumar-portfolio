import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiReact, SiTensorflow, SiPostgresql, SiDocker } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" }
  ];

  const categories = [
    {
      title: "Data & AI",
      items: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "SHAP"]
    },
    {
      title: "Engineering",
      items: ["SQL", "ETL Pipelines", "Docker", "Git", "REST APIs", "System Design"]
    },
    {
      title: "Web & Tools",
      items: ["JavaScript", "React", "Node.js", "Tailwind CSS", "Jupyter", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

        {/* Icon Grid */}
        <div className="flex justify-center gap-8 mb-16 flex-wrap">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <skill.icon size={48} style={{ color: skill.color }} />
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
