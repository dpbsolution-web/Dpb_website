"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Rocket } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

export function CompanyStorySection() {
  const milestones = [
    { icon: Calendar, value: "2019", label: "Founded" },
    { icon: Rocket, value: "200+", label: "Projects Delivered" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Narrative */}
          <motion.div {...fadeInUp}>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <BookOpen className="w-5 h-5" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded in 2019, DPB Solution was established with a clear vision: to deliver reliable and scalable telecommunications solutions tailored for modern businesses. Starting as a small, dedicated team, we have grown into a trusted telecom partner by prioritizing robust connectivity, secure network infrastructure, and dependable communication services.
              </p>
              <p>
                Today, we continue to empower organizations with high-performance telecom solutions that keep them connected, efficient, and prepared for the future of digital communication.
              </p>
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div {...fadeInRight} className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-10 lg:p-12 shadow-xl">
              {/* decorative blobs */}
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

              <div className="relative">
                <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">
                  Empowering connectivity
                </p>
                <p className="text-2xl lg:text-3xl font-bold text-white leading-snug mb-8">
                  Building the telecom backbone businesses rely on every day.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {milestones.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={i}
                        className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-5"
                      >
                        <Icon className="h-6 w-6 text-blue-100 mb-3" />
                        <div className="text-3xl font-bold text-white">{m.value}</div>
                        <div className="text-sm text-blue-100 mt-1">{m.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
