"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { testimonials } from "@/config/site";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const showNavigation = testimonials.length > itemsPerPage;
  const autoScrollInterval = 5000;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!showNavigation || isPaused) return;

    timeoutRef.current = setInterval(() => {
      handleNext();
    }, autoScrollInterval);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [currentIndex, handleNext, isPaused, showNavigation]);

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="text-blue-600">
              Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say.
          </p>
        </div>

        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Arrow */}
          {showNavigation && (
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 h-12 w-12 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 z-10 hidden md:flex items-center justify-center shadow-lg"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}

          <div className="overflow-hidden px-2">
            <div
              key={currentIndex}
              className={`grid gap-8 ${
                visibleTestimonials.length === 1 
                  ? "md:grid-cols-1 max-w-md mx-auto" 
                  : visibleTestimonials.length === 2 
                  ? "md:grid-cols-2 max-w-4xl mx-auto" 
                  : "md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {visibleTestimonials.map((testimonial) => (
                <div key={testimonial.id}>
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {showNavigation && (
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 h-12 w-12 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 z-10 hidden md:flex items-center justify-center shadow-lg"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          )}

          {/* Mobile Navigation Buttons */}
          {showNavigation && (
            <div className="flex md:hidden justify-center gap-4 mt-8">
              <Button
                onClick={handlePrevious}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={handleNext}
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Pagination Dots */}
          {showNavigation && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full ${
                    index === currentIndex 
                      ? "w-8 bg-blue-600" 
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
