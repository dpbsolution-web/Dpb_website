"use client";

import { motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

export function NetworkCoverageSection() {
  const networkCoverage = [
    { region: "Telangana", coverage: "99.2%" },
    { region: "Tamil Nadu", coverage: "98.8%" },
    { region: "Bihar", coverage: "97.5%" },
    { region: "Jharkhand", coverage: "94.3%" },
    { region: "Chhattisgarh", coverage: "96.7%" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Network Coverage</h2>
          <p className="text-lg md:text-xl text-gray-600">Our infrastructure spans across continents</p>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-5 gap-6"
        >
          {networkCoverage.map((region, index) => (
            <motion.div key={index} variants={scaleIn} className="text-center">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">{region.coverage}</div>
                <div className="text-gray-700 font-medium">{region.region}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}