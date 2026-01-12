"use client";

import { motion } from "framer-motion";
import { LucideIcon, Check } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
  image?: string;
  onLearnMore?: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  popular = false,
  image,
  onLearnMore
}: ServiceCardProps) {

  return (
    <motion.div
      className="h-full group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <Card className={`h-full flex flex-col relative overflow-hidden rounded-3xl border-2 transition-all duration-300 p-0 ${
        popular 
          ? 'border-blue-500  bg-linear-to-br from-white to-blue-50/30 shadow-xl shadow-blue-200/50' 
          : 'border-gray-200 bg-white hover:border-blue-400 hover:shadow-xl'
      }`}>
        {/* Popular Badge */}
        {popular && (
          <motion.div 
            className="absolute top-4 right-4 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Badge className="bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-1.5 text-xs font-semibold shadow-lg rounded-full">
              Popular
            </Badge>
          </motion.div>
        )}

        {/* Service Image */}
        {image && (
          <div className="relative w-full h-64 overflow-hidden rounded-t-3xl">
            <Image
              src={image}
              alt={`${title} - Professional service illustration`}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={popular}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            {/* Icon overlay on image */}
            <motion.div 
              className="absolute bottom-4 left-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-2xl bg-white backdrop-blur-sm border-2 border-white/50"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Icon className="h-8 w-8 text-blue-600" />
            </motion.div>
          </div>
        )}

        {/* Icon and Title Section */}
        <CardHeader className={`pb-4 ${image ? 'pt-6' : 'pt-6'} px-6`}>
          <div className="flex flex-col items-start space-y-2">
            {/* Icon Container - only shown when no image */}
            {!image && (
              <motion.div 
                className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 ${
                  popular 
                    ? ' bg-linear-to-br from-blue-600 to-indigo-600' 
                    : ' bg-linear-to-br from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-blue-800'
                }`}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5, ease: "easeInOut" }
                }}
              >
                <Icon className="h-7 w-7 text-white" />
              </motion.div>
            )}
            
            {/* Title */}
            <CardTitle className="text-2xl font-bold text-gray-900 leading-tight mt-2">
              {title}
            </CardTitle>
          </div>
          
          {/* Description */}
          <CardDescription className="text-base mt-3 text-gray-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Features Section */}
        <CardContent className="flex-1 flex flex-col pt-0 px-6 pb-6">
          <div className="flex-1">
            <div className="mb-5 pb-3 border-b border-gray-200">
              <h4 className="font-semibold text-sm text-gray-700 uppercase tracking-wide">
                Key Features
              </h4>
            </div>
            
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3 text-sm text-gray-700"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mt-0.5 shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full  bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-md">
                      <Check className="h-3 w-3 font-bold" />
                    </div>
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-5 border-t border-gray-100">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                className={`w-full font-semibold transition-all duration-300 py-6 text-base rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 group/button ${
                  popular 
                    ? 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white' 
                    : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                onClick={onLearnMore}
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </span>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}