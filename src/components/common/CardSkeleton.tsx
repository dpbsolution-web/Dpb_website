"use client";

import { motion } from "framer-motion";

export function CardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200">
      <motion.div 
        className="h-48 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      />
      <div className="p-6 space-y-3">
        <motion.div 
          className="h-4 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.1,
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
        <motion.div 
          className="h-4 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.2,
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
        <motion.div 
          className="h-20 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 rounded"
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
            delay: 0.3,
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
      </div>
    </div>
  );
}
