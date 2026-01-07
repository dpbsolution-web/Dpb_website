"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export function ServicesHeroSection() {
  return (
    <motion.section {...fadeInUp} className="bg-linear-to-brm-blue-50 via-teal-50 to-blue-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-teal-100 text-teal-700 border-teal-200 text-sm md:text-base">
          Advanced Telecommunications
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          Our <span className="text-blue-600">Telecom Services</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
          Comprehensive telecommunications solutions powered by cutting-edge technology. 
          From 5G networks to satellite communications, we connect your world seamlessly.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Get Connected Today
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
