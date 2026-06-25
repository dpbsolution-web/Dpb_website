"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Globe, TrendingUp } from "lucide-react";
import { scaleIn, staggerContainer } from "@/lib/animations";
import { Counter } from "@/components/common/Counter";
import { Card, CardContent } from "@/components/ui/card";
// Annual turnover figures (₹ Crore) — edit these to update the growth chart
const TURNOVER = [
  { year: "FY 2023-24", value: 9 },
  { year: "FY 2024-25", value: 11 },
  { year: "FY 2025-26", value: 15 },
];

export function StatsSection() {
  const stats = [
    { icon: Users, label: "Team Members", value: 100, suffix: "+" },
    { icon: Target, label: "Happy Clients", value: 80, suffix: "+" },
    { icon: Award, label: "Years Experience", value: 6, suffix: "+" },
    { icon: Globe, label: "Cities in India", value: 10, suffix: "+" },
  ];

  const maxTurnover = Math.max(...TURNOVER.map((t) => t.value));
  const turnoverGrowth = Math.round(
    ((TURNOVER[TURNOVER.length - 1].value - TURNOVER[0].value) / TURNOVER[0].value) * 100
  );

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-linear-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                className="bg-linear-to-r from-blue-600 to-indigo-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <Counter end={stat.value} suffix={stat.suffix} duration={2.5} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Annual Turnover growth trend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 lg:mt-16"
        >
          <Card className="gap-0 py-0 overflow-hidden shadow-lg">
            {/* Header band */}
            <div className="flex items-center gap-3 bg-linear-to-br from-blue-50 to-indigo-50 border-b px-6 sm:px-8 py-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <TrendingUp className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Annual Turnover</h3>
                <p className="text-sm text-gray-500">Financial year revenue · ₹ Crore</p>
              </div>
            </div>

            <CardContent className="px-6 sm:px-10 py-8">
              <div className="grid items-center gap-10 lg:grid-cols-5">
                {/* Summary */}
                <div className="lg:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Latest · {TURNOVER[TURNOVER.length - 1].year}
                  </p>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                      <Counter end={TURNOVER[TURNOVER.length - 1].value} prefix="₹" duration={1.6} />
                    </span>
                    <span className="text-2xl font-bold text-gray-400">Cr</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1.5 text-sm font-semibold text-emerald-700">
                    <TrendingUp className="w-4 h-4" />
                    +{turnoverGrowth}% in 3 years
                  </span>
                  <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                    Up from ₹{TURNOVER[0].value} Cr in {TURNOVER[0].year} — steady, consistent year-on-year growth.
                  </p>
                </div>

                {/* Compact chart */}
                <div className="lg:col-span-3">
                  {/* Bars row with baseline */}
                  <div className="relative grid grid-cols-3 items-end gap-4 border-b-2 border-gray-200 pt-14">
                    {/* dashed gridlines */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-14 col-span-3 flex flex-col justify-between">
                      {[0, 1, 2].map((line) => (
                        <div key={line} className="border-t border-dashed border-gray-100" />
                      ))}
                    </div>

                    {TURNOVER.map((item, index) => {
                      // cap at 88% so floating value labels have headroom above the tallest bar
                      const heightPct = (item.value / maxTurnover) * 88;
                      const prev = index > 0 ? TURNOVER[index - 1].value : null;
                      const yoy = prev ? Math.round(((item.value - prev) / prev) * 100) : null;
                      const isLatest = index === TURNOVER.length - 1;
                      return (
                        <div key={item.year} className="relative flex h-36 sm:h-40 items-end justify-center">
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${heightPct}%` }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ scale: 1.04 }}
                            className={`group relative w-full max-w-[72px] rounded-t-lg origin-bottom ${
                              isLatest
                                ? "bg-linear-to-t from-blue-600 to-indigo-400 shadow-lg shadow-blue-500/30"
                                : "bg-linear-to-t from-blue-400 to-blue-300 hover:from-blue-500 hover:to-blue-400"
                            }`}
                          >
                            {/* subtle top sheen */}
                            <span className="absolute inset-x-0 top-0 h-1/3 rounded-t-lg bg-linear-to-b from-white/25 to-transparent" />

                            {/* value + YoY label floating above the bar */}
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-100px" }}
                              transition={{ duration: 0.4, delay: 0.15 * index + 0.6 }}
                              className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 flex flex-col items-center gap-1 whitespace-nowrap"
                            >
                              {yoy !== null && (
                                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
                                  <TrendingUp className="h-2.5 w-2.5" />
                                  {yoy}%
                                </span>
                              )}
                              <span className="text-sm sm:text-base font-bold text-gray-900">
                                ₹{item.value} Cr
                              </span>
                            </motion.div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Year labels aligned under bars */}
                  <div className="mt-3 grid grid-cols-3 gap-4">
                    {TURNOVER.map((item, index) => (
                      <div
                        key={item.year}
                        className={`text-center text-xs sm:text-sm font-medium ${
                          index === TURNOVER.length - 1 ? "text-blue-700" : "text-gray-600"
                        }`}
                      >
                        {item.year}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
