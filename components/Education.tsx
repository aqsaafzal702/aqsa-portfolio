"use client";

import { motion } from "framer-motion";
import { HiAcademicCap, HiStar } from "react-icons/hi";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900/50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="glass rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl" />

          <div className="flex items-start gap-5 relative z-10">
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 border border-purple-500/40 shrink-0">
              <HiAcademicCap className="text-purple-300" size={32} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">
                  BS in Data Science
                </h3>
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-medium">
                  <HiStar size={12} />
                  CGPA: 3.57
                </span>
              </div>
              <p className="text-purple-300 font-semibold text-base mb-1">
                COMSATS Institute of Information and Technology
              </p>
              <p className="text-gray-400 text-sm mb-4">
                Islamabad Campus
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                Feb 2023 – Jan 2027
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}