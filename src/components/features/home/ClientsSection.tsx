"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/config/site";

// Deduplicate company names from testimonials
const clients = Array.from(new Set(testimonials.map((t) => t.company)));

export function ClientsSection() {
  // Duplicate the list for a seamless CSS marquee loop
  const doubled = [...clients, ...clients];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold uppercase tracking-widest text-gray-400"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      {/* Marquee track — pure CSS, no extra library */}
      <div className="relative flex overflow-hidden" aria-hidden="true">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-linear-to-l from-white to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-8 text-lg font-bold text-gray-400 hover:text-blue-600 transition-colors duration-300 shrink-0"
            >
              {name}
              <span className="ml-8 h-1 w-1 rounded-full bg-gray-300" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
