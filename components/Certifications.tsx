"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-gray-950 relative">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="glass rounded-2xl p-5 border border-gray-700/50 hover:border-purple-500/40 transition-all duration-300 flex items-start gap-4"
            >
              <span className="text-3xl">{cert.icon}</span>
              <div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-purple-400 text-xs">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}