"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export function Counter({ 
  end, 
  duration = 2, 
  suffix = "", 
  prefix = "",
  decimals = 0,
  className = ""
}: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count.toLocaleString(undefined, { 
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals 
      })}{suffix}
    </motion.span>
  );
}
