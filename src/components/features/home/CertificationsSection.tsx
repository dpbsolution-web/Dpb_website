"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Target, TrendingUp, Users, Clock, Headset } from "lucide-react";

const certifications = [
  {
    icon: CheckCircle,
    title: "100+ Projects",
    description: "Successfully Delivered",
  },
  {
    icon: Target,
    title: "6+ Years",
    description: "Industry Experience",
  },
  {
    icon: TrendingUp,
    title: "99.99% Uptime",
    description: "Network Reliability",
  },
  {
    icon: Users,
    title: "80+ Clients",
    description: "Trusted by Businesses",
  },
];

const trustIndicators = [
  { icon: Clock, value: "100%", label: "On-Time Delivery" },
  { icon: Headset, value: "24/7", label: "Support Available" },
];

export function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-linear-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Backed by certifications, experience, and a proven track record of excellence
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group h-full"
              >
                <div className="flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust indicators bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-6 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white shadow-lg sm:flex-row sm:gap-16"
        >
          {trustIndicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="text-left">
                  <div className="text-3xl font-bold leading-none">{item.value}</div>
                  <div className="mt-1 text-sm text-blue-100">{item.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
