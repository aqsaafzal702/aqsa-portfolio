"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiCheckCircle, HiPaperAirplane } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a form submission — connect EmailJS or Formspree here
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "aqsaafzal670@gmail.com",
      href: "mailto:aqsaafzal670@gmail.com",
      color: "text-purple-400",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/aqsaafzal702",
      href: "https://github.com/aqsaafzal702",
      color: "text-gray-300",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Aqsa Afzal",
      href: "https://linkedin.com/in/aqsa-afzal-21b0a2321",
      color: "text-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">
            Have a project in mind? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target={c.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass rounded-2xl p-5 border border-gray-700/50 hover:border-purple-500/50 flex items-center gap-4 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30">
                  <c.icon className={c.color} size={22} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{c.label}</p>
                  <p className="text-gray-200 font-medium text-sm">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 border border-green-500/30 flex flex-col items-center justify-center gap-4 h-full"
              >
                <HiCheckCircle className="text-green-400" size={48} />
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-gray-400 text-center">
                  Thanks for reaching out. I&apos;ll get back to you soon! 🚀
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-2 rounded-lg border border-purple-500/50 text-purple-400 text-sm hover:border-purple-400 transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 border border-gray-700/50 flex flex-col gap-5"
              >
                {["name", "email"].map((field) => (
                  <div key={field}>
                    <label className="block text-sm text-gray-400 mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={form[field as keyof typeof form]}
                      onChange={handleChange}
                      required
                      placeholder={
                        field === "name" ? "Your name" : "your@email.com"
                      }
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all text-sm resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <HiPaperAirplane />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}