"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  Briefcase,
} from "lucide-react";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  CAREERS_CONFIG, 
  CULTURE_VALUES, 
  COMPANY_STATS, 
  HIRING_PROCESS,
  POSITIONS
} from "@/constants/careers";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

// Skeleton component for job cards
function JobCardSkeleton() {
  return (
    <Card className="h-full animate-pulse">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-gray-200 p-3 rounded-lg h-12 w-12" />
          <div className="bg-gray-200 h-6 w-20 rounded" />
        </div>
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-2" />
        <div className="h-4 w-1/2 bg-gray-200 rounded" />
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
        </div>
        
        <div>
          <div className="h-4 w-32 bg-gray-300 rounded mb-2" />
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-3 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <div className="h-10 w-full bg-gray-300 rounded-lg" />
      </CardFooter>
    </Card>
  );
}

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  
  // Get configuration from constants
  const { applicationEmail } = CAREERS_CONFIG;
  
  // Simulate loading time for static data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingJobs(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  
  // COMMENTED OUT: Fetch active job openings from database
  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     try {
  //       const response = await fetch('/api/admin/careers', {
  //         cache: 'no-store'
  //       });
  //       const data = await response.json();
  //       // Filter only active jobs
  //       const activeJobs = Array.isArray(data) ? data.filter((job: JobOpening) => job.active === true) : [];
  //       setJobOpenings(activeJobs);
  //     } catch (error) {
  //       console.error('Failed to fetch job openings:', error);
  //       setJobOpenings([]);
  //     } finally {
  //       setLoadingJobs(false);
  //     }
  //   };
  //   
  //   fetchJobs();
  // }, []);
  
  // Use static positions from constants (no API call)
  const jobOpenings = POSITIONS;
  const hasOpenings = jobOpenings.length > 0;
  
  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <motion.section {...fadeInUp} className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Team
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Help us build the future of technology while working with amazing people 
            in a collaborative and innovative environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
              onClick={() => {
                if (typeof document !== 'undefined') {
                  const element = document.getElementById('open-positions');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              View Open Positions
            </Button>
            <Link href="/about">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8">
                Learn About Our Culture
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Why Join Us Section */}
      <motion.section
        {...fadeInUp}
        className="py-24 lg:py-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/kirill-sh-eVWWr6nmDf8-unsplash.jpg"
            alt="Collaborative team environment at DPB Solution with professionals working together on innovative telecom projects"
            fill
            className="object-cover opacity-30"
            loading="lazy"
            quality={80}
            sizes="100vw"
            role="img"
            aria-hidden="false"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0bg-gradient-to-r from-blue-900/80 to-slate-900/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Why Work at DPB Solution?</h2>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              We believe in creating an environment where talented people can do their best work
            </p>
          </div>
        </div>
      </motion.section>

      {/* Culture Section */}
      <motion.section {...fadeInUp} className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Culture & Values</h2>
              <div className="space-y-6">
                {CULTURE_VALUES.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Image */}
              <div className="relative h-72 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/kevin-bhagat-zNRITe8NPqY-unsplash.jpg"
                  alt="Modern open office workspace featuring collaborative areas and advanced technology at DPB Solution"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  role="img"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              {/* Stats Card */}
              <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-lg">
                {COMPANY_STATS.map((stat, index) => (
                  <div key={index} className={index < COMPANY_STATS.length - 1 ? "mb-4" : ""}>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-gray-900 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        id="open-positions"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="py-24 lg:py-32 relative overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/andrei-andreew-fdCZMmVIRlE-unsplash.jpg"
            alt="Professional office environment showcasing modern workplace at DPB Solution"
            fill
            className="object-cover opacity-10"
            loading="lazy"
            quality={75}
            sizes="100vw"
            role="img"
            aria-hidden="false"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-linear-to-br from-white/95 to-blue-50/90"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and help us build amazing things
            </p>
          </div>
          
          {isLoadingJobs ? (
            <div 
              className="grid lg:grid-cols-2 gap-8"
              role="status"
              aria-label="Loading job positions"
            >
              {[1, 2, 3, 4].map((i) => (
                <JobCardSkeleton key={i} />
              ))}
            </div>
          ) : hasOpenings ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid lg:grid-cols-2 gap-8"
            >
              {jobOpenings.map((position, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Briefcase className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {position.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {position.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mt-1">
                    {position.department}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {position.type}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {(typeof position.requirements === 'string' 
                        ? (position.requirements as string).split('\n').filter(Boolean)
                        : (position.requirements as string[])
                      ).slice(0, 3).map((req: string, reqIndex: number) => (
                        <li key={reqIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Dialog open={isDialogOpen && selectedPosition === position.title} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => handleApplyClick(position.title)}
                      >
                        Apply Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] bg-white border-2 border-blue-200">
                      <DialogHeader className="pb-4 border-b">
                        <div className="flex flex-row items-center gap-3 pt-2">
                          {/* Company Logo */}
                          <Image
                            src="/images/logo.jpeg"
                            alt="DPB Solution"
                            width={100}
                            height={30}
                            className="h-10 w-auto"
                          />
                          <DialogTitle className="text-2xl font-bold text-gray-900 text-center">Apply for {selectedPosition}</DialogTitle>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-6 py-6">
                        {/* Email Icon and Information */}
                        <div className="flex flex-col items-center text-center space-y-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              Send Your Resume
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                              Please send your resume and cover letter to:
                            </p>
                            <p className="text-blue-600 font-semibold text-lg">
                              {applicationEmail}
                            </p>
                          </div>
                        </div>

                        {/* Information Box */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-blue-600 mt-0.5">
                              <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-blue-900 mb-1">
                                What to Include:
                              </p>
                              <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Your updated resume/CV</li>
                                <li>• Cover letter explaining your interest</li>
                                <li>• Portfolio or relevant work samples (if applicable)</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Response Message */}
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-green-600 mt-0.5">
                              <svg fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-green-900 mb-1">
                                We&apos;ll Get Back Shortly
                              </p>
                              <p className="text-sm text-green-800">
                                Thank you for your interest! We&apos;ll review your profile and get back to you shortly once it matches our requirements.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Show "No Openings" message when hasOpenings is false
            <div className="max-w-2xl mx-auto">
              <Card className="text-center p-12 bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                <CardContent className="space-y-6 pt-6">
                  <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-10 w-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      No Current Openings
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      We don&apos;t have any open positions at the moment, but we&apos;re always looking for talented individuals to join our team.
                    </p>
                    <p className="text-gray-600 mb-8">
                      We&apos;ll get back to you soon with great opportunities that match your skills and experience.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Button 
                      asChild
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <a href={`mailto:${applicationEmail}`}>
                        Send Us Your Resume
                      </a>
                    </Button>
                    <p className="text-sm text-gray-500">
                      Or email us at{" "}
                      <a href={`mailto:${applicationEmail}`} className="text-blue-600 hover:underline font-medium">
                        {applicationEmail}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </motion.section>

      {/* Application Process */}
      <motion.section {...fadeInUp} className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Hiring Process</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              A transparent and efficient process designed to find the right fit
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {HIRING_PROCESS.map((process) => (
              <div key={process.step} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      </div>
    </>
  );
}
