"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function AboutHeroSection() {
  return (
    <motion.section
      {...fadeInUp}
      className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Floating accent blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-block mb-4 rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-blue-700 backdrop-blur-sm">
          About Us
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
            DPB Solution
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          We are a dedicated telecommunications solutions provider specializing in reliable connectivity, network infrastructure, and advanced communication services. Our team is committed to enabling businesses with secure, scalable, and high-performance telecom solutions that support growth and seamless digital communication.
        </p>
      </div>
    </motion.section>
  );
}
