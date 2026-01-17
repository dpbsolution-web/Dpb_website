"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Clock, 
  Briefcase,
  Search,
  Filter,
  X,
  Share2,
  Bookmark,
  BookmarkCheck,
  ChevronUp,
  Upload,
  CheckCircle2,
  AlertCircle,
  TriangleAlert,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CAREERS_CONFIG, 
  CULTURE_VALUES, 
  COMPANY_STATS, 
  HIRING_PROCESS,
  POSITIONS
} from "@/constants/careers";
import {
  VALIDATION_RULES,
  ERROR_MESSAGES,
  BUTTON_LABELS,
  TOAST_MESSAGES,
  EMAIL_PATTERN,
} from "@/constants/form-validation";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";

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

// Form validation schema
type ApplicationForm = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  resume?: File;
};

// FAQ Data
const FAQ_DATA = [
  {
    question: "What is your hiring process?",
    answer: "Our hiring process typically includes an initial phone screening, technical assessment, team interviews, and a final round with management. The entire process usually takes 2-3 weeks."
  },
  {
    question: "What benefits do you provide?",
    answer: "We offer comprehensive health insurance, 401(k) matching, unlimited PTO, professional development budget, flexible work arrangements, and many more perks."
  },
  {
    question: "How long does it take to hear back after applying?",
    answer: "We review applications within 5-7 business days. If your profile matches our requirements, our recruitment team will reach out to schedule an initial interview."
  },
  {
    question: "Can I apply for multiple positions?",
    answer: "Absolutely! We encourage you to apply for any position that matches your skills and interests. Just submit separate applications for each role."
  },
];

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isConfirmCancelOpen, setIsConfirmCancelOpen] = useState(false);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [savedJobs, setSavedJobs] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('savedJobs');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isMounted] = useState(() => typeof window !== 'undefined');
  
  // Get configuration from constants
  const { applicationEmail } = CAREERS_CONFIG;
  
  // Form handling
  const { register, handleSubmit, formState: { errors }, reset, getValues } = useForm<ApplicationForm>();
  
  // File upload
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
    },
    maxSize: 5242880, // 5MB
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setUploadedFile(acceptedFiles[0]);
        toast.success(`${TOAST_MESSAGES.SUCCESS.FILE_UPLOADED.replace('!', '')}: ${acceptedFiles[0].name}`);
      }
    },
    onDropRejected: () => {
      toast.error(ERROR_MESSAGES.FILE.REJECTED);
    },
  });
  
  // Simulate loading time for static data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingJobs(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);
  
  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Use static positions from constants (no API call)
  const jobOpenings = POSITIONS;
  
  // Filter jobs based on search and filters
  const filteredJobs = useMemo(() => {
    return jobOpenings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
      const matchesType = selectedType === "All" || job.type === selectedType;
      
      return matchesSearch && matchesDepartment && matchesLocation && matchesType;
    });
  }, [jobOpenings, searchQuery, selectedDepartment, selectedLocation, selectedType]);
  
  const hasOpenings = filteredJobs.length > 0;
  
  // Get unique values for filters
  const departments = ["All", ...Array.from(new Set(jobOpenings.map(job => job.department)))];
  const locations = ["All", ...Array.from(new Set(jobOpenings.map(job => job.location)))];
  const types = ["All", ...Array.from(new Set(jobOpenings.map(job => job.type)))];
  
  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setIsDialogOpen(true);
    reset();
    setUploadedFile(null);
  };
  
  const toggleSaveJob = (jobTitle: string) => {
    const newSavedJobs = savedJobs.includes(jobTitle)
      ? savedJobs.filter(j => j !== jobTitle)
      : [...savedJobs, jobTitle];
    
    setSavedJobs(newSavedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(newSavedJobs));
    toast.success(savedJobs.includes(jobTitle) ? 'Job removed from saved' : 'Job saved successfully!');
  };
  
  const shareJob = (jobTitle: string) => {
    const url = `${window.location.origin}/careers#${jobTitle.toLowerCase().replace(/\s+/g, '-')}`;
    if (navigator.share) {
      navigator.share({
        title: jobTitle,
        text: `Check out this job opening at DPB Solution: ${jobTitle}`,
        url: url,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      toast.success('Job link copied to clipboard!');
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleCancelClick = () => {
    // Check if form has any data
    const formValues = getValues();
    const hasData = uploadedFile || 
      (formValues.name && formValues.name.length > 0) || 
      (formValues.email && formValues.email.length > 0) || 
      (formValues.phone && formValues.phone.length > 0) || 
      (formValues.message && formValues.message.length > 0);
    
    if (hasData) {
      setIsConfirmCancelOpen(true);
    } else {
      setIsDialogOpen(false);
    }
  };
  
  const handleConfirmCancel = () => {
    setIsConfirmCancelOpen(false);
    setIsDialogOpen(false);
    reset();
    setUploadedFile(null);
  };
  
  const handleContinueEditing = () => {
    setIsConfirmCancelOpen(false);
  };
  
  const onSubmit = async (data: ApplicationForm) => {
    toast.loading(TOAST_MESSAGES.INFO.SUBMITTING);
    
    try {
      // Send application to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone || '',
          message: data.message,
          position: selectedPosition,
        }),
      });

      const result = await response.json();
      
      toast.dismiss();
      
      if (result.success) {
        toast.success(TOAST_MESSAGES.SUCCESS.APPLICATION_SUBMITTED);
        setIsDialogOpen(false);
        reset();
        setUploadedFile(null);
      } else {
        toast.error(result.details || TOAST_MESSAGES.ERROR.SUBMISSION_FAILED);
      }
    } catch {
      toast.dismiss();
      toast.error(TOAST_MESSAGES.ERROR.NETWORK_ERROR);
    }
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and help us build amazing things
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by job title or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filters:</span>
              </div>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm font-medium hover:border-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm font-medium hover:border-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
              >
                {locations.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border-2 border-gray-200 rounded-lg text-sm font-medium hover:border-blue-500 focus:border-blue-500 focus:outline-none transition-colors"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              {(searchQuery || selectedDepartment !== "All" || selectedLocation !== "All" || selectedType !== "All") && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedDepartment('All');
                    setSelectedLocation('All');
                    setSelectedType('All');
                  }}
                  className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Clear All
                </button>
              )}
              
              <div className="ml-auto text-sm text-gray-600 py-2">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} found
              </div>
            </div>
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
            <AnimatePresence mode="wait">
              <motion.div
                key={filteredJobs.length}
                variants={staggerContainer}
                initial="initial"
                animate="whileInView"
                className="grid lg:grid-cols-2 gap-8"
              >
                {filteredJobs.map((position, index) => (
                  <motion.div key={index} variants={scaleIn} layout>
                    <Card className="hover:shadow-lg transition-all duration-300 h-full group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                        <Briefcase className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleSaveJob(position.title)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          aria-label="Save job"
                          suppressHydrationWarning
                        >
                          {isMounted && savedJobs.includes(position.title) ? (
                            <BookmarkCheck className="h-5 w-5 text-blue-600" />
                          ) : (
                            <Bookmark className="h-5 w-5 text-gray-400" />
                          )}
                        </button>
                        <button
                          onClick={() => shareJob(position.title)}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          aria-label="Share job"
                        >
                          <Share2 className="h-5 w-5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mb-3">
                      {position.type}
                    </span>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
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
                    <DialogContent className="sm:max-w-[550px] bg-white border-2 border-blue-200 max-h-[90vh] overflow-y-auto" showCloseButton={false}>
                      <DialogHeader className="pb-4 border-b sticky top-0 bg-white z-10 pr-10">
                        <div className="flex flex-row items-center gap-3">
                          <Image
                            src="/images/logo.jpeg"
                            alt="DPB Solution"
                            width={80}
                            height={25}
                            className="h-8 w-auto"
                          />
                          <DialogTitle className="text-xl font-bold text-gray-900">Apply for {selectedPosition}</DialogTitle>
                        </div>
                      </DialogHeader>
                      
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-6">
                        {/* Full Name */}
                        <div>
                          <Label htmlFor="name" className="mb-2 block">
                            Full Name <span className="text-red-500">*</span>
                            {errors.name && <AlertCircle className="h-4 w-4 text-red-500 inline ml-1" />}
                            {!errors.name && register("name").name && <CheckCircle2 className="h-4 w-4 text-green-500 inline ml-1" />}
                          </Label>
                          <Input
                            id="name"
                            {...register("name", {
                              required: ERROR_MESSAGES.NAME.REQUIRED,
                              minLength: { value: VALIDATION_RULES.NAME.MIN, message: ERROR_MESSAGES.NAME.MIN },
                              maxLength: { value: VALIDATION_RULES.NAME.MAX, message: ERROR_MESSAGES.NAME.MAX }
                            })}
                            placeholder="Enter your full name"
                            className={`h-10 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          />
                          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                        </div>
                        
                        {/* Email */}
                        <div>
                          <Label htmlFor="email" className="mb-2 block">
                            Email Address <span className="text-red-500">*</span>
                            {errors.email && <AlertCircle className="h-4 w-4 text-red-500 inline ml-1" />}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email", {
                              required: ERROR_MESSAGES.EMAIL.REQUIRED,
                              pattern: {
                                value: EMAIL_PATTERN,
                                message: ERROR_MESSAGES.EMAIL.INVALID
                              },
                              maxLength: { value: VALIDATION_RULES.EMAIL.MAX, message: ERROR_MESSAGES.EMAIL.MAX }
                            })}
                            placeholder="your.email@example.com"
                            className={`h-10 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                          />
                          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                        </div>
                        
                        {/* Phone */}
                        <div>
                          <Label htmlFor="phone" className="mb-2 block">
                            Phone Number <span className="text-gray-400 text-xs ml-1">(Optional)</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            {...register("phone", {
                              minLength: { value: VALIDATION_RULES.PHONE.MIN, message: ERROR_MESSAGES.PHONE.MIN },
                              maxLength: { value: VALIDATION_RULES.PHONE.MAX, message: ERROR_MESSAGES.PHONE.MAX }
                            })}
                            placeholder="+1 (555) 000-0000"
                            className="h-10"
                          />
                        </div>
                        
                        {/* Resume Upload */}
                        <div>
                          <Label className="mb-2 block">
                            Resume/CV <span className="text-gray-400 text-xs ml-1">(PDF, DOC - Max 5MB)</span>
                          </Label>
                          <div
                            {...getRootProps()}
                            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all
                              ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'}`}
                          >
                            <input {...getInputProps()} />
                            {uploadedFile ? (
                              <div className="flex items-center justify-center gap-2 text-green-600">
                                <CheckCircle2 className="h-5 w-5" />
                                <span className="text-sm font-medium">{uploadedFile.name}</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setUploadedFile(null);
                                  }}
                                  className="ml-2 text-red-500 hover:text-red-700"
                                >
                                  <X className="h-4 w-4" />
                                </button>
                              </div>
                            ) : (
                              <div className="space-y-2">
                                <Upload className="h-8 w-8 mx-auto text-gray-400" />
                                <p className="text-sm text-gray-600">
                                  {isDragActive ? 'Drop the file here' : 'Drag & drop or click to upload'}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Cover Letter */}
                        <div>
                          <Label htmlFor="message" className="mb-2 block">
                            Cover Letter <span className="text-red-500">*</span>
                            {errors.message && <AlertCircle className="h-4 w-4 text-red-500 inline ml-1" />}
                          </Label>
                          <textarea
                            id="message"
                            {...register("message", {
                              required: ERROR_MESSAGES.COVER_LETTER.REQUIRED,
                              minLength: { value: VALIDATION_RULES.MESSAGE.MIN, message: ERROR_MESSAGES.COVER_LETTER.MIN },
                              maxLength: { value: VALIDATION_RULES.MESSAGE.MAX, message: ERROR_MESSAGES.COVER_LETTER.MAX }
                            })}
                            rows={5}
                            placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
                            className={`w-full border-2 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none
                              ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}`}
                          />
                          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                          <p className="text-xs text-gray-500 mt-1">Minimum {VALIDATION_RULES.MESSAGE.MIN} characters</p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="pt-2 flex gap-3">
                          <Button 
                            type="button"
                            onClick={handleCancelClick}
                            variant="outline"
                            className="flex-1 h-12 text-base font-semibold rounded-lg border-2 border-gray-300 hover:bg-gray-50 transition-all"
                          >
                            {BUTTON_LABELS.CANCEL}
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-12 text-base font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                          >
                            {BUTTON_LABELS.SUBMIT_APPLICATION}
                          </Button>
                        </div>
                        
                        {/* Info Note */}
                        <p className="text-xs text-center text-gray-500 pt-2">
                          By submitting, you agree to our Terms of Service and Privacy Policy
                        </p>
                      </form>
                    </DialogContent>
                  </Dialog>
                  
                  {/* Confirmation Dialog for Cancel */}
                  <Dialog open={isConfirmCancelOpen} onOpenChange={setIsConfirmCancelOpen}>
                    <DialogContent className="sm:max-w-[480px] bg-white border-0 shadow-2xl p-0" showCloseButton={false}>
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        {/* Header with Icon */}
                        <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-6 rounded-t-lg">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                            className="flex items-center justify-center mb-4"
                          >
                            <div className="bg-white rounded-full p-3 shadow-lg">
                              <TriangleAlert className="h-12 w-12 text-blue-600" />
                            </div>
                          </motion.div>
                          <DialogTitle className="text-2xl font-bold text-white text-center">
                            Cancel Application?
                          </DialogTitle>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.3 }}
                          >
                            <p className="text-gray-700 text-center text-base leading-relaxed mb-2">
                              Are you sure you want to cancel your application?
                            </p>
                            <p className="text-gray-500 text-center text-sm">
                              All the information you&apos;ve entered will be permanently lost.
                            </p>
                          </motion.div>
                          
                          {/* Action Buttons */}
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                            className="flex flex-col sm:flex-row gap-3 mt-8"
                          >
                            <Button 
                              type="button"
                              onClick={handleContinueEditing}
                              className="flex-1 h-12 text-base font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg"
                            >
                              <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {BUTTON_LABELS.CONTINUE_EDITING}
                              </motion.span>
                            </Button>
                            <Button 
                              type="button"
                              onClick={handleConfirmCancel}
                              variant="outline"
                              className="flex-1 h-12 text-base border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 font-semibold rounded-lg shadow-sm hover:shadow transition-all"
                            >
                              <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                {BUTTON_LABELS.YES_CANCEL}
                              </motion.span>
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
                </Card>
              </motion.div>
            ))}
              </motion.div>
            </AnimatePresence>
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
      
      {/* FAQ Section */}
      <motion.section {...fadeInUp} className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about working with us
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-lg px-6 hover:border-blue-500 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.section>
      </div>
      
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg z-50 transition-colors"
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
