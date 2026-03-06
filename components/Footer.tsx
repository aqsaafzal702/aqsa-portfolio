"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 text-sm flex items-center gap-1"
        >
          Built by{" "}
          <span className="text-purple-400 font-medium">Aqsa Afzal</span> © {new Date().getFullYear()}
        </motion.p>

        <div className="flex gap-4">
          <motion.a
            href="https://github.com/aqsaafzal702"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            className="text-gray-500 hover:text-purple-400 transition-colors"
          >
            <FaGithub size={18} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aqsa-afzal-21b0a2321"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -2 }}
            className="text-gray-500 hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}