"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, Globe, Zap } from "lucide-react";
import { scaleIn, staggerContainer } from "@/lib/animations";

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 }
};

export function FeaturesSection() {
  const features = [
    "24/7 Expert Support & Monitoring",
    "Enterprise-Grade Security & Compliance", 
    "Scalable Solutions for Any Business Size",
    "Proven Track Record Since 2019"
  ];

  const stats = [
    { icon: Users, value: "10+", label: "Happy Clients", color: "violet" },
    { icon: Award, value: "99.99%", label: "Uptime SLA", color: "emerald" },
    { icon: Globe, value: "10+", label: "Cities in India", color: "blue" },
    { icon: Zap, value: "200+", label: "Projects", color: "violet" }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeInLeft}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose DPB Solution?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We combine cutting-edge technology with expert service delivery to provide 
              solutions that drive real business results.
            </p>
            
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
                  <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index}
                  variants={scaleIn} 
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
                >
                  <Icon className={`h-12 w-12 text-${stat.color}-600 mx-auto mb-4`} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
