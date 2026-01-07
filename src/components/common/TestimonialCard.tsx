"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="h-full">
      <Card className="h-full bg-white border-2 border-gray-200 shadow-lg">
        <CardContent className="p-6 flex flex-col h-full">
          {/* Quote Icon */}
          <div className="mb-4">
            <Quote className="h-8 w-8 text-blue-600/30" />
          </div>
          
          {/* Content */}
          <blockquote className="text-sm leading-relaxed mb-4 flex-1 text-gray-800">
            &ldquo;{content}&rdquo;
          </blockquote>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating 
                    ? "text-yellow-400 fill-current" 
                    : "text-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-200 mb-4" />

          {/* Author Info */}
          <div className="flex items-start space-x-3">
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
              <div className="h-12 w-12 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  {name.charAt(0)}
                </span>
              </div>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
}