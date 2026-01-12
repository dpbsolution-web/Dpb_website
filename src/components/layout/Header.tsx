"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationItems, companyInfo } from "@/config/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm" 
      role="banner"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" aria-label="DPB Solution Home">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/images/logo.jpeg" 
              alt={`${companyInfo.name} Logo`}
              width={40}
              height={40}
              className="rounded-lg object-contain"
              priority
            />
          </motion.div>
          <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {companyInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 relative ${
                isActive(item.href)
                  ? "text-blue-600"
                  : "text-gray-700"
              }`}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.div
                  layoutId="activeLink"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="h-9 w-9 px-0"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t bg-background"
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <nav className="flex flex-col space-y-2 p-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 p-2 rounded-lg ${
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}