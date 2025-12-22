"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function CompanyStorySection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p className="mb-6">
              Founded in 2019, DPB Solution was established with a clear vision: to deliver reliable and scalable telecommunications solutions tailored for modern businesses. Starting as a small, dedicated team, we have grown into a trusted telecom partner by prioritizing robust connectivity, secure network infrastructure, and dependable communication services.
            </p>
            <p>
              Today, we continue to empower organizations with high-performance telecom solutions that keep them connected, efficient, and prepared for the future of digital communication.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
