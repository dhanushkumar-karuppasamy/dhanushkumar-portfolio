import { motion } from "framer-motion";
import aboutImg from "../../assets/about.svg";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <div className="border-4 border-black dark:border-white rounded-3xl p-6 bg-white dark:bg-gray-800">
              <img
                src={aboutImg}
                alt="About Dhanush Kumar"
                className="w-full"
              />
            </div>
            <h3 className="text-2xl font-bold mt-6 text-center">About: <span className="font-bold">Me</span></h3>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            <p>
              I'm a passionate <strong>Data Analyst and AI Enthusiast</strong> with expertise 
              in building intelligent systems that solve real-world problems. My work spans 
              machine learning, data engineering, and explainable AI.
            </p>

            <p>
              Currently focused on developing <strong>bias detection systems</strong>, 
              multi-agent AI frameworks, and scalable data pipelines. I believe in creating 
              technology that's not just powerful, but also transparent and ethical.
            </p>

            <p>
              With a strong foundation in Python, SQL, and cloud technologies, I transform 
              complex data into actionable insights. My projects demonstrate a commitment to 
              innovation, from explainable AI systems to high-performance data architectures.
            </p>

            <p>
              I specialize in extracting meaningful patterns from complex datasets, building 
              predictive models, and creating data visualizations that tell compelling stories. 
              My approach combines technical expertise with business acumen to deliver solutions 
              that drive real impact.
            </p>

            <p>
              Beyond technical skills, I'm passionate about knowledge sharing and continuous 
              learning. I regularly write about data science, AI ethics, and emerging technologies 
              on my blog, and I'm always excited to collaborate on innovative projects that push 
              the boundaries of what's possible with data.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
