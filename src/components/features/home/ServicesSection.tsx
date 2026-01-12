"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/common/ServiceCard";
import { services } from "@/config/site";
import { useState, useEffect } from "react";

// Skeleton component for service cards
function ServiceCardSkeleton() {
  return (
    <div className="h-full bg-white border-2 border-gray-200 rounded-xl p-6 animate-pulse">
      <div className="flex flex-col space-y-3 mb-4">
        <div className="h-12 w-12 bg-gray-300 rounded-xl" />
        <div className="h-7 w-3/4 bg-gray-300 rounded" />
      </div>
      <div className="space-y-2 mb-6">
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-5/6 bg-gray-200 rounded" />
      </div>
      <div className="h-4 w-32 bg-gray-300 rounded mb-3" />
      <div className="space-y-2 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-300 rounded-full" />
            <div className="h-3 w-3/4 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
      <div className="h-10 w-full bg-gray-300 rounded-lg mt-4" />
    </div>
  );
}

export function ServicesSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Services
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive IT and telecommunications solutions designed to power your business forward
          </motion.p>
        </motion.div>

        {isLoading ? (
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
            role="status"
            aria-label="Loading services"
          >
            {[1, 2, 3, 4].map((i) => (
              <ServiceCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
          >
            {services.slice(0, 6).map((service) => (
              <motion.div 
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  icon={service.icon}
                  features={service.features}
                  popular={service.popular}
                  onLearnMore={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = '/services';
                    }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
