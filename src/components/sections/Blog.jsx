import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "Understanding Bias in AI Systems",
      date: "December 2023",
      excerpt: "Exploring how bias manifests in machine learning models and techniques to detect it using explainable AI frameworks like SHAP.",
      category: "AI Ethics"
    },
    {
      title: "Building Scalable ETL Pipelines",
      date: "November 2023",
      excerpt: "Best practices for designing data pipelines that handle millions of records efficiently with Python and cloud technologies.",
      category: "Data Engineering"
    },
    {
      title: "Multi-Agent Systems with LLMs",
      date: "October 2023",
      excerpt: "Creating intelligent agents that collaborate to solve complex problems using large language models and reinforcement learning.",
      category: "AI Research"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Latest Articles
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-2 border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:border-black dark:hover:border-white hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                {post.category}
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-3">
                {post.date}
              </p>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
              <button className="mt-4 text-sm font-semibold hover:underline">
                Read More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
