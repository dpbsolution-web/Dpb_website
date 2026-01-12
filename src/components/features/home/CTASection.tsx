"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59 130 246) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-700 mb-8">
            Join over 1,200 businesses that trust DPB Solution for their IT and telecommunications needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-2xl" asChild>
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white hover:bg-gray-100 text-blue-600 border-blue-600 shadow-2xl" asChild>
              <Link href="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
