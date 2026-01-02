import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Let\'s Connect & Collaborate',
  description: 'Contact DPB Solution for telecommunications and IT solutions. Reach our expert team for consultations, support, or inquiries. Available 24/7 with multiple contact channels.',
  keywords: [
    'contact DPB Solution',
    'telecom support',
    'IT consultation',
    'customer service',
    'get in touch',
    'business inquiry'
  ],
  openGraph: {
    title: 'Contact DPB Solution',
    description: 'Get in touch with our telecommunications and IT experts',
    images: ['/images/logo.jpeg'],
    url: 'https://dpbsolution.com/contact',
  },
  alternates: {
    canonical: 'https://dpbsolution.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
