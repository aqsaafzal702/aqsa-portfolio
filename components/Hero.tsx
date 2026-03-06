"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 dark:bg-gray-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to Opportunities
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-white"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Aqsa</span>{" "}
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-4 font-medium"
        >
          Data Science student building{" "}
          <span className="text-purple-400 font-semibold">AI/ML solutions</span>{" "}
          that matter.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Passionate about deep learning, full-stack dev, and cloud deployment on{" "}
          <span className="text-blue-400 font-medium">AWS</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(124,58,237,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            View My Work
            <HiArrowDown className="animate-bounce" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass border border-purple-500/50 text-purple-300 font-semibold rounded-xl hover:border-purple-400 transition-all duration-300"
          >
            Let&apos;s Talk 💬
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            href="https://github.com/aqsaafzal702"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="p-3 glass rounded-full text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aqsa-afzal-21b0a2321"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            className="p-3 glass rounded-full text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-3 rounded-full bg-purple-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}