"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
    
    setIsSubmitting(false);
    toast.success("Thank you for your message!");
  };

  const isFormValid = formData.firstName.trim() !== "" && 
                      formData.lastName.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.phone.trim() !== "" &&
                      formData.company.trim() !== "" && 
                      formData.message.trim() !== "";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? We&apos;d love to hear from you. 
            Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Have questions? We&#39;re here to help. Reach out to us through any of the channels below.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@dpbsolution.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                        info@dpbsolution.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+919973789207" className="text-blue-600 hover:text-blue-700 transition-colors">
                        +91 9973789207
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">Patna Bihar, 800001, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                  >
                    <CardHeader className="pb-4">
                      <motion.div variants={itemVariants}>
                        <CardTitle className="text-2xl">Send us a message</CardTitle>
                      </motion.div>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                              First Name *
                            </label>
                            <Input 
                              id="firstName" 
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="John"
                              className="transition-all duration-200 focus:scale-[1.01] h-11"
                              aria-label="First Name"
                              aria-required="true"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <Input 
                              id="lastName" 
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Doe"
                              className="transition-all duration-200 focus:scale-[1.01] h-11"
                              aria-label="Last Name"
                              aria-required="true"
                            />
                          </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="transition-all duration-200 focus:scale-[1.01] h-11"
                            aria-label="Email Address"
                            aria-required="true"
                          />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Contact Number *
                          </label>
                          <Input 
                            id="phone" 
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 1234567890"
                            className="transition-all duration-200 focus:scale-[1.01] h-11"
                            aria-label="Contact Number"
                            aria-required="true"
                          />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company *
                          </label>
                          <Input 
                            id="company" 
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            className="transition-all duration-200 focus:scale-[1.01] h-11"
                            aria-label="Company Name"
                            aria-required="true"
                          />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message *
                          </label>
                          <Textarea 
                            id="message" 
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your project..."
                            rows={5}
                            className="transition-all duration-200 focus:scale-[1.01] resize-none"
                            aria-label="Your Message"
                            aria-required="true"
                          />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <Button 
                            type="submit" 
                            disabled={isSubmitting || !isFormValid}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white border-2 border-blue-700 hover:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 h-12 text-base font-semibold"
                            aria-label={isSubmitting ? "Sending message" : "Send message"}
                            aria-busy={isSubmitting}
                          >
                            {isSubmitting ? (
                              "Sending..."
                            ) : (
                              <>
                                Send Message
                                <Send className="ml-2 h-5 w-5" />
                              </>
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </CardContent>
                  </motion.div>
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
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  How long does a typical telecom project take?
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-14">
                Project timelines depend on the scope and complexity. Smaller connectivity or communication setups may take a few weeks, while large-scale network or enterprise deployments can require several months. We provide a detailed timeline after our initial assessment and consultation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  What telecom services do you offer?
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-14">
                We deliver comprehensive telecommunications solutions, including network design, connectivity services, enterprise communication systems, and scalable infrastructure tailored to your business requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  Do you provide ongoing support and maintenance?
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-14">
                Yes, we offer continuous support and maintenance to ensure your network remains reliable and secure. Our services include proactive monitoring, troubleshooting, regular upgrades, and dedicated technical assistance.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <div className="flex items-start mb-4">
                <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">
                  Which industries do you serve?
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-14">
                We serve a wide range of industries, including enterprises, IT services, manufacturing, healthcare, retail, and corporate offices—delivering robust communication and connectivity solutions for diverse business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}