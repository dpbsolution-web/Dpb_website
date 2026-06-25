"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { services } from "@/config/site";
import { slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export function ServicesGridSection() {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={<>Our{" "}<span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-600">Services</span></>}
          subtitle="Complete portfolio of services designed for the modern connected world"
          className="mb-16 lg:mb-20"
        />
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={index % 2 === 0 ? slideInLeft : slideInRight} className="h-full">
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
