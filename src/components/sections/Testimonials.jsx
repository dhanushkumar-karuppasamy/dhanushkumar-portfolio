import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Evren Shah",
      role: "Designer",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      image: "👤"
    },
    {
      name: "Flora Sheen",
      role: "Designer",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      image: "👤",
      featured: true
    },
    {
      name: "Evren Shah",
      role: "Designer",
      text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
      image: "👤"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 md:px-10 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="font-bold">Testimonial</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-2xl text-center ${
                testimonial.featured
                  ? "bg-black text-white dark:bg-white dark:text-black scale-105"
                  : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
              }`}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-3xl">
                {testimonial.image}
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${
                testimonial.featured ? "text-white dark:text-black" : "text-gray-600 dark:text-gray-400"
              }`}>
                "{testimonial.text}"
              </p>
              <h4 className="font-bold text-lg">{testimonial.name}</h4>
              <p className={`text-sm ${
                testimonial.featured ? "text-gray-300 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"
              }`}>
                {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
