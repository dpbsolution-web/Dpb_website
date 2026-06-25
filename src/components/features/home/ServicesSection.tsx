"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/common/ServiceCard";
import { SectionHeading } from "@/components/common/SectionHeading";
import { services } from "@/config/site";

export function ServicesSection() {

  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={<>Our Core{" "}<span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Services</span></>}
          subtitle="Comprehensive IT and telecommunications solutions designed to power your business forward"
          className="mb-16 lg:mb-20"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {services.slice(0, 6).map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                features={service.features}
                popular={service.popular}
                href="/services"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" asChild>
            <Link href="/services">
              Explore Full Service Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
