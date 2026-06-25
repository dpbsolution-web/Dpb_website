"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { scaleIn } from "@/lib/animations";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Award, Briefcase, Star, Check, Quote } from "lucide-react";

export function BusinessHeadSection() {
  const strengths = [
    "Strategic Business Development",
    "Telecom Project Execution",
    "Operations Management",
    "Network Planning & Optimization",
    "Client Relationship Management",
    "Team Building and Leadership"
  ];

  const specializations = [
    "Telecom Network Planning",
    "Operations & Maintenance",
    "Project Management",
    "Network Operations Center (NOC) Management",
    "Optical Fiber Network Deployment",
    "Team Leadership & Resource Management",
    "Vendor & Client Coordination"
  ];

  return (
    <section className="py-24 lg:py-32 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Leadership"
          subtitle="Meet the visionary driving DPB Solution forward"
        />

        {/* Profile Card */}
        <motion.div {...scaleIn}>
          <Card className="gap-0 py-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            {/* Header band */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 bg-linear-to-br from-blue-50 to-indigo-50 border-b px-6 sm:px-10 py-8">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 text-2xl font-bold text-white shadow-md">
                DK
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Dharmendra Kumar Ojha
                </h3>
                <p className="mt-1 text-lg sm:text-xl font-semibold text-blue-600">
                  Business Head &amp; Founder
                </p>
                <p className="mt-0.5 text-base text-gray-500 font-medium">
                  DPB Solution &middot; 15+ years in Telecom
                </p>
              </div>
            </div>

            <CardContent className="px-6 sm:px-10 py-8 lg:py-10 space-y-10">
              {/* Professional Overview */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Briefcase className="w-5 h-5" />
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">Professional Overview</h4>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    A seasoned telecommunications professional with{" "}
                    <span className="font-semibold text-blue-600">15+ years of experience</span>{" "}
                    in the Telecom industry, specializing in network infrastructure and operations management.
                  </p>
                  <p>
                    As the Founder and Business Head of DPB Solution, he has successfully led telecom infrastructure projects, managed field operations, and delivered network solutions for leading telecom operators and infrastructure companies across India.
                  </p>
                </div>
              </div>

              {/* Specializations + Strengths */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 lg:divide-x lg:divide-gray-100">
                {/* Key Specializations */}
                <div className="lg:pr-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                      <Award className="w-5 h-5" />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Key Specializations</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {specializations.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Strengths */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                      <Star className="w-5 h-5" />
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Key Strengths</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {strengths.map((strength) => (
                      <li key={strength} className="flex items-center gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-purple-100 text-purple-600">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-gray-700">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="relative bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
                <p className="text-gray-800 italic font-medium leading-relaxed pr-8">
                  &ldquo;Committed to delivering quality telecom infrastructure solutions with operational excellence and customer satisfaction.&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
