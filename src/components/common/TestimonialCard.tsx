"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export function TestimonialCard({
  name,
  company,
  role,
  content,
  rating,
  image
}: TestimonialCardProps) {
  return (
    <motion.div 
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Quote Icon */}
          <motion.div 
            className="mb-4"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Quote className="h-8 w-8 text-blue-600/30" />
          </motion.div>
          
          {/* Content */}
          <blockquote className="text-sm leading-relaxed mb-4 flex-1 text-gray-800">
            &ldquo;{content}&rdquo;
          </blockquote>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <Star
                  className={`h-4 w-4 ${
                    i < rating 
                      ? "text-yellow-400 fill-current" 
                      : "text-gray-300"
                  }`}
                />
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 mb-4" />

          {/* Author Info */}
          <motion.div 
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {image ? (
              <div className="relative shrink-0">
                <Image
                  src={image}
                  alt={`${name} - Customer testimonial`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
                  loading="lazy"
                  quality={90}
                  sizes="48px"
                />
              </div>
            ) : (
              <motion.div 
                className="h-12 w-12 shrink-0 rounded-full bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-white font-bold text-lg">
                  {name.charAt(0)}
                </span>
              </motion.div>
            )}
            <div className="flex-1 min-w-0 overflow-hidden">
              <p className="font-bold text-gray-900 text-base mb-0.5 truncate">{name}</p>
              <p className="text-xs text-gray-600 truncate">
                {role}
              </p>
              <p className="text-xs text-blue-600 truncate">
                {company}
              </p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
 