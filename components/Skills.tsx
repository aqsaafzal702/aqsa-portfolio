"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950 dark:bg-gray-950 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &amp; <span className="gradient-text">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="glass rounded-2xl p-5 border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-purple-300 transition-colors">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 text-gray-300 hover:text-white hover:border-purple-400/50 transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}