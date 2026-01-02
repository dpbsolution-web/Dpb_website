import type { Metadata } from 'next';
import {
  ServicesHeroSection,
  NetworkCoverageSection,
  ServicesGridSection,
  TechnologyStandardsSection,
  ImplementationProcessSection,
  ServicesCTASection
} from "@/components/features/services";

export const metadata: Metadata = {
  title: 'Services - Complete IT & Telecom Solutions',
  description: 'Comprehensive telecommunications and IT services including internet connectivity, cloud solutions, VoIP, cybersecurity, managed IT services, and network infrastructure. Enterprise-grade solutions with 24/7 support.',
  keywords: [
    'telecommunications services',
    'IT solutions',
    'cloud services',
    'VoIP solutions',
    'cybersecurity',
    'managed IT services',
    'network infrastructure',
    'enterprise connectivity',
    'business internet',
    'IT support'
  ],
  openGraph: {
    title: 'DPB Solution Services - Complete Telecommunications & IT Portfolio',
    description: 'Enterprise telecommunications and IT services with cutting-edge technology',
    images: ['/images/logo.jpeg'],
    url: 'https://dpbsolution.com/services',
  },
  alternates: {
    canonical: 'https://dpbsolution.com/services',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHeroSection />
      <NetworkCoverageSection />
      <ServicesGridSection />
      <TechnologyStandardsSection />
      <ImplementationProcessSection />
      <ServicesCTASection />
    </div>
  );
}