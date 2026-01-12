"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Globe } from "lucide-react";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { Counter } from "@/components/common/Counter";
import { useState, useEffect } from "react";

// Skeleton component for stat cards
function StatSkeleton() {
  return (
    <div className="text-center animate-pulse">
      <div className="bg-gray-200 p-4 rounded-full w-16 h-16 mx-auto mb-4" />
      <div className="h-8 w-20 bg-gray-300 rounded mx-auto mb-2" />
      <div className="h-4 w-24 bg-gray-200 rounded mx-auto" />
    </div>
  );
}

export function StatsSection() {
  const [isLoading, setIsLoading] = useState(true);
  
  const stats = [
    { icon: Users, label: "Team Members", value: 100, suffix: "+" },
    { icon: Target, label: "Happy Clients", value: 80, suffix: "+" },
    { icon: Award, label: "Years Experience", value: 6, suffix: "+" },
    { icon: Globe, label: "Cities in India", value: 10, suffix: "+" },
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            role="status"
            aria-label="Loading statistics"
          >
            {[1, 2, 3, 4].map((i) => (
              <StatSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={scaleIn} 
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="bg-linear-to-r from-blue-600 to-indigo-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
