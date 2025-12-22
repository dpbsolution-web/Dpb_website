"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Briefcase,
  ExternalLink,
  Upload
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { 
  CAREERS_CONFIG, 
  POSITIONS, 
  CULTURE_VALUES, 
  COMPANY_STATS, 
  HIRING_PROCESS 
} from "@/constants/careers";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobOpenings, setJobOpenings] = useState<any[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  
  // Get configuration from constants
  const { applicationEmail, googleFormId } = CAREERS_CONFIG;
  
  // Fetch active job openings from database
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/admin/careers', {
          cache: 'no-store'
        });
        const data = await response.json();
        // Filter only active jobs
        const activeJobs = Array.isArray(data) ? data.filter((job: any) => job.active === true) : [];
        setJobOpenings(activeJobs);
      } catch (error) {
        console.error('Failed to fetch job openings:', error);
        setJobOpenings([]);
      } finally {
        setLoadingJobs(false);
      }
    };
    
    fetchJobs();
  }, []);
  
  const hasOpenings = jobOpenings.length > 0;
  
  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setIsDialogOpen(true);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };
  
  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this to your backend API
      // Example: await fetch('/api/send-application', { method: 'POST', body: JSON.stringify(applicationData) })
      
      // For now, create a mailto link with the application details
      const mailtoLink = `mailto:${applicationEmail}?subject=${encodeURIComponent(`Job Application: ${selectedPosition} - ${applicationData.name}`)}&body=${encodeURIComponent(
        `New Job Application\n\n` +
        `Position: ${selectedPosition}\n` +
        `Name: ${applicationData.name}\n` +
        `Email: ${applicationData.email}\n` +
        `Phone: ${applicationData.phone}\n` +
        `Resume: ${applicationData.resume?.name || 'Not attached'}\n\n` +
        `Cover Letter:\n${applicationData.coverLetter}\n\n` +
        `---\n` +
        `Note: Please check the attachments for the resume file.`
      )}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setApplicationData({
        name: "",
        email: "",
        phone: "",
        coverLetter: "",
        resume: null,
      });
      
      setIsSubmitting(false);
      setIsDialogOpen(false);
      
      toast.success("Application Submitted Successfully!", {
        description: `Thank you for applying for ${selectedPosition}. Your application has been sent to ${applicationEmail}. We'll review it and get back to you within 2-3 business days.`,
        duration: 6000,
      });
    } catch {
      setIsSubmitting(false);
      toast.error("Submission Failed", {
        description: `There was an error submitting your application. Please try again or email us directly at ${applicationEmail}`,
      });
    }
  };
  
  const openGoogleForm = () => {
    if (googleFormId) {
      window.open(`https://docs.google.com/forms/d/e/${googleFormId}/viewform`, '_blank');
    }
    setIsDialogOpen(false);
  };
  
  const isFormValid = applicationData.name && applicationData.email && applicationData.phone && applicationData.coverLetter;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section {...fadeInUp} className="bg-linear-to-br from-blue-50 to-indigo-100 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-blue-600">Team</span>
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
                const element = document.getElementById('open-positions');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 to-slate-900/80"></div>
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
          
          {loadingJobs ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Loading job openings...</p>
            </div>
          ) : hasOpenings ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="grid lg:grid-cols-2 gap-8"
            >
              {jobOpenings.map((position, index) => (
                <motion.div key={position.id || index} variants={scaleIn}>
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
                        ? position.requirements.split('\n').filter(Boolean)
                        : position.requirements
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
                    <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto bg-white border-2 border-blue-200">
                      <DialogHeader className="pb-4 border-b">
                        <DialogTitle className="text-2xl font-bold text-gray-900">Apply for {selectedPosition}</DialogTitle>
                      </DialogHeader>
                      
                      {googleFormId ? (
                        // Show Google Form option if form ID is provided
                        <div className="space-y-4 py-4">
                          <div className="flex flex-col gap-4">
                            <Button
                              onClick={openGoogleForm}
                              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Open Application Form
                            </Button>
                            <div className="text-sm text-muted-foreground text-center">
                              <p>You&apos;ll be redirected to our application form where you can:</p>
                              <ul className="mt-2 space-y-1 text-left list-disc list-inside">
                                <li>Upload your resume</li>
                                <li>Share your portfolio</li>
                                <li>Answer a few questions</li>
                              </ul>
                            </div>
                            <div className="pt-4 border-t">
                              <p className="text-sm text-muted-foreground text-center">
                                Or email your application to{" "}
                                <a href={`mailto:${applicationEmail}`} className="text-blue-600 hover:underline">
                                  {applicationEmail}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Show built-in animated form if no Google Form ID
                        <form onSubmit={handleSubmitApplication} className="space-y-5 py-6">
                          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
                            <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                              Full Name *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={applicationData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:border-blue-500 transition-all duration-200"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300 delay-75">
                            <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={applicationData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:border-blue-500 transition-all duration-200"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300 delay-150">
                            <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={applicationData.phone}
                              onChange={handleInputChange}
                              placeholder="+91 1234567890"
                              className="h-11 bg-gray-50 border-gray-300 focus:bg-white focus:border-blue-500 transition-all duration-200"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300 delay-200">
                            <Label htmlFor="resume" className="text-sm font-semibold text-gray-700">
                              Resume/CV (PDF, DOC, DOCX) *
                            </Label>
                            <div className="relative">
                              <Input
                                id="resume"
                                name="resume"
                                type="file"
                                onChange={handleFileChange}
                                accept=".pdf,.doc,.docx"
                                className="h-11 bg-gray-50 border-gray-300 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all duration-200"
                                required
                              />
                              <Upload className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                            </div>
                            {applicationData.resume && (
                              <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                                <p className="text-sm text-green-700 font-medium">
                                  {applicationData.resume.name}
                                </p>
                              </div>
                            )}
                          </div>
                          
                          <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-300 delay-300">
                            <Label htmlFor="coverLetter" className="text-sm font-semibold text-gray-700">
                              Cover Letter / Why You&apos;re Interested *
                            </Label>
                            <Textarea
                              id="coverLetter"
                              name="coverLetter"
                              value={applicationData.coverLetter}
                              onChange={handleInputChange}
                              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                              rows={5}
                              className="bg-gray-50 border-gray-300 focus:bg-white focus:border-blue-500 transition-all duration-200 resize-none"
                              required
                            />
                            <p className="text-xs text-gray-500">
                              {applicationData.coverLetter.length} / 500 characters
                            </p>
                          </div>
                          
                          <div className="pt-4 animate-in fade-in slide-in-from-bottom-4 duration-300 delay-400">
                            <Button
                              type="submit"
                              disabled={isSubmitting || !isFormValid}
                              className="w-full h-12 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                  </svg>
                                  Submitting Application...
                                </span>
                              ) : (
                                "Submit Application"
                              )}
                            </Button>
                          </div>
                          
                          <div className="pt-4 border-t border-gray-200 animate-in fade-in duration-300 delay-500">
                            <p className="text-sm text-center text-gray-600">
                              Questions? Contact us at{" "}
                              <a href={`mailto:${applicationEmail}`} className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
                                {applicationEmail}
                              </a>
                            </p>
                          </div>
                        </form>
                      )}
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
  );
}
