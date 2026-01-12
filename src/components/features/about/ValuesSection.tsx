"use client";

import { motion } from "framer-motion";
import { Target, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ValuesSection() {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that give our clients a competitive edge."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, ensuring exceptional outcomes every time."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both within our organization and with our clients, to achieve remarkable results together."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-700">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="h-full"
              >
                <Card className="h-full  bg-linear-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6 flex justify-center">
                      <motion.div 
                        className=" bg-linear-to-br from-blue-600 to-blue-700 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.4, ease: "easeInOut" }
                        }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                    </div>
                    <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent group-hover:via-blue-500/30 mb-6 transition-all duration-300" />
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-700 group-hover:text-gray-900 text-center leading-relaxed transition-colors duration-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
