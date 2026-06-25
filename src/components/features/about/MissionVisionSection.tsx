"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    accent: "blue",
    body: "To empower businesses with innovative and reliable telecommunications solutions that enhance connectivity, improve operational efficiency, and enable seamless communication across networks. We strive to make advanced telecom technology accessible, secure, and scalable for organizations of all sizes.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    accent: "indigo",
    body: "To become a trusted global telecommunications partner, driving the future of connectivity through cutting-edge network solutions, smart communication technologies, and continuous innovation that keeps businesses connected anytime, anywhere.",
  },
];

const accentStyles: Record<string, { band: string; chip: string; border: string }> = {
  blue: {
    band: "bg-linear-to-br from-blue-50 to-indigo-50",
    chip: "bg-blue-100 text-blue-600",
    border: "bg-blue-500",
  },
  indigo: {
    band: "bg-linear-to-br from-indigo-50 to-purple-50",
    chip: "bg-indigo-100 text-indigo-600",
    border: "bg-indigo-500",
  },
};

export function MissionVisionSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const styles = accentStyles[card.accent];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="relative h-full gap-0 py-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  {/* Left border accent — grows in from top on scroll */}
                  <motion.div
                    className={`absolute left-0 top-0 bottom-0 w-1 ${styles.border}`}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.35, ease: "easeOut" }}
                    style={{ originY: 0 }}
                  />
                  <div className={`flex items-center gap-3 border-b px-6 py-5 ${styles.band}`}>
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.chip}`}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{card.title}</h3>
                  </div>
                  <CardContent className="px-6 py-6">
                    <p className="text-gray-600 leading-relaxed">{card.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
