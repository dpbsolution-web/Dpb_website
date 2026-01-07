"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Globe } from "lucide-react";
import { scaleIn, staggerContainer } from "@/lib/animations";

export function StatsSection() {
  const stats = [
    { icon: Users, label: "Team Members", value: "100+" },
    { icon: Target, label: "Happy Clients", value: "80+" },
    { icon: Award, label: "Years Experience", value: "6+" },
    { icon: Globe, label: "Cities in India", value: "Multiple" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={scaleIn} className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
