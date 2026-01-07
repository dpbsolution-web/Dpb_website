"use client";

import { motion } from "framer-motion";
import { LucideIcon, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  popular?: boolean;
  onLearnMore?: () => void;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  popular = false,
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
      <Card className={`h-full flex flex-col relative overflow-hidden border-2 transition-all duration-300 ${
        popular 
          ? 'border-blue-600 bg-linear-to-br from-blue-50 to-white shadow-lg shadow-blue-200/50' 
          : 'border-gray-200 bg-white hover:border-blue-500 hover:shadow-xl'
      }`}>
        {/* Popular Badge */}
        {popular && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-xs font-semibold shadow-md">
              Popular
            </Badge>
          </div>
        )}

        {/* Icon and Title Section */}
        <CardHeader className="pb-3 pt-6 px-6">
          <div className="flex flex-col items-start space-y-3">
            {/* Icon Container */}
            <motion.div 
              className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-all duration-300 ${
                popular 
                  ? 'bg-linear-to-br from-blue-600 to-blue-700' 
                  : 'bg-linear-to-br from-blue-600 to-blue-700 group-hover:from-blue-700 group-hover:to-blue-800'
              }`}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.4, ease: "easeInOut" }
              }}
            >
              <Icon className="h-6 w-6 text-white" />
            </motion.div>
            
            {/* Title */}
            <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
              {title}
            </CardTitle>
          </div>
          
          {/* Description */}
          <CardDescription className="text-sm mt-2 text-gray-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>

        {/* Features Section */}
        <CardContent className="flex-1 flex flex-col pt-1 px-6 pb-6">
          <div className="flex-1">
            <div className="mb-3 pb-2 border-b border-gray-200">
              <h4 className="font-semibold text-xs text-gray-800 uppercase tracking-wide">
                Key Features
              </h4>
            </div>
            
            <ul className="space-y-2 mb-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2 text-sm text-gray-800 font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="mt-0.5 shrink-0">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-white">
                      <Check className="h-2.5 w-2.5 font-bold                                             " />
                    </div>
                  </div>
                  <span className="leading-snug">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-3 border-t border-gray-100">
            <Button 
              className={`w-full font-semibold transition-all duration-300 text-sm ${
                popular 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg' 
                  : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}
              onClick={onLearnMore}
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}