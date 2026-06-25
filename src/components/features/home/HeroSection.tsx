"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/config/site";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { heroFadeIn, heroFadeInUp, heroStagger } from "@/lib/animations";



export function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center">
      {/* Professional deep-blue gradient base */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-blue-950 via-blue-900 to-indigo-900" />
      
      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 bg-white/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
        />
      ))}

      {/* Sonar ping rings — telecom radar feel */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-1">
        <div className="relative w-12 h-12">
          <span className="animate-sonar absolute inset-0 rounded-full border border-cyan-400/50" />
          <span className="animate-sonar-delay-1 absolute inset-0 rounded-full border border-cyan-300/35" />
          <span className="animate-sonar-delay-2 absolute inset-0 rounded-full border border-blue-300/25" />
        </div>
      </div>

      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/max-iGsjSLxnAe8-unsplash.jpg"
          alt="Modern telecommunications infrastructure and network connectivity showcasing DPB Solutions expertise"
          fill
          className="object-cover brightness-50 mix-blend-overlay"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="initial"
          animate="animate"
          variants={heroStagger}
        >
          <motion.div variants={heroFadeIn} className="mb-6">
            <motion.span 
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-gray-900 shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-4 h-4 mr-2 text-blue-600" />
              {companyInfo.tagline}
            </motion.span>
          </motion.div>

          <motion.h1 
            variants={heroFadeInUp}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{ textShadow: '2px 4px 12px rgba(0,0,0,0.9)' }}
          >
            <span className="text-white">DPB</span>{" "}
            <span className="text-blue-400">Solution</span>
            <br />
            <span className="block mt-2 text-white text-3xl md:text-5xl lg:text-6xl">
              Smart Engineering and Reliable Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={heroFadeIn}
            className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.9)' }}
          >
            {companyInfo.description}
          </motion.p>

          <motion.div 
            variants={heroFadeIn}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-2xl font-semibold" asChild>
                <Link href="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-6 bg-white hover:bg-gray-100 text-gray-900 shadow-2xl font-semibold" asChild>
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats with CountUp Animation */}
          <motion.div 
            ref={ref}
            variants={heroFadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md rounded-xl py-3 px-4 sm:py-6 sm:px-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {inView && <CountUp end={parseInt(companyInfo.clients.replace('+', ''))} duration={2.5} suffix="+" />}
              </div>
              <div className="text-sm md:text-base text-white font-semibold" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                Happy Clients
              </div>
            </motion.div>
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md rounded-xl py-3 px-4 sm:py-6 sm:px-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {inView && <CountUp end={parseInt(companyInfo.employees.replace('+', ''))} duration={2.5} suffix="+" />}
              </div>
              <div className="text-sm md:text-base text-white font-semibold" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                Team Members
              </div>
            </motion.div>
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md rounded-xl py-3 px-4 sm:py-6 sm:px-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                Multiple Cities
              </div>
              <div className="text-sm md:text-base text-white font-semibold" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                in India
              </div>
            </motion.div>
            <motion.div 
              className="text-center bg-white/10 backdrop-blur-md rounded-xl py-3 px-4 sm:py-6 sm:px-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                {inView && <CountUp end={6} duration={2.5} suffix="+" />}
              </div>
              <div className="text-sm md:text-base text-white font-semibold" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}>
                Years Experience
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
