"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small uppercase label shown above the title */
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Alignment of the heading block. Defaults to centered. */
  align?: "center" | "left";
  className?: string;
}

/**
 * Consistent section heading used across all public pages.
 * Centered by default with an optional eyebrow label and subtitle.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      {...fadeInUp}
      className={cn(
        "mb-16",
        isCenter ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-gray-600",
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
