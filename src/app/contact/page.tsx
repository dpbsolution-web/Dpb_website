"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { BUTTON_LABELS, TOAST_MESSAGES } from "@/constants/form-validation";
import { faqs } from "@/config/site";

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

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
          subject: `New Contact Inquiry from ${fullName}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(TOAST_MESSAGES.SUCCESS.MESSAGE_SENT);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        toast.error(result.details || result.error || TOAST_MESSAGES.ERROR.SUBMISSION_FAILED);
      }
    } catch {
      toast.error(TOAST_MESSAGES.ERROR.NETWORK_ERROR);
    } finally {
      setIsSubmitting(false);
    }
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
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-linear-to-br from-emerald-50 via-teal-50 to-blue-50 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(16 185 129) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-600">
              Touch
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? We&apos;d love to hear from you.
            Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* How it works — 3 steps */}
      <section className="py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-10"
          >
            What happens next?
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { step: "01", icon: Send, title: "Submit your query", desc: "Fill in the form with your requirements and hit send." },
              { step: "02", icon: Clock, title: "We respond in 24 h", desc: "Our team reviews your message and reaches out promptly." },
              { step: "03", icon: Phone, title: "Get a tailored solution", desc: "We understand your needs and propose the right service." },
            ].map(({ step, icon: Icon, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-200">
                  <Icon className="h-7 w-7" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                    {step}
                  </span>
                </div>
                <p className="text-base font-semibold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
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
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@dpbsolution.com" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        info@dpbsolution.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href="tel:+919973789207" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                        +91 9973789207
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">Patna Bihar, 800001, India</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Clock className="h-6 w-6 text-emerald-600" />
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
                <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-200">
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
                        <motion.div
                          initial={{ opacity: 0, x: -24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="grid grid-cols-2 gap-4"
                        >
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
                        <motion.div
                          initial={{ opacity: 0, x: -24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
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
                        <motion.div
                          initial={{ opacity: 0, x: -24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
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
                        <motion.div
                          initial={{ opacity: 0, x: -24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
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
                        <motion.div
                          initial={{ opacity: 0, x: -24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 }}
                        >
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
                        <motion.div
                          initial={{ opacity: 0, x: -24 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 }}
                        >
                          <Button 
                            type="submit" 
                            disabled={isSubmitting || !isFormValid}
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-700 hover:border-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 h-12 text-base font-semibold"
                            aria-label={isSubmitting ? "Sending message" : "Send message"}
                            aria-busy={isSubmitting}
                          >
                            {isSubmitting ? (
                              "Sending..."
                            ) : (
                              <>
                                {BUTTON_LABELS.SEND_MESSAGE}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="bg-white rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-100 overflow-hidden">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`faq-${faq.id}`} className="border-0">
                  <AccordionTrigger className="px-6 py-5 text-base font-semibold text-gray-900 hover:text-emerald-600 hover:no-underline hover:bg-gray-50 transition-colors data-[state=open]:text-emerald-600 data-[state=open]:bg-emerald-50">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}