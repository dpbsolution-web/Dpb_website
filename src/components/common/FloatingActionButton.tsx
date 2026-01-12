"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, MessageSquare, X, Phone } from "lucide-react";
import Link from "next/link";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  const actions = [
    {
      icon: Phone,
      label: "Call Us",
      href: "tel:+919973789207",
      color: "from-green-600 to-green-700",
      hoverText: "+91 9973789207",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:info@dpbsolution.com",
      color: "from-blue-600 to-blue-700",
      hoverText: "info@dpbsolution.com",
    },
    {
      icon: MessageSquare,
      label: "Contact Form",
      href: "/contact",
      color: "from-purple-600 to-purple-700",
      hoverText: "Fill out our form",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-3 space-y-2 min-w-[200px] border border-gray-200"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredAction(action.label)}
                onMouseLeave={() => setHoveredAction(null)}
              >
                <Link
                  href={action.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                >
                  <div className={`w-10 h-10 rounded-full bg-linear-to-r ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </Link>
                
                {/* Hover tooltip */}
                <AnimatePresence>
                  {hoveredAction === action.label && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-lg z-50"
                    >
                      {action.hoverText}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: 1, 
          rotate: isOpen ? 180 : 0,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center group"
        aria-label={isOpen ? "Close quick actions" : "Open quick actions"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </motion.button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <>
          <motion.div
            className="absolute inset-0 bg-blue-600 rounded-full -z-10"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </>
      )}
    </div>
  );
}
