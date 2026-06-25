"use client";

import { motion } from "framer-motion";
import { ClipboardList, PencilRuler, Rocket, LifeBuoy } from "lucide-react";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { SectionHeading } from "@/components/common/SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    title: "Assessment & Planning",
    description:
      "Comprehensive network analysis, coverage planning, and technology roadmap development.",
  },
  {
    icon: PencilRuler,
    title: "Design & Engineering",
    description:
      "Detailed network design, equipment selection, and integration planning.",
  },
  {
    icon: Rocket,
    title: "Deployment & Testing",
    description:
      "Professional installation, configuration, and comprehensive testing procedures.",
  },
  {
    icon: LifeBuoy,
    title: "Optimization & Support",
    description:
      "Ongoing monitoring, optimization, and 24/7 technical support services.",
  },
];

export function ImplementationProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Implementation Process"
          subtitle="A proven methodology for successful telecom infrastructure deployment"
        />

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div key={index} variants={scaleIn} className="h-full">
                <div className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  <span className="absolute right-5 top-5 text-5xl font-bold text-gray-100 select-none">
                    {index + 1}
                  </span>
                  <span className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="relative mb-2 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="relative text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
