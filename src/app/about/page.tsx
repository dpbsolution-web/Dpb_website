import type { Metadata } from 'next';
import {
  AboutHeroSection,
  StatsSection,
  MissionVisionSection,
  CompanyStorySection,
  TeamSection,
  ValuesSection
} from "@/components/features/about";

export const metadata: Metadata = {
  title: 'About Us - Our Story & Expertise',
  description: 'Learn about DPB Solution\'s journey in telecommunications and IT since 2009. Empowering digital transformation with cutting-edge technology, expert team, and unparalleled service commitment.',
  openGraph: {
    title: 'About DPB Solution - Telecommunications & IT Excellence',
    description: '15+ years of telecommunications and IT expertise',
    images: ['/images/logo.jpeg'],
    url: 'https://dpbsolution.com/about',
  },
  alternates: {
    canonical: 'https://dpbsolution.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHeroSection />
      <StatsSection />
      <MissionVisionSection />
      <CompanyStorySection />
      <TeamSection />
      <ValuesSection />
    </div>
  );
}