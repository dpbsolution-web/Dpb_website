"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { companyInfo } from "@/config/site";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-linear-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 text-white text-sm font-semibold tracking-wide uppercase">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-10">
            Trusted by <strong className="text-white">{companyInfo.clients} satisfied clients</strong> across India for telecom infrastructure, OFC deployment, and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6 bg-white hover:bg-gray-50 text-blue-700 font-bold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105" asChild>
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 py-6 bg-transparent hover:bg-white/10 text-white border-white/50 hover:border-white font-semibold shadow-lg transition-all duration-300" asChild>
              <a href={`tel:${companyInfo.contact.phone.replace(/\s+/g, '')}`}>
                <PhoneCall className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
