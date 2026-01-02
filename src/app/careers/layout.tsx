import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Build Your Future With Us',
  description: 'Explore career opportunities at DPB Solution. Join our team of telecommunications and IT professionals. We offer competitive compensation, growth opportunities, and innovative work environment.',
  keywords: [
    'DPB Solution careers',
    'telecom jobs',
    'IT jobs',
    'telecommunications careers',
    'tech jobs India',
    'Patna IT jobs',
    'network engineer jobs',
    'software developer jobs'
  ],
  openGraph: {
    title: 'Careers at DPB Solution',
    description: 'Join our team of telecommunications and IT professionals',
    images: ['/images/logo.jpeg'],
    url: 'https://dpbsolution.com/careers',
    type: 'website',
  },
  alternates: {
    canonical: 'https://dpbsolution.com/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
