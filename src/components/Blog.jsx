import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      title: "Understanding Bias in AI Systems",
      date: "Dec 2023",
      excerpt: "Exploring how bias manifests in machine learning models and techniques to detect it"
    },
    {
      title: "Building Scalable ETL Pipelines",
      date: "Nov 2023",
      excerpt: "Best practices for designing data pipelines that handle millions of records"
    },
    {
      title: "Multi-Agent Systems with LLMs",
      date: "Oct 2023",
      excerpt: "Creating intelligent agents that collaborate to solve complex problems"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Blog</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl hover:shadow-lg transition cursor-pointer"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
            <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
