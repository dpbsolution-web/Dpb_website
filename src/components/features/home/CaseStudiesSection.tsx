"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, TrendingUp, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const caseStudies = [
  {
    client: "Vodafone Idea Ltd (VIL)",
    industry: "Telecommunications",
    challenge: "Rapid 5G network infrastructure deployment across multiple cities with strict deadlines and quality standards",
    solution: "Deployed comprehensive OFC network infrastructure with advanced fiber optic solutions and 24/7 monitoring systems",
    results: [
      { metric: "99.9%", label: "Network Uptime" },
      { metric: "10+", label: "Cities Covered" },
      { metric: "3 Months", label: "Ahead of Schedule" },
    ],
    testimonial: "DPB Solution's team demonstrated exceptional expertise and professionalism throughout our 5G infrastructure deployment. Their commitment to quality and timelines exceeded our expectations.",
    image: "/images/ai-generated-9143280_1280.jpg",
    color: "from-blue-500 to-blue-700",
  },
  {
    client: "Bharti Airtel",
    industry: "Telecommunications",
    challenge: "Large-scale manpower deployment for network expansion with comprehensive training and safety compliance",
    solution: "Provided skilled technical workforce with regular training programs, safety certifications, and full government compliance",
    results: [
      { metric: "200+", label: "Trained Personnel" },
      { metric: "100%", label: "Safety Compliance" },
      { metric: "24/7", label: "Project Support" },
    ],
    testimonial: "Their manpower services are top-notch. The team is well-trained, professional, and always delivers on commitments. A reliable partner for our operations.",
    image: "/images/pexels-cottonbro-6804068.jpg",
    color: "from-red-500 to-red-700",
  },
  {
    client: "Reliance Jio",
    industry: "Telecommunications",
    challenge: "Complex microwave deployment and maintenance requiring specialized skills and rapid response times",
    solution: "Deployed specialized ISP engineers and rigger teams with comprehensive safety training and farm tower expertise",
    results: [
      { metric: "50+", label: "Sites Deployed" },
      { metric: "Zero", label: "Safety Incidents" },
      { metric: "95%", label: "Client Satisfaction" },
    ],
    testimonial: "DPB Solution's technical expertise in MW deployment is unmatched. Their proactive approach and safety standards set them apart in the industry.",
    image: "/images/network-3396348.jpg",
    color: "from-purple-500 to-purple-700",
  },
];

export function CaseStudiesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. See how we&apos;ve helped leading telecommunications companies achieve their infrastructure goals.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl shadow-2xl ${index % 2 === 0 ? '' : ''}`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className={`p-8 lg:p-12 bg-linear-to-br ${study.color} text-white order-2 lg:order-1`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                    {study.client}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Challenge
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Solution
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-3xl font-bold mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-white/80">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Side */}
                <div className="p-8 lg:p-12 bg-gray-50 flex flex-col justify-center order-1 lg:order-2">
                  <div className="mb-6">
                    <Clock className="w-12 h-12 text-blue-600 mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Client Feedback
                    </h4>
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    &ldquo;{study.testimonial}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {study.client}
                      </div>
                      <div className="text-sm text-gray-600">
                        {study.industry} Leader
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <Button asChild className="w-full" size="lg">
                      <Link href="/contact">
                        Start Your Success Story
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to be our next success story?
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">
              Get Started Today
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
