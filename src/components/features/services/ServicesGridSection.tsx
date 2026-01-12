"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/common/ServiceCard";
import { services } from "@/config/site";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

export function ServicesGridSection() {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Complete portfolio of services designed for the modern connected world
          </p>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={scaleIn}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                features={service.features}
                popular={service.popular}
                image={service.image}
                onLearnMore={() => {}}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
