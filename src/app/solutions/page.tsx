"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Building, Shield, Zap, Heart, Target, Award, Phone,ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { solutions } from "@/config/site";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SolutionsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("healthcare");

  const industryIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    healthcare: Heart,
    finance: Target,
    education: Award
  };

  const additionalSolutions = [
    {
      id: "retail",
      title: "Retail & E-commerce",
      description: "Comprehensive solutions for modern retail operations and online commerce platforms.",
      icon: Building,
      features: [
        "POS System Integration",
        "Inventory Management Systems",
        "Customer Analytics Platform",
        "Multi-channel Support"
      ],
      benefits: ["25% increase in sales efficiency", "Real-time inventory tracking", "Enhanced customer experience"]
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Logistics",
      description: "Industrial-grade solutions for manufacturing processes and supply chain management.",
      icon: Zap,
      features: [
        "IoT Device Integration",
        "Supply Chain Optimization",
        "Quality Management Systems",
        "Predictive Maintenance"
      ],
      benefits: ["30% reduction in downtime", "Improved operational efficiency", "Cost optimization"]
    },
    {
      id: "government",
      title: "Government & Public Sector",
      description: "Secure, compliant solutions for government agencies and public sector organizations.",
      icon: Shield,
      features: [
        "Government-grade Security",
        "Citizen Service Portals",
        "Data Management Systems",
        "Compliance Monitoring"
      ],
      benefits: ["Enhanced public services", "Improved transparency", "Regulatory compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative  bg-linear-to-br from-violet-50 via-emerald-50 to-blue-50 py-20">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-25" />
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Industry-Specific 
              <span className="text-modern-gradient"> IT Solutions</span>
            </motion.h1>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Tailored technology solutions designed to meet the unique challenges and requirements of your industry
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuss Your Industry Needs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Featured Industry Solutions
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Deep expertise in specialized industries with proven track records
            </motion.p>
          </motion.div>

          <Tabs value={selectedIndustry} onValueChange={setSelectedIndustry} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 gap-2 bg-transparent p-0">
              {solutions.map((solution) => {
                const IconComponent = industryIcons[solution.id];
                return (
                  <TabsTrigger 
                    key={solution.id} 
                    value={solution.id} 
                    className="flex items-center gap-2 border-2 border-gray-200 bg-white shadow-sm hover:border-blue-500 hover:shadow-md data-[state=active]:border-blue-600 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 data-[state=active]:shadow-lg transition-all duration-300 rounded-lg py-3 px-4"
                  >
                    <IconComponent className="w-4 h-4" />
                    {solution.title.split(' ')[0]}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {solutions.map((solution) => {
              const IconComponent = industryIcons[solution.id];
              return (
                <TabsContent key={solution.id} value={solution.id}>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Solution Details */}
                    <motion.div variants={fadeIn}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-violet-600" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">{solution.title}</h3>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-8">{solution.description}</p>
                      
                      <div className="space-y-4 mb-8">
                        <h4 className="text-xl font-semibold text-gray-900">Key Features:</h4>
                        {solution.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <Button asChild>
                          <Link href="/contact">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/services">
                            View Services
                          </Link>
                        </Button>
                      </div>
                    </motion.div>

                    {/* Case Study */}
                    <motion.div variants={fadeIn}>
                      <Card className="bg-gray-50">
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">Case Study</Badge>
                          </div>
                          <CardTitle className="text-xl">{solution.caseStudy.client}</CardTitle>
                          <CardDescription className="text-base">
                            {solution.caseStudy.challenge}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-2">Our Solution:</h5>
                              <p className="text-gray-600">{solution.caseStudy.solution}</p>
                            </div>
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-2">Results:</h5>
                              <p className="text-emerald-700 font-medium">{solution.caseStudy.results}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              More Industry Solutions
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              We serve diverse industries with customized technology solutions
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {additionalSolutions.map((solution) => {
              const IconComponent = solution.icon;
              return (
                <motion.div key={solution.id} variants={fadeIn}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-violet-600" />
                      </div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription>{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {solution.features.map((feature, index) => (
                              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-emerald-500" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {solution.benefits.map((benefit, index) => (
                              <li key={index} className="text-sm text-emerald-700">
                                • {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-6" variant="outline" asChild>
                        <Link href="/contact">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose DPB Solution?
              </h2>
              <p className="text-xl text-gray-600">
                Industry expertise combined with cutting-edge technology
              </p>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeIn} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Expertise</h3>
                    <p className="text-gray-600">Deep understanding of industry-specific challenges and regulations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Ready</h3>
                    <p className="text-gray-600">Solutions designed to meet strict industry compliance requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
                    <p className="text-gray-600">Solutions that grow with your business and adapt to changing needs</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">Successfully delivered 1200+ projects across various industries</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock technical support and monitoring services</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Customized Approach</h3>
                    <p className="text-gray-600">Tailored solutions designed specifically for your business needs</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}