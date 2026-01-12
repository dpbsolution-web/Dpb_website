"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, Target, TrendingUp, Users } from "lucide-react";

const certifications = [
  {
    icon: CheckCircle,
    title: "100+ Projects",
    description: "Successfully Delivered",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Target,
    title: "6+ Years",
    description: "Industry Experience",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    title: "99.99% Uptime",
    description: "Network Reliability",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "80+ Clients",
    description: "Trusted by Businesses",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className={`${cert.bgColor} rounded-xl p-6 text-center h-full transition-all duration-300 hover:shadow-xl border border-gray-100`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${cert.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${cert.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
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
          className="mt-12 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">6+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">80+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
