import type { Metadata } from 'next';
import { 
  HeroSection,
  ServicesSection,
  FeaturesSection,
  TestimonialsSection
} from "@/components/features/home";
import { CertificationsSection } from "@/components/features/home/CertificationsSection";

export const metadata: Metadata = {
  title: 'Home - Empowering Digital Transformation',
  description: 'DPB Solution is a leading telecommunications and IT provider offering enterprise-grade network solutions, cloud services, VoIP, cybersecurity, and managed IT services. Trusted since 2009 with proven track record.',
  openGraph: {
    title: 'DPB Solution - Telecommunications & IT Excellence',
    description: 'Enterprise telecommunications and IT solutions with cutting-edge technology',
    images: ['/images/logo.jpeg'],
    url: 'https://dpbsolution.com',
  },
  alternates: {
    canonical: 'https://dpbsolution.com',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CertificationsSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}