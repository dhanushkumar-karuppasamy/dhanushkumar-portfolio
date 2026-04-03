import { motion } from "framer-motion";
import { SiPython, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGit, SiTailwindcss, SiFigma } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: SiPython },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Figma", icon: SiFigma }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group p-8 rounded-xl transition-all duration-300 cursor-pointer ${
                i === 1
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border-2 border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white"
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <skill.icon 
                  size={48} 
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-medium text-center text-sm">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
