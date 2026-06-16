import type { Metadata } from 'next';
import { 
  HeroSection,
  ServicesSection,
  FeaturesSection,
  TestimonialsSection
} from "@/components/features/home";
import { CertificationsSection } from "@/components/features/home/CertificationsSection";
import { ClientsSection } from "@/components/features/home/ClientsSection";

export const metadata: Metadata = {
  title: 'Home - Empowering Digital Transformation',
  description: 'DPB Solution is a leading telecommunications and IT provider offering enterprise-grade network solutions, OFC infrastructure, ISP deployment, and manpower outsourcing. Trusted since 2019 with a proven track record.',
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
      <ClientsSection />
      <CertificationsSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
}