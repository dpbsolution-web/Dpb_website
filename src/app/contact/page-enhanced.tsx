"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, Check, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

export default function ContactPageEnhanced() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) return `${name === 'firstName' ? 'First' : 'Last'} name is required`;
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return undefined;
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!/^[0-9]{10}$/.test(value.replace(/[\s-]/g, ''))) return 'Please enter a valid 10-digit phone number';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== 'company') { // company is optional
        const error = validateField(key, formData[key as keyof typeof formData]);
        if (error) newErrors[key as keyof FormErrors] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        company: true,
        message: true,
      });
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setErrors({});
      setTouched({});
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Failed to send:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate form progress
  const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
  const filledFields = requiredFields.filter(field => formData[field as keyof typeof formData].trim() !== '');
  const progress = (filledFields.length / requiredFields.length) * 100;

  const isFormValid = Object.keys(errors).length === 0 && 
                      formData.firstName.trim() !== "" && 
                      formData.lastName.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.phone.trim() !== "" &&
                      formData.message.trim() !== "";



  return (
    <>
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white rounded-2xl p-8 text-center max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Check className="w-10 h-10 text-green-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for reaching out. We&apos;ll get back to you soon.
              </p>
              <Button 
                onClick={() => setShowSuccess(false)}
                className="bg-linear-to-rrom-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className=" bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Touch
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Ready to start your next project? We&apos;d love to hear from you. 
            Send us a message and we&apos;ll respond as soon as possible.
        </motion.p>
      </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Have questions? We&#39;re here to help. Reach out to us through any of the channels below.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email Us", content: "info@dpbsolution.com", href: "mailto:info@dpbsolution.com" },
                    { icon: Phone, title: "Call Us", content: "+91 870 980 4442", href: "tel:+918709804442" },
                    { icon: MapPin, title: "Visit Us", content: "Patna, Bihar, India" },
                    { icon: Clock, title: "Business Hours", content: "Mon - Sat: 9:00 AM - 6:00 PM" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 cursor-pointer"
                    >
                      <div className="shrink-0 w-12 h-12 bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        {item.href ? (
                          <a href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Send us a message</CardTitle>
                    
                    {/* Progress Bar */}
                    <div className="mt-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Form Progress</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <motion.div
                          className="bg-linear-to-r from-blue-600 to-indigo-600 h-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`${errors.firstName && touched.firstName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            />
                            {!errors.firstName && formData.firstName && touched.firstName && (
                              <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                            )}
                          </div>
                          <AnimatePresence>
                            {errors.firstName && touched.firstName && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-red-500 text-sm flex items-center gap-1"
                              >
                                <AlertCircle className="w-4 h-4" />
                                {errors.firstName}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`${errors.lastName && touched.lastName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            />
                            {!errors.lastName && formData.lastName && touched.lastName && (
                              <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                            )}
                          </div>
                          <AnimatePresence>
                            {errors.lastName && touched.lastName && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-red-500 text-sm flex items-center gap-1"
                              >
                                <AlertCircle className="w-4 h-4" />
                                {errors.lastName}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${errors.email && touched.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                          />
                          {!errors.email && formData.email && touched.email && (
                            <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                          )}
                        </div>
                        <AnimatePresence>
                          {errors.email && touched.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-red-500 text-sm flex items-center gap-1"
                            >
                              <AlertCircle className="w-4 h-4" />
                              {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="9876543210"
                              value={formData.phone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`${errors.phone && touched.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            />
                            {!errors.phone && formData.phone && touched.phone && (
                              <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                            )}
                          </div>
                          <AnimatePresence>
                            {errors.phone && touched.phone && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-red-500 text-sm flex items-center gap-1"
                              >
                                <AlertCircle className="w-4 h-4" />
                                {errors.phone}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-gray-700">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={handleChange}
                            className="focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project..."
                            rows={6}
                            maxLength={500}
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${errors.message && touched.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                          />
                          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                            {formData.message.length}/500
                          </div>
                        </div>
                        <AnimatePresence>
                          {errors.message && touched.message && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="text-red-500 text-sm flex items-center gap-1"
                            >
                              <AlertCircle className="w-4 h-4" />
                              {errors.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={!isFormValid || isSubmitting}
                          className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center justify-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                ⟳
                              </motion.span>
                              Sending...
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <Send className="w-5 h-5" />
                              Send Message
                            </span>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                question: "How long does a typical telecom project take?",
                answer: "Project timelines depend on the scope and complexity. Smaller connectivity or communication setups may take a few weeks, while large-scale network or enterprise deployments can require several months. We provide a detailed timeline after our initial assessment and consultation."
              },
              {
                icon: Mail,
                question: "What telecom services do you offer?",
                answer: "We deliver comprehensive telecommunications solutions, including network design, connectivity services, enterprise communication systems, and scalable infrastructure tailored to your business requirements."
              },
              {
                icon: Phone,
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer continuous support and maintenance to ensure your network remains reliable and secure. Our services include proactive monitoring, troubleshooting, regular upgrades, and dedicated technical assistance."
              },
              {
                icon: MapPin,
                question: "Which industries do you serve?",
                answer: "We serve a wide range of industries, including enterprises, IT services, manufacturing, healthcare, retail, and corporate offices—delivering robust communication and connectivity solutions for diverse business needs."
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start mb-4">
                  <motion.div 
                    className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <faq.icon className="h-5 w-5 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed ml-14">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        </section>
      </div>
    </>
  );
}
