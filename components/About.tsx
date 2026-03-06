"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-950 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Single Center Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I&apos;m a{" "}
              <span className="text-purple-400 font-semibold">
                Data Science student
              </span>{" "}
              passionate about building impactful AI/ML solutions and
              continuously enhancing knowledge in data analytics, full-stack
              development, and deep learning.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Familiar with cloud platforms like{" "}
              <span className="text-blue-400 font-medium">AWS</span> for model
              deployment and scalable applications. I enjoy bridging the gap
              between complex data science concepts and user-friendly
              applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}