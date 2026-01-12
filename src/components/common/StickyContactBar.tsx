"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export function StickyContactBar() {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
    >
      {/* Phone Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered('phone')}
        onHoverEnd={() => setIsHovered(null)}
        className="relative"
      >
        <Button 
          size="lg" 
          className="h-14 w-14 rounded-full shadow-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300"
          asChild
        >
          <a 
            href="tel:+919973789207"
            aria-label="Call us"
          >
            <Phone className="h-6 w-6" />
          </a>
        </Button>
        {isHovered === 'phone' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
          >
            Call: +91 9973789207
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
          </motion.div>
        )}
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered('whatsapp')}
        onHoverEnd={() => setIsHovered(null)}
        className="relative"
      >
        <Button 
          size="lg" 
          className="h-14 w-14 rounded-full shadow-2xl bg-green-600 hover:bg-green-700 transition-all duration-300"
          asChild
        >
          <a 
            href="https://wa.me/919973789207?text=Hi%20DPB%20Solution,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
        {isHovered === 'whatsapp' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
          >
            Chat on WhatsApp
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
          </motion.div>
        )}
      </motion.div>

      {/* Pulse animation */}
      <motion.div
        className="absolute -inset-2 bg-blue-400 rounded-full opacity-0 pointer-events-none"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}
